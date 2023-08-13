let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displaytime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hrotation = 30 * hh + mm / 2;
  let mrotation = 6 * mm;
  let srotation = 6 * ss;

  hour.style.transform = `rotate(${hrotation}deg)`;
  min.style.transform = `rotate(${mrotation}deg)`;
  sec.style.transform = `rotate(${srotation}deg)`;
}
setInterval(displaytime, 1000);

function displaytm() {
  let currenttm = new Date();
  let hh = currenttm.getHours();
  let mm = currenttm.getMinutes();
  let ss = currenttm.getSeconds();

  if (hh > 12) {
    let hhh = hh - 12;
    document.getElementById("h").innerHTML = hhh;
  } else {
    document.getElementById("h").innerHTML = hh;
  }
  document.getElementById("m").innerHTML = mm;
  if (ss < 10) {
    let secstr = "0" + ss;
    document.getElementById("s").innerHTML = secstr;
  } else {
    document.getElementById("s").innerHTML = ss;
  }
}

setInterval(displaytm, 1000);
