import{u as r}from"./useNotify-cedc1ad3.js";import{d as l,B as u,z as _,A as p,r as t,f as d,G as m,o as f,b as h,m as v}from"./index-d31968a7.js";import{u as y,a as L}from"./useRequest-4cb19bee.js";import{S as b}from"./SchoolLineApi-27d0a5a5.js";const B={class:"school-line-detail"},S=l({__name:"TheSchoolLineDetail",setup(g){r(),u();const n=y(),e=L();_();const c=p();let a=t(parseInt(c.params.id)),i=t({});d(async()=>{await o()}),m(s=>{a.value=parseInt(s.params.id),o()});async function o(){e.start(),i.value=await n.run(b.getById(a.value)).finally(e.close)??{}}return(s,x)=>(f(),h("div",B))}});const k=v(S,[["__scopeId","data-v-70bb200c"]]);export{k as default};