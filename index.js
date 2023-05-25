/*
 * @Author: gmx
 * @Date: 2023-05-18 14:36:02
 * @LastEditors: gmx
 * @LastEditTime: 2023-05-25 20:54:33
 * @Description:
 * @Version: 1.0
 */
const THEME_KEY = "__theme__";
const btn = document.querySelector(".switch-btn");
const switchBtn = document.querySelector(".btn-move");
let theme;
const init = () => {
  theme = localStorage.getItem(THEME_KEY) || "light";
  if (theme === "light") {
    switchBtn.style.transform = "translateX(0)";
    btn.style.background = "#d6d7d1";
  } else {
    switchBtn.style.transform = "translateX(calc(var(--w) - 100%))";
    btn.style.background = "#322f2f";
  }
};

btn.onclick = changeTheme;
init()
function changeTheme() {
  if (theme === "light") {
    theme = "dark";
    switchBtn.style.transform = "translateX(calc(var(--w) - 100%))";
    btn.style.background = "#322f2f";
  } else {
    theme = "light";
    switchBtn.style.transform = "translateX(0)";
    btn.style.background = "#d6d7d1";
  }
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.dataset.theme = theme;
}

