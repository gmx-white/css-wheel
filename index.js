/*
 * @Author: gmx
 * @Date: 2023-05-18 14:36:02
 * @LastEditors: gmx
 * @LastEditTime: 2023-05-21 21:55:36
 * @Description:
 * @Version: 1.0
 */
function changeTime() {
  var now = new Date();
  var nowTime = now.getSeconds();
  var nextTime = new Date(now.getTime() - 1000).getSeconds();
  doms.card1.innerHTML = nowTime;
  doms.card2.innerHTML = nowTime;
  doms.card3.innerHTML = nextTime;
  doms.card4.innerHTML = nextTime;
}
var doms = {
  card1: document.querySelector(".card1"),
  card2: document.querySelector(".card2"),
  card3: document.querySelector(".card3"),
  card4: document.querySelector(".card4"),
};

doms.card2.addEventListener('animationiteration', changeTime)
