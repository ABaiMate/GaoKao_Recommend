import{A as f,z as h,r as m,c as d,a as M,f as C,G as R}from"./index-d31968a7.js";function A(i,o="",a){const p=f(),l=h();let r=m(c()),n=m(),v=d(()=>{var t;return(t=n.value)==null?void 0:t.path});M(()=>a==null?void 0:a.value,()=>{r.value=c(),n.value=s()}),C(()=>{n.value=s()}),R(async(t,u,e)=>{await e(),n.value=s(t)});function c(){const t=[];for(let u of i){if(!u.meta)continue;const e=u.meta;e.menuName&&(e.roleCodes&&e.roleCodes.length&&(!(a!=null&&a.value)||!e.roleCodes.includes(a.value.roleCode))||t.push({path:o+"/"+u.path,name:e.menuName,icon:e.icon}))}return t}function s(t){const u=t??p;if(u.meta.parent){for(let e of r.value)if(e.path===u.meta.parent)return e}for(let e of r.value)if(e.path===u.path)return e;return u.path===o&&l.push(r.value[0].path),r.value[0]}return{menus:r,activeMenu:n,activeMenuPath:v}}export{A as u};