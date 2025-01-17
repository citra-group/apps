import{_ as P,j as d,e,w as t,bx as O,F as y,d as V,o as i,q as o,S as L,O as z,f as B,g as p,s as S,m as T,n as r,G as D,V as I,b as c,h as _,l as N,k as h,i as F,p as w,t as u,u as j,v as M,x as A}from"./App-ChN4YqgR.js";import{V as U}from"./VBadge-Cw4nEgkV.js";const R={name:"mycoperative-dashboard",data:()=>({modelOverlay:!1,tenors:[],tenor:null,formatter:new Intl.NumberFormat("id-ID",{currency:"IDR",minimumFractionDigits:0})}),methods:{getTotalValue(l){return l.reduce((n,b)=>(n+=parseFloat(b.value),n),0)},getSisaValue(l){return!l||l.length===0?0:l.reduce((n,b,C)=>C===0?parseFloat(b.value):n-parseFloat(b.value),0)},openPayment(l){this.$router.push({name:"mycoperative-payment-show",params:{payment:l}})},openLoan(l){this.$router.push({name:"mycoperative-loan-show",params:{loan:l}})},getChipColor(l){switch(l){case"BELUM DIBAYAR":return"red";case"PUBLISH":return"primary"}},onInitialized:function({record:l}){this.tenors=l.tenors,l.hasMainDeposit||(this.modelOverlay=!0)},postDepositMain:function(){this.$http("mycoperative/api/set-main-deposit",{method:"POST",params:{tenor:parseInt(this.tenor)}}).then(()=>{this.modelOverlay=!1})}}},W={class:"px-6"},$={class:"text-right"},E={class:"text-right"},q={class:"text-right"},G={class:"text-right"},H={style:{"text-align":"right"}};function J(l,n,b,C,Y,v){const f=V("widget-number"),g=V("apexchart"),k=V("widget-card"),x=V("page-home");return i(),d(y,null,[e(O,{"model-value":l.modelOverlay,class:"align-center justify-center",persistent:""},{default:t(()=>[o("div",W,[e(L,{class:"text-center",rounded:"lg"},{default:t(()=>[e(z,{class:"mt-4",color:"warning",size:"64"},{default:t(()=>[e(B,{size:"36"},{default:t(()=>n[1]||(n[1]=[p("lightbulb")])),_:1})]),_:1}),e(S,null,{default:t(()=>[n[2]||(n[2]=p(" Anda belum menentukan termin simpanan pokok. Silahkan pilih termin di bawah ini dan klik simpan. ")),e(T,{class:"mt-2"},{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(D,{items:l.tenors,label:"Termin Simpanan Pokok",modelValue:l.tenor,"onUpdate:modelValue":n[0]||(n[0]=a=>l.tenor=a),"hide-details":""},null,8,["items","modelValue"])]),_:1})]),_:1})]),_:1}),e(S,{class:"pt-0"},{default:t(()=>[e(I,{block:"",onClick:v.postDepositMain},{default:t(()=>n[3]||(n[3]=[p("SIMPAN")])),_:1},8,["onClick"])]),_:1})]),_:1})])]),_:1},8,["model-value"]),e(x,{"page-name":"mycoperative-dashboard",onInitialized:v.onInitialized},{toolbar:t(({record:a})=>[a&&a.countUnreadNotification?(i(),c(I,{key:0,icon:""},{default:t(()=>[e(U,{color:"orange",content:a.countUnreadNotification,id:"menu-activator"},{default:t(()=>[e(B,null,{default:t(()=>n[4]||(n[4]=[p("notifications")])),_:1})]),_:2},1032,["content"])]),_:2},1024)):_("",!0),a&&a.processeLoan?(i(),c(F,{key:1,transition:"slide-x-transition",activator:"#menu-activator",width:"auto",rounded:"6"},{default:t(()=>[e(N,{density:"compact"},{default:t(()=>[(i(!0),d(y,null,h(a.processeLoan,(s,m)=>(i(),c(j,{key:s.id,value:m,onClick:K=>v.openLoan(s.id),rounded:"xl",class:"mx-4"},{default:t(()=>[e(M,null,{default:t(()=>[e(B,{size:"small",class:"mr-4"},{default:t(()=>n[5]||(n[5]=[p("directory_sync")])),_:1}),p(u(s.slug)+" - "+u(s.name)+" - ",1),e(A,{size:"x-small",color:v.getChipColor(s.status)},{default:t(()=>[p(u(s.status),1)]),_:2},1032,["color"])]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:2},1024)]),_:2},1024)):_("",!0)]),default:t(({record:a})=>[e(S,null,{default:t(()=>[e(T,{dense:""},{default:t(()=>[e(r,{cols:"6",md:"4"},{default:t(()=>[e(f,{title:"Simpanan Pokok","hide-icon":"",label:"Simpanan Pokok saat ini",icon:"account_balance_wallet",value:l.formatter.format(a.totalPokok)},null,8,["value"])]),_:2},1024),e(r,{cols:"6",md:"4"},{default:t(()=>[e(f,{title:"Simpanan Wajib","hide-icon":"",label:"Simpanan Wajib saat ini",icon:"account_balance_wallet",value:l.formatter.format(a.totalWajib)},null,8,["value"])]),_:2},1024),e(r,{cols:"6",md:"4"},{default:t(()=>[e(f,{title:"Tabungan","hide-icon":"",label:"Tabungan saat ini",icon:"account_balance_wallet",value:l.formatter.format(a.totalTabungan)},null,8,["value"])]),_:2},1024),e(r,{cols:"6",md:"4"},{default:t(()=>[e(f,{title:"Penarikan","hide-icon":"",label:"Penarikan saat ini",icon:"account_balance_wallet",value:l.formatter.format(a.totalPenarikan)},null,8,["value"])]),_:2},1024),e(r,{cols:"6",md:"4"},{default:t(()=>[e(f,{title:"Saldo Simpanan","hide-icon":"",label:"Saldo Simpanan saat ini",icon:"account_balance_wallet",value:l.formatter.format(a.totalSaldo)},null,8,["value"])]),_:2},1024),e(r,{cols:"6",md:"4"},{default:t(()=>[e(f,{"hide-icon":"",title:"Tagihan",label:"Total Tertagih",icon:"payments",value:l.formatter.format(a.sisaPinjaman)},null,8,["value"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(S,null,{default:t(()=>[e(T,null,{default:t(()=>[a&&a.depositByType?(i(),c(r,{key:0,cols:"12",md:"3"},{default:t(()=>[e(k,{title:a.depositByType.title},{table:t(()=>[e(w,{density:"compact"},{default:t(()=>[o("tbody",null,[(i(!0),d(y,null,h(a.depositByType.table,(s,m)=>(i(),d("tr",{key:m},[o("td",null,u(s.title),1),o("td",$,u(s.value),1)]))),128))])]),_:2},1024)]),default:t(()=>[e(g,{type:"donut",options:a.depositByType.chartOptions,series:a.depositByType.series},null,8,["options","series"])]),_:2},1032,["title"])]),_:2},1024)):_("",!0),a&&a.savingsBalance?(i(),c(r,{key:1,cols:"12",md:"3"},{default:t(()=>[e(k,{title:a.savingsBalance.title},{table:t(()=>[e(w,{density:"compact"},{default:t(()=>[o("tbody",null,[(i(!0),d(y,null,h(a.savingsBalance.table,(s,m)=>(i(),d("tr",{key:m},[o("td",null,u(s.title),1),o("td",E,u(s.value),1)]))),128))])]),_:2},1024)]),default:t(()=>[e(g,{type:"donut",options:a.savingsBalance.chartOptions,series:a.savingsBalance.series},null,8,["options","series"])]),_:2},1032,["title"])]),_:2},1024)):_("",!0),a&&a.loanvspayment?(i(),c(r,{key:2,cols:"12",md:"3"},{default:t(()=>[e(k,{title:a.loanvspayment.title},{table:t(()=>[e(w,{density:"compact"},{default:t(()=>[o("tbody",null,[(i(!0),d(y,null,h(a.loanvspayment.table,(s,m)=>(i(),d("tr",{key:m},[o("td",null,u(s.title),1),o("td",q,u(s.value),1)]))),128))])]),_:2},1024)]),default:t(()=>[e(g,{type:"donut",options:a.loanvspayment.chartOptions,series:a.loanvspayment.series},null,8,["options","series"])]),_:2},1032,["title"])]),_:2},1024)):_("",!0),a&&a.loanbyStatus?(i(),c(r,{key:3,cols:"12",md:"3"},{default:t(()=>[e(k,{title:a.loanbyStatus.title,"with-count":""},{table:t(()=>[e(w,{density:"compact"},{default:t(()=>[o("tbody",null,[(i(!0),d(y,null,h(a.loanbyStatus.table,(s,m)=>(i(),d("tr",{key:m},[o("td",null,u(s.title),1),o("td",G,u(s.value),1)]))),128)),o("tr",null,[n[6]||(n[6]=o("td",null,"Jumlah",-1)),o("td",H,u(v.getTotalValue(a.loanbyStatus.table)),1)])])]),_:2},1024)]),default:t(()=>[e(g,{type:"donut",options:a.loanbyStatus.chartOptions,series:a.loanbyStatus.series},null,8,["options","series"])]),_:2},1032,["title"])]),_:2},1024)):_("",!0)]),_:2},1024)]),_:2},1024)]),_:1},8,["onInitialized"])],64)}const Z=P(R,[["render",J]]);export{Z as default};
