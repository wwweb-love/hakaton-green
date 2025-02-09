export default function RemoveNotificationItem(selector) {
    setTimeout(() => {
        selector.classList.add('notification-container-item-remove')
    }, 10000)

    setTimeout(() => {
        selector.remove()
    }, 12000)
}