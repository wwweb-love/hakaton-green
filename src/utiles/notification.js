export default function AddDomNotification() {

    const $body = document.querySelector('body')

    const $notificationContainer = document.createElement('div')
    $notificationContainer.classList.add('notification-container')

    $body.append($notificationContainer)
}