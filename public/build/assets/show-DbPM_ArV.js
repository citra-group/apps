import{_ as v,b as u,w as l,d as f,o as s,V as _,g as m,h as V,e as a,q as i,t as k,N as c,m as g,n,E as p,G as y,T as A,f as U,U as b,s as x}from"./App-D3npthgT.js";import{V as I}from"./VBanner-DUnc0bUr.js";const N={name:"coperative-deposit-show",data:()=>({paydateMenu:!1,duedateMenu:!1}),methods:{approveInvoiceTransfer(r,o){o.$http(`coperative/api/invoice/${r.id}/approve`,{method:"PUT",params:r}).then(()=>{this.$router.push({name:"coperative-invoice"})})}}},B={class:"text-caption pr-1 pl-2"};function T(r,o,D,w,C,R){const Z=f("v-currency-field"),X=f("form-show");return s(),u(X,{"with-helpdesk":"","hide-edit":"","hide-delete":""},{toolbar:l(({record:e})=>[e.type==="TABUNGAN"&&e.paid===!1?(s(),u(_,{key:0,color:"red",onClick:d=>r.forceDelete(e.store)},{default:l(()=>o[0]||(o[0]=[m("Hapus")])),_:2},1032,["onClick"])):V("",!0)]),default:l(({record:e,theme:d})=>[a(c,{color:d,class:"position-absolute d-flex pa-1",rounded:"pill",style:{top:"8px",right:"8px"}},{default:l(()=>[o[1]||(o[1]=i("div",{class:"text-caption bg-white rounded-pill px-2"}," STS ",-1)),i("div",B,k(e.paid?"PAID":"UNPAID"),1)]),_:2},1032,["color"]),a(x,null,{default:l(()=>[a(g,{dense:""},{default:l(()=>[a(n,{cols:"12"},{default:l(()=>[a(p,{label:"Kode",modelValue:e.slug,"onUpdate:modelValue":t=>e.slug=t,variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),a(n,{cols:"12"},{default:l(()=>[a(p,{label:"Keterangan",modelValue:e.name,"onUpdate:modelValue":t=>e.name=t,variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),a(n,{cols:"12"},{default:l(()=>[a(p,{label:"Nama Anggota",modelValue:e.member_name,"onUpdate:modelValue":t=>e.member_name=t,variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),a(n,{cols:"12"},{default:l(()=>[a(Z,{label:"Total Tagihan",prefix:"Rp",modelValue:e.grandtotal,"onUpdate:modelValue":t=>e.grandtotal=t,variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),a(n,{cols:"6"},{default:l(()=>[a(p,{modelValue:e.duedate,"onUpdate:modelValue":t=>e.duedate=t,label:"Jatuh Tempo",variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),a(n,{cols:"6"},{default:l(()=>[a(p,{modelValue:e.paydate,"onUpdate:modelValue":t=>e.paydate=t,label:"Tanggal Bayar",variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),e.status==="SUDAH DITRANSFER"?(s(),u(n,{key:0,cols:"12"},{default:l(()=>[a(y,{items:[{text:"BCA-XXXXXXXX",value:"BCA-XXXXXXXX"},{text:"BCA-ZZZZZZZZZ",value:"BCA-ZZZZZZZZZ"},{text:"MANDIRI-XXXXXXXX",value:"MANDIRI-XXXXXXXX"},{text:"MANDIRI-ZZZZZZZZ",value:"MANDIRI-ZZZZZZZZ"}],label:"Bank",modelValue:e.bank,"onUpdate:modelValue":t=>e.bank=t},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):V("",!0),e.status==="SUDAH DITRANSFER"?(s(),u(n,{key:1,cols:"12"},{default:l(()=>[a(I,{"two-line":""},{default:l(()=>[a(A,{color:"deep-purple accent-4",size:"40"},{default:l(()=>[a(U,{color:"white"},{default:l(()=>o[2]||(o[2]=[m("privacy_tip")])),_:1})]),_:1}),o[3]||(o[3]=m(" Pembayaran dapat dilakukan dengan cara transfer ke ")),o[4]||(o[4]=i("ul",null,[i("li",null," Bank BCA dengan nomor rekening XXXXXXXX "),i("li",null," Bank Mandiri dengan nomor rekening ZZZZZZZ ")],-1)),o[5]||(o[5]=m(" Setelah transfer dilakukan, silahkan unggah bukti bayar dibawah ini. "))]),_:1})]),_:1})):V("",!0),e.status==="SUDAH DITRANSFER"&&e.transfer_path?(s(),u(n,{key:2,cols:"12"},{default:l(()=>[a(b,{src:e.transfer_path},null,8,["src"])]),_:2},1024)):V("",!0)]),_:2},1024)]),_:2},1024)]),info:l(()=>o[6]||(o[6]=[])),_:1})}const $=v(N,[["render",T]]);export{$ as default};
