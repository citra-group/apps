import{_ as y,b as u,w as a,d as l,o as n,e as t,j as i,s as m,m as f,F as s,k,h as v,n as C}from"./App-CY2XhdyM.js";const w={name:"account-module",methods:{impersonateLeave:function({mapUserModule:r}){this.$http("account/api/impersonate-leave",{method:"POST"}).then(h=>{r(h)})},openModule:function(r){this.$router.push({name:r.slug+"-dashboard"})}}};function L(r,h,V,j,B,c){const d=l("page-divider"),_=l("widget-apps"),b=l("page-paper"),$=l("user-apps");return n(),u($,{"page-name":"account-module","onClick:impersonateLeave":c.impersonateLeave,"clear-filters":""},{default:a(({modules:o,theme:g})=>[t(b,{"user-avatar":""},{default:a(()=>[o.personal&&o.personal.length>0?(n(),i(s,{key:0},[t(d,{label:"personal",uppercase:""}),t(m,null,{default:a(()=>[t(f,{justify:"center","no-gutters":""},{default:a(()=>[(n(!0),i(s,null,k(o.personal,(e,p)=>(n(),u(C,{cols:"3",md:"2",key:p},{default:a(()=>[t(_,{color:`${g}-lighten-1`,highlight:e.highlight,icon:e.icon,label:e.name,onClick:x=>c.openModule(e)},null,8,["color","highlight","icon","label","onClick"])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)],64)):v("",!0),o.administrator&&o.administrator.length>0?(n(),i(s,{key:1},[t(d,{label:"administrator",uppercase:""}),t(m,null,{default:a(()=>[t(f,{justify:"center","no-gutters":""},{default:a(()=>[(n(!0),i(s,null,k(o.administrator,(e,p)=>(n(),u(C,{cols:"3",md:"2",key:p},{default:a(()=>[t(_,{color:`${g}-darken-2`,highlight:e.highlight,icon:e.icon,label:e.name,onClick:x=>c.openModule(e)},null,8,["color","highlight","icon","label","onClick"])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)],64)):v("",!0)]),_:2},1024)]),_:1},8,["onClick:impersonateLeave"])}const F=y(w,[["render",L]]);export{F as default};
