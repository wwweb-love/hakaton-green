import { Module } from '../core/module'
import { ModalClick } from '../utiles/modalClick.module'
import { ModalInfoClick } from '../utiles/modalClick.module'

const modalClick = new ModalClick
const modalInfoClick = new ModalInfoClick

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text),
        this.state = {
            seconds: 0,
            activate: false
        }
    }

    trigger() {

        if (!this.state.activate) {
            this.state.seconds = 3

            this.state.activate = true

            // Открываем модальное окно
            modalClick.open()
    
            // Запускаем отсчет времени
            modalClick.editTime(this.state.seconds)
            let timer = setInterval(() => {
                if (this.state.seconds > 1) {
                    modalClick.editTime(this.state.seconds - 1)
                    this.state.seconds -= 1
                } else {
                    modalClick.removeListenerBody()
                    modalClick.close()
                    clearInterval(timer);

                    // Не считаем клик на модуль "Аналитика кликов"
                    modalClick.countClicks -= 1
                    modalInfoClick.open(modalClick.countClicks)
                    modalClick.countClicks = 0
                    this.state.activate = false
                }
            }, 1000)
        }
        
    }
}