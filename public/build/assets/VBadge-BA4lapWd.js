import{Y as S,Z as V,$ as h,a0 as N,a1 as P,a2 as x,a3 as T,a4 as R,a5 as _,a6 as w,a7 as d,a8 as L,a9 as Y,aa as $,ab as A,ac as I,ad as X,ae as D,e as t,af as F,B as J,C as M,J as u,f as W}from"./App-DqVjiyPa.js";const Z=S({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:V,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...h(),...N({location:"top end"}),...P(),...x(),...T(),...R({transition:"scale-rotate-transition"})},"VBadge"),q=_()({name:"VBadge",inheritAttrs:!1,props:Z(),setup(e,o){const{backgroundColorClasses:c,backgroundColorStyles:g}=w(d(e,"color")),{roundedClasses:b}=L(e),{t:m}=Y(),{textColorClasses:f,textColorStyles:v}=$(d(e,"textColor")),{themeClasses:C}=A(),{locationStyles:k}=I(e,!0,a=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(a)?+(e.offsetY??0):["left","right"].includes(a)?+(e.offsetX??0):0));return X(()=>{const a=Number(e.content),n=!e.max||isNaN(a)?e.content:a<=+e.max?a:`${e.max}+`,[y,B]=D(o.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,u({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},B,{style:e.style}),{default:()=>{var s,l;return[t("div",{class:"v-badge__wrapper"},[(l=(s=o.slots).default)==null?void 0:l.call(s),t(F,{transition:e.transition},{default:()=>{var i,r;return[J(t("span",u({class:["v-badge__badge",C.value,c.value,b.value,f.value],style:[g.value,v.value,e.inline?{}:k.value],"aria-atomic":"true","aria-label":m(e.label,a),"aria-live":"polite",role:"status"},y),[e.dot?void 0:o.slots.badge?(r=(i=o.slots).badge)==null?void 0:r.call(i):e.icon?t(W,{icon:e.icon},null):n]),[[M,e.modelValue]])]}})])]}})}),{}}});export{q as V};
