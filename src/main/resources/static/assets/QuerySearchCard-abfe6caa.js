import{d as b,E as i,r as g,f as k,g as e,o as t,h as r,i as s,j as o,C as p,m as x}from"./index-d31968a7.js";const j=b({__name:"QuerySearchCard",setup(w,{expose:u}){const c=i("search"),n=i("clear");let a=g(0);k(()=>{});function f(){c&&c()}function m(){n&&n()}return u({loading:{start(){a.value++},close(){a.value--,a.value<0&&(a.value=0)}}}),(_,Q)=>{const q=e("q-space"),l=e("q-btn"),h=e("q-btn-group"),d=e("q-card-section"),v=e("q-linear-progress"),y=e("q-separator"),C=e("q-card");return t(),r(C,{class:"query-search-card",flat:"",bordered:""},{default:s(()=>[o(d,{class:"q-py-sm q-px-md row justify-between"},{default:s(()=>[p(_.$slots,"label",{},void 0,!0),o(q),o(h,{flat:""},{default:s(()=>[o(l,{icon:"search",label:"搜索",color:"blue",size:"xs",onClick:f}),o(l,{icon:"refresh",label:"重置",color:"orange",size:"xs",onClick:m})]),_:1})]),_:3}),a.value>0?(t(),r(v,{key:0,indeterminate:"",stripe:"",size:"1px"})):(t(),r(y,{key:1})),o(d,{class:"row q-col-gutter-md justify-start"},{default:s(()=>[p(_.$slots,"default",{},void 0,!0)]),_:3})]),_:3})}}});const z=x(j,[["__scopeId","data-v-8d7a6d61"]]);export{z as Q};