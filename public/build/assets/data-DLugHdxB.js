import{_ as k,b as x,w as a,d as r,o as h,e as c,q as n,t as i,x as $,g as v}from"./App-0_bTGyRF.js";const y={name:"mycoperative-payment-data",methods:{getChipColor(l){switch(l){case"SUDAH LUNAS":return"green";case"BELUM DIBAYAR":return"primary";case"DITOLAK":return"red";default:return"grey"}}}},A=["onClick"],B=["onClick"],w=["onClick"],D=["onClick"];function N(l,e,V,g,L,_){const p=r("item-data"),m=r("form-data");return h(),x(m,null,{desktopRow:a(({headers:C,index:u,internalItem:o,isSelected:f,record:t,toggleSelect:s})=>[c(p,{headers:C,item:t,index:u,internalItem:o,isSelected:f,toggleSelect:s},{default:a(()=>[n("td",{onClick:d=>s(o)},i(t.name),9,A),n("td",{onClick:d=>s(o)},i(t.slug),9,B),n("td",{onClick:d=>s(o)},i(t.paymentmode),9,w),n("td",null,[c($,{onClick:d=>s(o),color:_.getChipColor(t.status),size:"x-small",label:""},{default:a(()=>[v(i(t.status),1)]),_:2},1032,["onClick","color"])]),n("td",{class:"text-right",onClick:d=>s(o)},i(t.grandtotal),9,D)]),_:2},1032,["headers","item","index","internalItem","isSelected","toggleSelect"])]),feed:a(()=>e[0]||(e[0]=[])),info:a(()=>e[1]||(e[1]=[])),filter:a(()=>e[2]||(e[2]=[])),_:1})}const b=k(y,[["render",N]]);export{b as default};
