import{d as m,f as i,g as c,o as _,b as p,l as u,t as V,j as f,N as v,s as C,i as x,C as g,M as E,m as F}from"./index-d31968a7.js";const b={class:"form-editor col row items-center"},h=["textContent"],q=m({__name:"FormEditor",props:{label:{},modelValue:{}},emits:["update:modelValue"],setup(r,{emit:d}){const e=r,t=d;return e.modelValue||t("update:modelValue",""),i(()=>{}),(o,s)=>{const n=c("q-editor");return _(),p("div",b,[u("p",{class:"max-width-100 q-mr-md",textContent:V(e.label)},null,8,h),f(n,E({class:"col","model-value":e.modelValue,"onUpdate:modelValue":s[0]||(s[0]=a=>t("update:modelValue",a))},o.$attrs),v({_:2},[C(o.$slots,(a,l)=>({name:l,fn:x(()=>[g(o.$slots,l,{},void 0,!0)])}))]),1040,["model-value"])])}}});const y=F(q,[["__scopeId","data-v-0d895c33"]]);export{y as F};
