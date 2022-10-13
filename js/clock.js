const clock = document.querySelector('h2#clock');

let intervelClock = () => {
    const date = new Date();
    const yyyy = String(date.getFullYear()).padStart(4, "0");
    const mm = String(date.getMonth()).padStart(2, "0");
    const dd = String(date.getDay()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const m = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${yyyy}.${mm}.${dd} ${hh}:${m}:${ss}`;
}
intervelClock ();
setInterval(intervelClock, 1000);