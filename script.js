//TDF Countdown

var countDownDateTDF = new Date("Jun 26, 2021 12:15:00").getTime();

var xTDF = setInterval(function() {

  var nowTDF = new Date().getTime();

  var distanceTDF = countDownDateTDF - nowTDF;

  var daysTDF = Math.floor(distanceTDF / (1000 * 60 * 60 * 24));
  var hoursTDF = Math.floor((distanceTDF % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesTDF = Math.floor((distanceTDF % (1000 * 60 * 60)) / (1000 * 60));
  var secondsTDF = Math.floor((distanceTDF % (1000 * 60)) / 1000);

  document.getElementById("countdown-tdf").innerHTML = "D-" + daysTDF + " " + hoursTDF + ":"
  + minutesTDF + ":" + secondsTDF;

  if (distanceTDF < 0) {
    clearInterval(x);
    document.getElementById("countdown-tdf").innerHTML = "Parties !";
  }
}, 1000);

//Giro Countdown

var countDownDateGiro = new Date("May 8, 2021 12:00:00").getTime();

var xGiro = setInterval(function() {

  var nowGiro = new Date().getTime();

  var distanceGiro = countDownDateGiro - nowGiro;

  var daysGiro = Math.floor(distanceGiro / (1000 * 60 * 60 * 24));
  var hoursGiro = Math.floor((distanceGiro % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesGiro = Math.floor((distanceGiro % (1000 * 60 * 60)) / (1000 * 60));
  var secondsGiro = Math.floor((distanceGiro % (1000 * 60)) / 1000);

  document.getElementById("countdown-giro").innerHTML = "D-" + daysGiro + " " + hoursGiro + ":"
  + minutesGiro + ":" + secondsGiro;

  if (distanceGiro < 0) {
    clearInterval(x);
    document.getElementById("countdown-giro").innerHTML = "Parties !";
  }
}, 1000);

//Vuelta Countdown

var countDownDateVuelta = new Date("Aug 14, 2021 13:10:00").getTime();

var xVuelta = setInterval(function() {

  var nowVuelta = new Date().getTime();

  var distanceVuelta = countDownDateVuelta - nowVuelta;

  var daysVuelta = Math.floor(distanceVuelta / (1000 * 60 * 60 * 24));
  var hoursVuelta = Math.floor((distanceVuelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesVuelta = Math.floor((distanceVuelta % (1000 * 60 * 60)) / (1000 * 60));
  var secondsVuelta = Math.floor((distanceVuelta % (1000 * 60)) / 1000);

  document.getElementById("countdown-vuelta").innerHTML = "D-" + daysVuelta + " " + hoursVuelta + ":"
  + minutesVuelta + ":" + secondsVuelta;

  if (distanceVuelta < 0) {
    clearInterval(x);
    document.getElementById("countdown-vuelta").innerHTML = "Parties !";
  }
}, 1000);

// Paris-Nice Countdown
var countDownDateParisNice = new Date("March 7, 2021 12:00:00").getTime();

var xParisNice = setInterval(function() {

  var nowParisNice = new Date().getTime();

  var distanceParisNice = countDownDateParisNice - nowParisNice;

  var daysParisNice = Math.floor(distanceParisNice / (1000 * 60 * 60 * 24));
  var hoursParisNice = Math.floor((distanceParisNice % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesParisNice = Math.floor((distanceParisNice % (1000 * 60 * 60)) / (1000 * 60));
  var secondsParisNice = Math.floor((distanceParisNice % (1000 * 60)) / 1000);

  document.getElementById("countdown-paris-nice").innerHTML = "D-" + daysParisNice + " " + hoursParisNice + ":"
  + minutesParisNice + ":" + secondsParisNice;

  if (distanceParisNice < 0) {
    clearInterval(x);
    document.getElementById("countdown-paris-nice").innerHTML = "Parties !";
  }
}, 1000);

// Tour-des-Alpes Countdown
var countDownDateAlpes = new Date("April 19, 2021 11:15:00").getTime();

var xAlpes = setInterval(function() {

  var nowAlpes = new Date().getTime();

  var distanceAlpes = countDownDateAlpes - nowAlpes;

  var daysAlpes = Math.floor(distanceAlpes / (1000 * 60 * 60 * 24));
  var hoursAlpes = Math.floor((distanceAlpes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesAlpes = Math.floor((distanceAlpes % (1000 * 60 * 60)) / (1000 * 60));
  var secondsAlpes = Math.floor((distanceAlpes % (1000 * 60)) / 1000);

  document.getElementById("countdown-alpes").innerHTML = "D-" + daysAlpes + " " + hoursAlpes + ":"
  + minutesAlpes + ":" + secondsAlpes;

  if (distanceAlpes < 0) {
    clearInterval(x);
    document.getElementById("countdown-alpes").innerHTML = "Parties !";
  }
}, 1000);