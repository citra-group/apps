import{_ as f,b as h,w as o,d as s,o as U,e as l,q as i,M as c,N as g,m as p,n as t,E as d,s as b,I as v,V as y,g as w}from"./App-DC9NxCAl.js";const k={name:"coperative-member-show",data:()=>({tagihan:170.25}),methods:{impersonateTake:function(m){this.$http(`account/api/impersonate-take/${m.email}`,{method:"POST"}).then(()=>{this.$router.push({name:"account-module"})})}}},r={class:"text-caption pr-1 pl-2 mb-4"};function x(m,u,T,N,$,V){const n=s("v-currency-field"),_=s("form-show");return U(),h(_,{"with-helpdesk":"","hide-delete":""},{default:o(({record:e})=>[l(g,{color:m.theme,class:"position-absolute d-flex pa-1",rounded:"pill",style:{top:"8px",right:"8px"}},{default:o(()=>[i("div",r,[l(c,{color:"primary",modelValue:e.active,"onUpdate:modelValue":a=>e.active=a,label:`ANGGOTA: ${e.active?"AKTIF":"TIDAK AKTIF"}`,readonly:""},null,8,["modelValue","onUpdate:modelValue","label"])])]),_:2},1032,["color"]),l(b,{class:"mt-5"},{default:o(()=>[l(p,{dense:""},{default:o(()=>[l(t,{cols:"12"},{default:o(()=>[l(d,{label:"Kode",modelValue:e.slug,"onUpdate:modelValue":a=>e.slug=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"12"},{default:o(()=>[l(d,{label:"NIK",modelValue:e.nik,"onUpdate:modelValue":a=>e.nik=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"12"},{default:o(()=>[l(d,{label:"Unit",modelValue:e.unit_name,"onUpdate:modelValue":a=>e.unit_name=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"12"},{default:o(()=>[l(d,{label:"Nama",modelValue:e.name,"onUpdate:modelValue":a=>e.name=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"12"},{default:o(()=>[l(d,{label:"Email",modelValue:e.email,"onUpdate:modelValue":a=>e.email=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"12"},{default:o(()=>[l(d,{label:"Telepon",modelValue:e.phone,"onUpdate:modelValue":a=>e.phone=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Pendapatan",modelValue:e.amount_of_salary,"onUpdate:modelValue":a=>e.amount_of_salary=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Pinjaman Maksimal",modelValue:e.amount_of_maxloan,"onUpdate:modelValue":a=>e.amount_of_maxloan=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Simpanan Pokok",modelValue:e.amount_of_main,"onUpdate:modelValue":a=>e.amount_of_main=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Simpanan Wajib",modelValue:e.amount_of_monthly,"onUpdate:modelValue":a=>e.amount_of_monthly=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Tabungan",modelValue:e.amount_of_saving,"onUpdate:modelValue":a=>e.amount_of_saving=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"S H U",modelValue:e.amount_of_dividend,"onUpdate:modelValue":a=>e.amount_of_dividend=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Jumlah Tabungan",modelValue:e.amount_of_deposit,"onUpdate:modelValue":a=>e.amount_of_deposit=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Penarikan",modelValue:e.amount_of_withdrawal,"onUpdate:modelValue":a=>e.amount_of_withdrawal=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Jumlah Pinjaman",modelValue:e.total_of_loan,"onUpdate:modelValue":a=>e.total_of_loan=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"},{default:o(()=>[l(n,{label:"Pinjaman Berjalan",modelValue:e.current_of_loan,"onUpdate:modelValue":a=>e.current_of_loan=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(t,{cols:"6"})]),_:2},1024)]),_:2},1024)]),info:o(({record:e,theme:a})=>[u[1]||(u[1]=i("div",{class:"text-overline mt-6"},"LINK",-1)),l(v,{class:"mb-3"}),l(p,null,{default:o(()=>[l(t,{cols:"12"},{default:o(()=>[l(y,{color:a,variant:"flat",block:"",onClick:I=>V.impersonateTake(e)},{default:o(()=>u[0]||(u[0]=[w("Impersonate")])),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024)]),_:1})}const C=f(k,[["render",x]]);export{C as default};
