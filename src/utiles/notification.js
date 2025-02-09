export default function AddDomNotification() {
    const $notificationContainer = document.createElement('div')
    $notificationContainer.classList.add('notification-container')
    $notificationContainer.id = 'notification-container';
    document.body.append($notificationContainer)
}