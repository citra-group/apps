import{_ as K,b as x,w as t,d as _,o as C,e as a,V as T,m as w,n as i,E as V,y as m,G as b,M as h,s as I}from"./App-CY2XhdyM.js";import{V as N}from"./VTextarea-CMKj3AIe.js";const A={name:"human-employee-create",methods:{getCustomerSubKind:function(n,o,s){Number.isInteger(n)&&this.$http(`human/api/customerkind/${n}/combo-customersubkind`).then(u=>{Array.isArray(u)&&u.length===0&&(o.customer_sub_kind_id=null),s.combos.customersubkinds=u})},getReferenceRegencies:function(n,o,s){Number.isInteger(n)&&(o.regency_id=null,o.district_id=null,o.village_id=null,this.$http(`human/api/ref-province/${n}/regencies`).then(u=>{s.combos.regencies=u}))},getReferenceDistricts:function(n,o,s){Number.isInteger(n)&&(o.district_id=null,o.village_id=null,this.$http(`human/api/ref-regency/${n}/districts`).then(u=>{s.combos.districts=u}))},getReferenceVillages:function(n,o,s){Number.isInteger(n)&&(o.village_id=null,this.$http(`human/api/ref-district/${n}/villages`).then(u=>{s.combos.villages=u}))},fetchInfoTransactions(n,o){o.slug=n.slug}}};function S(n,o,s,u,B,f){const g=_("v-date-input"),U=_("v-currency-field"),r=_("form-create");return C(),x(r,{"with-helpdesk":"","hide-save":"",ref:"form"},{toolbar:t(({record:d})=>[a(T,{disabled:!(d.name&&d.gender_id&&d.email&&d.faith_id&&d.province_id&&d.regency_id&&d.unit_id),icon:"move_to_inbox",tooltip:"Simpan Data",onClick:o[0]||(o[0]=c=>n.$refs.form.postFormCreate())},null,8,["disabled"])]),default:t(({combos:{bornplaces:d,genders:c,provinces:v,regencies:k,districts:y,villages:$,units:R,faiths:j},record:e,store:p})=>[a(I,null,{default:t(()=>[a(w,{dense:""},{default:t(()=>[a(i,{cols:"12"},{default:t(()=>[a(V,{label:"Nama",modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"12"},{default:t(()=>[a(V,{label:"NIK",modelValue:e.nik,"onUpdate:modelValue":l=>e.nik=l,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"4"},{default:t(()=>[a(g,{label:"Tgl Lahir","prepend-icon":"",modelValue:e.borndate,"onUpdate:modelValue":l=>e.borndate=l,"persistent-placeholder":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"8"},{default:t(()=>[a(m,{items:d,label:"Tempat Lahir",modelValue:e.bornplace_id,"onUpdate:modelValue":l=>e.bornplace_id=l,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"4"},{default:t(()=>[a(b,{items:c,label:"Jenis Kelamin",modelValue:e.gender_id,"onUpdate:modelValue":l=>e.gender_id=l,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"8"},{default:t(()=>[a(V,{label:"Surel (Email)",modelValue:e.email,"onUpdate:modelValue":l=>e.email=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"12"},{default:t(()=>[a(N,{label:"Alamat",rows:"3",modelValue:e.address,"onUpdate:modelValue":l=>e.address=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(V,{label:"Telepon",modelValue:e.phone,"onUpdate:modelValue":l=>e.phone=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(b,{items:j,label:"Agama",modelValue:e.faith_id,"onUpdate:modelValue":l=>e.faith_id=l,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(m,{items:v,label:"Provinsi",modelValue:e.province_id,"onUpdate:modelValue":[l=>e.province_id=l,l=>f.getReferenceRegencies(l,e,p)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(m,{items:k,label:"Kabupaten/Kotamadya",modelValue:e.regency_id,"onUpdate:modelValue":[l=>e.regency_id=l,l=>f.getReferenceDistricts(l,e,p)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(m,{items:y,label:"Kecamatan",modelValue:e.district_id,"onUpdate:modelValue":[l=>e.district_id=l,l=>f.getReferenceVillages(l,e,p)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(m,{items:$,label:"Kelurahan/Desa","return-object":!1,modelValue:e.village_id,"onUpdate:modelValue":l=>e.village_id=l},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"12"},{default:t(()=>[a(m,{items:R,label:"Unit",modelValue:e.unit_id,"onUpdate:modelValue":l=>e.unit_id=l,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"4"},{default:t(()=>[a(U,{label:"Gaji Pokok (Rp)",modelValue:e.amount_of_salary,"onUpdate:modelValue":l=>e.amount_of_salary=l,"allow-negative":!1,class:"righted-input","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"8"},{default:t(()=>[a(V,{label:"Kode Referensi",modelValue:e.reff,"onUpdate:modelValue":l=>e.reff=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(h,{color:"primary",modelValue:e.is_chief,"onUpdate:modelValue":l=>e.is_chief=l,label:`Kepala Unit: ${e.is_chief?"Ya":"Bukan"}`},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(h,{size:"small",color:"primary",modelValue:e.active,"onUpdate:modelValue":l=>e.active=l,label:`Status: ${e.active?"Aktif":"Tidak Aktif"}`},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1},512)}const F=K(A,[["render",S],["__scopeId","data-v-1d927e02"]]);export{F as default};
