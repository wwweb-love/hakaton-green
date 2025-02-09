import { Module } from "../core/module";
import { random } from "../utils";

export class CustomMessageModule extends Module {
  constructor(type, text) {
    super(type, text);

    this.state = {
      isBLockActive: false,
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

  addMessageContainer() {
    const $notificationContainer = document.querySelector(".notification-container");

    const $messageContainer = document.createElement("div");
    $messageContainer.className = "message-container notification-container-item";

    const $messageSpan = document.createElement("span");
    $messageSpan.className = "message-span notification-container-span";
    $messageSpan.textContent = this.messages[this.randomMessage()];

    $messageContainer.append($messageSpan);

    $notificationContainer.append($messageContainer);

    this.state.isBLockActive = true;

    this.$messageContainer = $messageContainer;
  }

  removeMessageContainer() {
    this.$messageContainer.remove();
    this.state.isBLockActive = false;
  }

  trigger() {
    if (!this.state.isBLockActive) {
      this.addMessageContainer();
      setTimeout(this.removeMessageContainer.bind(this), 2000);
    }
  }
}
