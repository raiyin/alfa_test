import{g as F,a as P,s as C,c as k,m as D,b as Z,r as d,u as z,j as r,d as w,i as fe,e as B,P as he,B as ge,f as K,h as le,k as q,l as ce,n as Ce,o as W,p as ve,q as Y,t as be,v as ye,w as A,x as xe,N as de,F as Re,y as we,I as ee}from"./index-BoooW98P.js";function Se(e){return F("MuiTypography",e)}P("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const je={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},Me=fe(),ke=e=>{const{align:o,gutterBottom:t,noWrap:s,paragraph:a,variant:i,classes:l}=e,n={root:["root",i,e.align!=="inherit"&&`align${k(o)}`,t&&"gutterBottom",s&&"noWrap",a&&"paragraph"]};return B(n,Se,l)},Fe=C("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.variant&&o[t.variant],t.align!=="inherit"&&o[`align${k(t.align)}`],t.noWrap&&o.noWrap,t.gutterBottom&&o.gutterBottom,t.paragraph&&o.paragraph]}})(D(({theme:e})=>{var o;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter(([t,s])=>t!=="inherit"&&s&&typeof s=="object").map(([t,s])=>({props:{variant:t},style:s})),...Object.entries(e.palette).filter(Z()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),...Object.entries(((o=e.palette)==null?void 0:o.text)||{}).filter(([,t])=>typeof t=="string").map(([t])=>({props:{color:`text${k(t)}`},style:{color:(e.vars||e).palette.text[t]}})),{props:({ownerState:t})=>t.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:t})=>t.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:t})=>t.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:t})=>t.paragraph,style:{marginBottom:16}}]}})),oe={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},E=d.forwardRef(function(o,t){const{color:s,...a}=z({props:o,name:"MuiTypography"}),i=!je[s],l=Me({...a,...i&&{color:s}}),{align:n="inherit",className:c,component:p,gutterBottom:h=!1,noWrap:m=!1,paragraph:v=!1,variant:g="body1",variantMapping:b=oe,...x}=l,f={...l,align:n,color:s,className:c,component:p,gutterBottom:h,noWrap:m,paragraph:v,variant:g,variantMapping:b},R=p||(v?"p":b[g]||oe[g])||"span",u=ke(f);return r.jsx(Fe,{as:R,ref:t,className:w(u.root,c),...x,ownerState:f,style:{...n!=="inherit"&&{"--Typography-textAlign":n},...x.style}})});function Pe(e){return F("MuiCard",e)}P("MuiCard",["root"]);const Be=e=>{const{classes:o}=e;return B({root:["root"]},Pe,o)},Ne=C(he,{name:"MuiCard",slot:"Root",overridesResolver:(e,o)=>o.root})({overflow:"hidden"}),Ie=d.forwardRef(function(o,t){const s=z({props:o,name:"MuiCard"}),{className:a,raised:i=!1,...l}=s,n={...s,raised:i},c=Be(n);return r.jsx(Ne,{className:w(c.root,a),elevation:i?8:void 0,ref:t,ownerState:n,...l})});function $e(e){return F("MuiCardActions",e)}P("MuiCardActions",["root","spacing"]);const ze=e=>{const{classes:o,disableSpacing:t}=e;return B({root:["root",!t&&"spacing"]},$e,o)},Ue=C("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,!t.disableSpacing&&o.spacing]}})({display:"flex",alignItems:"center",padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),_e=d.forwardRef(function(o,t){const s=z({props:o,name:"MuiCardActions"}),{disableSpacing:a=!1,className:i,...l}=s,n={...s,disableSpacing:a},c=ze(n);return r.jsx(Ue,{className:w(c.root,i),ownerState:n,ref:t,...l})});function Ge(e){return F("MuiCardContent",e)}P("MuiCardContent",["root"]);const Le=e=>{const{classes:o}=e;return B({root:["root"]},Ge,o)},Oe=C("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,o)=>o.root})({padding:16,"&:last-child":{paddingBottom:24}}),Te=d.forwardRef(function(o,t){const s=z({props:o,name:"MuiCardContent"}),{className:a,component:i="div",...l}=s,n={...s,component:i},c=Le(n);return r.jsx(Oe,{as:i,className:w(c.root,a),ownerState:n,ref:t,...l})});function Ae(e){return F("MuiCardMedia",e)}P("MuiCardMedia",["root","media","img"]);const De=e=>{const{classes:o,isMediaComponent:t,isImageComponent:s}=e;return B({root:["root",t&&"media",s&&"img"]},Ae,o)},Ee=C("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e,{isMediaComponent:s,isImageComponent:a}=t;return[o.root,s&&o.media,a&&o.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),qe=["video","audio","picture","iframe","img"],We=["picture","img"],Ve=d.forwardRef(function(o,t){const s=z({props:o,name:"MuiCardMedia"}),{children:a,className:i,component:l="div",image:n,src:c,style:p,...h}=s,m=qe.includes(l),v=!m&&n?{backgroundImage:`url("${n}")`,...p}:p,g={...s,component:l,isMediaComponent:m,isImageComponent:We.includes(l)},b=De(g);return r.jsx(Ee,{className:w(b.root,i),as:l,role:!m&&n?"img":void 0,ref:t,style:v,ownerState:g,src:m?n||c:void 0,...h,children:a})});function He(e){return F("PrivateSwitchBase",e)}P("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Je=e=>{const{classes:o,checked:t,disabled:s,edge:a}=e,i={root:["root",t&&"checked",s&&"disabled",a&&`edge${k(a)}`],input:["input"]};return B(i,He,o)},Ze=C(ge)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:e,ownerState:o})=>e==="start"&&o.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:e,ownerState:o})=>e==="end"&&o.size!=="small",style:{marginRight:-12}}]}),Ke=C("input",{shouldForwardProp:K})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Qe=d.forwardRef(function(o,t){const{autoFocus:s,checked:a,checkedIcon:i,className:l,defaultChecked:n,disabled:c,disableFocusRipple:p=!1,edge:h=!1,icon:m,id:v,inputProps:g,inputRef:b,name:x,onBlur:f,onChange:R,onFocus:u,readOnly:N,required:S=!1,tabIndex:_,type:y,value:L,...V}=o,[U,O]=le({controlled:a,default:!!n,name:"SwitchBase",state:"checked"}),j=q(),H=I=>{u&&u(I),j&&j.onFocus&&j.onFocus(I)},G=I=>{f&&f(I),j&&j.onBlur&&j.onBlur(I)},$=I=>{if(I.nativeEvent.defaultPrevented)return;const X=I.target.checked;O(X),R&&R(I,X)};let M=c;j&&typeof M>"u"&&(M=j.disabled);const me=y==="checkbox"||y==="radio",J={...o,checked:U,disabled:M,disableFocusRipple:p,edge:h},Q=Je(J);return r.jsxs(Ze,{component:"span",className:w(Q.root,l),centerRipple:!0,focusRipple:!p,disabled:M,tabIndex:null,role:void 0,onFocus:H,onBlur:G,ownerState:J,ref:t,...V,children:[r.jsx(Ke,{autoFocus:s,checked:a,defaultChecked:n,className:Q.input,disabled:M,id:me?v:void 0,name:x,onChange:$,readOnly:N,ref:b,required:S,ownerState:J,tabIndex:_,type:y,...y==="checkbox"&&L===void 0?{}:{value:L},...g}),U?i:m]})});function Xe(e){return F("MuiFormControlLabel",e)}const T=P("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Ye=e=>{const{classes:o,disabled:t,labelPlacement:s,error:a,required:i}=e,l={root:["root",t&&"disabled",`labelPlacement${k(s)}`,a&&"error",i&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",a&&"error"]};return B(l,Xe,o)},eo=C("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${T.label}`]:o.label},o.root,o[`labelPlacement${k(t.labelPlacement)}`]]}})(D(({theme:e})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${T.disabled}`]:{cursor:"default"},[`& .${T.label}`]:{[`&.${T.disabled}`]:{color:(e.vars||e).palette.text.disabled}},variants:[{props:{labelPlacement:"start"},style:{flexDirection:"row-reverse",marginRight:-11}},{props:{labelPlacement:"top"},style:{flexDirection:"column-reverse"}},{props:{labelPlacement:"bottom"},style:{flexDirection:"column"}},{props:({labelPlacement:o})=>o==="start"||o==="top"||o==="bottom",style:{marginLeft:16}}]}))),oo=C("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(D(({theme:e})=>({[`&.${T.error}`]:{color:(e.vars||e).palette.error.main}}))),te=d.forwardRef(function(o,t){const s=z({props:o,name:"MuiFormControlLabel"}),{checked:a,className:i,componentsProps:l={},control:n,disabled:c,disableTypography:p,inputRef:h,label:m,labelPlacement:v="end",name:g,onChange:b,required:x,slots:f={},slotProps:R={},value:u,...N}=s,S=q(),_=c??n.props.disabled??(S==null?void 0:S.disabled),y=x??n.props.required,L={disabled:_,required:y};["checked","name","onChange","value","inputRef"].forEach(M=>{typeof n.props[M]>"u"&&typeof s[M]<"u"&&(L[M]=s[M])});const V=ce({props:s,muiFormControl:S,states:["error"]}),U={...s,disabled:_,labelPlacement:v,required:y,error:V.error},O=Ye(U),j={slots:f,slotProps:{...l,...R}},[H,G]=Ce("typography",{elementType:E,externalForwardedProps:j,ownerState:U});let $=m;return $!=null&&$.type!==E&&!p&&($=r.jsx(H,{component:"span",...G,className:w(O.label,G==null?void 0:G.className),children:$})),r.jsxs(eo,{className:w(O.root,i),ownerState:U,ref:t,...N,children:[d.cloneElement(n,L),y?r.jsxs("div",{children:[$,r.jsxs(oo,{ownerState:U,"aria-hidden":!0,className:O.asterisk,children:[" ","*"]})]}):$]})});function to(e){return F("MuiFormGroup",e)}P("MuiFormGroup",["root","row","error"]);const so=e=>{const{classes:o,row:t,error:s}=e;return B({root:["root",t&&"row",s&&"error"]},to,o)},ro=C("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.row&&o.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),ao=d.forwardRef(function(o,t){const s=z({props:o,name:"MuiFormGroup"}),{className:a,row:i=!1,...l}=s,n=q(),c=ce({props:s,muiFormControl:n,states:["error"]}),p={...s,row:i,error:c.error},h=so(p);return r.jsx(ro,{className:w(h.root,a),ownerState:p,ref:t,...l})}),no=W(r.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),io=W(r.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),lo=C("span",{shouldForwardProp:K})({position:"relative",display:"flex"}),co=C(no)({transform:"scale(1)"}),po=C(io)(D(({theme:e})=>({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),variants:[{props:{checked:!0},style:{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}}]})));function pe(e){const{checked:o=!1,classes:t={},fontSize:s}=e,a={...e,checked:o};return r.jsxs(lo,{className:t.root,ownerState:a,children:[r.jsx(co,{fontSize:s,className:t.background,ownerState:a}),r.jsx(po,{fontSize:s,className:t.dot,ownerState:a})]})}const ue=d.createContext(void 0);function uo(){return d.useContext(ue)}function mo(e){return F("MuiRadio",e)}const se=P("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),fo=e=>{const{classes:o,color:t,size:s}=e,a={root:["root",`color${k(t)}`,s!=="medium"&&`size${k(s)}`]};return{...o,...B(a,mo,o)}},ho=C(Qe,{shouldForwardProp:e=>K(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.size!=="medium"&&o[`size${k(t.size)}`],o[`color${k(t.color)}`]]}})(D(({theme:e})=>({color:(e.vars||e).palette.text.secondary,[`&.${se.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{color:"default",disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:Y(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(Z()).map(([o])=>({props:{color:o,disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Y(e.palette[o].main,e.palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(Z()).map(([o])=>({props:{color:o,disabled:!1},style:{[`&.${se.checked}`]:{color:(e.vars||e).palette[o].main}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]})));function go(e,o){return typeof o=="object"&&o!==null?e===o:String(e)===String(o)}const re=r.jsx(pe,{checked:!0}),ae=r.jsx(pe,{}),ne=d.forwardRef(function(o,t){const s=z({props:o,name:"MuiRadio"}),{checked:a,checkedIcon:i=re,color:l="primary",icon:n=ae,name:c,onChange:p,size:h="medium",className:m,disabled:v,disableRipple:g=!1,...b}=s,x=q();let f=v;x&&typeof f>"u"&&(f=x.disabled),f??(f=!1);const R={...s,disabled:f,disableRipple:g,color:l,size:h},u=fo(R),N=uo();let S=a;const _=ve(p,N&&N.onChange);let y=c;return N&&(typeof S>"u"&&(S=go(N.value,s.value)),typeof y>"u"&&(y=N.name)),r.jsx(ho,{type:"radio",icon:d.cloneElement(n,{fontSize:ae.props.fontSize??h}),checkedIcon:d.cloneElement(i,{fontSize:re.props.fontSize??h}),disabled:f,ownerState:R,classes:u,name:y,checked:S,onChange:_,ref:t,className:w(u.root,m),...b})});function Co(e){return F("MuiRadioGroup",e)}P("MuiRadioGroup",["root","row","error"]);const vo=e=>{const{classes:o,row:t,error:s}=e;return B({root:["root",t&&"row",s&&"error"]},Co,o)},bo=d.forwardRef(function(o,t){const{actions:s,children:a,className:i,defaultValue:l,name:n,onChange:c,value:p,...h}=o,m=d.useRef(null),v=vo(o),[g,b]=le({controlled:p,default:l,name:"RadioGroup"});d.useImperativeHandle(s,()=>({focus:()=>{let u=m.current.querySelector("input:not(:disabled):checked");u||(u=m.current.querySelector("input:not(:disabled)")),u&&u.focus()}}),[]);const x=be(t,m),f=ye(n),R=d.useMemo(()=>({name:f,onChange(u){b(u.target.value),c&&c(u,u.target.value)},value:g}),[f,c,b,g]);return r.jsx(ue.Provider,{value:R,children:r.jsx(ao,{role:"radiogroup",ref:x,className:w(v.root,i),...h,children:a})})}),yo="_products_15xiv_1",xo="_products__controls_15xiv_10",ie={products:yo,products__controls:xo},Ro="_panel_s4rse_1",wo={panel:Ro},So=()=>{const e=A(s=>s.filter),o=A(s=>s.setFilter),t=s=>{o(s.target.value)};return r.jsxs("div",{className:wo.panel,children:[r.jsx(xe,{component:de,to:"/create-product",variant:"contained",color:"primary",size:"small",sx:{height:"3rem",minWidth:"9rem"},children:"Создать карту"}),r.jsxs(Re,{children:[r.jsx(we,{id:"row-radio-buttons-group-label",sx:{textDecoration:"none",textAlign:"center"},children:"Что показывать?"}),r.jsxs(bo,{row:!0,"aria-labelledby":"row-radio-buttons-group-label",name:"row-radio-buttons-group",value:e,onChange:t,children:[r.jsx(te,{value:"all",control:r.jsx(ne,{}),label:"Всё"}),r.jsx(te,{value:"favourites",control:r.jsx(ne,{}),label:"Избранное"})]})]})]})},jo=W(r.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"}),"Favorite"),Mo=W(r.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),ko=e=>{const{setFav:o,unsetFav:t,deleteFromProducts:s}=A(),[a,i]=d.useState(e.isFav),l=c=>{a?t(e.id):o(e.id),i(p=>!p),c.stopPropagation(),c.preventDefault()},n=c=>{s(e.id),c.stopPropagation(),c.preventDefault()};return r.jsxs(Ie,{sx:{textDecoration:"none",width:"100%",minWidth:"300px"},component:de,to:`/products/${e.id}`,children:[r.jsx(Ve,{component:"img",height:"194",image:e.images[0],alt:e.title}),r.jsxs(Te,{children:[r.jsx(E,{variant:"h6",sx:{color:"text.primary",fontWeight:"bold",textWrap:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.title}),r.jsx(E,{variant:"body2",sx:{color:"text.secondary",textOverflow:"ellipsis",overflow:"hidden",height:"6rem"},children:e.description})]}),r.jsxs(_e,{children:[r.jsx(ee,{"aria-label":"add to favorites",onClick:l,children:r.jsx(jo,{style:a?{color:"red"}:{color:"grey"}})}),r.jsx(ee,{"aria-label":"delete",onClick:n,children:r.jsx(Mo,{})})]})]})},Fo="_gallery_qspv1_1",Po={gallery:Fo},Bo=()=>{const e=A(t=>t.products),o=A(t=>t.filter);return r.jsx("div",{className:Po.gallery,children:e.filter(t=>o==="all"?!0:t.isFav).map(t=>d.createElement(ko,{...t,key:t.id}))})},Io=()=>r.jsxs("div",{className:ie.products,children:[r.jsx("div",{className:ie.products__controls,children:r.jsx(So,{})}),r.jsx(Bo,{})]});export{Io as default};
