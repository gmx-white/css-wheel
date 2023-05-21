/*
 * @Author: gmx
 * @Date: 2023-05-18 14:36:02
 * @LastEditors: gmx
 * @LastEditTime: 2023-05-21 21:16:07
 * @Description:
 * @Version: 1.0
 */
function changeTime() {
  var now = new Date();
  var nowTime = new Date(now.getTime() - 1000).getSeconds();
  var nextTime = now.getSeconds();
  doms.card1.innerHTML = nextTime;
  doms.card2.innerHTML = nextTime;
  doms.card3.innerHTML = nowTime;
  doms.card4.innerHTML = nowTime;

  if (!init) {
    doms.card2.style.animationPlayState = "running";
    doms.card3.style.animationPlayState = "running";
    init = true;
  }
}
var doms = {
  card1: document.querySelector(".card1"),
  card2: document.querySelector(".card2"),
  card3: document.querySelector(".card3"),
  card4: document.querySelector(".card4"),
};
var init = false;

var timer = setInterval(changeTime, 1000);
