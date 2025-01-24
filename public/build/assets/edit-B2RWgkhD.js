import{_ as C,b as V,w as a,d as D,o as u,e,m as o,n as d,E as v,y as f,q as b,I as r,j as k,h as m,V as U,g,s as $}from"./App-CdcRqZFE.js";const B={name:"infrastructure-document-edit",methods:{changeUnit:function(n,l,i){n.assetable_type_slug!=null&&this.changeAssetType(n,l,i)},changeAssetType:function(n,l,i){n.asset_id=void 0,this.$http(`infrastructure/api/ref-asset/${n.unit_id}/${n.assetable_type_slug}/asset`).then(_=>{i.combos.assets=_})},clearAssetOption:function(n,l){n.asset_id=void 0,n.assetable_type_slug=void 0},checkRoute:function(n=""){let l=this.$router.currentRoute._value.name,i=["show","delete","update","edit","create"];for(let _ of i)l=l.replaceAll("-"+_,"");return l==n}}},w={key:0},N={key:1},F={key:2};function R(n,l,i,_,O,p){const y=D("form-edit");return u(),V(y,{"with-helpdesk":""},{default:a(({combos:{units:A,asset_types:T,assets:c,types:j,statuses:x},record:t,store:h})=>[e($,null,{default:a(()=>[e(o,{dense:""},{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(v,{label:"Name",modelValue:t.name,"onUpdate:modelValue":s=>t.name=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:a(()=>[e(v,{label:"Description",modelValue:t.description,"onUpdate:modelValue":s=>t.description=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:a(()=>[e(f,{items:x,label:"Status",modelValue:t.status,"onUpdate:modelValue":s=>t.status=s,"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),l[4]||(l[4]=b("div",{class:"text-overline mt-6"},"Form Document",-1)),e(r,{thickness:3,class:"mt-3 mb-5"}),e(o,{dense:""},{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(f,{items:j,label:"Tipe Document","item-value":"slug","item-title":"name",modelValue:t.documentable_type_slug,"onUpdate:modelValue":s=>t.documentable_type_slug=s,"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),p.checkRoute("infrastructure-document")?(u(),k("div",w,[l[0]||(l[0]=b("div",{class:"text-overline mt-6"},"Form Unit Tujuan",-1)),e(r,{thickness:3,class:"mt-3 mb-5"}),e(o,{dense:""},{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(f,{"return-object":!1,items:A,"item-value":"id","item-title":"name",modelValue:t.unit_id,"onUpdate:modelValue":[s=>t.unit_id=s,s=>p.changeUnit(t,n.data,h)],label:"Untuk Document Dari Unit"},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)])):m("",!0),t.unit_id!=null?(u(),k("div",N,[l[1]||(l[1]=b("div",{class:"text-overline mt-6"},"Form Asset Tujuan (Optional)",-1)),e(r,{thickness:3,class:"mt-3 mb-5"}),e(o,{dense:""},{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(f,{"return-object":!1,items:T,"item-value":"slug","item-title":"name",modelValue:t.assetable_type_slug,"onUpdate:modelValue":[s=>t.assetable_type_slug=s,s=>p.changeAssetType(t,n.data,h)],label:"Tipe Asset"},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)])):m("",!0),t.assetable_type_slug!=null&&c!=null?(u(),k("div",F,[c.length>0?(u(),V(o,{key:0,dense:""},{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(f,{"return-object":!1,items:c,"item-value":"id","item-title":"name",modelValue:t.asset_id,"onUpdate:modelValue":s=>t.asset_id=s,label:"Pilih Asset"},null,8,["items","modelValue","onUpdate:modelValue"]),t.asset_id!=null?(u(),V(U,{key:0,class:"mt-2",color:"teal-darken-4",block:"",variant:"flat",onClick:s=>p.clearAssetOption(t,this)},{default:a(()=>l[2]||(l[2]=[g("Bersihkan Pilihan Asset")])),_:2},1032,["color","onClick"])):m("",!0)]),_:2},1024)]),_:2},1024)):m("",!0),c.length==0?(u(),V(o,{key:1,dense:""},{default:a(()=>[e(U,{class:"mt-2",color:"teal-darken-4",block:"",variant:"flat",disabled:n.disabled},{default:a(()=>l[3]||(l[3]=[g("Tidak Ditemukan Asset Manapun")])),_:1},8,["color","disabled"])]),_:1})):m("",!0)])):m("",!0)]),_:2},1024)]),_:1})}const P=C(B,[["render",R]]);export{P as default};
