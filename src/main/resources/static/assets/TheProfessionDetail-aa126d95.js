import{T as q}from"./TitleSeparator-7c98d06d.js";import{d as y,f as h,g as s,o as a,h as r,i as o,j as e,C as D,m as g,J as S,K as A,k as i,t as P,L as F,M as C,B as H,z as j,A as E,r as I,G,b as d,l as w,q as b,F as m,s as L}from"./index-d31968a7.js";import{u as J}from"./useNotify-cedc1ad3.js";import{u as K,a as Q}from"./useRequest-4cb19bee.js";import{P as U}from"./ProfessionApi-32b74b1a.js";const O=y({__name:"MenuList",props:{fit:{type:Boolean},contextMenu:{type:Boolean},grey:{type:Boolean}},setup(f,{expose:n}){const u=f;return h(()=>{}),n({fit:u.fit,contextMenu:u.contextMenu,grey:u.grey}),(l,_)=>{const t=s("q-list"),c=s("q-menu");return a(),r(c,{anchor:"top end",self:"top start",fit:l.fit,"context-menu":l.contextMenu},{default:o(()=>[e(t,{dense:""},{default:o(()=>[D(l.$slots,"default",{},void 0,!0)]),_:3})]),_:3},8,["fit","context-menu"])}}});const W=g(O,[["__scopeId","data-v-362975f7"]]),X=y({__name:"MenuItem",props:{icon:{},label:{}},setup(f){return h(()=>{}),(n,u)=>{const l=s("q-icon"),_=s("q-item-section"),t=s("q-item-label"),c=s("q-item"),p=S("close-popup");return A((a(),r(c,C(n.$attrs,{clickable:""}),{default:o(()=>[n.icon?(a(),r(_,{key:0,avatar:""},{default:o(()=>[e(l,{name:n.icon},null,8,["name"])]),_:1})):i("",!0),e(_,{"no-wrap":""},{default:o(()=>[e(t,{textContent:P(n.label)},null,8,["textContent"])]),_:1}),n.$slots.default?(a(),r(_,{key:1,side:""},{default:o(()=>[e(l,{name:"keyboard_arrow_right"})]),_:1})):i("",!0),n.$slots.default?(a(),r(W,F(C({key:2},n.$parent.$parent.$parent.$parent)),{default:o(()=>[D(n.$slots,"default",{},void 0,!0)]),_:3},16)):i("",!0)]),_:3},16)),[[p,n.$slots.default?0:1]])}}});const T=g(X,[["__scopeId","data-v-bdc9e484"]]),Y={class:"profession-detail"},Z={class:"inline-block q-ml-md"},ee=["innerHTML"],te=y({__name:"TheProfessionDetail",setup(f){J(),H();const n=K(),u=Q();j();const l=E();let _=I(parseInt(l.params.id)),t=I({});h(async()=>{await c()}),G(p=>{_.value=parseInt(p.params.id),c()});async function c(){u.start(),t.value=await n.run(U.getById(_.value)).finally(u.close)??{}}return(p,oe)=>{const N=s("q-item-label"),k=s("q-chip"),z=s("q-separator"),M=s("q-list"),R=s("q-card-section"),V=s("q-card");return a(),d("div",Y,[e(V,{flat:"",bordered:""},{default:o(()=>[e(N,{class:"inline-block",textContent:P(t.value.name),header:""},null,8,["textContent"]),w("div",Z,[e(k,{label:t.value.tag,size:"sm","text-color":"white",color:"blue"},null,8,["label"]),e(k,{label:t.value.belong,size:"sm",outline:"","text-color":"white",color:"blue"},null,8,["label"])]),e(z),e(R,null,{default:o(()=>{var $,x,B;return[e(q,null,{default:o(()=>[b("简介")]),_:1}),w("div",{class:"q-pa-md",innerHTML:t.value.content},null,8,ee),($=t.value.related)!=null&&$.length?(a(),d(m,{key:0},[(x=t.value.related)!=null&&x.length?(a(),r(q,{key:0},{default:o(()=>[b("相似职业")]),_:1})):i("",!0),e(M,{separator:"",dense:"",bordered:"",class:"q-my-md"},{default:o(()=>[(a(!0),d(m,null,L(t.value.related??[],v=>(a(),r(T,{label:v},null,8,["label"]))),256))]),_:1})],64)):i("",!0),(B=t.value.counterparts)!=null&&B.length?(a(),d(m,{key:1},[e(q,null,{default:o(()=>[b("相关专业")]),_:1}),e(M,{separator:"",dense:"",bordered:"",class:"q-my-md"},{default:o(()=>[(a(!0),d(m,null,L(t.value.counterparts??[],v=>(a(),r(T,{label:v},null,8,["label"]))),256))]),_:1})],64)):i("",!0)]}),_:1})]),_:1})])}}});const ue=g(te,[["__scopeId","data-v-6ca87d35"]]);export{ue as default};