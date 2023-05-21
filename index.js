/*
 * @Author: gmx
 * @Date: 2023-05-18 14:36:02
 * @LastEditors: gmx
 * @LastEditTime: 2023-05-21 15:07:00
 * @Description: 
 * @Version: 1.0
 */
function changeTime() {
  var time = new Date()
  var seconds = time.getSeconds()
  doms.card1.innerHTML = seconds
    doms.card2.innerHTML = seconds
  if(seconds === 0) {
    doms.card3.innerHTML = 59
    doms.card4.innerHTML = 59
  } else {
    doms.card3.innerHTML = seconds - 1 
    doms.card4.innerHTML = seconds - 1
  }
  doms.card2.transform = "rotateX(0deg)"
  doms.card3.transform = "rotateX(-180deg)"
  
}
var doms = {
  card1: document.querySelector('.card1'),
  card2: document.querySelector('.card2'),
  card3: document.querySelector('.card3'),
  card4: document.querySelector('.card4'),
}
doms.card2.ontransitionend = function (e) {
  e.style.transform = "rotateX(180deg)"
}
doms.card3.ontransitionend = function (e) {
  e.style.transform = "rotateX(0deg)"
}
var timer = setInterval(changeTime, 1000);
