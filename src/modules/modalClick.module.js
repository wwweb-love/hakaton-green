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
    constructor() {
        this.initmodalInfoClick()
    }

    initmodalInfoClick() {
        const $modalOverlay = document.createElement('div')
        const $modalClickAnalyticsStatistics = document.createElement('div')
        const $modalClickAnalyticsStatisticsContent = document.createElement('div')
        const $modalClickAnalyticsStatisticsTitle = document.createElement('h2')
        const $modalClickAnalyticsStatisticsTime = document.createElement('p')
        const $modalClickAnalyticsStatisticsClick = document.createElement('p')
        const $modalClose = document.createElement('button')

        $modalOverlay.className = 'modal-overlay'
        $modalClickAnalyticsStatistics.className = 'modal-click-analytics-statistics'
        $modalClickAnalyticsStatisticsContent.className = 'modal-click-analytics-statistics-content'
        $modalClickAnalyticsStatisticsTitle.className = 'modal-click-analytics-statistics-title'
        $modalClickAnalyticsStatisticsTime.className = 'modal-click-analytics-statistics-time'
        $modalClickAnalyticsStatisticsClick.className = 'modal-click-analytics-statistics-click'
        $modalClose.className = 'modal-click-analytics-close'
    
    
        $modalClickAnalyticsStatisticsTitle.textContent = 'Статистика кликов'
        $modalClickAnalyticsStatisticsTime.textContent = ''
        $modalClickAnalyticsStatisticsClick.textContent = ''
        $modalClose.textContent = 'Закрыть'

        $modalClickAnalyticsStatisticsContent.append($modalClickAnalyticsStatisticsTitle)
        $modalClickAnalyticsStatisticsContent.append($modalClickAnalyticsStatisticsTime)
        $modalClickAnalyticsStatisticsContent.append($modalClickAnalyticsStatisticsClick)
    
        $modalClickAnalyticsStatistics.append($modalClickAnalyticsStatisticsContent)
        $modalClickAnalyticsStatistics.append($modalClose)

        $modalOverlay.append($modalClickAnalyticsStatistics)

        this.$modalOverlay = $modalOverlay
        this.$modalClickAnalyticsStatistics = $modalClickAnalyticsStatistics
        this.$modalClose = $modalClose
        this.$modalClickAnalyticsStatisticsTime = $modalClickAnalyticsStatisticsTime
        this.$modalClickAnalyticsStatisticsClick = $modalClickAnalyticsStatisticsClick

        this.$modalClose.addEventListener('click', () => {
            this.close()
        })
    }

    open(countClick, time) {
        const $body = document.querySelector('body')
        $body.append(this.$modalOverlay)
        this.$modalClickAnalyticsStatisticsTime.textContent = `Прошедшее время ${time} сек.`
        this.$modalClickAnalyticsStatisticsClick.textContent = `Количество кликов ${countClick}`
    }

    close() {
        this.$modalOverlay.remove()
    }
}