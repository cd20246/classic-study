import { resolveJiri } from "./dateConvert";

const htmlElement = document.querySelector("html")
const themeBtn = document.querySelector(".right .theme");
console.log(themeBtn)
themeBtn.addEventListener("click",()=>{
    htmlElement.classList.toggle("dark");
})


console.log(resolveJiri(1,2024))

