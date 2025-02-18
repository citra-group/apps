import{_,b as m,w as e,d as b,o as s,V as g,h as f,e as a,q as t,t as u,M as C,m as w,n as r,D as v,p as I,j as U,k as D,F as $,S as c,f as x,g as y,s as N,G as E,I as S}from"./App-DqVjiyPa.js";import{V as B}from"./VBanner-CO8ZZzcD.js";const L={name:"mycoperative-payment-show",data:()=>({formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})}),methods:{downloadReceiptOfPayment(i,l){l.$http(`mycoperative/api/receipt/${i.slug}`,{method:"GET",responseType:"blob"}).then(k=>{const V=new Blob([k],{type:"application/pdf"}),p=document.createElement("a");p.href=URL.createObjectURL(V),p.download=i.slug+".pdf",p.click(),URL.revokeObjectURL(p.href),l.loader.state=!1}).catch(()=>{})}}},O={class:"text-caption pr-1 pl-2"},F={class:"py-4",style:{"padding-left":"0 !important","padding-right":"0 !important"}};function M(i,l,k,V,p,R){const T=b("v-currency-field"),A=b("form-show");return s(),m(A,{getdata:"","with-helpdesk":"","hide-delete":"","hide-edit":"",ref:"form"},{toolbar:e(({record:n,store:d})=>[n.status==="BELUM DIBAYAR"?(s(),m(g,{key:0,color:"orange",icon:"delete",onClick:l[0]||(l[0]=o=>i.$refs.form.postFormDelete())})):f("",!0),n.status==="SUDAH LUNAS"?(s(),m(g,{key:1,icon:"print",tooltip:"Unduh Tanda Terima ",onClick:o=>R.downloadReceiptOfPayment(n,d)},null,8,["onClick"])):f("",!0)]),default:e(({record:n,theme:d})=>[a(C,{color:d,class:"position-absolute d-flex pa-1",rounded:"pill",style:{top:"8px",right:"8px"}},{default:e(()=>[l[1]||(l[1]=t("div",{class:"text-caption bg-white rounded-pill px-2"},null,-1)),t("div",O,u(n.status),1)]),_:2},1032,["color"]),a(N,null,{default:e(()=>[a(w,{dense:""},{default:e(()=>[a(r,{cols:"12"},{default:e(()=>[a(v,{color:d,label:"Name",modelValue:n.name,"onUpdate:modelValue":o=>n.name=o,variant:"plain",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),a(r,{cols:"6"},{default:e(()=>[a(v,{color:d,label:"Nomor",modelValue:n.slug,"onUpdate:modelValue":o=>n.slug=o,variant:"outlined",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),a(r,{cols:"6"},{default:e(()=>[a(T,{color:d,label:"Total",modelValue:n.total,"onUpdate:modelValue":o=>n.total=o,variant:"outlined",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),a(w,null,{default:e(()=>[a(r,{cols:"12"},{default:e(()=>[a(I,null,{default:e(()=>[t("tbody",null,[(s(!0),U($,null,D(n.details,o=>(s(),U("tr",{key:o.id},[t("td",F,[a(E,{class:S(["mx-auto pa-2",`bg-${d}-lighten-5`]),flat:"",outlined:""},{default:e(()=>[t("table",null,[t("tbody",null,[t("tr",null,[l[2]||(l[2]=t("td",{style:{width:"90px"}}," Nama ",-1)),l[3]||(l[3]=t("td",{style:{width:"10px"}}," : ",-1)),t("td",null,u(o.name),1)]),t("tr",null,[l[4]||(l[4]=t("td",null,"Tenor",-1)),l[5]||(l[5]=t("td",null,":",-1)),t("td",null,u(o.tenor)+"/"+u(o.tenor_total),1)]),t("tr",null,[l[6]||(l[6]=t("td",null,"Total",-1)),l[7]||(l[7]=t("td",null,":",-1)),t("td",null,u(i.formatter.format(o.grandtotal)),1)]),t("tr",null,[l[8]||(l[8]=t("td",null,"Jatuh Tempo",-1)),l[9]||(l[9]=t("td",null,":",-1)),t("td",null,u(o.duedate),1)])])])]),_:2},1032,["class"])])]))),128))])]),_:2},1024)]),_:2},1024),n.paymentmode_id===1?(s(),m(r,{key:0,cols:"12"},{default:e(()=>[a(B,{lines:"two"},{default:e(()=>[a(c,{color:"deep-purple accent-4",size:"40"},{default:e(()=>[a(x,{color:"white"},{default:e(()=>l[10]||(l[10]=[y("privacy_tip")])),_:1})]),_:1}),l[11]||(l[11]=y(" Untuk melakukan pembayaran silahkan datang ke kantor pusat. "))]),_:1})]),_:1})):f("",!0),n.paymentmode_id===2?(s(),m(r,{key:1,cols:"12"},{default:e(()=>[a(B,{lines:"three",stacked:!1},{default:e(()=>[a(c,{class:"mr-2",color:"deep-purple accent-4",size:"40"},{default:e(()=>[a(x,{color:"white"},{default:e(()=>l[12]||(l[12]=[y("privacy_tip")])),_:1})]),_:1}),l[13]||(l[13]=y(" Pembayaran dapat dilakukan dengan cara transfer ke KOPERASI KONSUMEN JAYA AMPERA INDONESIA Bank BRI dengan nomor rekening 0393-01-003422-56-9 "))]),_:1})]),_:1})):f("",!0),a(N,null,{default:e(()=>l[14]||(l[14]=[t("p",null,"Hubungi Kami untuk Mendapatkan Bantuan",-1),t("p",null,"Whatsapp : +6285123605969",-1)])),_:1})]),_:2},1024)]),_:2},1024)]),info:e(()=>l[15]||(l[15]=[])),_:1},512)}const z=_(L,[["render",M]]);export{z as default};
