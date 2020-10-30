'use strict';

var daysEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minutesEl = document.getElementById('minutes');
var secondsEl = document.getElementById('seconds');

var newYear = new Date('1 Jan ' + (new Date().getYear() + 1901));

document.getElementsByTagName('title')[0].innerHTML = 'New Year Count Down - ' + (newYear.getYear() + 1900);

function countdown() {
    var newYearDate = new Date(newYear);
    var currentDate = new Date();

    var totalSeconds = (newYearDate - currentDate) / 1000;

    var days = Math.floor(totalSeconds / 60 / 60 / 24);
    var hours = Math.floor(totalSeconds / 60 / 60) % 24;
    var minutes = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = format(days);
    hoursEl.innerHTML = format(hours);
    minutesEl.innerHTML = format(minutes);
    secondsEl.innerHTML = format(seconds);
}

function format(t) {
    return t < 10 ? '0' + t : t;
}

countdown();
setInterval(countdown, 1000);