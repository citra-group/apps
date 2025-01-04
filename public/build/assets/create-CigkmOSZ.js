import{_ as R,b as j,w as t,d as _,o as x,e as a,V as C,m as T,n,E as p,y as s,G as r,M as K,s as N}from"./App-CY2XhdyM.js";import{V as A}from"./VTextarea-CMKj3AIe.js";const I={name:"human-fellow-create",methods:{getCustomerSubKind:function(d,o,i){Number.isInteger(d)&&this.$http(`human/api/customerkind/${d}/combo-customersubkind`).then(u=>{Array.isArray(u)&&u.length===0&&(o.customer_sub_kind_id=null),i.combos.customersubkinds=u})},getReferenceRegencies:function(d,o,i){Number.isInteger(d)&&(o.regency_id=null,o.district_id=null,o.village_id=null,this.$http(`human/api/ref-province/${d}/regencies`).then(u=>{i.combos.regencies=u}))},getReferenceDistricts:function(d,o,i){Number.isInteger(d)&&(o.district_id=null,o.village_id=null,this.$http(`human/api/ref-regency/${d}/districts`).then(u=>{i.combos.districts=u}))},getReferenceVillages:function(d,o,i){Number.isInteger(d)&&(o.village_id=null,this.$http(`human/api/ref-district/${d}/villages`).then(u=>{i.combos.villages=u}))}}};function S(d,o,i,u,D,V){const c=_("v-date-input"),h=_("v-currency-field"),g=_("form-create");return x(),j(g,{"with-helpdesk":"","hide-save":"",ref:"form"},{toolbar:t(({record:m})=>[a(C,{disabled:!(m.name&&m.email&&m.duedate),icon:"move_to_inbox",tooltip:"Simpan Data",onClick:o[0]||(o[0]=b=>d.$refs.form.postFormCreate())},null,8,["disabled"])]),default:t(({combos:{bornplaces:m,genders:b,provinces:U,regencies:v,districts:k,villages:y,partners:$,faiths:w},record:l,store:f})=>[a(N,null,{default:t(()=>[a(T,{dense:""},{default:t(()=>[a(n,{cols:"12"},{default:t(()=>[a(p,{label:"Nama",modelValue:l.name,"onUpdate:modelValue":e=>l.name=e,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"12"},{default:t(()=>[a(p,{label:"NIK",modelValue:l.nik,"onUpdate:modelValue":e=>l.nik=e,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"4"},{default:t(()=>[a(c,{label:"Tgl Lahir","prepend-icon":"",modelValue:l.borndate,"onUpdate:modelValue":e=>l.borndate=e,"persistent-placeholder":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"8"},{default:t(()=>[a(s,{items:m,label:"Tempat Lahir",modelValue:l.bornplace_id,"onUpdate:modelValue":e=>l.bornplace_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"4"},{default:t(()=>[a(r,{items:b,label:"Jenis Kelamin",modelValue:l.gender_id,"onUpdate:modelValue":e=>l.gender_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"8"},{default:t(()=>[a(p,{label:"Surel (Email)",modelValue:l.email,"onUpdate:modelValue":e=>l.email=e,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"12"},{default:t(()=>[a(A,{label:"Alamat",rows:"3",modelValue:l.address,"onUpdate:modelValue":e=>l.address=e,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(p,{label:"Telepon",modelValue:l.phone,"onUpdate:modelValue":e=>l.phone=e,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(r,{items:w,label:"Agama",modelValue:l.faith_id,"onUpdate:modelValue":e=>l.faith_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(s,{items:U,label:"Provinsi",modelValue:l.province_id,"onUpdate:modelValue":[e=>l.province_id=e,e=>V.getReferenceRegencies(e,l,f)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(s,{items:v,label:"Kabupaten/Kotamadya",modelValue:l.regency_id,"onUpdate:modelValue":[e=>l.regency_id=e,e=>V.getReferenceDistricts(e,l,f)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(s,{items:k,label:"Kecamatan",modelValue:l.district_id,"onUpdate:modelValue":[e=>l.district_id=e,e=>V.getReferenceVillages(e,l,f)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(s,{items:y,label:"Kelurahan/Desa","return-object":!1,modelValue:l.village_id,"onUpdate:modelValue":e=>l.village_id=e},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"12"},{default:t(()=>[a(s,{items:$,label:"Mitra",modelValue:l.partner_id,"onUpdate:modelValue":e=>l.partner_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(h,{label:"Pendapatan",modelValue:l.amount_of_salary,"onUpdate:modelValue":e=>l.amount_of_salary=e,"allow-negative":!1,class:"righted-input","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(c,{label:"Jatuh Tempo","prepend-icon":"","prepend-inner-icon":"$calendar",modelValue:l.duedate,"onUpdate:modelValue":e=>l.duedate=e,"allow-negative":!1,class:"righted-input","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(K,{color:"primary",modelValue:l.active,"onUpdate:modelValue":e=>l.active=e,label:`Status: ${l.active?"Aktif":"Tidak Aktif"}`},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1},512)}const F=R(I,[["render",S],["__scopeId","data-v-b07338d3"]]);export{F as default};
