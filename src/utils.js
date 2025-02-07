export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function timer(callback, seconds) {
  let timer = setInterval(() => {
    if (seconds > 0) {
      seconds--;
      callback(seconds);
      console.log(seconds);
    } else {
      clearInterval(timer);
    }
  }, 1000);
}
