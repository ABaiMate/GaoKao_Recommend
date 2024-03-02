import{F as b}from"./FormEditor-af66954e.js";import{u as D,F as p,a as g}from"./useValid-d1447d9b.js";import{B as V}from"./BaseDialog-82865103.js";import{D as r}from"./useDialog-abda8b4e.js";import{u as w}from"./useRequest-4cb19bee.js";import{u as F}from"./useNotify-cedc1ad3.js";import{u as I}from"./useFormRules-cbf82972.js";import{B as n}from"./BbsApi-9114505e.js";import{d as q,r as x,f as R,g as k,o as C,h as E,i as l,j as o,u as d,m as N}from"./index-d31968a7.js";const T=q({__name:"BbsDialog",props:{type:{},id:{}},setup(f){const a=f,i=w(),c=D(),_=F(),{formRules:m,validNull:A}=I();let e=x({content:""});R(()=>{r.EDIT===a.type&&y()});async function y(){e.value=await i.run(n.getById(a.id))}async function v(s){await c.submit(),s.start();let t;switch(a.type){case r.ADD:t=n.create(e.value);break;case r.EDIT:t=n.modifyById(a.id,e.value);break;default:return}await i.run(t).finally(s.close),_.success("保存成功"),s.submit(e.value)}return(s,t)=>{const B=k("q-form");return C(),E(V,{class:"bbs-dialog",title:"论坛",type:a.type,onSubmit:v,persistent:""},{default:l(()=>[o(B,{ref:"formRef",class:"form q-col-gutter-y-md"},{default:l(()=>[o(p,null,{default:l(()=>[o(g,{modelValue:e.value.title,"onUpdate:modelValue":t[0]||(t[0]=u=>e.value.title=u),label:"标题",rules:d(m)},null,8,["modelValue","rules"])]),_:1}),o(p,null,{default:l(()=>[o(b,{modelValue:e.value.content,"onUpdate:modelValue":t[1]||(t[1]=u=>e.value.content=u),label:"贴子内容",rules:d(m)},null,8,["modelValue","rules"])]),_:1})]),_:1},512)]),_:1},8,["type"])}}});const K=N(T,[["__scopeId","data-v-9a301370"]]);export{K as B};
