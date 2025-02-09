import { Module } from "../core/module";
import { random } from "../utiles/random";

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

  addMessageContainer(id) {
    const $notificationContainer = document.querySelector(".notification-container");

    const $messageContainer = document.createElement("div");
    $messageContainer.className = "message-container notification-container-item";
    $messageContainer.id = `${id}`;

    const $messageSpan = document.createElement("span");
    $messageSpan.className = "message-span notification-container-span";
    $messageSpan.textContent = this.messages[this.randomMessage()];

    $messageContainer.append($messageSpan);

    $notificationContainer.append($messageContainer);
  }

  removeMessageContainer(id) {
    const $messageContainer = document.getElementById(id);
    $messageContainer.remove();
  }

  trigger() {
    const id = Date.now();
    this.addMessageContainer(id);
    setTimeout(() => this.removeMessageContainer(id), 2000);
  }
}
