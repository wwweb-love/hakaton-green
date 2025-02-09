import { Module } from '../core/module'
import { Notification } from './notification.module'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text),
        this.state = {
            seconds: 0,
            activate: false,
            clicks: 0
        },
        this.handleClick = () => {
            this.state.clicks += 1
        }
    }

    trigger() {
        const notification = new Notification(this.type, this.text)

        if (!this.state.activate) {
            this.state.seconds = 5

            this.state.activate = true

            // Открываем модальное окно
            const dateNow = Date.now()
            notification.addNotification(dateNow)
            document.body.addEventListener('click', this.handleClick)
            const $clickSpan = document.querySelector(`#${this.type}-span-${dateNow}`)

            // Запускаем отсчет времени
            $clickSpan.textContent = `Модуль активирован. Кликайте! ${this.state.seconds}`

            let timer = setInterval(() => {
                if (this.state.seconds > 1) {
                    $clickSpan.textContent = `Модуль активирован. Кликайте! ${this.state.seconds - 1}`
                    this.state.seconds -= 1
                    
                } else {
                    document.body.removeEventListener('click', this.handleClick)
                    clearInterval(timer);
                    this.state.clicks -= 1
                    $clickSpan.textContent = `Количество кликов ${this.state.clicks}`
                    this.state.clicks = 0
                    setTimeout(() => notification.removeNotification(dateNow), 10000)
                    this.state.activate = false
                }
            }, 1000)
        }
        
    }
}