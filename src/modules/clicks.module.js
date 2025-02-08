import { Module } from '../core/module'
import { ModalClick } from './modalClick.module'
import { ModalInfoClick } from './modalClick.module'

const modalClick = new ModalClick
const modalInfoClick = new ModalInfoClick

export class ClicksModule extends Module {

    trigger() {
        this.seconds = 3
        this.time = this.seconds

        // Открываем модальное окно
        modalClick.open()

        // Запускаем отсчет времени
        modalClick.editTime(this.seconds)
        modalClick.countClicks = 0

        let timer = setInterval(() => {
            if (this.seconds > 1) {
                modalClick.editTime(this.seconds - 1)
                this.seconds -= 1
            } else {
                modalClick.editTime(0)
                modalClick.editClick(0)
                modalClick.close()
                clearInterval(timer);
                modalInfoClick.open(modalClick.countClicks)
            }
        }, 1000)
    }
}