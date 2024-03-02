import{Q as A}from"./QueryContainer-778ca57d.js";import{Q as D}from"./QuerySearchCard-abfe6caa.js";import{Q as L}from"./QueryPagination-33101695.js";import{T as P}from"./TableContainer-6b49de73.js";import{d as w,f as Q,o as v,h as R,M as N,m as k,r as C,c as M,a as V,B as $,p as O,g as j,b as x,j as f,i as h,F as z,s as E,x as F,y as G,l as a,t as y}from"./index-d31968a7.js";import{u as H}from"./useNotify-cedc1ad3.js";import{u as I,a as b}from"./useRequest-4cb19bee.js";import{a as J}from"./useDialog-abda8b4e.js";import{U as q}from"./UserCommentApi-5c7fae53.js";import{u as K}from"./usePage-8ca7a06e.js";import{Q as W}from"./QuerySelectRemote-9681b92c.js";import{U}from"./UserApi-7044f7f4.js";import{a as S}from"./useArray-1b072fc4.js";const X=w({__name:"QueryUserSelect",props:{roleCode:{}},setup(u){const p=u,c=I();Q(()=>{});async function _(r,o){if(o){const e=await c.run(U.getById(o));return S([e],d=>d.nickname,d=>d.id)}const l=await c.run(U.getSearch(r,p.roleCode));return S(l,e=>e.nickname,e=>e.id)}return(r,o)=>(v(),R(W,N(r.$attrs,{load:_,"is-number":""}),null,16))}});const Y=k(X,[["__scopeId","data-v-5fc76064"]]);function Z(u,...p){const c=I(),_=b();let r=u,o=C([]),l=M(()=>{const s={};for(let n of o.value)s[n.id]=n;return s});V(()=>r.value,async()=>{await e()});async function e(){let s=r.value.flatMap(n=>d(n));s=[...new Set(s)],s.length&&(_.start(),o.value=await c.run(U.getListByIds(s.join(","))).finally(_.close))}function d(s){return p.length?p.map(n=>n(s)).filter(n=>n):[s.userId]}return{list:r,users:o,userMapping:l}}const g=u=>(F("data-v-4e7ca472"),u=u(),G(),u),ee={class:"admin-user-comment"},te=g(()=>a("th",{class:"text-left"},"ID",-1)),se=g(()=>a("th",{class:"text-left"},"创建时间",-1)),ae=g(()=>a("th",{class:"text-left"},"更新时间",-1)),oe=g(()=>a("th",{class:"text-left"},"用户",-1)),ne=g(()=>a("th",{class:"text-left"},"评论内容",-1)),re=g(()=>a("th",{class:"text-left"},"操作",-1)),le=["textContent"],ue=["textContent"],ie=["textContent"],ce=["textContent"],de=["textContent"],pe={class:"q-gutter-x-sm"},_e=w({__name:"TheAdminUserComment",setup(u){const p=H();$();const c=I();b();const{toPage:_}=K(),{showDeleteDialog:r}=J();let o=C(),l=C({}),e=C({}),d=Z(M(()=>e.value.list??[]),m=>m.userId,m=>m.targetId),s=O(d,"userMapping");Q(()=>{});async function n(){o.value.loading.start(),e.value=await c.run(q.getPage({...l.value,..._(e.value)})).finally(o.value.loading.close)}async function B(m){await r()&&(await c.run(q.deleteById(m.id)),p.success("删除成功"),await n())}return(m,i)=>{const T=j("q-btn");return v(),x("div",ee,[f(A,{query:l.value,"onUpdate:query":i[2]||(i[2]=t=>l.value=t),page:e.value,"onUpdate:page":i[3]||(i[3]=t=>e.value=t),onSearch:n},{default:h(()=>[f(D,{ref_key:"querySearchRef",ref:o},{default:h(()=>[f(Y,{modelValue:l.value.userId,"onUpdate:modelValue":i[0]||(i[0]=t=>l.value.userId=t),label:"用户","role-code":"COMMON"},null,8,["modelValue"])]),_:1},512),f(P,{class:"q-mt-sm"},{header:h(()=>[te,se,ae,oe,ne,re]),body:h(()=>[(v(!0),x(z,null,E(e.value.list??[],t=>(v(),x("tr",{key:t.id},[a("td",{textContent:y(t.id)},null,8,le),a("td",{textContent:y(t.createTime)},null,8,ue),a("td",{textContent:y(t.updateTime)},null,8,ie),a("td",{textContent:y(s.value[t.userId].nickname)},null,8,ce),a("td",{textContent:y(t.content)},null,8,de),a("td",pe,[f(T,{icon:"close",label:"删除",color:"orange",size:"sm",flat:"",dense:"",onClick:me=>B(t)},null,8,["onClick"])])]))),128))]),_:1}),f(L,{page:e.value,"onUpdate:page":i[1]||(i[1]=t=>e.value=t)},null,8,["page"])]),_:1},8,["query","page"])])}}});const ke=k(_e,[["__scopeId","data-v-4e7ca472"]]);export{ke as default};