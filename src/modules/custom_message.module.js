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

  isMessageBlockActive = false;

  lastIdx = null;

  randomMessage() {
    let newIdx = random(0, this.messages.length - 1);
    if (newIdx === this.lastIdx) {
      return this.randomMessage(0, this.messages.length - 1);
    } else this.lastIdx = newIdx;
    return newIdx;
  }

  addMessageBlock() {
    const $messageBlock = document.createElement("div");
    $messageBlock.className = "message-block";
    $messageBlock.textContent = this.messages[this.randomMessage()];

    this.$messageContainer.append($messageBlock);

    this.isMessageBlockActive = true;
  }

  removeMessageBlock() {
    const $messageBlock = document.querySelector(".message-block");
    $messageBlock.remove();
    this.isMessageBlockActive = false;
  }

  trigger() {
    if (!this.isMessageBlockActive) {
      this.addMessageBlock();
      setTimeout(() => {
        const $messageBlock = document.querySelector(".message-block");
        $messageBlock.classList.add("fade-out");
        setTimeout(this.removeMessageBlock.bind(this), 300);
      }, 2000);
    }
  }
}
