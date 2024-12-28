// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'


import './home/css/theme.css'
import './home/css/reset.css'
import './home/css/index.css'

import  { test } from "./home/js/dateConvert";

// import baguaLogo from './home/svg/bagua.svg'
// import themeLogo from './home/svg/themeMode.svg'


// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))



const htmlElement = document.querySelector("html")
const themeBtn = document.querySelector(".right .theme");
console.log(themeBtn)
themeBtn.addEventListener("click",()=>{
    htmlElement.classList.toggle("dark");
})

// console.log(resolveJiri(0,2024))
// console.log(resolveShuori(0))
test()
