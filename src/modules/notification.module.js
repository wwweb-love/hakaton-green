import { Module } from '../core/module';

export class Notification extends Module {
  constructor(type, text) {
    super(type, text);
  }

  addNotification(id) {
    const $notificationItem = document.createElement('div');
    $notificationItem.className = `notification-item ${this.type}-container`;
    $notificationItem.id = `${this.type}-${id}`;

    const $notificationSpan = document.createElement('span');
    $notificationSpan.className = `notification-span ${this.type}-span`;
    $notificationSpan.id = `${this.type}-span-${id}`;
    $notificationItem.append($notificationSpan);

    const $notificationContainer = document.querySelector(
      '#notification-container',
    );

    $notificationContainer.append($notificationItem);
    this.addNotification.bind(this);
  }

  removeNotification(id) {
    const $notificationItem = document.querySelector(`#${this.type}-${id}`);
    const $notificationContainer = document.querySelector(
      '#notification-container',
    );
    $notificationContainer.removeChild($notificationItem);
    this.removeNotification.bind(this);
  }

  trigger() {}
}
