import{_ as U,b,w as o,d as i,o as g,e,q as p,M as v,N as r,m as V,n as t,E as u,s as y,I as w,V as _,g as f}from"./App-Co8oq2eg.js";const k={name:"coperative-member-show",data:()=>({tagihan:170.25}),methods:{impersonateTake:function(m){this.$http(`account/api/impersonate-take/${m.email}`,{method:"POST"}).then(()=>{this.$router.push({name:"account-module"})})},makeUserFromMember:function(m){this.$http(`coperative/api/member/${m.id}/generate-user`,{method:"POST"}).then(()=>{this.$router.push({name:"account-module"})})}}},x={class:"text-caption pr-1 pl-2 mb-4"};function T(m,d,$,C,N,s){const n=i("v-currency-field"),h=i("form-show");return g(),b(h,{"with-helpdesk":"","hide-delete":""},{default:o(({record:l})=>[e(r,{class:"position-absolute d-flex pa-1",rounded:"pill",style:{top:"8px",right:"8px"}},{default:o(()=>[p("div",x,[e(v,{color:"primary",modelValue:l.active,"onUpdate:modelValue":a=>l.active=a,label:`ANGGOTA: ${l.active?"AKTIF":"TIDAK AKTIF"}`,readonly:""},null,8,["modelValue","onUpdate:modelValue","label"])])]),_:2},1024),e(y,{class:"mt-5"},{default:o(()=>[e(V,{dense:""},{default:o(()=>[e(t,{cols:"12"},{default:o(()=>[e(u,{label:"Kode",modelValue:l.slug,"onUpdate:modelValue":a=>l.slug=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(u,{label:"NIK",modelValue:l.nik,"onUpdate:modelValue":a=>l.nik=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(u,{label:"Unit",modelValue:l.unit_name,"onUpdate:modelValue":a=>l.unit_name=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(u,{label:"Nama",modelValue:l.name,"onUpdate:modelValue":a=>l.name=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(u,{label:"Email",modelValue:l.email,"onUpdate:modelValue":a=>l.email=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"12"},{default:o(()=>[e(u,{label:"Telepon",modelValue:l.phone,"onUpdate:modelValue":a=>l.phone=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"6"},{default:o(()=>[e(n,{label:"Pendapatan",modelValue:l.amount_of_salary,"onUpdate:modelValue":a=>l.amount_of_salary=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"6"},{default:o(()=>[e(n,{label:"Pinjaman Maksimal",modelValue:l.amount_of_maxloan,"onUpdate:modelValue":a=>l.amount_of_maxloan=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"6"},{default:o(()=>[e(n,{label:"Simpanan Pokok",modelValue:l.amount_of_main,"onUpdate:modelValue":a=>l.amount_of_main=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"6"},{default:o(()=>[e(n,{label:"Simpanan Wajib",modelValue:l.amount_of_monthly,"onUpdate:modelValue":a=>l.amount_of_monthly=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"6"},{default:o(()=>[e(n,{label:"Tabungan",modelValue:l.amount_of_saving,"onUpdate:modelValue":a=>l.amount_of_saving=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"6"},{default:o(()=>[e(n,{label:"S H U",modelValue:l.amount_of_dividend,"onUpdate:modelValue":a=>l.amount_of_dividend=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"6"},{default:o(()=>[e(n,{label:"Jumlah Tabungan",modelValue:l.amount_of_deposit,"onUpdate:modelValue":a=>l.amount_of_deposit=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"6"},{default:o(()=>[e(n,{label:"Penarikan",modelValue:l.amount_of_withdrawal,"onUpdate:modelValue":a=>l.amount_of_withdrawal=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"6"},{default:o(()=>[e(n,{label:"Jumlah Pinjaman",modelValue:l.total_of_loan,"onUpdate:modelValue":a=>l.total_of_loan=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"6"},{default:o(()=>[e(n,{label:"Pinjaman Berjalan",modelValue:l.current_of_loan,"onUpdate:modelValue":a=>l.current_of_loan=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{cols:"6"})]),_:2},1024)]),_:2},1024)]),info:o(({record:l,theme:a})=>[d[2]||(d[2]=p("div",{class:"text-overline mt-6"}," LINK ",-1)),e(w,{class:"mb-3"}),e(V,{dense:""},{default:o(()=>[e(t,{cols:"6"},{default:o(()=>[e(_,{color:a,variant:"flat",block:"",onClick:c=>s.makeUserFromMember(l)},{default:o(()=>d[0]||(d[0]=[f("Make User")])),_:2},1032,["color","onClick"])]),_:2},1024),e(t,{cols:"6"},{default:o(()=>[e(_,{color:a,variant:"flat",block:"",onClick:c=>s.impersonateTake(l)},{default:o(()=>d[1]||(d[1]=[f("Impersonate")])),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024)]),_:1})}const I=U(k,[["render",T]]);export{I as default};
