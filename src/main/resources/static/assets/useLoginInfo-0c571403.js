import{u as r,a as l}from"./useRequest-4cb19bee.js";import{L as c}from"./LoginApi-1dda4bc2.js";import{r as g,f as L}from"./index-d31968a7.js";let o=g({});function v(t){const s=r(),a=l(),i=[];L(async()=>{o.value.id||await e(),o.value.id&&i.forEach(n=>n(o.value))});function u(n){i.push(n)}async function e(){a.start(),o.value=await s.run(c.getLogin(t)).finally(a.close)??{}}function f(){o.value={}}return{loginInfo:o,loadLoginInfo:e,onLoadedLoginInfo:u,clearLoginInfo:f}}export{v as u};
