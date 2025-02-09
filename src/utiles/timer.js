export function timer(callback, seconds, interval = 1000) {
    let timer = setInterval(() => {
        if (seconds > 0) {
            seconds -= interval / 1000;
            callback(Math.floor(seconds));
        } else {
            clearInterval(timer);
        }
    }, interval);
}