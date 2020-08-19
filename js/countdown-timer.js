function updateTimer() {
    future = Date.parse("sept 14, 2020 00:00:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<a href="https://buy.octo.fi"><div>Bonding curve in ' + d + '<span>d </span>' + h + '<span>h </span>' + m + '<span>m </span>' + s + '<span>s</span></div></a>';
}
setInterval('updateTimer()', 1000);
