import{Z as G,ak as O,at as X,a6 as I,ab as Y,au as E,an as B,ae as R,V as z,e as d,F as D,K as k,av as F,aw as j,ax as q,ay as K,az as Z,aA as J,a3 as L,ao as Q,aB as p,a7 as ee,a8 as u,aC as ae,aD as te,aE as M,aF as le,aG as se,aH as oe,aI as ne}from"./App-CkY0k39V.js";const re=G({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...O(X({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ie=I()({name:"VTab",props:re(),setup(e,o){let{slots:c,attrs:a}=o;const{textColorClasses:b,textColorStyles:h}=Y(e,"sliderColor"),v=E(),C=E(),n=B(()=>e.direction==="horizontal"),y=B(()=>{var r,t;return((t=(r=v.value)==null?void 0:r.group)==null?void 0:t.isSelected.value)??!1});function T(r){var l,i;let{value:t}=r;if(t){const s=(i=(l=v.value)==null?void 0:l.$el.parentElement)==null?void 0:i.querySelector(".v-tab--selected .v-tab__slider"),w=C.value;if(!s||!w)return;const W=getComputedStyle(s).color,g=s.getBoundingClientRect(),f=w.getBoundingClientRect(),S=n.value?"x":"y",V=n.value?"X":"Y",P=n.value?"right":"bottom",m=n.value?"width":"height",_=g[S],A=f[S],x=_>A?g[P]-f[P]:g[S]-f[S],H=Math.sign(x)>0?n.value?"right":"bottom":Math.sign(x)<0?n.value?"left":"top":"center",U=(Math.abs(x)+(Math.sign(x)<0?g[m]:f[m]))/Math.max(g[m],f[m])||0,N=g[m]/f[m]||0,$=1.5;q(w,{backgroundColor:[W,"currentcolor"],transform:[`translate${V}(${x}px) scale${V}(${N})`,`translate${V}(${x/$}px) scale${V}(${(U-1)/$+1})`,"none"],transformOrigin:Array(3).fill(H)},{duration:225,easing:K})}}return R(()=>{const r=z.filterProps(e);return d(z,k({symbol:F,ref:v,class:["v-tab",e.class],style:e.style,tabindex:y.value?0:-1,role:"tab","aria-selected":String(y.value),active:!1},r,a,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":T}),{...c,default:()=>{var t;return d(D,null,[((t=c.default)==null?void 0:t.call(c))??e.text,!e.hideSlider&&d("div",{ref:C,class:["v-tab__slider",b.value],style:h.value},null)])}})}),j({},v)}});function de(e){return e?e.map(o=>ne(o)?o:{text:o,value:o}):[]}const ue=G({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Z({mandatory:"force",selectedClass:"v-tab-item--selected"}),...J(),...L()},"VTabs"),ve=I()({name:"VTabs",props:ue(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:c,slots:a}=o;const b=Q(e,"modelValue"),h=B(()=>de(e.items)),{densityClasses:v}=p(e),{backgroundColorClasses:C,backgroundColorStyles:n}=ee(u(e,"bgColor")),{scopeId:y}=ae();return te({VTab:{color:u(e,"color"),direction:u(e,"direction"),stacked:u(e,"stacked"),fixed:u(e,"fixedTabs"),sliderColor:u(e,"sliderColor"),hideSlider:u(e,"hideSlider")}}),R(()=>{const T=M.filterProps(e),r=!!(a.window||e.items.length>0);return d(D,null,[d(M,k(T,{modelValue:b.value,"onUpdate:modelValue":t=>b.value=t,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},v.value,C.value,e.class],style:[{"--v-tabs-height":le(e.height)},n.value,e.style],role:"tablist",symbol:F},y,c),{default:()=>{var t;return[((t=a.default)==null?void 0:t.call(a))??h.value.map(l=>{var i;return((i=a.tab)==null?void 0:i.call(a,{item:l}))??d(ie,k(l,{key:l.text,value:l.value}),{default:a[`tab.${l.value}`]?()=>{var s;return(s=a[`tab.${l.value}`])==null?void 0:s.call(a,{item:l})}:void 0})})]}}),r&&d(se,k({modelValue:b.value,"onUpdate:modelValue":t=>b.value=t,key:"tabs-window"},y),{default:()=>{var t;return[h.value.map(l=>{var i;return((i=a.item)==null?void 0:i.call(a,{item:l}))??d(oe,{value:l.value},{default:()=>{var s;return(s=a[`item.${l.value}`])==null?void 0:s.call(a,{item:l})}})}),(t=a.window)==null?void 0:t.call(a)]}})])}),{}}});export{ie as V,ve as a};
