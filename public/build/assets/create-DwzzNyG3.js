import{_ as A,b as p,w as u,d as F,o as d,e as s,m as c,n as m,E as V,y as _,q as k,I as y,bj as N,j as b,h as f,t as j,V as h,g as v,s as B}from"./App-CY2XhdyM.js";const D={name:"infrastructure-document-create-land-certificate",props:["record"]};function P(o,e,n,r,t,i){return null}const w=A(D,[["render",P]]),L={name:"infrastructure-document-create",components:{LandCertificate:w},data(){return{currentFormType:"",formType:["LandCertificate"],unit:{},asset:{},assets:void 0,assets_slugs:void 0,assets_slugs_combos:void 0,assets_types:void 0}},methods:{initUnitAsset:function(o,e,n,r){let t=e[this.$router.currentRoute._value.params.unit];r.unit=t,o.unit=t,this.getAssetType(o,n,r)},clearAssetOption:function(o,e){e.asset={},o.asset={}},checkRoute:function(o=""){let e=this.$router.currentRoute._value.name,n=["show","delete","update","edit","create"];for(let r of n)e=e.replaceAll("-"+r,"");return e==o},getAssetType:function(o,e,n){if(n.unit=e[n.unit.slug],o.unit=e[n.unit.slug],o.asset={},n.assets_types)return n.getAssetList(o,n);n.asset_list=void 0,n.assets_slugs=void 0,n.assets_slugs_combos=void 0,this.$http("infrastructure/api/ref-asset/type").then(r=>{n.assets_types=r})},getAssetList:function(o,e){o.asset={},e.assets=void 0,e.assets_slugs=void 0,e.assets_slugs_combos=void 0,!(e.unit.id==null||e.asset.asset_type_key==null)&&this.$http(`infrastructure/api/ref-asset/${e.unit.id}/${e.asset.asset_type_key}/asset`).then(n=>{e.assets_slugs_combos=n.assets_slugs_combos,e.assets_slugs=n.assets_slugs,e.assets=n.assets})},getAsset:function(o,e){e.asset={...e.asset,...e.assets_slugs[e.asset.slug]},o.asset=e.asset},selectType:function(o,e){e.currentFormType=o.documentable_type_key}}},O={key:0},S={key:1},E={key:2},q={key:3};function I(o,e,n,r,t,i){const T=F("form-create");return d(),p(T,{"with-helpdesk":""},{default:u(({combos:{type_key:x,units:g,units_slug:U,units_ids:C,type_status_map:z,status:R},record:a})=>[s(B,null,{default:u(()=>[s(c,{dense:""},{default:u(()=>[s(m,{cols:"12"},{default:u(()=>[s(V,{label:"Name",modelValue:a.name,"onUpdate:modelValue":l=>a.name=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),s(m,{cols:"12"},{default:u(()=>[s(V,{label:"Description",modelValue:a.description,"onUpdate:modelValue":l=>a.description=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),s(m,{cols:"12"},{default:u(()=>[s(_,{items:R,label:"Status",modelValue:a.status,"onUpdate:modelValue":l=>a.status=l,"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e[13]||(e[13]=k("div",{class:"text-overline mt-6"},"Form Document",-1)),s(y,{thickness:3,class:"mt-3 mb-10"}),s(c,{dense:""},{default:u(()=>[s(m,{cols:"12"},{default:u(()=>[s(_,{items:x,label:"Tipe Document",modelValue:a.documentable_type_key,"onUpdate:modelValue":[l=>a.documentable_type_key=l,l=>i.selectType(a,this)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),(d(),p(N(t.currentFormType),{record:a},null,8,["record"])),!i.checkRoute("infrastructure-unit-asset-document")&&!i.checkRoute("infrastructure-asset-document")&&!i.checkRoute("infrastructure-unit-document")?(d(),b("div",O,[e[7]||(e[7]=k("div",{class:"text-overline mt-6"},"Form Unit Tujuan",-1)),s(y,{thickness:3,class:"mt-3 mb-5"}),s(c,{dense:""},{default:u(()=>[s(m,{cols:"6"},{default:u(()=>[s(V,{label:"Nama Unit",modelValue:t.unit.name,"onUpdate:modelValue":e[0]||(e[0]=l=>t.unit.name=l),readonly:!0},null,8,["modelValue"])]),_:1}),s(m,{cols:"6"},{default:u(()=>[s(_,{items:U,label:"Pilih Unit",modelValue:t.unit.slug,"onUpdate:modelValue":[e[1]||(e[1]=l=>t.unit.slug=l),l=>i.getAssetType(a,g,this)]},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)])):f("",!0),i.checkRoute("infrastructure-unit-document")&&t.unit.id==null?(d(),b("div",S,j(i.initUnitAsset(a,C,g,this)),1)):f("",!0),i.checkRoute("infrastructure-unit-document")?(d(),b("div",E,[e[8]||(e[8]=k("div",{class:"text-overline mt-6"},"Form Unit Tujuan",-1)),s(y,{thickness:3,class:"mt-3 mb-5"}),s(c,{dense:""},{default:u(()=>[s(m,{cols:"6"},{default:u(()=>[s(V,{label:"Nama Unit",modelValue:t.unit.name,"onUpdate:modelValue":e[2]||(e[2]=l=>t.unit.name=l),readonly:!0,disabled:!0},null,8,["modelValue"])]),_:1}),s(m,{cols:"6"},{default:u(()=>[s(_,{items:U,label:"Pilih Unit",modelValue:t.unit.slug,"onUpdate:modelValue":[e[3]||(e[3]=l=>t.unit.slug=l),l=>i.getAssetType(a,g,this)],disabled:!0},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)])):f("",!0),!i.checkRoute("infrastructure-unit-asset-document")&&!i.checkRoute("infrastructure-asset-document")&&t.unit.slug!=null||i.checkRoute("infrastructure-unit-document")?(d(),b("div",q,[e[12]||(e[12]=k("div",{class:"text-overline mt-6"},"Form Asset Tujuan (optional)",-1)),s(y,{thickness:3,class:"mt-3 mb-5"}),t.unit.slug!=null||i.checkRoute("infrastructure-unit-document")?(d(),p(c,{key:0,dense:""},{default:u(()=>[s(m,{cols:"12"},{default:u(()=>[s(_,{items:t.assets_types,label:"Pilih Tipe Asset",modelValue:t.asset.asset_type_key,"onUpdate:modelValue":[e[4]||(e[4]=l=>t.asset.asset_type_key=l),l=>i.getAssetList(a,this)]},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):f("",!0),t.asset.asset_type_key!=null&&t.assets_slugs_combos!=null&&t.assets_slugs_combos.length>0?(d(),p(c,{key:1,dense:""},{default:u(()=>[s(m,{cols:"6"},{default:u(()=>[s(V,{label:"Nama Asset",modelValue:t.asset.name,"onUpdate:modelValue":e[5]||(e[5]=l=>t.asset.name=l),readonly:!0},null,8,["modelValue"])]),_:1}),s(m,{cols:"6"},{default:u(()=>[s(_,{items:t.assets_slugs_combos,label:"Pilih Asset Slug",modelValue:t.asset.slug,"onUpdate:modelValue":[e[6]||(e[6]=l=>t.asset.slug=l),l=>i.getAsset(a,this)]},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),s(h,{class:"mt-2",color:"teal-darken-4",block:"",variant:"flat",onClick:l=>i.clearAssetOption(a,this)},{default:u(()=>e[9]||(e[9]=[v("Bersihkan Pilihan Asset")])),_:2},1032,["color","onClick"])]),_:2},1024)):f("",!0),t.asset.asset_type_key!=null&&t.assets_slugs_combos!=null&&t.assets_slugs_combos.length<=0?(d(),p(c,{key:2,dense:""},{default:u(()=>[s(h,{class:"mt-2",color:"teal-darken-4",block:"",variant:"flat",disabled:!0},{default:u(()=>e[10]||(e[10]=[v("Tidak Ditemukan")])),_:1}),s(h,{class:"mt-2",color:"teal-darken-4",block:"",variant:"flat",onClick:l=>i.clearAssetOption(a,this)},{default:u(()=>e[11]||(e[11]=[v("Bersihkan Pilihan Asset")])),_:2},1032,["color","onClick"])]),_:2},1024)):f("",!0)])):f("",!0)]),_:2},1024)]),_:1})}const H=A(L,[["render",I]]);export{H as default};
