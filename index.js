/*
 * @Author: gmx
 * @Date: 2023-05-18 14:36:02
 * @LastEditors: gmx
 * @LastEditTime: 2023-05-22 12:32:24
 * @Description:
 * @Version: 1.0
 */
function changeTime() {
  var now = new Date();
  var next = new Date(now.getTime() + 1000);
  nowSecond = now.getSeconds();
  nextSecond = next.getSeconds();
  nowMinute = now.getMinutes();
  nextMinute = next.getMinutes();
  nowHour = now.getHours();
  nextHour = next.getHours();
}
function changeAnimationState() {
  changeTime();
  doms.second1.innerHTML = zeroFormat(nextSecond);
  doms.second2.innerHTML = zeroFormat(nextSecond);
  doms.second3.innerHTML = zeroFormat(nowSecond);
  doms.second4.innerHTML = zeroFormat(nowSecond);
  if (nextMinute > nowMinute) {
    doms.minute2.style.animationPlayState = "running";
    doms.minute3.style.animationPlayState = "running";
  }
  if (nowHour !== nowHour) {
    doms.hour2.style.animationPlayState = "running";
    doms.hour3.style.animationPlayState = "running";
  }
}
var doms = {
  second1: document.querySelector(".card1.second"),
  second2: document.querySelector(".card2.second"),
  second3: document.querySelector(".card3.second"),
  second4: document.querySelector(".card4.second"),
  minute1: document.querySelector(".card1.minute"),
  minute2: document.querySelector(".card2.minute"),
  minute3: document.querySelector(".card3.minute"),
  minute4: document.querySelector(".card4.minute"),
  hour1: document.querySelector(".card1.hour"),
  hour2: document.querySelector(".card2.hour"),
  hour3: document.querySelector(".card3.hour"),
  hour4: document.querySelector(".card4.hour"),
  container: document.querySelector(".calendar"),
};
var nowSecond;
var nextSecond;

var nowMinute;
var nextMinute;

var nowHour;
var nextHour;

doms.container.addEventListener("animationiteration", function (e) {
  if (e.target.classList.contains("second")) {
    changeAnimationState();
  } else if (e.target.classList.contains("minute")) {
    doms.minute1.innerHTML = zeroFormat(nextMinute === 59 ? 0 : nextMinute + 1);
    doms.minute2.innerHTML = zeroFormat(nextMinute === 59 ? 0 : nextMinute + 1);
    doms.minute3.innerHTML = zeroFormat(nextMinute);
    doms.minute4.innerHTML = zeroFormat(nextMinute);
    e.target.style.animationPlayState = "paused";
  } else {
    doms.hour1.innerHTML = zeroFormat(nextHour === 23 ? 0 : nextHour + 1);
    doms.hour2.innerHTML = zeroFormat(nextHour === 23 ? 0 : nextHour + 1);
    doms.hour3.innerHTML = zeroFormat(nextHour);
    doms.hour4.innerHTML = zeroFormat(nextHour);
    e.target.style.animationPlayState = "paused";
  }
});

window.onload = function () {
  changeTime();
  doms.second1.innerHTML = zeroFormat(nextSecond);
  doms.second2.innerHTML = zeroFormat(nextSecond);
  doms.second3.innerHTML = zeroFormat(nowSecond);
  doms.second4.innerHTML = zeroFormat(nowSecond);
  doms.minute1.innerHTML = zeroFormat(nextMinute);
  doms.minute2.innerHTML = zeroFormat(nextMinute);
  doms.minute3.innerHTML = zeroFormat(nowMinute);
  doms.minute4.innerHTML = zeroFormat(nowMinute);
  doms.hour1.innerHTML = zeroFormat(nextHour);
  doms.hour2.innerHTML = zeroFormat(nextHour);
  doms.hour3.innerHTML = zeroFormat(nowHour);
  doms.hour4.innerHTML = zeroFormat(nowHour);
};

// 补0
function zeroFormat(num) {
  return num >= 10 ? num : "0" + num;
}
