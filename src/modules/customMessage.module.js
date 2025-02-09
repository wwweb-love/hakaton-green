import { Module } from "../core/module";
import { random } from "../utiles/random";
import { Notification } from "./notification.module";

export class CustomMessageModule extends Module {
  constructor(type, text) {
    super(type, text);

    this.state = {
      lastIdx: null,
      messages: ["Хе-хе!", "Иди работать!", "А ты хорош!", "Все, перестань", "И так сойдет!"],
    };
  }

  get messages() {
    return this.state.messages;
  }

  randomMessage() {
    let newIdx = random(0, this.messages.length - 1);
    if (newIdx === this.state.lastIdx) {
      return this.randomMessage();
    } else this.state.lastIdx = newIdx;
    return newIdx;
  }

  trigger() {
    const notification = new Notification(this.type, this.text);

    const id = Date.now();
    notification.addNotification(id);
    const $messageSpan = document.querySelector(`#${this.type}-span-${id}`);
    $messageSpan.textContent = this.messages[this.randomMessage()];
    setTimeout(() => notification.removeNotification(id), 4000);
  }
}
