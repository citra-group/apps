import{_ as r,b as _,w as a,d as n,o as f,e,D as c,g as u,Q as b,t as y,I as v,s as U,m as g,n as d,E as s,R as x}from"./App-CY2XhdyM.js";const C={name:"coperative-deposit-edit"};function $(i,o,h,w,T,k){const m=n("apps-button"),p=n("v-currency-field"),V=n("form-edit");return f(),_(V,{"with-helpdesk":""},{toolbar:a(({record:l})=>[e(m,{disabled:!(l.grandtotal>0),icon:"move_to_inbox",tooltip:"Update Data",onClick:o[0]||(o[0]=t=>i.$refs.form.postFormEdit())},null,8,["disabled"])]),default:a(({record:l})=>[e(x,null,{default:a(()=>[e(c,{class:"overline py-2"},{default:a(()=>[o[1]||(o[1]=u(" simpanan ")),e(b),u(" Nomor "+y(l.slug),1)]),_:2},1024),e(v),e(U,null,{default:a(()=>[e(g,{dense:""},{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(s,{label:"Keterangan",modelValue:l.name,"onUpdate:modelValue":t=>l.name=t,dense:"","hide-details":"",outlined:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:a(()=>[e(s,{class:"mt-2",label:"Jatuh Tempo",modelValue:l.duedate,"onUpdate:modelValue":t=>l.duedate=t,dense:"","hide-details":"",outlined:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:a(()=>[e(s,{class:"mt-2",label:"Jenis",modelValue:l.type,"onUpdate:modelValue":t=>l.type=t,dense:"","hide-details":"",outlined:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:a(()=>[e(p,{label:"Jumlah (Rp)",autofocus:"",modelValue:l.grandtotal,"onUpdate:modelValue":t=>l.grandtotal=t,"allow-negative":!1,step:"any"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const J=r(C,[["render",$]]);export{J as default};
