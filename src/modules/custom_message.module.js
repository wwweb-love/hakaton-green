import { Module } from "../core/module";
import { random } from "../utils";

export class CustomMessageModule extends Module {
  constructor(type, text) {
    super(type, text);

    this.messages = ["Хе-хе!", "Иди работать!", "А ты хорош!", "Все, перестань", "И так сойдет!"];

    this.$messageContainer = document.createElement("div");
    this.$messageContainer.className = "message-container";
    document.body.append(this.$messageContainer);
  }

  randomMessage() {
    return random(0, this.messages.length - 1);
  }

  addMessageBlock() {
    if (!document.querySelector(".message-block")) {
      const $messageBlock = document.createElement("div");
      $messageBlock.className = "message-block";
      $messageBlock.textContent = this.messages[this.randomMessage()];

      this.$messageContainer.append($messageBlock);
    }
  }

  removeMessageBlock() {
    const $messageBlock = document.querySelector(".message-block");
    this.$messageContainer.removeChild($messageBlock);
  }

  trigger() {
    this.addMessageBlock();
    setTimeout(this.removeMessageBlock.bind(this), 2000);
  }
}
