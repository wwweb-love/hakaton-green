export class ModalClick {
    constructor() {
        this.initModalClick(),
        this.countClicks = 0,
        this.handleClick = () => {
            this.countClicks += 1
        }
    }

    initModalClick() {
        const $clickContainer = document.createElement('div')
        $clickContainer.classList.add('click-container')
        $clickContainer.classList.add('notification-container-item')
        $clickContainer.classList.add(`click-container-${new Date().getTime()}`)

        const $clickSpan = document.createElement('span')
        $clickSpan.classList.add('click-span')
        $clickSpan.classList.add('notification-container-span')
        $clickSpan.classList.add(`click-span-${new Date().getTime()}`)

        $clickSpan.textContent = ''

        $clickContainer.append($clickSpan)

        this.$clickContainer = $clickContainer
        this.$clickSpan = $clickSpan
    }

    open() {
        const $notificationContainer = document.querySelector('.notification-container')
        $notificationContainer.append(this.$clickContainer)

        document.body.addEventListener('click', this.handleClick)
    }

    close() {
        this.$clickContainer.remove()
    }

    editTime(time) {
        this.$clickSpan.textContent = `Модуль активирован. Кликайте! ${time}`
    }

    removeListenerBody() {
        document.body.removeEventListener('click', this.handleClick)
    }
}


export class ModalInfoClick {
    open(countClick) {
        const $clickContainer = document.createElement('div')
        $clickContainer.classList.add('click-container')
        $clickContainer.classList.add('notification-container-item')
        $clickContainer.classList.add(`click-container-${new Date().getTime()}`)

        const $clickSpan = document.createElement('span')
        $clickSpan.classList.add('click-span')
        $clickSpan.classList.add('notification-container-span')
        $clickSpan.classList.add(`click-span-${new Date().getTime()}`)

        $clickSpan.textContent = ''

        $clickContainer.append($clickSpan)

        const $notificationContainer = document.querySelector('.notification-container')
        $notificationContainer.append($clickContainer)
        $clickSpan.textContent = `Количество кликов ${countClick}`

        this.$clickContainer = $clickContainer
    }
}