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

    const $modalInput = document.createElement('input');
    $modalInput.className = `${this.type}-form__input`;
    $modalInput.id = `${this.type}-${id}`;
    $modalInput.name = 'amount';
    $modalInput.type = 'text';
    $modalInput.setAttribute('required', '');
    $modalInput.setAttribute('autofocus', '');
    $modalInput.setAttribute('maxlength', '8');
    $modalInput.setAttribute('placeholder', '00:00:00');
    

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

    $modalForm.append($modalLabel, $modalInput, $modalButtons);

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
    const $modalInput = document.querySelector(`#${this.type}-${id}`);
    let value;

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

        if (this.onSubmit) {
          this.onSubmit(value);
        }

        this.destroy();
      }
    });

    $modalInput.addEventListener('input', (event) => {
      value = event.target.value;
      value = value.replace(/\D/g, '');
      if (value.length > 2) {
        value = value.slice(0, 2) + ':' + value.slice(2);
      }
      if (value.length > 5) {
        value = value.slice(0, 5) + ':' + value.slice(5);
      }
      event.target.value = value;
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
