import{Z as S,$ as V,a0 as h,a1 as N,a2 as P,a3 as x,a4 as T,a5 as R,a6 as _,a7 as w,a8 as d,a9 as L,aa as $,ab as A,ac as I,ad as X,ae as Y,af as z,e as t,ag as D,z as F,B as K,K as u,f as M}from"./App-B-xsBJjS.js";const W=S({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:V,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...h(),...N({location:"top end"}),...P(),...x(),...T(),...R({transition:"scale-rotate-transition"})},"VBadge"),j=_()({name:"VBadge",inheritAttrs:!1,props:W(),setup(e,o){const{backgroundColorClasses:c,backgroundColorStyles:g}=w(d(e,"color")),{roundedClasses:b}=L(e),{t:m}=$(),{textColorClasses:f,textColorStyles:v}=A(d(e,"textColor")),{themeClasses:C}=I(),{locationStyles:k}=X(e,!0,a=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(a)?+(e.offsetY??0):["left","right"].includes(a)?+(e.offsetX??0):0));return Y(()=>{const a=Number(e.content),n=!e.max||isNaN(a)?e.content:a<=+e.max?a:`${e.max}+`,[y,B]=z(o.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,u({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},B,{style:e.style}),{default:()=>{var s,l;return[t("div",{class:"v-badge__wrapper"},[(l=(s=o.slots).default)==null?void 0:l.call(s),t(D,{transition:e.transition},{default:()=>{var i,r;return[F(t("span",u({class:["v-badge__badge",C.value,c.value,b.value,f.value],style:[g.value,v.value,e.inline?{}:k.value],"aria-atomic":"true","aria-label":m(e.label,a),"aria-live":"polite",role:"status"},y),[e.dot?void 0:o.slots.badge?(r=(i=o.slots).badge)==null?void 0:r.call(i):e.icon?t(M,{icon:e.icon},null):n]),[[K,e.modelValue]])]}})])]}})}),{}}});export{j as V};
