import{A as r,D as U}from"./document-D_CT35Dt.js";import{_ as x,b as f,w as l,d as D,o,e as a,m as s,n as u,E as i,q as b,M as k,I as c,U as T,j as C,t as w,h as V,V as v,K as B,C as P,g as R,bk as j,y as N,bj as $,s as I}from"./App-DC9NxCAl.js";const S={name:"infrastructure-record-edit",components:{Asset:r,Document:U},data(){return{}},methods:{handleInitRecordDuedate:function(d,n){d.duedate=new Date(d.duedate)},changeTargetType:function(d,n,g){d.assetable_type_slug=void 0,d.unit_id=void 0,d.document_id=void 0,d.asset_id=void 0,d.is_document_with_asset=void 0},isValidTimestamp:function(d){return/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(d)}}},A={key:0};function E(d,n,g,q,F,p){const y=D("form-edit");return o(),f(y,{"with-helpdesk":""},{default:l(({combos:{units:G,documents:H,assets:K,target_types:h},record:e,store:m})=>[a(I,null,{default:l(()=>[a(s,{dense:""},{default:l(()=>[a(u,{cols:"12"},{default:l(()=>[a(i,{label:"Name",modelValue:e.name,"onUpdate:modelValue":t=>e.name=t},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),a(s,{dense:""},{default:l(()=>[a(u,{cols:"12"},{default:l(()=>[a(i,{label:"Deskripsi",modelValue:e.description,"onUpdate:modelValue":t=>e.description=t},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),a(s,{class:"mt-6",style:{display:"flex","align-items":"center","justify-content":"space-between"},dense:""},{default:l(()=>[a(u,{cols:"6"},{default:l(()=>n[0]||(n[0]=[b("div",{class:"text-overline"},"Deadline Record",-1)])),_:1}),a(k,{modelValue:e.duedate_active,"onUpdate:modelValue":t=>e.duedate_active=t,"hide-details":"","hide-label":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(c,{thickness:3,class:"mt-3 mb-6"}),a(T,null,{activator:l(({props:t})=>[a(s,{style:{display:"flex","align-items":"center",gap:"20px"},dense:""},{default:l(()=>[p.isValidTimestamp(e.duedate)?(o(),C("div",A,w(p.handleInitRecordDuedate(e,m)),1)):V("",!0),e.duedate instanceof Date?(o(),f(i,{key:1,label:"Tanggal",value:new Date(e.duedate).toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"}),readonly:!0,disabled:e.duedate_active==!1||e.duedate_active==null||e.duedate_active==null,"persistent-placeholder":""},null,8,["value","disabled"])):V("",!0),e.duedate instanceof Date?V("",!0):(o(),f(i,{key:2,label:"Tanggal",value:e.duedate,readonly:!0,disabled:e.duedate_active==!1||e.duedate_active==null||e.duedate_active==null,"persistent-placeholder":""},null,8,["value","disabled"])),a(v,B(t,{color:"surface-variant",text:"Pilih Tanggal",disabled:e.duedate_active==!1||e.duedate_active==null,variant:"flat"}),null,16,["disabled"])]),_:2},1024)]),default:l(({isActive:t})=>[a(P,null,{default:l(()=>[n[1]||(n[1]=R("r ")),a(s,{dense:""},{default:l(()=>[a(u,{cols:"12"},{default:l(()=>[a(j,{style:{width:"100%"},disabled:e.duedate_active==!1,modelValue:e.duedate,"onUpdate:modelValue":[_=>e.duedate=_,_=>{console.log(_)}]},null,8,["disabled","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),a(v,{text:"Close",color:"surface-variant",onClick:_=>t.value=!1},null,8,["onClick"])]),_:2},1024)]),_:2},1024),a(s,{dense:""},{default:l(()=>[a(u,{cols:"4"},{default:l(()=>[a(i,{modelValue:e.period_number_day,"onUpdate:modelValue":t=>e.period_number_day=t,label:"Periode Hari",type:"number",min:"0",disabled:e.duedate_active==!1||e.duedate_active==null||e.duedate_active==null,outlined:""},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024),a(u,{cols:"4"},{default:l(()=>[a(i,{modelValue:e.period_number_month,"onUpdate:modelValue":t=>e.period_number_month=t,label:"Periode Bulan",type:"number",min:"0",disabled:e.duedate_active==!1||e.duedate_active==null||e.duedate_active==null,outlined:""},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024),a(u,{cols:"4"},{default:l(()=>[a(i,{modelValue:e.period_number_year,"onUpdate:modelValue":t=>e.period_number_year=t,label:"Periode Tahun",type:"number",disabled:e.duedate_active==!1||e.duedate_active==null||e.duedate_active==null,min:"0",outlined:""},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024)]),_:2},1024),n[2]||(n[2]=b("div",{class:"text-overline mt-6"},"Tujuan Record",-1)),a(c,{thickness:3,class:"mt-3 mb-6"}),a(s,{dense:""},{default:l(()=>[a(u,{cols:"12"},{default:l(()=>[a(N,{items:h,"item-value":"slug","item-title":"name","return-object":!1,readonly:!0,label:"Record Untuk",modelValue:e.targetable_type_slug,"onUpdate:modelValue":[t=>e.targetable_type_slug=t,t=>p.changeTargetType(e,this,m)]},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),(o(),f($(e.targetable_type_slug),{combos:m.combos,store:m,record:e,data:this},null,8,["combos","store","record"]))]),_:2},1024)]),_:1})}const z=x(S,[["render",E]]);export{z as default};
