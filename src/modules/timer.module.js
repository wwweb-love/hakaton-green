import { Module } from '../core/module';
import { timer } from '../utils';
import { ModalWindow } from './modal.module';
import { AudioModule } from './audio.module';
import { Notification } from './notification.module';

export class TimerModule extends Module {
  constructor(type, text) {
    super('timer', 'Таймер отсчета');
  }

  trigger() {
    const id = Date.now();

    const modalTimer = new ModalWindow('timer', 'Задайте время таймера');
    const audioReminder = new AudioModule();
    const notification = new Notification(this.type, this.text);
    modalTimer.add(id);
    document.querySelector('.timer-form__input').focus();
    modalTimer.onSubmit = (values) => {
      notification.addNotification(id);
      const $timerSpan = document.querySelector(`#timer-span-${id}`);

      let [hours, minutes, seconds] = [
        Number(values.hours),
        Number(values.minutes),
        Number(values.seconds),
      ];

      let timeInSeconds = hours * 3600 + minutes * 60 + seconds;

      let renderTimer = (timeInSeconds) => {
        let hours = Math.floor(timeInSeconds / 3600);
        let minutes = Math.floor((timeInSeconds % 3600) / 60);
        let seconds = timeInSeconds % 60;

        if (hours > 0) {
          $timerSpan.textContent = `${hours} часов ${minutes} минут ${seconds} секунд`;
        } else if (minutes > 0) {
          $timerSpan.textContent = `${minutes} минут ${seconds} секунд`;
        } else {
          $timerSpan.textContent = `${seconds} секунд`;
        }

        if (hours <= 0 && minutes <= 0 && seconds <= 0) {
          audioReminder.trigger();
          notification.removeNotification(id);
        }
      };

      renderTimer(timeInSeconds);
      timer(renderTimer, timeInSeconds);
    };
  }
}
