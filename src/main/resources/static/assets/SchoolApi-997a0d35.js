import{R as e,H as s}from"./useRequest-4cb19bee.js";const l={getById:o=>new e(s.GET,`/school/${o}`),getListBySchoolName:o=>new e(s.GET,`/school/school-name/${o}`),getListByIds:o=>new e(s.GET,`/school/list/${o}`),getProvinceList:()=>new e(s.GET,"/school/province/list"),getList:o=>new e(s.GET,"/school/list",o),getPage:o=>new e(s.GET,"/school/page",o),create:o=>new e(s.POST,"/school",o),modifyById:(o,t)=>new e(s.PUT,`/school/${o}`,t),deleteById:o=>new e(s.DELETE,`/school/${o}`)};export{l as S};