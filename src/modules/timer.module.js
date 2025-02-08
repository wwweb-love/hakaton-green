import { Module } from '../core/module';
import { timer } from '../utils';
import { ModalWindow } from './modal.module';

export class TimerModule extends Module {
  constructor(type, text) {
    super('timer', 'Таймер');
  }

  addNotificationContainer() {
    if (document.querySelector('#notification-container') === null) {
      const $notificationContainer = document.createElement('div');
      $notificationContainer.className = 'notification-container';
      $notificationContainer.id = 'notification-container';
      document.body.append($notificationContainer);
    }
  }

  addTimerContainer(id) {
    const $timerContainer = document.createElement('div');
    $timerContainer.className = 'timer-container';
    $timerContainer.id = `timer-${id}`;

    const $timerSpan = document.createElement('span');
    $timerSpan.className = 'timer-span';
    $timerSpan.id = `timer-span-${id}`;
    $timerContainer.append($timerSpan);

    const $notificationContainer = document.querySelector(
      '#notification-container',
    );

    $notificationContainer.append($timerContainer);
    this.addTimerContainer.bind(this);
  }

  removeTimerContainer(id) {
    const $timerContainer = document.querySelector(`#timer-${id}`);
    const $notificationContainer = document.querySelector(
      '#notification-container',
    );
    $notificationContainer.removeChild($timerContainer);
    this.removeTimerContainer.bind(this);
  }

  trigger() {
    this.addNotificationContainer();
    const modalTimer = new ModalWindow(
      'timer',
      'На сколько секунд поставить таймер?',
    );
    const id = Date.now();
    modalTimer.add(id);
    modalTimer.onSubmit = (value) => {
      this.addTimerContainer(id);

      const $timerSpan = document.querySelector(`#timer-span-${id}`);

      let renderTimer = (secondsToFinish) => {
        let hours = Math.floor(secondsToFinish / 3600);
        let minutes = Math.floor((secondsToFinish % 3600) / 60);
        let seconds = secondsToFinish % 60;

        if (hours > 0) {
          $timerSpan.textContent = `${hours} часов ${minutes} минут ${seconds} секунд`;
        } else if (minutes > 0) {
          $timerSpan.textContent = `${minutes} минут ${seconds} секунд`;
        } else {
          $timerSpan.textContent = `${seconds} секунд`;
        }

        if (hours <= 0 && minutes <= 0 && seconds <= 0) {
          this.removeTimerContainer(id);
        }
      };
      renderTimer(value);
      timer(renderTimer, value);
    };
  }
}
