import { Module } from '../core/module';

export class ModalWindow extends Module {
  constructor(type, text) {
    super(type, text);
  }
  value;

  setValue(value) {
    this.value = value;
  }

  add(id) {
    const $modalOverlay = document.createElement('div');
    $modalOverlay.id = `modal-overlay-${id}`;
    $modalOverlay.className = `modal-overlay`;
    $modalOverlay.style.position = 'absolute';
    $modalOverlay.style.top = 0;
    $modalOverlay.style.left = 0;
    $modalOverlay.style.width = '100vw';
    $modalOverlay.style.height = '100vh';
    $modalOverlay.style.zIndex = '1000';
    $modalOverlay.style.backgroundColor = '#343434';
    $modalOverlay.style.background = '#343434';
    $modalOverlay.style.opacity = '0.4';

    const $modalContainer = document.createElement('div');
    $modalContainer.className = `modal-${this.type}`;
    $modalContainer.id = `modal-${id}`;
    $modalContainer.style.position = 'absolute';
    $modalContainer.style.backgroundColor = '#343434';
    $modalContainer.style.top = 'calc(50vh - 125px)';
    $modalContainer.style.left = 'calc(50vw - 200px)';
    $modalContainer.style.zIndex = '1001';

    const $modalForm = document.createElement('form');
    $modalForm.className = `${this.type}-form`;

    const $modalLabel = document.createElement('label');
    $modalLabel.className = `${this.type}-form__input-label`;
    $modalLabel.textContent = `${this.text}`;
    $modalLabel.setAttribute('for', `${this.type}-${id}`);

    const $modalInputsContainer = document.createElement('div');
    $modalInputsContainer.className = 'modal-inputs-container';
    $modalInputsContainer.style.display = 'flex';
    $modalInputsContainer.style.justifyContent = 'space-around';

    ['hours', 'minutes', 'seconds'].forEach((item) => {
      const $modalInput = document.createElement('input');
      $modalInput.className = `${this.type}-form__input`;
      $modalInput.style.width = `60px`;
      $modalInput.style.textAlign = `center`;
      $modalInput.style.padding = `0`;
      $modalInput.style.margin = `0`;
      $modalInput.id = `${this.type}-${item}-${id}`;
      $modalInput.name = `${item}`;
      $modalInput.setAttribute('required', '');
      $modalInput.setAttribute('maxlength', '2');
      $modalInput.setAttribute('placeholder', '00');

      $modalInput.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/\D/g, '');
      });

      // Ограничение максимальных значений для минут и секунд
      if (item === 'minutes' || item === 'seconds') {
        $modalInput.addEventListener('input', (event) => {
          const value = parseInt(event.target.value, 10);
          if (value > 59) {
            event.target.value = '59';
          }
        });
      }

      $modalInputsContainer.append($modalInput);
    });

    const $modalHintsContainer = document.createElement('div');
    $modalHintsContainer.className = 'modal-inputs-container';
    $modalHintsContainer.style.display = 'flex';
    $modalHintsContainer.style.justifyContent = 'space-around';

    ['часы', 'минуты', 'секунды'].forEach((item) => {
      const $modalHint = document.createElement('span');
      $modalHint.textContent = `${item}`;
      $modalHint.style.width = `60px`;
      $modalHint.style.color = `#fff`;
      $modalHint.style.textAlign = `center`;

      $modalHintsContainer.append($modalHint);
    });

    const $modalSubmit = document.createElement('button');
    $modalSubmit.className = 'modal-submit';
    $modalSubmit.type = 'submit';
    $modalSubmit.textContent = 'ОК';

    const $modalClose = document.createElement('button');
    $modalClose.className = 'modal-close';
    $modalClose.type = 'discard';
    $modalClose.textContent = 'Отмена';

    const $modalButtons = document.createElement('div');
    $modalButtons.className = 'modal-form__buttons';
    $modalButtons.append($modalSubmit, $modalClose);

    $modalForm.append(
      $modalLabel,
      $modalInputsContainer,
      $modalHintsContainer,
      $modalButtons,
    );

    $modalContainer.append($modalForm);
    document.body.append($modalOverlay, $modalContainer);

    this.listener.bind(this);
    this.listener(id);
  }

  listener(id) {
    const $modalOverlay = document.querySelector('.modal-overlay');
    const $modalContainer = document.querySelector(`.modal-${this.type}`);
    const $modalClose = document.querySelector('.modal-close');
    const $modalSubmit = document.querySelector('.modal-submit');
    const $modalInputs = document.querySelectorAll(`.${this.type}-form__input`);

    $modalInputs.forEach((input) => {
      input.addEventListener('input', (event) => {
        let value = event.target.value;
        value = value.replace(/\D/g, '');

        if (value.length > 2) {
          value = value.slice(0, 2);
        }
        event.target.value = value;
      });
    });

    $modalOverlay.addEventListener('click', (event) => {
      if (event.target === $modalOverlay) {
        this.destroy();
      }
    });

    $modalContainer.addEventListener('click', (event) => {
      if (event.target === $modalClose) {
        event.preventDefault();
        this.destroy();
      }
      if (event.target === $modalSubmit) {
        event.preventDefault();

        const inputValues = {};

        $modalInputs.forEach((input) => {
          inputValues[input.name] = input.value;

          if (input.name === 'minutes' || input.name === 'seconds') {
            const value = parseInt(input.value, 10);
            if (value > 59) {
              input.value = 0;
            }
          }
        });

        if (this.onSubmit) {
          this.onSubmit(inputValues);
          this.destroy();
        }
      }
    });
  }

  destroy() {
    const $modalOverlay = document.querySelector('.modal-overlay');
    const $modalContainer = document.querySelector(`.modal-${this.type}`);
    document.body.removeChild($modalOverlay);
    document.body.removeChild($modalContainer);
  }

  trigger() {}
}
