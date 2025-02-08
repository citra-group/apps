import{_ as x,b as p,w as e,d as w,o as m,e as t,V as T,s as y,g as r,j as v,k as P,F as $,q as o,n,t as u,m as b,G as h,C as g,l as F,bB as B,J as I}from"./App-DC9NxCAl.js";const U={name:"mycoperative-payment-create",data:()=>({datemenu:!1,formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}),statuses:[]}),methods:{changePaymentMode(d,a){switch(d){case 1:a.grandtotal=a.total;break;case 2:a.grandtotal=a.total+a.sequence;break;case 3:a.grandtotal=a.total+a.sequence;break}},onItemClick(d,a){a.total=0;for(let i=0;i<a.details.length;i++)a.details[i].selected=!1;for(let i=0;i<=d;i++)switch(a.details[i].selected=!0,a.total=parseFloat(a.total)+parseFloat(a.details[i].grandtotal),a.paymentmode_id){case 1:a.grandtotal=a.total;break;case 2:a.grandtotal=a.total+a.sequence;break;case 3:a.grandtotal=a.total+a.sequence;break}},postFormCreate(d,a){a.$http("mycoperative/api/payment",{method:"POST",params:d,contentType:"multipart/form-data"}).then(()=>{this.$router.push({name:"mycoperative-payment"})})}}},q={class:"d-block pb-2"},M={class:"d-flex pa-2"},D={key:2,class:"ukuran"},N={class:"d-flex"},S={class:"text-end"},J={class:"d-flex"},L={class:"text-end"};function R(d,a,i,j,z,_){const C=w("form-create");return m(),p(C,{getdata:"","with-helpdesk":"","hide-save":"",ref:"form"},{toolbar:e(({record:f})=>[t(T,{disabled:!(f.total>0&&f.paymentmode_id),onClick:a[0]||(a[0]=l=>d.$refs.form.postFormCreate()),icon:"payments"},null,8,["disabled"])]),default:e(({combos:{paymentmodes:f},record:l,theme:c})=>[l.details<=0?(m(),p(y,{key:0,class:"text-center"},{default:e(()=>a[1]||(a[1]=[r(" Tidak ada Pembayaran ")])),_:1})):(m(),p(y,{key:1,class:"pt-10"},{default:e(()=>[(m(!0),v($,null,P(l.details,(s,k)=>(m(),p(F,{lines:"three",key:k,onClick:V=>_.onItemClick(k,l)},{default:e(()=>[o("div",q,[t(g,null,{default:e(()=>[o("div",M,[o("div",null,[t(B,{density:"compact",modelValue:s.selected,"onUpdate:modelValue":V=>s.selected=V,readonly:"",color:c},null,8,["modelValue","onUpdate:modelValue","color"])]),o("div",null,u(s.name),1)]),t(y,{class:I(["px-3 py-2",`bg-${c}-lighten-5`])},{default:e(()=>[t(b,{dense:""},{default:e(()=>[t(n,{class:"caption",cols:"2"},{default:e(()=>a[2]||(a[2]=[r("Tenor")])),_:1}),t(n,{class:"caption",cols:"5"},{default:e(()=>a[3]||(a[3]=[r("Tagihan")])),_:1}),t(n,{class:"caption",cols:"5"},{default:e(()=>a[4]||(a[4]=[r("Jatuh Tempo")])),_:1}),t(n,{cols:"2"},{default:e(()=>[o("small",null,u(s.tenor)+"/"+u(s.tenor_total),1)]),_:2},1024),t(n,{cols:"5"},{default:e(()=>[o("small",null,u(d.formatter.format(s.grandtotal)),1)]),_:2},1024),t(n,{cols:"5"},{default:e(()=>[o("small",null,u(s.duedate),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"])]),_:2},1024)])]),_:2},1032,["onClick"]))),128))]),_:2},1024)),l.details<=0?(m(),v("div",D,[t(g,{color:`${c}-lighten-5`,flat:"",class:"positionfixed","scroll-behavior":"elevate"},{default:e(()=>[o("div",N,[t(n,{cols:"6"},{default:e(()=>a[5]||(a[5]=[o("small",null,"Total Pembayaran",-1)])),_:1}),t(n,{cols:"6",class:"font-weight-bold"},{default:e(()=>[o("div",S,u(d.formatter.format(l.grandtotal)),1)]),_:2},1024)]),t(b,null,{default:e(()=>[t(n,{cols:"12"},{default:e(()=>[t(h,{items:f,disabled:l.details<=0,label:"Mode Pembayaran",modelValue:l.paymentmode_id,"onUpdate:modelValue":[s=>l.paymentmode_id=s,s=>_.changePaymentMode(s,l)],return_value:"false","hide-details":""},null,8,["items","disabled","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["color"])])):(m(),p(g,{key:3,color:`${c}-lighten-5`,flat:"",class:"position-sticky bottom-0 w-100","scroll-behavior":"elevate"},{default:e(()=>[o("div",J,[t(n,{cols:"6"},{default:e(()=>a[6]||(a[6]=[o("small",null,"Total Pembayaran",-1)])),_:1}),t(n,{cols:"6",class:"font-weight-bold"},{default:e(()=>[o("div",L,u(d.formatter.format(l.grandtotal)),1)]),_:2},1024)]),t(b,null,{default:e(()=>[t(n,{cols:"12"},{default:e(()=>[t(h,{items:f,disabled:l.details<=0,label:"Mode Pembayaran",modelValue:l.paymentmode_id,"onUpdate:modelValue":[s=>l.paymentmode_id=s,s=>_.changePaymentMode(s,l)],return_value:"false","hide-details":""},null,8,["items","disabled","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["color"]))]),_:1},512)}const G=x(U,[["render",R],["__scopeId","data-v-187f1212"]]);export{G as default};
