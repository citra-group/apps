import{_ as x,b as _,w as a,d as C,o as b,e as t,n as s,bA as N,V as r,f as v,g as m,s as p,I as A,m as f,q as n,t as i,E as y,T as k,G as I,C as T,D as M,p as w}from"./App-DC9NxCAl.js";import{V as U,a as D}from"./VSlider---Fmu0ez.js";import{V as G,a as g}from"./VRadioGroup-BMUEzv-F.js";const R={name:"mycoperative-loan-create",data:()=>({formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:2}),sheet:!1,text:"center",icon:"justify",toggle_none:null,toggle_one:0,toggle_exclusive:2,toggle_multiple:[0,1,2]}),methods:{fresh(){this.record={...this.record,transfermode:1,bank_type:null,bank_account_name:null,bank_account_number:null}},calculateLoanGrandTotal(u,l){l.total_principal=Math.round(l.total_principal*100)/100,l.percent_interest=l.percent_default*l.tenor,l.total_interest=Math.round(l.total_principal*(l.percent_default/100)*l.tenor*100)/100,l.monthly_interest=Math.round((l.total_principal/l.tenor+l.total_interest/l.tenor)*100)/100,l.grandtotal=Math.round(l.total_principal)+Math.round(l.admfee)+Math.round(l.total_interest)}}},P={class:"text-h5"},S={class:"text-h5"},j={class:"px-4"},F={class:"text-h6 mb-2"};function L(u,l,$,E,K,V){const B=C("form-create");return b(),_(B,{"with-helpdesk":""},{default:a(({record:e,theme:d})=>[t(p,{class:"overline py-2 relative"},{default:a(()=>[t(s,{class:"py-2 mt-5 text-end",cols:"12"},{default:a(()=>[t(N,{modelValue:e.loan_type,"onUpdate:modelValue":o=>e.loan_type=o,color:d,rounded:"1",group:""},{default:a(()=>[t(r,{value:"personal"},{default:a(()=>[t(v,null,{default:a(()=>l[3]||(l[3]=[m("person")])),_:1})]),_:1}),t(r,{value:"unit",disabled:!e.is_chief},{default:a(()=>[t(v,null,{default:a(()=>l[4]||(l[4]=[m("apartment")])),_:1})]),_:2},1032,["disabled"])]),_:2},1032,["modelValue","onUpdate:modelValue","color"])]),_:2},1024)]),_:2},1024),t(A),t(p,null,{default:a(()=>[t(f,{dense:""},{default:a(()=>[t(s,{cols:"12"},{default:a(()=>[n("div",P,i(u.formatter.format(e.total_principal)),1)]),_:2},1024),e.loan_type==="personal"?(b(),_(s,{key:0,cols:"12"},{default:a(()=>[t(U,{color:d,modelValue:e.total_principal,"onUpdate:modelValue":[o=>e.total_principal=o,o=>V.calculateLoanGrandTotal(o,e)],max:e.loan_maximal,min:e.loan_minimal,step:e.loan_step,"hide-details":""},null,8,["color","modelValue","onUpdate:modelValue","max","min","step"])]),_:2},1024)):(b(),_(s,{key:1,cols:"12"},{default:a(()=>[t(y,{label:"Nominal Pinjaman",type:"number",modelValue:e.total_principal,"onUpdate:modelValue":o=>e.total_principal=o,onKeyup:o=>V.calculateLoanGrandTotal(o,e)},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1024))]),_:2},1024)]),_:2},1024),t(k,{class:"overline"},{default:a(()=>l[5]||(l[5]=[m("Tenor")])),_:1}),t(p,{class:"pt-0"},{default:a(()=>[t(f,{dense:""},{default:a(()=>[t(s,{cols:"12"},{default:a(()=>[n("div",S,i(e.tenor)+"x",1)]),_:2},1024),t(s,{cols:"12"},{default:a(()=>[t(U,{color:d,max:e.loan_tenor_maximal,min:e.loan_tenor_minimal,step:1,modelValue:e.tenor,"onUpdate:modelValue":[o=>e.tenor=o,o=>V.calculateLoanGrandTotal(o,e)],"hide-details":""},null,8,["color","max","min","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),t(k,{class:"overline"}),t(p,{class:"pt-0"}),t(k,{class:"overline"},{default:a(()=>l[6]||(l[6]=[m("Metode pembayaran")])),_:1}),t(p,{class:"pt-0"},{default:a(()=>[t(f,{dense:""},{default:a(()=>[t(s,{cols:"12"},{default:a(()=>[t(G,{modelValue:e.transfermode,"onUpdate:modelValue":o=>e.transfermode=o,"hide-details":"",column:""},{default:a(()=>[t(g,{label:"CASH",value:1,color:d},null,8,["color"]),t(g,{label:"BANK",value:2,color:d},null,8,["color"]),t(g,{disabled:"",label:"PAYMENT-GATEWAY",value:3})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),t(f,{class:"mt-10"},{default:a(()=>[t(s,{cols:"4"},{default:a(()=>[t(I,{disabled:e.transfermode===1,items:["BRI","BCA","BNI","BTPN","MANDIRI"],label:"Bank",modelValue:e.bank_type,"onUpdate:modelValue":o=>e.bank_type=o,"hide-details":"",variant:"outlined",color:d},null,8,["disabled","modelValue","onUpdate:modelValue","color"])]),_:2},1024),t(s,{cols:"8"},{default:a(()=>[t(y,{disabled:e.transfermode===1,label:"Atas Nama",modelValue:e.bank_account_name,"onUpdate:modelValue":o=>e.bank_account_name=o,"hide-details":"",variant:"outlined",color:d},null,8,["disabled","modelValue","onUpdate:modelValue","color"])]),_:2},1024),t(s,{cols:"12"},{default:a(()=>[t(y,{disabled:e.transfermode===1,label:"Nomor Rekening",modelValue:e.bank_account_number,"onUpdate:modelValue":o=>e.bank_account_number=o,variant:"outlined",color:d},null,8,["disabled","modelValue","onUpdate:modelValue","color"])]),_:2},1024)]),_:2},1024)]),_:2},1024),t(T,{flat:"",class:"position-sticky bottom-0 w-100"},{default:a(()=>[n("div",j,[l[22]||(l[22]=n("small",null,"Cicilan per bulan",-1)),t(r,{icon:"",onClick:l[0]||(l[0]=o=>u.sheet=!u.sheet),variant:"text",size:"small"},{default:a(()=>[t(v,null,{default:a(()=>l[7]||(l[7]=[m("arrow_drop_up")])),_:1})]),_:1}),n("div",F,i(u.formatter.format(e.monthly_interest)),1),t(D,{modelValue:u.sheet,"onUpdate:modelValue":l[2]||(l[2]=o=>u.sheet=o),inset:u.$vuetify.display.width>=600},{default:a(()=>[t(T,{style:{"border-top-left-radius":"25px","border-top-right-radius":"25px"}},{default:a(()=>[t(p,null,{default:a(()=>[t(r,{variant:"text",onClick:l[1]||(l[1]=o=>u.sheet=!u.sheet),class:"text-end"},{default:a(()=>l[8]||(l[8]=[m(" close ")])),_:1}),l[20]||(l[20]=n("br",null,null,-1)),l[21]||(l[21]=n("br",null,null,-1)),t(M,null,{default:a(()=>l[9]||(l[9]=[m("Detals Pinjaman")])),_:1}),n("div",null,[t(f,{dense:""},{default:a(()=>[t(s,{cols:"12"},{default:a(()=>[t(w,null,{default:a(()=>[n("tbody",null,[n("tr",null,[l[10]||(l[10]=n("td",null," Total Pokok Pinjaman ",-1)),l[11]||(l[11]=n("td",null,":",-1)),n("td",null,i(u.formatter.format(e.total_principal)),1)]),n("tr",null,[l[12]||(l[12]=n("td",null," Total Bunga [%] ",-1)),l[13]||(l[13]=n("td",null,":",-1)),n("td",null,i(e.percent_interest)+"% ",1)]),n("tr",null,[l[14]||(l[14]=n("td",null," Total Bunga [Rp] ",-1)),l[15]||(l[15]=n("td",null,":",-1)),n("td",null,i(u.formatter.format(e.total_interest)),1)]),n("tr",null,[l[16]||(l[16]=n("td",null,"Admin Fee",-1)),l[17]||(l[17]=n("td",null,":",-1)),n("td",null,i(u.formatter.format(e.admfee)),1)]),n("tr",null,[l[18]||(l[18]=n("td",null,"Grand Total",-1)),l[19]||(l[19]=n("td",null,":",-1)),n("td",null,i(u.formatter.format(e.grandtotal)),1)])])]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","inset"])])]),_:2},1024)]),_:1})}const H=x(R,[["render",L]]);export{H as default};
