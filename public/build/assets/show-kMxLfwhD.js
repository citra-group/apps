import{_ as N,b as u,w as e,d as V,o as i,e as t,m as g,n as d,E as _,I as v,h as m,j as S,k as x,F as I,s as b,O as X,q as r,V as w,g as o,P as U,f as C,Q as F,C as Z,l as L,L as T,t as f,J as z}from"./App-CdcRqZFE.js";import{V as $}from"./VBanner-CHyyAIDm.js";const E={name:"coperative-payment-show",computed:{getEndDate(){var s=new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDate()+1);return s.toISOString().slice(0,10)}},data:()=>({date:new Date,menuTerima:!1,formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})}),methods:{dateFormated(s){if(!s)return null;const[a,c,y]=s.split("-");return`${y}-${c}-${a}`},sendAcception(s,a){a.$http(`coperative/api/payment/${s.id}/approve`,{method:"PUT",params:s}).then(()=>{a.snackbar.color="green",a.snackbar.text="Berhasil",a.snackbar.state=!0,this.$router.push({name:"coperative-payment"})})}}};function H(s,a,c,y,K,B){const h=V("v-currency-field"),A=V("v-date-input"),D=V("form-show");return i(),u(D,{"with-helpdesk":"","hide-edit":"","hide-delete":""},{default:e(({record:l,store:k,theme:p})=>[t(b,null,{default:e(()=>[t(g,{dense:""},{default:e(()=>[t(d,{cols:"12"},{default:e(()=>[t(_,{label:"Name",modelValue:l.name,"onUpdate:modelValue":n=>l.name=n,dense:"","hide-details":"",variant:"plain",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(v),t(d,{cols:"6"},{default:e(()=>[t(_,{color:`${p} thin`,class:"mt-2",label:"Nomor",modelValue:l.slug,"onUpdate:modelValue":n=>l.slug=n,dense:"","hide-details":"",variant:"outlined",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),t(d,{cols:"6"},{default:e(()=>[t(h,{color:p,class:"mt-2",label:"Total",modelValue:l.grandtotal,"onUpdate:modelValue":n=>l.grandtotal=n,dense:"","hide-details":"",variant:"outlined",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),l.paymentmode==="BANK"?(i(),u(d,{key:0,cols:"12",md:"6"},{default:e(()=>[t(A,{color:p,modelValue:l.paid_at,"onUpdate:modelValue":n=>l.paid_at=n,label:"Tanggal Terima","prepend-icon":"","prepend-inner-icon":"$calendar",variant:"outlined"},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024)):m("",!0),(i(!0),S(I,null,x(l.details,n=>(i(),u(Z,{key:n.id,class:"mb-4 w-100",flat:""},{default:e(()=>[t(L,{lines:"three",style:{padding:"0%"}},{default:e(()=>[t(T,{class:"px-2 py-2"},{default:e(()=>[o(f(n.name),1)]),_:2},1024),t(v),t(T,{class:z([`bg-${p}-lighten-5`,"py-4 px-2"])},{default:e(()=>[t(g,null,{default:e(()=>[t(d,{cols:"4"},{default:e(()=>[a[0]||(a[0]=r("div",{class:"pt-2"},"Tenor",-1)),o(" "+f(n.tenor)+"/ "+f(n.tenor_total),1)]),_:2},1024),t(d,{cols:"4"},{default:e(()=>[a[1]||(a[1]=r("div",{class:"pt-2"},"Total",-1)),o(" "+f(s.formatter.format(n.grandtotal)),1)]),_:2},1024),t(d,{cols:"4"},{default:e(()=>[a[2]||(a[2]=r("div",{class:"pt-2"},"Jatuh Tempo",-1)),o(" "+f(n.duedate),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1024))),128)),t(b,{class:"d-flex"},{default:e(()=>[t(X),a[4]||(a[4]=r("div",{class:"mr-2"},null,-1)),r("div",null,[l.status!=="SUDAH LUNAS"?(i(),u(w,{key:0,disabled:!l.paid_at,variant:"flat",color:p,onClick:n=>B.sendAcception(l,k)},{default:e(()=>a[3]||(a[3]=[o("Terima ")])),_:2},1032,["disabled","color","onClick"])):m("",!0)])]),_:2},1024),l.paymode==="CASH"?(i(),u(d,{key:1,cols:"12"},{default:e(()=>[t($,{"two-line":""},{default:e(()=>[t(U,{color:"deep-purple accent-4",size:"40"},{default:e(()=>[t(C,{color:"white"},{default:e(()=>a[5]||(a[5]=[o("privacy_tip")])),_:1})]),_:1}),a[6]||(a[6]=o(" Untuk melakukan pembayaran silahkan datang ke kantor pusat. "))]),_:1})]),_:1})):m("",!0),l.paymode==="BANK"?(i(),u(d,{key:2,cols:"12"},{default:e(()=>[t($,{"two-line":""},{default:e(()=>[t(U,{color:"deep-purple accent-4",size:"40"},{default:e(()=>[t(C,{color:"white"},{default:e(()=>a[7]||(a[7]=[o("privacy_tip")])),_:1})]),_:1}),a[8]||(a[8]=o(" Pembayaran dapat dilakukan dengan cara transfer ke ")),a[9]||(a[9]=r("ul",null,[r("li",null,"Bank BCA dengan nomor rekening XXXXXXXX"),r("li",null," Bank Mandiri dengan nomor rekening ZZZZZZZ ")],-1)),a[10]||(a[10]=o(" Setelah transfer dilakukan, silahkan unggah bukti bayar dibawah ini. "))]),_:1})]),_:1})):m("",!0),l.paymode==="BANK"&&l.transfer_path?(i(),u(d,{key:3,cols:"12"},{default:e(()=>[t(F,{src:l.transfer_path},null,8,["src"])]),_:2},1024)):m("",!0)]),_:2},1024)]),_:2},1024)]),info:e(({record:l,store:k,theme:p})=>[l.status==="SUDAH LUNAS"?(i(),u(w,{key:0,class:"mt-2",color:p,block:"",onClick:n=>s.downloadReceipt(l,k)},{default:e(()=>a[11]||(a[11]=[o("Unduh Tanda Terima")])),_:2},1032,["color","onClick"])):m("",!0)]),_:1})}const J=N(E,[["render",H]]);export{J as default};
