export class ModalClick {
    constructor() {
        this.initModalClick()
    }

    initModalClick() {
        const $body = document.querySelector('body')

        const $modalOverlay = document.createElement('div')
        const $modal = document.createElement('div')
        const $modalContent = document.createElement('div')
        const $modalTitle = document.createElement('h2')
        const $modalButton = document.createElement('button')
        const $modalCountClick = document.createElement('p')
        const $modalTime = document.createElement('p')

        $modalOverlay.className = 'modal-overlay'
        $modal.className = 'modal-click-analytics'
        $modalContent.className = 'modal-click-analytics-content'
        $modalTitle.className = 'modal-click-analytics-title'
        $modalButton.className = 'modal-click-analytics-button'
        $modalCountClick.className = 'modal-click-analytics-count-click'
        $modalTime.className = 'modal-click-analytics-time'

        $modalTitle.textContent = 'Аналитика кликов'
        $modalButton.textContent = 'Кликни на меня'
        $modalCountClick.textContent = '0'
        $modalTime.textContent = ''

        $modalContent.append($modalTitle)
        $modalContent.append($modalButton)
        $modalContent.append($modalCountClick)
        $modalContent.append($modalTime)

        $modal.append($modalContent)

        $modalOverlay.append($modal)

        this.$body = $body
        this.$modalOverlay = $modalOverlay
        this.$modal = $modal
        this.$modalTime = $modalTime
        this.$modalButton = $modalButton
        this.$modalCountClick = $modalCountClick

        this.countClicks = 0
        this.$modalButton.addEventListener('click', () => {
            this.countClicks += 1
            this.editClick(this.countClicks)
        })
    }

    open() {
        this.$body.append(this.$modalOverlay)
    }

    close() {
        this.$modalOverlay.remove()
    }

    editTime(time) {
        this.$modalTime.textContent = `Время ${time} сек.`
    }

    editClick(count) {
        this.$modalCountClick.textContent = String(count)
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
    }
}