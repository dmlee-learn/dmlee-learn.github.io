const clock = document.querySelector('h2#clock');

let intervelClock = () => {
    let date = new Date();
    clock.innerText = `${date.getFullYear()}.${date.getMonth()}.${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
intervelClock ();
setInterval(intervelClock, 1000);