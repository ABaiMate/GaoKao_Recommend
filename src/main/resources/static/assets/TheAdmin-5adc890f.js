import{d as L,z as N,p as r,r as T,f as H,g as t,J as j,o as _,h as v,i as o,j as e,l as c,t as q,b as z,s as E,F as J,R as K,K as G,D as g,x as O,y as P,m as Q}from"./index-d31968a7.js";import{u as W}from"./useRequest-4cb19bee.js";import{u as X}from"./useNotify-cedc1ad3.js";import{u as Y}from"./useMenu-af9bf147.js";import{u as Z}from"./useLoginInfo-0c571403.js";import{U as ee}from"./UserHeaderMenu-d13b6e99.js";import{U as te}from"./UserAvatar-c28f9a89.js";import"./LoginApi-1dda4bc2.js";import"./useDialog-abda8b4e.js";import"./BaseDialog-82865103.js";import"./useValid-d1447d9b.js";import"./UserApi-7044f7f4.js";import"./UploadUserAvatar-5e232abe.js";import"./FormInputPassword-77e6c8e9.js";import"./avatar-dc521f05.js";const oe=s=>(O("data-v-da5d8c9a"),s=s(),P(),s),ne=oe(()=>c("span",null,"后台管理",-1)),ae=["textContent"],se=L({__name:"TheAdmin",setup(s){W(),N(),X();let h=Z(),i=r(h,"loginInfo"),p=Y(K,"/admin",i),w=r(p,"menus"),x=r(p,"activeMenu"),l=T(!0);H(()=>{});function b(d){window.open("/#"+d)}return(d,a)=>{const u=t("q-btn"),C=t("q-toolbar-title"),k=t("q-space"),y=t("q-toolbar"),I=t("q-header"),M=t("q-icon"),m=t("q-item-section"),D=t("q-item"),R=t("q-list"),U=t("q-scroll-area"),V=t("q-drawer"),A=t("router-view"),B=t("q-page"),S=t("q-page-container"),$=t("q-layout"),F=j("ripple");return _(),v($,{class:"admin bg-grey-3",view:"hHh LpR fFf"},{default:o(()=>[e(I,{elevated:"",class:"bg-linear-gradient2"},{default:o(()=>[e(y,null,{default:o(()=>[e(u,{dense:"",flat:"",round:"",icon:"menu",onClick:a[0]||(a[0]=n=>l.value=!l.value)}),e(C,null,{default:o(()=>[ne]),_:1}),e(k),c("div",null,[e(te,{color:"green",class:"q-ml-md cursor-pointer text-white shadow-3","login-info":i.value},null,8,["login-info"]),e(u,{flat:""},{default:o(()=>[c("span",{textContent:q(i.value.nickname)},null,8,ae)]),_:1}),e(ee)])]),_:1})]),_:1}),e(V,{modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=n=>l.value=n),"show-if-above":"",side:"left",width:230,bordered:"",breakpoint:500},{default:o(()=>[e(U,{class:"fit"},{default:o(()=>[e(R,{class:"menu-list",padding:""},{default:o(()=>[(_(!0),z(J,null,E(w.value,n=>{var f;return G((_(),v(D,{key:n.path,active:n.path===((f=x.value)==null?void 0:f.path),class:"q-mx-xs rounded-borders","active-class":"bg-linear-gradient text-white",clickable:"",to:n.path,onContextmenu:[a[1]||(a[1]=g(()=>{},["prevent"])),g(le=>b(n.path),["stop","right"])]},{default:o(()=>[e(m,{avatar:""},{default:o(()=>[e(M,{name:n.icon??"segment"},null,8,["name"])]),_:2},1024),e(m,{textContent:q(n.name)},null,8,["textContent"])]),_:2},1032,["active","to","onContextmenu"])),[[F]])}),128))]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(S,{class:"full-height"},{default:o(()=>[e(B,{padding:""},{default:o(()=>[e(A)]),_:1})]),_:1})]),_:1})}}});const be=Q(se,[["__scopeId","data-v-da5d8c9a"]]);export{be as default};