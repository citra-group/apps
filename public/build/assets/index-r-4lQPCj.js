import{_ as s,b as c,h as u,d as i,o as p}from"./App-CY2XhdyM.js";const d={name:"infrastructure-assign",methods:{checkRoute:function(t=""){let e=this.$router.currentRoute._value.name,r=["show","delete","update","edit","create"];for(let n of r)e=e.replaceAll("-"+n,"");return e==t}}};function m(t,e,r,n,_,a){const o=i("page-crud");return a.checkRoute("infrastructure-unit-asign")?(p(),c(o,{key:0,"page-name":"infrastructure-unit-assign","page-key":"assign","parent-name":"infrastructure-unit","parent-key":"unit"})):u("",!0)}const l=s(d,[["render",m]]);export{l as default};
