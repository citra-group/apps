import{_ as y,b as v,w as t,d as C,o as R,e as a,m as x,n as u,E as V,y as _,G as c,M as $,s as K}from"./App-DC9NxCAl.js";import{V as N}from"./VTextarea-9rf6iBD2.js";const S={name:"human-customer-edit",methods:{getCustomerSubKind:function(n,o,d){Number.isInteger(n)&&this.$http(`human/api/customerkind/${n}/combo-customersubkind`).then(i=>{Array.isArray(i)&&i.length===0&&(o.customer_sub_kind_id=null),d.combos.customersubkinds=i})},getReferenceRegencies:function(n,o,d){Number.isInteger(n)&&(o.regency_id=null,o.district_id=null,o.village_id=null,this.$http(`human/api/ref-province/${n}/regencies`).then(i=>{d.combos.regencies=i}))},getReferenceDistricts:function(n,o,d){Number.isInteger(n)&&(o.district_id=null,o.village_id=null,this.$http(`human/api/ref-regency/${n}/districts`).then(i=>{d.combos.districts=i}))},getReferenceVillages:function(n,o,d){Number.isInteger(n)&&(o.village_id=null,this.$http(`human/api/ref-district/${n}/villages`).then(i=>{d.combos.villages=i}))}}};function j(n,o,d,i,w,m){const p=C("form-edit");return R(),v(p,{"with-helpdesk":""},{default:t(({combos:{provinces:f,regencies:b,districts:g,villages:h,customerkinds:r,customersubkinds:U,customertypes:k},record:l,store:s})=>[a(K,null,{default:t(()=>[a(x,{dense:""},{default:t(()=>[a(u,{cols:"12"},{default:t(()=>[a(V,{label:"Name",modelValue:l.name,"onUpdate:modelValue":e=>l.name=e},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(u,{cols:"12"},{default:t(()=>[a(V,{label:"Kontak",modelValue:l.contact,"onUpdate:modelValue":e=>l.contact=e},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(u,{cols:"12"},{default:t(()=>[a(V,{label:"Telp/HP",modelValue:l.phone,"onUpdate:modelValue":e=>l.phone=e},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(u,{cols:"12"},{default:t(()=>[a(V,{label:"Email",modelValue:l.email,"onUpdate:modelValue":e=>l.email=e},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(u,{cols:"12"},{default:t(()=>[a(N,{label:"Alamat",modelValue:l.address,"onUpdate:modelValue":e=>l.address=e},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(u,{cols:"12"},{default:t(()=>[a(_,{items:f,label:"Propinsi",modelValue:l.province_id,"onUpdate:modelValue":[e=>l.province_id=e,e=>m.getReferenceRegencies(e,l,s)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(u,{cols:"12"},{default:t(()=>[a(_,{items:b,label:"Kota/Kab",modelValue:l.regency_id,"onUpdate:modelValue":[e=>l.regency_id=e,e=>m.getReferenceDistricts(e,l,s)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(u,{cols:"12"},{default:t(()=>[a(_,{items:g,label:"Kecamatan",modelValue:l.district_id,"onUpdate:modelValue":[e=>l.district_id=e,e=>m.getReferenceVillages(e,l,s)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(u,{cols:"12"},{default:t(()=>[a(_,{items:h,label:"Kel/Desa","return-object":!1,modelValue:l.village_id,"onUpdate:modelValue":e=>l.village_id=e},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(u,{cols:"12"},{default:t(()=>[a(c,{items:r,"return-object":!1,label:"Category",modelValue:l.customer_kind_id,"onUpdate:modelValue":[e=>l.customer_kind_id=e,e=>m.getCustomerSubKind(e,l,s)]},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(u,{cols:"12"},{default:t(()=>[a(c,{items:U,label:"Sub Category",modelValue:l.customer_sub_kind_id,"onUpdate:modelValue":e=>l.customer_sub_kind_id=e},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(u,{cols:"12"},{default:t(()=>[a(c,{items:k,label:"Tipe Pelanggan",modelValue:l.customer_type_id,"onUpdate:modelValue":e=>l.customer_type_id=e},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(u,{cols:"12"},{default:t(()=>[a($,{modelValue:l.active,"onUpdate:modelValue":e=>l.active=e,label:"Status Aktif",inset:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const I=y(S,[["render",j]]);export{I as default};
