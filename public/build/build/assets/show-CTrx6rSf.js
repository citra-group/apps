import{_ as y,b as k,w as o,d as C,o as u,e,m as U,n as s,E as i,M as V,s as _,q as n,I as b,J as g,j as h,t as f,h as $,V as p,g as m,F as w}from"./App-DC9NxCAl.js";import{V as x}from"./VTextarea-9rf6iBD2.js";const B={name:"system-module-show",data:()=>({updateLoading:!1,updateStatus:!1,updateChecked:!1}),methods:{checkForUpdate:function(d){this.updateLoading=!0,this.$http(`system/api/module/${d.id}/check-for-update`).then(t=>{d.current_version=t.current_version,d.updated_version=t.updated_version,d.updated_notes=t.updated_notes,this.updateStatus=t.status,this.updateLoading=!1,this.updateChecked=!0}).catch(()=>{this.updateLoading=!1})},cancelUpdate:function(){this.updateChecked=!1,this.updateStatus=!1},processUpdate:function(d){this.$http(`system/api/module/${d.id}/process-update`).then(()=>{}).catch(()=>{})}}},A={key:0},L={key:1},S={class:"mt-2"},T={class:"text-caption"},E={class:"text-caption"},F={class:"text-caption"};function D(d,t,I,N,P,c){const v=C("form-show");return u(),k(v,{"with-helpdesk":"","with-activity-logs":""},{default:o(({record:l})=>[e(_,null,{default:o(()=>[e(U,{dense:""},{default:o(()=>[e(s,{cols:"12"},{default:o(()=>[e(i,{label:"Name",modelValue:l.name,"onUpdate:modelValue":a=>l.name=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{cols:"12"},{default:o(()=>[e(i,{label:"Type",modelValue:l.type,"onUpdate:modelValue":a=>l.type=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{cols:"6"},{default:o(()=>[e(i,{label:"Domain",modelValue:l.domain,"onUpdate:modelValue":a=>l.domain=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{cols:"6"},{default:o(()=>[e(i,{label:"Prefix",modelValue:l.prefix,"onUpdate:modelValue":a=>l.prefix=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{cols:"12"},{default:o(()=>[e(i,{label:"Icon",modelValue:l.icon,"onUpdate:modelValue":a=>l.icon=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{cols:"12"},{default:o(()=>[e(x,{label:"Repositori",rows:"2",modelValue:l.git_address,"onUpdate:modelValue":a=>l.git_address=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{cols:"6"},{default:o(()=>[e(V,{label:"Desktop",modelValue:l.desktop,"onUpdate:modelValue":a=>l.desktop=a,"hide-details":"",inset:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{cols:"6"},{default:o(()=>[e(V,{label:"Mobile",modelValue:l.mobile,"onUpdate:modelValue":a=>l.mobile=a,"hide-details":"",inset:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{cols:"6"},{default:o(()=>[e(V,{label:"Enabled",modelValue:l.enabled,"onUpdate:modelValue":a=>l.enabled=a,"hide-details":"",inset:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{cols:"6"},{default:o(()=>[e(V,{label:"Published",modelValue:l.published,"onUpdate:modelValue":a=>l.published=a,"hide-details":"",inset:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),info:o(({record:l,theme:a})=>[t[8]||(t[8]=n("div",{class:"text-overline mt-4"},"Aksi",-1)),e(b),d.updateChecked?(u(),k(_,{key:0,class:g(`bg-${a}-lighten-5 rounded-lg mt-3`)},{default:o(()=>[d.updateStatus?(u(),h("p",A,t[2]||(t[2]=[n("strong",null,"Update Is Available",-1)]))):(u(),h("p",L,[n("strong",null,"module "+f(l.name)+" is up to date.",1)])),n("div",S,[n("p",T," update version: "+f(l.updated_version),1),n("p",E," current version: "+f(l.current_version),1),n("p",F," updated notes: "+f(l.updated_notes),1)])]),_:2},1032,["class"])):$("",!0),e(U,{dense:""},{default:o(()=>[d.updateChecked&&d.updateStatus?(u(),h(w,{key:0},[e(s,{cols:"6"},{default:o(()=>[e(p,{class:"mt-3",color:`${a}-lighten-4`,block:"",variant:"flat",onClick:c.cancelUpdate},{default:o(()=>t[3]||(t[3]=[m("Cancel")])),_:2},1032,["color","onClick"])]),_:2},1024),e(s,{cols:"6"},{default:o(()=>[e(p,{class:"mt-3",color:a,block:"",variant:"flat",onClick:r=>c.processUpdate(l)},{default:o(()=>t[4]||(t[4]=[m("Update")])),_:2},1032,["color","onClick"])]),_:2},1024)],64)):(u(),k(s,{key:1,cols:"12"},{default:o(()=>[e(p,{class:"mt-3",color:a,loading:d.updateLoading,block:"",variant:"flat",onClick:r=>c.checkForUpdate(l)},{default:o(()=>t[5]||(t[5]=[m("CHECK FOR UPDATE")])),_:2},1032,["color","loading","onClick"])]),_:2},1024))]),_:2},1024),t[9]||(t[9]=n("div",{class:"text-overline mt-4"},"Link",-1)),e(b),e(p,{class:"mt-3",color:a,block:"",variant:"flat",onClick:t[0]||(t[0]=r=>d.$router.push({name:"system-page"}))},{default:o(()=>t[6]||(t[6]=[m("BUKA PAGE")])),_:2},1032,["color"]),e(p,{class:"mt-3",color:a,block:"",variant:"flat",onClick:t[1]||(t[1]=r=>d.$router.push({name:"system-ability"}))},{default:o(()=>t[7]||(t[7]=[m("BUKA ABILITY")])),_:2},1032,["color"])]),_:1})}const M=y(B,[["render",D]]);export{M as default};
