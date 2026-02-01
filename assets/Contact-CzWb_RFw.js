import{m as Tn,x as pi,y as _i,q as ms,s as An,j as K,n as pr,r as Gt,z as Mo,A as Te,D as Bs,I as Qu,p as Xu,o as Ju,E as Xn,J as Lo,K as Yu,L as Zu,M as tc,R as Lt,u as ec,a as nc,B as rc,C as sc,T as js,b as ic,g as Ya,w as oc}from"./index-C6q99Q5f.js";import{V as Uo,H as ac,p as lc}from"./content-ClpJKryj.js";import{S as uc}from"./simple-grid-Bpf32PL4.js";function Bo(...n){return function(e){n.some(r=>(r==null||r(e),e==null?void 0:e.defaultPrevented))}}const[cc,hc]=pi({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[fc,gs]=pi({strict:!1,name:"FormControlContext"});function dc(n){const{id:t,isRequired:e,isInvalid:r,isDisabled:i,isReadOnly:o,...l}=n,c=Gt.useId(),f=t||`field-${c}`,g=`${f}-label`,I=`${f}-feedback`,A=`${f}-helptext`,[S,V]=Gt.useState(!1),[F,M]=Gt.useState(!1),[B,G]=Gt.useState(!1),j=Gt.useCallback((y={},m=null)=>({id:A,...y,ref:Mo(m,p=>{p&&M(!0)})}),[A]),tt=Gt.useCallback((y={},m=null)=>({...y,ref:m,"data-focus":Te(B),"data-disabled":Te(i),"data-invalid":Te(r),"data-readonly":Te(o),id:y.id!==void 0?y.id:g,htmlFor:y.htmlFor!==void 0?y.htmlFor:f}),[f,i,B,r,o,g]),ot=Gt.useCallback((y={},m=null)=>({id:I,...y,ref:Mo(m,p=>{p&&V(!0)}),"aria-live":"polite"}),[I]),Y=Gt.useCallback((y={},m=null)=>({...y,...l,ref:m,role:"group","data-focus":Te(B),"data-disabled":Te(i),"data-invalid":Te(r),"data-readonly":Te(o)}),[l,i,B,r,o]),gt=Gt.useCallback((y={},m=null)=>({...y,ref:m,role:"presentation","aria-hidden":!0,children:y.children||"*"}),[]);return{isRequired:!!e,isInvalid:!!r,isReadOnly:!!o,isDisabled:!!i,isFocused:!!B,onFocus:()=>G(!0),onBlur:()=>G(!1),hasFeedbackText:S,setHasFeedbackText:V,hasHelpText:F,setHasHelpText:M,id:f,labelId:g,feedbackId:I,helpTextId:A,htmlProps:l,getHelpTextProps:j,getErrorMessageProps:ot,getRootProps:Y,getLabelProps:tt,getRequiredIndicatorProps:gt}}const on=Tn(function(t,e){const r=_i("Form",t),i=ms(t),{getRootProps:o,htmlProps:l,...c}=dc(i),f=An("chakra-form-control",t.className);return K.jsx(fc,{value:c,children:K.jsx(cc,{value:r,children:K.jsx(pr.div,{...o({},e),className:f,__css:r.container})})})});on.displayName="FormControl";const mc=Tn(function(t,e){const r=gs(),i=hc(),o=An("chakra-form__helper-text",t.className);return K.jsx(pr.div,{...r==null?void 0:r.getHelpTextProps(t,e),__css:i.helperText,className:o})});mc.displayName="FormHelperText";function Za(n){const{isDisabled:t,isInvalid:e,isReadOnly:r,isRequired:i,...o}=gc(n);return{...o,disabled:t,readOnly:r,required:i,"aria-invalid":Bs(e),"aria-required":Bs(i),"aria-readonly":Bs(r)}}function gc(n){const t=gs(),{id:e,disabled:r,readOnly:i,required:o,isRequired:l,isInvalid:c,isReadOnly:f,isDisabled:g,onFocus:I,onBlur:A,...S}=n,V=n["aria-describedby"]?[n["aria-describedby"]]:[];return t!=null&&t.hasFeedbackText&&(t!=null&&t.isInvalid)&&V.push(t.feedbackId),t!=null&&t.hasHelpText&&V.push(t.helpTextId),{...S,"aria-describedby":V.join(" ")||void 0,id:e??(t==null?void 0:t.id),isDisabled:r??g??(t==null?void 0:t.isDisabled),isReadOnly:i??f??(t==null?void 0:t.isReadOnly),isRequired:o??l??(t==null?void 0:t.isRequired),isInvalid:c??(t==null?void 0:t.isInvalid),onFocus:Bo(t==null?void 0:t.onFocus,I),onBlur:Bo(t==null?void 0:t.onBlur,A)}}const[pc,_c]=pi({name:"FormErrorStylesContext",errorMessage:`useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `}),an=Tn((n,t)=>{const e=_i("FormError",n),r=ms(n),i=gs();return i!=null&&i.isInvalid?K.jsx(pc,{value:e,children:K.jsx(pr.div,{...i==null?void 0:i.getErrorMessageProps(r,t),className:An("chakra-form__error-message",n.className),__css:{display:"flex",alignItems:"center",...e.text}})}):null});an.displayName="FormErrorMessage";const yc=Tn((n,t)=>{const e=_c(),r=gs();if(!(r!=null&&r.isInvalid))return null;const i=An("chakra-form__error-icon",n.className);return K.jsx(Qu,{ref:t,"aria-hidden":!0,...n,__css:e.icon,className:i,children:K.jsx("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})});yc.displayName="FormErrorIcon";const hn=Tn(function(t,e){const{htmlSize:r,...i}=t,o=_i("Input",i),l=ms(i),c=Za(l),f=An("chakra-input",t.className);return K.jsx(pr.input,{size:r,...c,__css:o.field,ref:e,className:f})});hn.displayName="Input";hn.id="Input";const Ec=["h","minH","height","minHeight"],tl=Tn((n,t)=>{const e=Xu("Textarea",n),{className:r,rows:i,...o}=ms(n),l=Za(o),c=i?Ju(e,Ec):e;return K.jsx(pr.textarea,{ref:t,rows:i,...l,className:An("chakra-textarea",r),__css:c})});tl.displayName="Textarea";function vc(n,t){const e=n??"bottom",i={"top-start":{ltr:"top-left",rtl:"top-right"},"top-end":{ltr:"top-right",rtl:"top-left"},"bottom-start":{ltr:"bottom-left",rtl:"bottom-right"},"bottom-end":{ltr:"bottom-right",rtl:"bottom-left"}}[e];return(i==null?void 0:i[t])??e}function Tc(n,t){const e=i=>({...t,...i,position:vc((i==null?void 0:i.position)??(t==null?void 0:t.position),n)}),r=i=>{const o=e(i),l=Yu(o);return Xn.notify(l,o)};return r.update=(i,o)=>{Xn.update(i,e(o))},r.promise=(i,o)=>{const l=r({...o.loading,status:"loading",duration:null});i.then(c=>r.update(l,{status:"success",duration:5e3,...Lo(o.success,c)})).catch(c=>r.update(l,{status:"error",duration:5e3,...Lo(o.error,c)}))},r.closeAll=Xn.closeAll,r.close=Xn.close,r.isActive=Xn.isActive,r}function Ac(n){const{theme:t}=Zu(),e=tc();return Gt.useMemo(()=>Tc(t.direction,{...e,...n}),[n,t.direction,e])}var _r=n=>n.type==="checkbox",je=n=>n instanceof Date,Bt=n=>n==null;const el=n=>typeof n=="object";var Et=n=>!Bt(n)&&!Array.isArray(n)&&el(n)&&!je(n),Ic=n=>Et(n)&&n.target?_r(n.target)?n.target.checked:n.target.value:n,wc=n=>n.substring(0,n.search(/\.\d+(\.|$)/))||n,bc=(n,t)=>n.has(wc(t)),Sc=n=>{const t=n.constructor&&n.constructor.prototype;return Et(t)&&t.hasOwnProperty("isPrototypeOf")},yi=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Tt(n){if(n instanceof Date)return new Date(n);const t=typeof FileList<"u"&&n instanceof FileList;if(yi&&(n instanceof Blob||t))return n;const e=Array.isArray(n);if(!e&&!(Et(n)&&Sc(n)))return n;const r=e?[]:Object.create(Object.getPrototypeOf(n));for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=Tt(n[i]));return r}var ps=n=>/^\w*$/.test(n),ht=n=>n===void 0,Ei=n=>Array.isArray(n)?n.filter(Boolean):[],vi=n=>Ei(n.replace(/["|']|\]/g,"").split(/\.|\[/)),L=(n,t,e)=>{if(!t||!Et(n))return e;const r=(ps(t)?[t]:vi(t)).reduce((i,o)=>Bt(i)?i:i[o],n);return ht(r)||r===n?ht(n[t])?e:n[t]:r},ie=n=>typeof n=="boolean",Qt=n=>typeof n=="function",lt=(n,t,e)=>{let r=-1;const i=ps(t)?[t]:vi(t),o=i.length,l=o-1;for(;++r<o;){const c=i[r];let f=e;if(r!==l){const g=n[c];f=Et(g)||Array.isArray(g)?g:isNaN(+i[r+1])?{}:[]}if(c==="__proto__"||c==="constructor"||c==="prototype")return;n[c]=f,n=n[c]}};const jo={BLUR:"blur",FOCUS_OUT:"focusout"},Xt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},he={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Rc=Lt.createContext(null);Rc.displayName="HookFormControlContext";var Cc=(n,t,e,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in n)Object.defineProperty(i,o,{get:()=>{const l=o;return t._proxyFormState[l]!==Xt.all&&(t._proxyFormState[l]=!r||Xt.all),n[l]}});return i};const Vc=typeof window<"u"?Lt.useLayoutEffect:Lt.useEffect;var zt=n=>typeof n=="string",Pc=(n,t,e,r,i)=>zt(n)?(r&&t.watch.add(n),L(e,n,i)):Array.isArray(n)?n.map(o=>(r&&t.watch.add(o),L(e,o))):(r&&(t.watchAll=!0),e),Js=n=>Bt(n)||!el(n);function Ae(n,t,e=new WeakSet){if(Js(n)||Js(t))return Object.is(n,t);if(je(n)&&je(t))return Object.is(n.getTime(),t.getTime());const r=Object.keys(n),i=Object.keys(t);if(r.length!==i.length)return!1;if(e.has(n)||e.has(t))return!0;e.add(n),e.add(t);for(const o of r){const l=n[o];if(!i.includes(o))return!1;if(o!=="ref"){const c=t[o];if(je(l)&&je(c)||Et(l)&&Et(c)||Array.isArray(l)&&Array.isArray(c)?!Ae(l,c,e):!Object.is(l,c))return!1}}return!0}const Dc=Lt.createContext(null);Dc.displayName="HookFormContext";var xc=(n,t,e,r,i)=>t?{...e[n],types:{...e[n]&&e[n].types?e[n].types:{},[r]:i||!0}}:{},er=n=>Array.isArray(n)?n:[n],$o=()=>{let n=[];return{get observers(){return n},next:i=>{for(const o of n)o.next&&o.next(i)},subscribe:i=>(n.push(i),{unsubscribe:()=>{n=n.filter(o=>o!==i)}}),unsubscribe:()=>{n=[]}}};function nl(n,t){const e={};for(const r in n)if(n.hasOwnProperty(r)){const i=n[r],o=t[r];if(i&&Et(i)&&o){const l=nl(i,o);Et(l)&&(e[r]=l)}else n[r]&&(e[r]=o)}return e}var Ut=n=>Et(n)&&!Object.keys(n).length,Ti=n=>n.type==="file",Xr=n=>{if(!yi)return!1;const t=n?n.ownerDocument:0;return n instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},rl=n=>n.type==="select-multiple",Ai=n=>n.type==="radio",Nc=n=>Ai(n)||_r(n),$s=n=>Xr(n)&&n.isConnected;function kc(n,t){const e=t.slice(0,-1).length;let r=0;for(;r<e;)n=ht(n)?r++:n[t[r++]];return n}function Oc(n){for(const t in n)if(n.hasOwnProperty(t)&&!ht(n[t]))return!1;return!0}function pt(n,t){const e=Array.isArray(t)?t:ps(t)?[t]:vi(t),r=e.length===1?n:kc(n,e),i=e.length-1,o=e[i];return r&&delete r[o],i!==0&&(Et(r)&&Ut(r)||Array.isArray(r)&&Oc(r))&&pt(n,e.slice(0,-1)),n}var Fc=n=>{for(const t in n)if(Qt(n[t]))return!0;return!1};function sl(n){return Array.isArray(n)||Et(n)&&!Fc(n)}function Ys(n,t={}){for(const e in n){const r=n[e];sl(r)?(t[e]=Array.isArray(r)?[]:{},Ys(r,t[e])):ht(r)||(t[e]=!0)}return t}function ln(n,t,e){e||(e=Ys(t));for(const r in n){const i=n[r];if(sl(i))ht(t)||Js(e[r])?e[r]=Ys(i,Array.isArray(i)?[]:{}):ln(i,Bt(t)?{}:t[r],e[r]);else{const o=t[r];e[r]=!Ae(i,o)}}return e}const qo={value:!1,isValid:!1},Ho={value:!0,isValid:!0};var il=n=>{if(Array.isArray(n)){if(n.length>1){const t=n.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return n[0].checked&&!n[0].disabled?n[0].attributes&&!ht(n[0].attributes.value)?ht(n[0].value)||n[0].value===""?Ho:{value:n[0].value,isValid:!0}:Ho:qo}return qo},ol=(n,{valueAsNumber:t,valueAsDate:e,setValueAs:r})=>ht(n)?n:t?n===""?NaN:n&&+n:e&&zt(n)?new Date(n):r?r(n):n;const zo={isValid:!1,value:null};var al=n=>Array.isArray(n)?n.reduce((t,e)=>e&&e.checked&&!e.disabled?{isValid:!0,value:e.value}:t,zo):zo;function Go(n){const t=n.ref;return Ti(t)?t.files:Ai(t)?al(n.refs).value:rl(t)?[...t.selectedOptions].map(({value:e})=>e):_r(t)?il(n.refs).value:ol(ht(t.value)?n.ref.value:t.value,n)}var Mc=(n,t,e,r)=>{const i={};for(const o of n){const l=L(t,o);l&&lt(i,o,l._f)}return{criteriaMode:e,names:[...n],fields:i,shouldUseNativeValidation:r}},Jr=n=>n instanceof RegExp,Jn=n=>ht(n)?n:Jr(n)?n.source:Et(n)?Jr(n.value)?n.value.source:n.value:n,Wo=n=>({isOnSubmit:!n||n===Xt.onSubmit,isOnBlur:n===Xt.onBlur,isOnChange:n===Xt.onChange,isOnAll:n===Xt.all,isOnTouch:n===Xt.onTouched});const Ko="AsyncFunction";var Lc=n=>!!n&&!!n.validate&&!!(Qt(n.validate)&&n.validate.constructor.name===Ko||Et(n.validate)&&Object.values(n.validate).find(t=>t.constructor.name===Ko)),Uc=n=>n.mount&&(n.required||n.min||n.max||n.maxLength||n.minLength||n.pattern||n.validate),Qo=(n,t,e)=>!e&&(t.watchAll||t.watch.has(n)||[...t.watch].some(r=>n.startsWith(r)&&/^\.\w+/.test(n.slice(r.length))));const nr=(n,t,e,r)=>{for(const i of e||Object.keys(n)){const o=L(n,i);if(o){const{_f:l,...c}=o;if(l){if(l.refs&&l.refs[0]&&t(l.refs[0],i)&&!r)return!0;if(l.ref&&t(l.ref,l.name)&&!r)return!0;if(nr(c,t))break}else if(Et(c)&&nr(c,t))break}}};function Xo(n,t,e){const r=L(n,e);if(r||ps(e))return{error:r,name:e};const i=e.split(".");for(;i.length;){const o=i.join("."),l=L(t,o),c=L(n,o);if(l&&!Array.isArray(l)&&e!==o)return{name:e};if(c&&c.type)return{name:o,error:c};if(c&&c.root&&c.root.type)return{name:`${o}.root`,error:c.root};i.pop()}return{name:e}}var Bc=(n,t,e,r)=>{e(n);const{name:i,...o}=n;return Ut(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(l=>t[l]===(!r||Xt.all))},jc=(n,t,e)=>!n||!t||n===t||er(n).some(r=>r&&(e?r===t:r.startsWith(t)||t.startsWith(r))),$c=(n,t,e,r,i)=>i.isOnAll?!1:!e&&i.isOnTouch?!(t||n):(e?r.isOnBlur:i.isOnBlur)?!n:(e?r.isOnChange:i.isOnChange)?n:!0,qc=(n,t)=>!Ei(L(n,t)).length&&pt(n,t),Hc=(n,t,e)=>{const r=er(L(n,e));return lt(r,"root",t[e]),lt(n,e,r),n};function Jo(n,t,e="validate"){if(zt(n)||Array.isArray(n)&&n.every(zt)||ie(n)&&!n)return{type:e,message:zt(n)?n:"",ref:t}}var sn=n=>Et(n)&&!Jr(n)?n:{value:n,message:""},Yo=async(n,t,e,r,i,o)=>{const{ref:l,refs:c,required:f,maxLength:g,minLength:I,min:A,max:S,pattern:V,validate:F,name:M,valueAsNumber:B,mount:G}=n._f,j=L(e,M);if(!G||t.has(M))return{};const tt=c?c[0]:l,ot=v=>{i&&tt.reportValidity&&(tt.setCustomValidity(ie(v)?"":v||""),tt.reportValidity())},Y={},gt=Ai(l),y=_r(l),m=gt||y,p=(B||Ti(l))&&ht(l.value)&&ht(j)||Xr(l)&&l.value===""||j===""||Array.isArray(j)&&!j.length,T=xc.bind(null,M,r,Y),E=(v,d,Q,at=he.maxLength,qt=he.minLength)=>{const Ft=v?d:Q;Y[M]={type:v?at:qt,message:Ft,ref:l,...T(v?at:qt,Ft)}};if(o?!Array.isArray(j)||!j.length:f&&(!m&&(p||Bt(j))||ie(j)&&!j||y&&!il(c).isValid||gt&&!al(c).isValid)){const{value:v,message:d}=zt(f)?{value:!!f,message:f}:sn(f);if(v&&(Y[M]={type:he.required,message:d,ref:tt,...T(he.required,d)},!r))return ot(d),Y}if(!p&&(!Bt(A)||!Bt(S))){let v,d;const Q=sn(S),at=sn(A);if(!Bt(j)&&!isNaN(j)){const qt=l.valueAsNumber||j&&+j;Bt(Q.value)||(v=qt>Q.value),Bt(at.value)||(d=qt<at.value)}else{const qt=l.valueAsDate||new Date(j),Ft=Pe=>new Date(new Date().toDateString()+" "+Pe),te=l.type=="time",ee=l.type=="week";zt(Q.value)&&j&&(v=te?Ft(j)>Ft(Q.value):ee?j>Q.value:qt>new Date(Q.value)),zt(at.value)&&j&&(d=te?Ft(j)<Ft(at.value):ee?j<at.value:qt<new Date(at.value))}if((v||d)&&(E(!!v,Q.message,at.message,he.max,he.min),!r))return ot(Y[M].message),Y}if((g||I)&&!p&&(zt(j)||o&&Array.isArray(j))){const v=sn(g),d=sn(I),Q=!Bt(v.value)&&j.length>+v.value,at=!Bt(d.value)&&j.length<+d.value;if((Q||at)&&(E(Q,v.message,d.message),!r))return ot(Y[M].message),Y}if(V&&!p&&zt(j)){const{value:v,message:d}=sn(V);if(Jr(v)&&!j.match(v)&&(Y[M]={type:he.pattern,message:d,ref:l,...T(he.pattern,d)},!r))return ot(d),Y}if(F){if(Qt(F)){const v=await F(j,e),d=Jo(v,tt);if(d&&(Y[M]={...d,...T(he.validate,d.message)},!r))return ot(d.message),Y}else if(Et(F)){let v={};for(const d in F){if(!Ut(v)&&!r)break;const Q=Jo(await F[d](j,e),tt,d);Q&&(v={...Q,...T(d,Q.message)},ot(Q.message),r&&(Y[M]=v))}if(!Ut(v)&&(Y[M]={ref:tt,...v},!r))return Y}}return ot(!0),Y};const zc={mode:Xt.onSubmit,reValidateMode:Xt.onChange,shouldFocusError:!0};function Gc(n={}){let t={...zc,...n},e={submitCount:0,isDirty:!1,isReady:!1,isLoading:Qt(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},i=Et(t.defaultValues)||Et(t.values)?Tt(t.defaultValues||t.values)||{}:{},o=t.shouldUnregister?{}:Tt(i),l={action:!1,mount:!1,watch:!1,keepIsValid:!1},c={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},f,g=0;const I={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},A={...I};let S={...A};const V={array:$o(),state:$o()},F=t.criteriaMode===Xt.all,M=_=>b=>{clearTimeout(g),g=setTimeout(_,b)},B=async _=>{if(!l.keepIsValid&&!t.disabled&&(A.isValid||S.isValid||_)){let b;t.resolver?(b=Ut((await m()).errors),G()):b=await T(r,!0),b!==e.isValid&&V.state.next({isValid:b})}},G=(_,b)=>{!t.disabled&&(A.isValidating||A.validatingFields||S.isValidating||S.validatingFields)&&((_||Array.from(c.mount)).forEach(C=>{C&&(b?lt(e.validatingFields,C,b):pt(e.validatingFields,C))}),V.state.next({validatingFields:e.validatingFields,isValidating:!Ut(e.validatingFields)}))},j=(_,b=[],C,O,N=!0,x=!0)=>{if(O&&C&&!t.disabled){if(l.action=!0,x&&Array.isArray(L(r,_))){const $=C(L(r,_),O.argA,O.argB);N&&lt(r,_,$)}if(x&&Array.isArray(L(e.errors,_))){const $=C(L(e.errors,_),O.argA,O.argB);N&&lt(e.errors,_,$),qc(e.errors,_)}if((A.touchedFields||S.touchedFields)&&x&&Array.isArray(L(e.touchedFields,_))){const $=C(L(e.touchedFields,_),O.argA,O.argB);N&&lt(e.touchedFields,_,$)}(A.dirtyFields||S.dirtyFields)&&(e.dirtyFields=ln(i,o)),V.state.next({name:_,isDirty:v(_,b),dirtyFields:e.dirtyFields,errors:e.errors,isValid:e.isValid})}else lt(o,_,b)},tt=(_,b)=>{lt(e.errors,_,b),V.state.next({errors:e.errors})},ot=_=>{e.errors=_,V.state.next({errors:e.errors,isValid:!1})},Y=(_,b,C,O)=>{const N=L(r,_);if(N){const x=L(o,_,ht(C)?L(i,_):C);ht(x)||O&&O.defaultChecked||b?lt(o,_,b?x:Go(N._f)):at(_,x),l.mount&&!l.action&&B()}},gt=(_,b,C,O,N)=>{let x=!1,$=!1;const Z={name:_};if(!t.disabled){if(!C||O){(A.isDirty||S.isDirty)&&($=e.isDirty,e.isDirty=Z.isDirty=v(),x=$!==Z.isDirty);const et=Ae(L(i,_),b);$=!!L(e.dirtyFields,_),et?pt(e.dirtyFields,_):lt(e.dirtyFields,_,!0),Z.dirtyFields=e.dirtyFields,x=x||(A.dirtyFields||S.dirtyFields)&&$!==!et}if(C){const et=L(e.touchedFields,_);et||(lt(e.touchedFields,_,C),Z.touchedFields=e.touchedFields,x=x||(A.touchedFields||S.touchedFields)&&et!==C)}x&&N&&V.state.next(Z)}return x?Z:{}},y=(_,b,C,O)=>{const N=L(e.errors,_),x=(A.isValid||S.isValid)&&ie(b)&&e.isValid!==b;if(t.delayError&&C?(f=M(()=>tt(_,C)),f(t.delayError)):(clearTimeout(g),f=null,C?lt(e.errors,_,C):pt(e.errors,_)),(C?!Ae(N,C):N)||!Ut(O)||x){const $={...O,...x&&ie(b)?{isValid:b}:{},errors:e.errors,name:_};e={...e,...$},V.state.next($)}},m=async _=>(G(_,!0),await t.resolver(o,t.context,Mc(_||c.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),p=async _=>{const{errors:b}=await m(_);if(G(_),_)for(const C of _){const O=L(b,C);O?lt(e.errors,C,O):pt(e.errors,C)}else e.errors=b;return b},T=async(_,b,C={valid:!0})=>{for(const O in _){const N=_[O];if(N){const{_f:x,...$}=N;if(x){const Z=c.array.has(x.name),et=N._f&&Lc(N._f);et&&A.validatingFields&&G([x.name],!0);const Rt=await Yo(N,c.disabled,o,F,t.shouldUseNativeValidation&&!b,Z);if(et&&A.validatingFields&&G([x.name]),Rt[x.name]&&(C.valid=!1,b||n.shouldUseNativeValidation))break;!b&&(L(Rt,x.name)?Z?Hc(e.errors,Rt,x.name):lt(e.errors,x.name,Rt[x.name]):pt(e.errors,x.name))}!Ut($)&&await T($,b,C)}}return C.valid},E=()=>{for(const _ of c.unMount){const b=L(r,_);b&&(b._f.refs?b._f.refs.every(C=>!$s(C)):!$s(b._f.ref))&&xe(_)}c.unMount=new Set},v=(_,b)=>!t.disabled&&(_&&b&&lt(o,_,b),!Ae(Sn(),i)),d=(_,b,C)=>Pc(_,c,{...l.mount?o:ht(b)?i:zt(_)?{[_]:b}:b},C,b),Q=_=>Ei(L(l.mount?o:i,_,t.shouldUnregister?L(i,_,[]):[])),at=(_,b,C={})=>{const O=L(r,_);let N=b;if(O){const x=O._f;x&&(!x.disabled&&lt(o,_,ol(b,x)),N=Xr(x.ref)&&Bt(b)?"":b,rl(x.ref)?[...x.ref.options].forEach($=>$.selected=N.includes($.value)):x.refs?_r(x.ref)?x.refs.forEach($=>{(!$.defaultChecked||!$.disabled)&&(Array.isArray(N)?$.checked=!!N.find(Z=>Z===$.value):$.checked=N===$.value||!!N)}):x.refs.forEach($=>$.checked=$.value===N):Ti(x.ref)?x.ref.value="":(x.ref.value=N,x.ref.type||V.state.next({name:_,values:Tt(o)})))}(C.shouldDirty||C.shouldTouch)&&gt(_,N,C.shouldTouch,C.shouldDirty,!0),C.shouldValidate&&Pe(_)},qt=(_,b,C)=>{for(const O in b){if(!b.hasOwnProperty(O))return;const N=b[O],x=_+"."+O,$=L(r,x);(c.array.has(_)||Et(N)||$&&!$._f)&&!je(N)?qt(x,N,C):at(x,N,C)}},Ft=(_,b,C={})=>{const O=L(r,_),N=c.array.has(_),x=Tt(b);lt(o,_,x),N?(V.array.next({name:_,values:Tt(o)}),(A.isDirty||A.dirtyFields||S.isDirty||S.dirtyFields)&&C.shouldDirty&&V.state.next({name:_,dirtyFields:ln(i,o),isDirty:v(_,x)})):O&&!O._f&&!Bt(x)?qt(_,x,C):at(_,x,C),Qo(_,c)?V.state.next({...e,name:_,values:Tt(o)}):V.state.next({name:l.mount?_:void 0,values:Tt(o)})},te=async _=>{l.mount=!0;const b=_.target;let C=b.name,O=!0;const N=L(r,C),x=et=>{O=Number.isNaN(et)||je(et)&&isNaN(et.getTime())||Ae(et,L(o,C,et))},$=Wo(t.mode),Z=Wo(t.reValidateMode);if(N){let et,Rt;const ne=b.type?Go(N._f):Ic(_),Wt=_.type===jo.BLUR||_.type===jo.FOCUS_OUT,Ne=!Uc(N._f)&&!t.resolver&&!L(e.errors,C)&&!N._f.deps||$c(Wt,L(e.touchedFields,C),e.isSubmitted,Z,$),ke=Qo(C,c,Wt);lt(o,C,ne),Wt?(!b||!b.readOnly)&&(N._f.onBlur&&N._f.onBlur(_),f&&f(0)):N._f.onChange&&N._f.onChange(_);const Oe=gt(C,ne,Wt),ce=!Ut(Oe)||ke;if(!Wt&&V.state.next({name:C,type:_.type,values:Tt(o)}),Ne)return(A.isValid||S.isValid)&&(t.mode==="onBlur"?Wt&&B():Wt||B()),ce&&V.state.next({name:C,...ke?{}:Oe});if(!Wt&&ke&&V.state.next({...e}),t.resolver){const{errors:kn}=await m([C]);if(G([C]),x(ne),O){const tn=Xo(e.errors,r,C),On=Xo(kn,r,tn.name||C);et=On.error,C=On.name,Rt=Ut(kn)}}else G([C],!0),et=(await Yo(N,c.disabled,o,F,t.shouldUseNativeValidation))[C],G([C]),x(ne),O&&(et?Rt=!1:(A.isValid||S.isValid)&&(Rt=await T(r,!0)));O&&(N._f.deps&&(!Array.isArray(N._f.deps)||N._f.deps.length>0)&&Pe(N._f.deps),y(C,Rt,et,Oe))}},ee=(_,b)=>{if(L(e.errors,b)&&_.focus)return _.focus(),1},Pe=async(_,b={})=>{let C,O;const N=er(_);if(t.resolver){const x=await p(ht(_)?_:N);C=Ut(x),O=_?!N.some($=>L(x,$)):C}else _?(O=(await Promise.all(N.map(async x=>{const $=L(r,x);return await T($&&$._f?{[x]:$}:$)}))).every(Boolean),!(!O&&!e.isValid)&&B()):O=C=await T(r);return V.state.next({...!zt(_)||(A.isValid||S.isValid)&&C!==e.isValid?{}:{name:_},...t.resolver||!_?{isValid:C}:{},errors:e.errors}),b.shouldFocus&&!O&&nr(r,ee,_?N:c.mount),O},Sn=(_,b)=>{let C={...l.mount?o:i};return b&&(C=nl(b.dirtyFields?e.dirtyFields:e.touchedFields,C)),ht(_)?C:zt(_)?L(C,_):_.map(O=>L(C,O))},Rn=(_,b)=>({invalid:!!L((b||e).errors,_),isDirty:!!L((b||e).dirtyFields,_),error:L((b||e).errors,_),isValidating:!!L(e.validatingFields,_),isTouched:!!L((b||e).touchedFields,_)}),wr=_=>{_&&er(_).forEach(b=>pt(e.errors,b)),V.state.next({errors:_?e.errors:{}})},De=(_,b,C)=>{const O=(L(r,_,{_f:{}})._f||{}).ref,N=L(e.errors,_)||{},{ref:x,message:$,type:Z,...et}=N;lt(e.errors,_,{...et,...b,ref:O}),V.state.next({name:_,errors:e.errors,isValid:!1}),C&&C.shouldFocus&&O&&O.focus&&O.focus()},Cn=(_,b)=>Qt(_)?V.state.subscribe({next:C=>"values"in C&&_(d(void 0,b),C)}):d(_,b,!0),Je=_=>V.state.subscribe({next:b=>{jc(_.name,b.name,_.exact)&&Bc(b,_.formState||A,Cr,_.reRenderRoot)&&_.callback({values:{...o},...e,...b,defaultValues:i})}}).unsubscribe,Vn=_=>(l.mount=!0,S={...S,..._.formState},Je({..._,formState:{...I,..._.formState}})),xe=(_,b={})=>{for(const C of _?er(_):c.mount)c.mount.delete(C),c.array.delete(C),b.keepValue||(pt(r,C),pt(o,C)),!b.keepError&&pt(e.errors,C),!b.keepDirty&&pt(e.dirtyFields,C),!b.keepTouched&&pt(e.touchedFields,C),!b.keepIsValidating&&pt(e.validatingFields,C),!t.shouldUnregister&&!b.keepDefaultValue&&pt(i,C);V.state.next({values:Tt(o)}),V.state.next({...e,...b.keepDirty?{isDirty:v()}:{}}),!b.keepIsValid&&B()},Pn=({disabled:_,name:b})=>{if(ie(_)&&l.mount||_||c.disabled.has(b)){const N=c.disabled.has(b)!==!!_;_?c.disabled.add(b):c.disabled.delete(b),N&&l.mount&&!l.action&&B()}},Dn=(_,b={})=>{let C=L(r,_);const O=ie(b.disabled)||ie(t.disabled);return lt(r,_,{...C||{},_f:{...C&&C._f?C._f:{ref:{name:_}},name:_,mount:!0,...b}}),c.mount.add(_),C?Pn({disabled:ie(b.disabled)?b.disabled:t.disabled,name:_}):Y(_,!0,b.value),{...O?{disabled:b.disabled||t.disabled}:{},...t.progressive?{required:!!b.required,min:Jn(b.min),max:Jn(b.max),minLength:Jn(b.minLength),maxLength:Jn(b.maxLength),pattern:Jn(b.pattern)}:{},name:_,onChange:te,onBlur:te,ref:N=>{if(N){Dn(_,b),C=L(r,_);const x=ht(N.value)&&N.querySelectorAll&&N.querySelectorAll("input,select,textarea")[0]||N,$=Nc(x),Z=C._f.refs||[];if($?Z.find(et=>et===x):x===C._f.ref)return;lt(r,_,{_f:{...C._f,...$?{refs:[...Z.filter($s),x,...Array.isArray(L(i,_))?[{}]:[]],ref:{type:x.type,name:_}}:{ref:x}}}),Y(_,!1,void 0,x)}else C=L(r,_,{}),C._f&&(C._f.mount=!1),(t.shouldUnregister||b.shouldUnregister)&&!(bc(c.array,_)&&l.action)&&c.unMount.add(_)}}},xn=()=>t.shouldFocusError&&nr(r,ee,c.mount),br=_=>{ie(_)&&(V.state.next({disabled:_}),nr(r,(b,C)=>{const O=L(r,C);O&&(b.disabled=O._f.disabled||_,Array.isArray(O._f.refs)&&O._f.refs.forEach(N=>{N.disabled=O._f.disabled||_}))},0,!1))},Ye=(_,b)=>async C=>{let O;C&&(C.preventDefault&&C.preventDefault(),C.persist&&C.persist());let N=Tt(o);if(V.state.next({isSubmitting:!0}),t.resolver){const{errors:x,values:$}=await m();G(),e.errors=x,N=Tt($)}else await T(r);if(c.disabled.size)for(const x of c.disabled)pt(N,x);if(pt(e.errors,"root"),Ut(e.errors)){V.state.next({errors:{}});try{await _(N,C)}catch(x){O=x}}else b&&await b({...e.errors},C),xn(),setTimeout(xn);if(V.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ut(e.errors)&&!O,submitCount:e.submitCount+1,errors:e.errors}),O)throw O},Sr=(_,b={})=>{L(r,_)&&(ht(b.defaultValue)?Ft(_,Tt(L(i,_))):(Ft(_,b.defaultValue),lt(i,_,Tt(b.defaultValue))),b.keepTouched||pt(e.touchedFields,_),b.keepDirty||(pt(e.dirtyFields,_),e.isDirty=b.defaultValue?v(_,Tt(L(i,_))):v()),b.keepError||(pt(e.errors,_),A.isValid&&B()),V.state.next({...e}))},Rr=(_,b={})=>{const C=_?Tt(_):i,O=Tt(C),N=Ut(_),x=N?i:O;if(b.keepDefaultValues||(i=C),!b.keepValues){if(b.keepDirtyValues){const $=new Set([...c.mount,...Object.keys(ln(i,o))]);for(const Z of Array.from($)){const et=L(e.dirtyFields,Z),Rt=L(o,Z),ne=L(x,Z);et&&!ht(Rt)?lt(x,Z,Rt):!et&&!ht(ne)&&Ft(Z,ne)}}else{if(yi&&ht(_))for(const $ of c.mount){const Z=L(r,$);if(Z&&Z._f){const et=Array.isArray(Z._f.refs)?Z._f.refs[0]:Z._f.ref;if(Xr(et)){const Rt=et.closest("form");if(Rt){Rt.reset();break}}}}if(b.keepFieldsRef)for(const $ of c.mount)Ft($,L(x,$));else r={}}o=t.shouldUnregister?b.keepDefaultValues?Tt(i):{}:Tt(x),V.array.next({values:{...x}}),V.state.next({values:{...x}})}c={mount:b.keepDirtyValues?c.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!A.isValid||!!b.keepIsValid||!!b.keepDirtyValues||!t.shouldUnregister&&!Ut(x),l.watch=!!t.shouldUnregister,l.keepIsValid=!!b.keepIsValid,l.action=!1,b.keepErrors||(e.errors={}),V.state.next({submitCount:b.keepSubmitCount?e.submitCount:0,isDirty:N?!1:b.keepDirty?e.isDirty:!!(b.keepDefaultValues&&!Ae(_,i)),isSubmitted:b.keepIsSubmitted?e.isSubmitted:!1,dirtyFields:N?{}:b.keepDirtyValues?b.keepDefaultValues&&o?ln(i,o):e.dirtyFields:b.keepDefaultValues&&_?ln(i,_):b.keepDirty?e.dirtyFields:{},touchedFields:b.keepTouched?e.touchedFields:{},errors:b.keepErrors?e.errors:{},isSubmitSuccessful:b.keepIsSubmitSuccessful?e.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:i})},Ze=(_,b)=>Rr(Qt(_)?_(o):_,{...t.resetOptions,...b}),Nn=(_,b={})=>{const C=L(r,_),O=C&&C._f;if(O){const N=O.refs?O.refs[0]:O.ref;N.focus&&setTimeout(()=>{N.focus(),b.shouldSelect&&Qt(N.select)&&N.select()})}},Cr=_=>{e={...e,..._}},At={control:{register:Dn,unregister:xe,getFieldState:Rn,handleSubmit:Ye,setError:De,_subscribe:Je,_runSchema:m,_updateIsValidating:G,_focusError:xn,_getWatch:d,_getDirty:v,_setValid:B,_setFieldArray:j,_setDisabledField:Pn,_setErrors:ot,_getFieldArray:Q,_reset:Rr,_resetDefaultValues:()=>Qt(t.defaultValues)&&t.defaultValues().then(_=>{Ze(_,t.resetOptions),V.state.next({isLoading:!1})}),_removeUnmounted:E,_disableForm:br,_subjects:V,_proxyFormState:A,get _fields(){return r},get _formValues(){return o},get _state(){return l},set _state(_){l=_},get _defaultValues(){return i},get _names(){return c},set _names(_){c=_},get _formState(){return e},get _options(){return t},set _options(_){t={...t,..._}}},subscribe:Vn,trigger:Pe,register:Dn,handleSubmit:Ye,watch:Cn,setValue:Ft,getValues:Sn,reset:Ze,resetField:Sr,clearErrors:wr,unregister:xe,setError:De,setFocus:Nn,getFieldState:Rn};return{...At,formControl:At}}function Wc(n={}){const t=Lt.useRef(void 0),e=Lt.useRef(void 0),[r,i]=Lt.useState({isDirty:!1,isValidating:!1,isLoading:Qt(n.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1,isReady:!1,defaultValues:Qt(n.defaultValues)?void 0:n.defaultValues});if(!t.current)if(n.formControl)t.current={...n.formControl,formState:r},n.defaultValues&&!Qt(n.defaultValues)&&n.formControl.reset(n.defaultValues,n.resetOptions);else{const{formControl:l,...c}=Gc(n);t.current={...c,formState:r}}const o=t.current.control;return o._options=n,Vc(()=>{const l=o._subscribe({formState:o._proxyFormState,callback:()=>i({...o._formState}),reRenderRoot:!0});return i(c=>({...c,isReady:!0})),o._formState.isReady=!0,l},[o]),Lt.useEffect(()=>o._disableForm(n.disabled),[o,n.disabled]),Lt.useEffect(()=>{n.mode&&(o._options.mode=n.mode),n.reValidateMode&&(o._options.reValidateMode=n.reValidateMode)},[o,n.mode,n.reValidateMode]),Lt.useEffect(()=>{n.errors&&(o._setErrors(n.errors),o._focusError())},[o,n.errors]),Lt.useEffect(()=>{n.shouldUnregister&&o._subjects.state.next({values:o._getWatch()})},[o,n.shouldUnregister]),Lt.useEffect(()=>{if(o._proxyFormState.isDirty){const l=o._getDirty();l!==r.isDirty&&o._subjects.state.next({isDirty:l})}},[o,r.isDirty]),Lt.useEffect(()=>{var l;n.values&&!Ae(n.values,e.current)?(o._reset(n.values,{keepFieldsRef:!0,...o._options.resetOptions}),!((l=o._options.resetOptions)===null||l===void 0)&&l.keepIsValid||o._setValid(),e.current=n.values,i(c=>({...c}))):o._resetDefaultValues()},[o,n.values]),Lt.useEffect(()=>{o._state.mount||(o._setValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=Lt.useMemo(()=>Cc(r,o),[o,r]),t.current}const Kc=()=>{};var Zo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Qc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],l=n[e++],c=n[e++],f=((i&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,c=l?n[i+1]:0,f=i+2<n.length,g=f?n[i+2]:0,I=o>>2,A=(o&3)<<4|c>>4;let S=(c&15)<<2|g>>6,V=g&63;f||(V=64,l||(S=64)),r.push(e[I],e[A],e[S],e[V])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ll(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Qc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const g=i<n.length?e[n.charAt(i)]:64;++i;const A=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||g==null||A==null)throw new Xc;const S=o<<2|c>>4;if(r.push(S),g!==64){const V=c<<4&240|g>>2;if(r.push(V),A!==64){const F=g<<6&192|A;r.push(F)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Xc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jc=function(n){const t=ll(n);return ul.encodeByteArray(t,!0)},Yr=function(n){return Jc(n).replace(/\./g,"")},Yc=function(n){try{return ul.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=()=>Zc().__FIREBASE_DEFAULTS__,eh=()=>{if(typeof process>"u"||typeof Zo>"u")return;const n=Zo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},nh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Yc(n[1]);return t&&JSON.parse(t)},Ii=()=>{try{return Kc()||th()||eh()||nh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},rh=n=>{var t,e;return(e=(t=Ii())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},sh=n=>{const t=rh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},cl=()=>{var n;return(n=Ii())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function oh(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Yr(JSON.stringify(e)),Yr(JSON.stringify(l)),""].join(".")}const rr={};function lh(){const n={prod:[],emulator:[]};for(const t of Object.keys(rr))rr[t]?n.emulator.push(t):n.prod.push(t);return n}function uh(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let ta=!1;function ch(n,t){if(typeof window>"u"||typeof document>"u"||!wi(window.location.host)||rr[n]===t||rr[n]||ta)return;rr[n]=t;function e(S){return`__firebase__banner__${S}`}const r="__firebase__banner",o=lh().prod.length>0;function l(){const S=document.getElementById(r);S&&S.remove()}function c(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function f(S,V){S.setAttribute("width","24"),S.setAttribute("id",V),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{ta=!0,l()},S}function I(S,V){S.setAttribute("id",V),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function A(){const S=uh(r),V=e("text"),F=document.getElementById(V)||document.createElement("span"),M=e("learnmore"),B=document.getElementById(M)||document.createElement("a"),G=e("preprendIcon"),j=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const tt=S.element;c(tt),I(B,M);const ot=g();f(j,G),tt.append(j,F,B,ot),document.body.appendChild(tt)}o?(F.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,F.innerText="Preview backend running in this workspace."),F.setAttribute("id",V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fh(){var t;const n=(t=Ii())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dh(){return!fh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mh(){try{return typeof indexedDB=="object"}catch{return!1}}function gh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="FirebaseError";class In extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=ph,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hl.prototype.create)}}class hl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?_h(o,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new In(i,c,r)}}function _h(n,t){return n.replace(yh,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const yh=/\{\$([^}]+)}/g;function Zr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],l=t[i];if(ea(o)&&ea(l)){if(!Zr(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function ea(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(n){return n&&n._delegate?n._delegate:n}class cr{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new ih;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Th(t))try{this.getOrInitializeService({instanceIdentifier:Be})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Be){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Be){return this.instances.has(t)}getOptions(t=Be){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&l.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Be){return this.component?this.component.multipleInstances?t:Be:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vh(n){return n===Be?void 0:n}function Th(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Eh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const Ih={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},wh=J.INFO,bh={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Sh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=bh[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fl{constructor(t){this.name=t,this._logLevel=wh,this._logHandler=Sh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ih[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const Rh=(n,t)=>t.some(e=>n instanceof e);let na,ra;function Ch(){return na||(na=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vh(){return ra||(ra=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dl=new WeakMap,Zs=new WeakMap,ml=new WeakMap,qs=new WeakMap,bi=new WeakMap;function Ph(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(Ie(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&dl.set(e,n)}).catch(()=>{}),bi.set(t,n),t}function Dh(n){if(Zs.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Zs.set(n,t)}let ti={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Zs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ml.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ie(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function xh(n){ti=n(ti)}function Nh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Hs(this),t,...e);return ml.set(r,t.sort?t.sort():[t]),Ie(r)}:Vh().includes(n)?function(...t){return n.apply(Hs(this),t),Ie(dl.get(this))}:function(...t){return Ie(n.apply(Hs(this),t))}}function kh(n){return typeof n=="function"?Nh(n):(n instanceof IDBTransaction&&Dh(n),Rh(n,Ch())?new Proxy(n,ti):n)}function Ie(n){if(n instanceof IDBRequest)return Ph(n);if(qs.has(n))return qs.get(n);const t=kh(n);return t!==n&&(qs.set(n,t),bi.set(t,n)),t}const Hs=n=>bi.get(n);function Oh(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,t),c=Ie(l);return r&&l.addEventListener("upgradeneeded",f=>{r(Ie(l.result),f.oldVersion,f.newVersion,Ie(l.transaction),f)}),e&&l.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),c.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",g=>i(g.oldVersion,g.newVersion,g))}).catch(()=>{}),c}const Fh=["get","getKey","getAll","getAllKeys","count"],Mh=["put","add","delete","clear"],zs=new Map;function sa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(zs.get(t))return zs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Mh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Fh.includes(e)))return;const o=async function(l,...c){const f=this.transaction(l,i?"readwrite":"readonly");let g=f.store;return r&&(g=g.index(c.shift())),(await Promise.all([g[e](...c),i&&f.done]))[0]};return zs.set(t,o),o}xh(n=>({...n,get:(t,e,r)=>sa(t,e)||n.get(t,e,r),has:(t,e)=>!!sa(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Uh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Uh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ei="@firebase/app",ia="0.14.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new fl("@firebase/app"),Bh="@firebase/app-compat",jh="@firebase/analytics-compat",$h="@firebase/analytics",qh="@firebase/app-check-compat",Hh="@firebase/app-check",zh="@firebase/auth",Gh="@firebase/auth-compat",Wh="@firebase/database",Kh="@firebase/data-connect",Qh="@firebase/database-compat",Xh="@firebase/functions",Jh="@firebase/functions-compat",Yh="@firebase/installations",Zh="@firebase/installations-compat",tf="@firebase/messaging",ef="@firebase/messaging-compat",nf="@firebase/performance",rf="@firebase/performance-compat",sf="@firebase/remote-config",of="@firebase/remote-config-compat",af="@firebase/storage",lf="@firebase/storage-compat",uf="@firebase/firestore",cf="@firebase/ai",hf="@firebase/firestore-compat",ff="firebase",df="12.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]",mf={[ei]:"fire-core",[Bh]:"fire-core-compat",[$h]:"fire-analytics",[jh]:"fire-analytics-compat",[Hh]:"fire-app-check",[qh]:"fire-app-check-compat",[zh]:"fire-auth",[Gh]:"fire-auth-compat",[Wh]:"fire-rtdb",[Kh]:"fire-data-connect",[Qh]:"fire-rtdb-compat",[Xh]:"fire-fn",[Jh]:"fire-fn-compat",[Yh]:"fire-iid",[Zh]:"fire-iid-compat",[tf]:"fire-fcm",[ef]:"fire-fcm-compat",[nf]:"fire-perf",[rf]:"fire-perf-compat",[sf]:"fire-rc",[of]:"fire-rc-compat",[af]:"fire-gcs",[lf]:"fire-gcs-compat",[uf]:"fire-fst",[hf]:"fire-fst-compat",[cf]:"fire-vertex","fire-js":"fire-js",[ff]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new Map,gf=new Map,ri=new Map;function oa(n,t){try{n.container.addComponent(t)}catch(e){me.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function es(n){const t=n.name;if(ri.has(t))return me.debug(`There were multiple attempts to register component ${t}.`),!1;ri.set(t,n);for(const e of ts.values())oa(e,n);for(const e of gf.values())oa(e,n);return!0}function pf(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function _f(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},we=new hl("app","Firebase",yf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw we.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=df;function gl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:ni,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw we.create("bad-app-name",{appName:String(i)});if(e||(e=cl()),!e)throw we.create("no-options");const o=ts.get(i);if(o){if(Zr(e,o.options)&&Zr(r,o.config))return o;throw we.create("duplicate-app",{appName:i})}const l=new Ah(i);for(const f of ri.values())l.addComponent(f);const c=new Ef(e,r,l);return ts.set(i,c),c}function Tf(n=ni){const t=ts.get(n);if(!t&&n===ni&&cl())return gl();if(!t)throw we.create("no-app",{appName:n});return t}function fn(n,t,e){let r=mf[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${t}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),me.warn(l.join(" "));return}es(new cr(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="firebase-heartbeat-database",If=1,hr="firebase-heartbeat-store";let Gs=null;function pl(){return Gs||(Gs=Oh(Af,If,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(hr)}catch(e){console.warn(e)}}}}).catch(n=>{throw we.create("idb-open",{originalErrorMessage:n.message})})),Gs}async function wf(n){try{const e=(await pl()).transaction(hr),r=await e.objectStore(hr).get(_l(n));return await e.done,r}catch(t){if(t instanceof In)me.warn(t.message);else{const e=we.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});me.warn(e.message)}}}async function aa(n,t){try{const r=(await pl()).transaction(hr,"readwrite");await r.objectStore(hr).put(t,_l(n)),await r.done}catch(e){if(e instanceof In)me.warn(e.message);else{const r=we.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});me.warn(r.message)}}}function _l(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=1024,Sf=30;class Rf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Vf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=la();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Sf){const l=Pf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){me.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=la(),{heartbeatsToSend:r,unsentEntries:i}=Cf(this._heartbeatsCache.heartbeats),o=Yr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return me.warn(e),""}}}function la(){return new Date().toISOString().substring(0,10)}function Cf(n,t=bf){const e=[];let r=n.slice();for(const i of n){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),ua(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),ua(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Vf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mh()?gh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await wf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return aa(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return aa(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ua(n){return Yr(JSON.stringify({version:2,heartbeats:n})).length}function Pf(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n){es(new cr("platform-logger",t=>new Lh(t),"PRIVATE")),es(new cr("heartbeat",t=>new Rf(t),"PRIVATE")),fn(ei,ia,n),fn(ei,ia,"esm2020"),fn("fire-js","")}Df("");var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Si;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,m){function p(){}p.prototype=m.prototype,y.F=m.prototype,y.prototype=new p,y.prototype.constructor=y,y.D=function(T,E,v){for(var d=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)d[Q-2]=arguments[Q];return m.prototype[E].apply(T,d)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,m,p){p||(p=0);const T=Array(16);if(typeof m=="string")for(var E=0;E<16;++E)T[E]=m.charCodeAt(p++)|m.charCodeAt(p++)<<8|m.charCodeAt(p++)<<16|m.charCodeAt(p++)<<24;else for(E=0;E<16;++E)T[E]=m[p++]|m[p++]<<8|m[p++]<<16|m[p++]<<24;m=y.g[0],p=y.g[1],E=y.g[2];let v=y.g[3],d;d=m+(v^p&(E^v))+T[0]+3614090360&4294967295,m=p+(d<<7&4294967295|d>>>25),d=v+(E^m&(p^E))+T[1]+3905402710&4294967295,v=m+(d<<12&4294967295|d>>>20),d=E+(p^v&(m^p))+T[2]+606105819&4294967295,E=v+(d<<17&4294967295|d>>>15),d=p+(m^E&(v^m))+T[3]+3250441966&4294967295,p=E+(d<<22&4294967295|d>>>10),d=m+(v^p&(E^v))+T[4]+4118548399&4294967295,m=p+(d<<7&4294967295|d>>>25),d=v+(E^m&(p^E))+T[5]+1200080426&4294967295,v=m+(d<<12&4294967295|d>>>20),d=E+(p^v&(m^p))+T[6]+2821735955&4294967295,E=v+(d<<17&4294967295|d>>>15),d=p+(m^E&(v^m))+T[7]+4249261313&4294967295,p=E+(d<<22&4294967295|d>>>10),d=m+(v^p&(E^v))+T[8]+1770035416&4294967295,m=p+(d<<7&4294967295|d>>>25),d=v+(E^m&(p^E))+T[9]+2336552879&4294967295,v=m+(d<<12&4294967295|d>>>20),d=E+(p^v&(m^p))+T[10]+4294925233&4294967295,E=v+(d<<17&4294967295|d>>>15),d=p+(m^E&(v^m))+T[11]+2304563134&4294967295,p=E+(d<<22&4294967295|d>>>10),d=m+(v^p&(E^v))+T[12]+1804603682&4294967295,m=p+(d<<7&4294967295|d>>>25),d=v+(E^m&(p^E))+T[13]+4254626195&4294967295,v=m+(d<<12&4294967295|d>>>20),d=E+(p^v&(m^p))+T[14]+2792965006&4294967295,E=v+(d<<17&4294967295|d>>>15),d=p+(m^E&(v^m))+T[15]+1236535329&4294967295,p=E+(d<<22&4294967295|d>>>10),d=m+(E^v&(p^E))+T[1]+4129170786&4294967295,m=p+(d<<5&4294967295|d>>>27),d=v+(p^E&(m^p))+T[6]+3225465664&4294967295,v=m+(d<<9&4294967295|d>>>23),d=E+(m^p&(v^m))+T[11]+643717713&4294967295,E=v+(d<<14&4294967295|d>>>18),d=p+(v^m&(E^v))+T[0]+3921069994&4294967295,p=E+(d<<20&4294967295|d>>>12),d=m+(E^v&(p^E))+T[5]+3593408605&4294967295,m=p+(d<<5&4294967295|d>>>27),d=v+(p^E&(m^p))+T[10]+38016083&4294967295,v=m+(d<<9&4294967295|d>>>23),d=E+(m^p&(v^m))+T[15]+3634488961&4294967295,E=v+(d<<14&4294967295|d>>>18),d=p+(v^m&(E^v))+T[4]+3889429448&4294967295,p=E+(d<<20&4294967295|d>>>12),d=m+(E^v&(p^E))+T[9]+568446438&4294967295,m=p+(d<<5&4294967295|d>>>27),d=v+(p^E&(m^p))+T[14]+3275163606&4294967295,v=m+(d<<9&4294967295|d>>>23),d=E+(m^p&(v^m))+T[3]+4107603335&4294967295,E=v+(d<<14&4294967295|d>>>18),d=p+(v^m&(E^v))+T[8]+1163531501&4294967295,p=E+(d<<20&4294967295|d>>>12),d=m+(E^v&(p^E))+T[13]+2850285829&4294967295,m=p+(d<<5&4294967295|d>>>27),d=v+(p^E&(m^p))+T[2]+4243563512&4294967295,v=m+(d<<9&4294967295|d>>>23),d=E+(m^p&(v^m))+T[7]+1735328473&4294967295,E=v+(d<<14&4294967295|d>>>18),d=p+(v^m&(E^v))+T[12]+2368359562&4294967295,p=E+(d<<20&4294967295|d>>>12),d=m+(p^E^v)+T[5]+4294588738&4294967295,m=p+(d<<4&4294967295|d>>>28),d=v+(m^p^E)+T[8]+2272392833&4294967295,v=m+(d<<11&4294967295|d>>>21),d=E+(v^m^p)+T[11]+1839030562&4294967295,E=v+(d<<16&4294967295|d>>>16),d=p+(E^v^m)+T[14]+4259657740&4294967295,p=E+(d<<23&4294967295|d>>>9),d=m+(p^E^v)+T[1]+2763975236&4294967295,m=p+(d<<4&4294967295|d>>>28),d=v+(m^p^E)+T[4]+1272893353&4294967295,v=m+(d<<11&4294967295|d>>>21),d=E+(v^m^p)+T[7]+4139469664&4294967295,E=v+(d<<16&4294967295|d>>>16),d=p+(E^v^m)+T[10]+3200236656&4294967295,p=E+(d<<23&4294967295|d>>>9),d=m+(p^E^v)+T[13]+681279174&4294967295,m=p+(d<<4&4294967295|d>>>28),d=v+(m^p^E)+T[0]+3936430074&4294967295,v=m+(d<<11&4294967295|d>>>21),d=E+(v^m^p)+T[3]+3572445317&4294967295,E=v+(d<<16&4294967295|d>>>16),d=p+(E^v^m)+T[6]+76029189&4294967295,p=E+(d<<23&4294967295|d>>>9),d=m+(p^E^v)+T[9]+3654602809&4294967295,m=p+(d<<4&4294967295|d>>>28),d=v+(m^p^E)+T[12]+3873151461&4294967295,v=m+(d<<11&4294967295|d>>>21),d=E+(v^m^p)+T[15]+530742520&4294967295,E=v+(d<<16&4294967295|d>>>16),d=p+(E^v^m)+T[2]+3299628645&4294967295,p=E+(d<<23&4294967295|d>>>9),d=m+(E^(p|~v))+T[0]+4096336452&4294967295,m=p+(d<<6&4294967295|d>>>26),d=v+(p^(m|~E))+T[7]+1126891415&4294967295,v=m+(d<<10&4294967295|d>>>22),d=E+(m^(v|~p))+T[14]+2878612391&4294967295,E=v+(d<<15&4294967295|d>>>17),d=p+(v^(E|~m))+T[5]+4237533241&4294967295,p=E+(d<<21&4294967295|d>>>11),d=m+(E^(p|~v))+T[12]+1700485571&4294967295,m=p+(d<<6&4294967295|d>>>26),d=v+(p^(m|~E))+T[3]+2399980690&4294967295,v=m+(d<<10&4294967295|d>>>22),d=E+(m^(v|~p))+T[10]+4293915773&4294967295,E=v+(d<<15&4294967295|d>>>17),d=p+(v^(E|~m))+T[1]+2240044497&4294967295,p=E+(d<<21&4294967295|d>>>11),d=m+(E^(p|~v))+T[8]+1873313359&4294967295,m=p+(d<<6&4294967295|d>>>26),d=v+(p^(m|~E))+T[15]+4264355552&4294967295,v=m+(d<<10&4294967295|d>>>22),d=E+(m^(v|~p))+T[6]+2734768916&4294967295,E=v+(d<<15&4294967295|d>>>17),d=p+(v^(E|~m))+T[13]+1309151649&4294967295,p=E+(d<<21&4294967295|d>>>11),d=m+(E^(p|~v))+T[4]+4149444226&4294967295,m=p+(d<<6&4294967295|d>>>26),d=v+(p^(m|~E))+T[11]+3174756917&4294967295,v=m+(d<<10&4294967295|d>>>22),d=E+(m^(v|~p))+T[2]+718787259&4294967295,E=v+(d<<15&4294967295|d>>>17),d=p+(v^(E|~m))+T[9]+3951481745&4294967295,y.g[0]=y.g[0]+m&4294967295,y.g[1]=y.g[1]+(E+(d<<21&4294967295|d>>>11))&4294967295,y.g[2]=y.g[2]+E&4294967295,y.g[3]=y.g[3]+v&4294967295}r.prototype.v=function(y,m){m===void 0&&(m=y.length);const p=m-this.blockSize,T=this.C;let E=this.h,v=0;for(;v<m;){if(E==0)for(;v<=p;)i(this,y,v),v+=this.blockSize;if(typeof y=="string"){for(;v<m;)if(T[E++]=y.charCodeAt(v++),E==this.blockSize){i(this,T),E=0;break}}else for(;v<m;)if(T[E++]=y[v++],E==this.blockSize){i(this,T),E=0;break}}this.h=E,this.o+=m},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var m=1;m<y.length-8;++m)y[m]=0;m=this.o*8;for(var p=y.length-8;p<y.length;++p)y[p]=m&255,m/=256;for(this.v(y),y=Array(16),m=0,p=0;p<4;++p)for(let T=0;T<32;T+=8)y[m++]=this.g[p]>>>T&255;return y};function o(y,m){var p=c;return Object.prototype.hasOwnProperty.call(p,y)?p[y]:p[y]=m(y)}function l(y,m){this.h=m;const p=[];let T=!0;for(let E=y.length-1;E>=0;E--){const v=y[E]|0;T&&v==m||(p[E]=v,T=!1)}this.g=p}var c={};function f(y){return-128<=y&&y<128?o(y,function(m){return new l([m|0],m<0?-1:0)}):new l([y|0],y<0?-1:0)}function g(y){if(isNaN(y)||!isFinite(y))return A;if(y<0)return B(g(-y));const m=[];let p=1;for(let T=0;y>=p;T++)m[T]=y/p|0,p*=4294967296;return new l(m,0)}function I(y,m){if(y.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(y.charAt(0)=="-")return B(I(y.substring(1),m));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const p=g(Math.pow(m,8));let T=A;for(let v=0;v<y.length;v+=8){var E=Math.min(8,y.length-v);const d=parseInt(y.substring(v,v+E),m);E<8?(E=g(Math.pow(m,E)),T=T.j(E).add(g(d))):(T=T.j(p),T=T.add(g(d)))}return T}var A=f(0),S=f(1),V=f(16777216);n=l.prototype,n.m=function(){if(M(this))return-B(this).m();let y=0,m=1;for(let p=0;p<this.g.length;p++){const T=this.i(p);y+=(T>=0?T:4294967296+T)*m,m*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(F(this))return"0";if(M(this))return"-"+B(this).toString(y);const m=g(Math.pow(y,6));var p=this;let T="";for(;;){const E=ot(p,m).g;p=G(p,E.j(m));let v=((p.g.length>0?p.g[0]:p.h)>>>0).toString(y);if(p=E,F(p))return v+T;for(;v.length<6;)v="0"+v;T=v+T}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function F(y){if(y.h!=0)return!1;for(let m=0;m<y.g.length;m++)if(y.g[m]!=0)return!1;return!0}function M(y){return y.h==-1}n.l=function(y){return y=G(this,y),M(y)?-1:F(y)?0:1};function B(y){const m=y.g.length,p=[];for(let T=0;T<m;T++)p[T]=~y.g[T];return new l(p,~y.h).add(S)}n.abs=function(){return M(this)?B(this):this},n.add=function(y){const m=Math.max(this.g.length,y.g.length),p=[];let T=0;for(let E=0;E<=m;E++){let v=T+(this.i(E)&65535)+(y.i(E)&65535),d=(v>>>16)+(this.i(E)>>>16)+(y.i(E)>>>16);T=d>>>16,v&=65535,d&=65535,p[E]=d<<16|v}return new l(p,p[p.length-1]&-2147483648?-1:0)};function G(y,m){return y.add(B(m))}n.j=function(y){if(F(this)||F(y))return A;if(M(this))return M(y)?B(this).j(B(y)):B(B(this).j(y));if(M(y))return B(this.j(B(y)));if(this.l(V)<0&&y.l(V)<0)return g(this.m()*y.m());const m=this.g.length+y.g.length,p=[];for(var T=0;T<2*m;T++)p[T]=0;for(T=0;T<this.g.length;T++)for(let E=0;E<y.g.length;E++){const v=this.i(T)>>>16,d=this.i(T)&65535,Q=y.i(E)>>>16,at=y.i(E)&65535;p[2*T+2*E]+=d*at,j(p,2*T+2*E),p[2*T+2*E+1]+=v*at,j(p,2*T+2*E+1),p[2*T+2*E+1]+=d*Q,j(p,2*T+2*E+1),p[2*T+2*E+2]+=v*Q,j(p,2*T+2*E+2)}for(y=0;y<m;y++)p[y]=p[2*y+1]<<16|p[2*y];for(y=m;y<2*m;y++)p[y]=0;return new l(p,0)};function j(y,m){for(;(y[m]&65535)!=y[m];)y[m+1]+=y[m]>>>16,y[m]&=65535,m++}function tt(y,m){this.g=y,this.h=m}function ot(y,m){if(F(m))throw Error("division by zero");if(F(y))return new tt(A,A);if(M(y))return m=ot(B(y),m),new tt(B(m.g),B(m.h));if(M(m))return m=ot(y,B(m)),new tt(B(m.g),m.h);if(y.g.length>30){if(M(y)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var p=S,T=m;T.l(y)<=0;)p=Y(p),T=Y(T);var E=gt(p,1),v=gt(T,1);for(T=gt(T,2),p=gt(p,2);!F(T);){var d=v.add(T);d.l(y)<=0&&(E=E.add(p),v=d),T=gt(T,1),p=gt(p,1)}return m=G(y,E.j(m)),new tt(E,m)}for(E=A;y.l(m)>=0;){for(p=Math.max(1,Math.floor(y.m()/m.m())),T=Math.ceil(Math.log(p)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),v=g(p),d=v.j(m);M(d)||d.l(y)>0;)p-=T,v=g(p),d=v.j(m);F(v)&&(v=S),E=E.add(v),y=G(y,d)}return new tt(E,y)}n.B=function(y){return ot(this,y).h},n.and=function(y){const m=Math.max(this.g.length,y.g.length),p=[];for(let T=0;T<m;T++)p[T]=this.i(T)&y.i(T);return new l(p,this.h&y.h)},n.or=function(y){const m=Math.max(this.g.length,y.g.length),p=[];for(let T=0;T<m;T++)p[T]=this.i(T)|y.i(T);return new l(p,this.h|y.h)},n.xor=function(y){const m=Math.max(this.g.length,y.g.length),p=[];for(let T=0;T<m;T++)p[T]=this.i(T)^y.i(T);return new l(p,this.h^y.h)};function Y(y){const m=y.g.length+1,p=[];for(let T=0;T<m;T++)p[T]=y.i(T)<<1|y.i(T-1)>>>31;return new l(p,y.h)}function gt(y,m){const p=m>>5;m%=32;const T=y.g.length-p,E=[];for(let v=0;v<T;v++)E[v]=m>0?y.i(v+p)>>>m|y.i(v+p+1)<<32-m:y.i(v+p);return new l(E,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=g,l.fromString=I,Si=l}).apply(typeof ca<"u"?ca:typeof self<"u"?self:typeof window<"u"?window:{});var Ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yl,tr,El,zr,si,vl,Tl,Al;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ur=="object"&&Ur];for(var a=0;a<s.length;++a){var u=s[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var u=r;s=s.split(".");for(var h=0;h<s.length-1;h++){var w=s[h];if(!(w in u))break t;u=u[w]}s=s[s.length-1],h=u[s],a=a(h),a!=h&&a!=null&&t(u,s,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(a){var u=[],h;for(h in a)Object.prototype.hasOwnProperty.call(a,h)&&u.push([h,a[h]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function f(s,a,u){return s.call.apply(s.bind,arguments)}function g(s,a,u){return g=f,g.apply(null,arguments)}function I(s,a){var u=Array.prototype.slice.call(arguments,1);return function(){var h=u.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function A(s,a){function u(){}u.prototype=a.prototype,s.Z=a.prototype,s.prototype=new u,s.prototype.constructor=s,s.Ob=function(h,w,R){for(var k=Array(arguments.length-2),z=2;z<arguments.length;z++)k[z-2]=arguments[z];return a.prototype[w].apply(h,k)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function V(s){const a=s.length;if(a>0){const u=Array(a);for(let h=0;h<a;h++)u[h]=s[h];return u}return[]}function F(s,a){for(let h=1;h<arguments.length;h++){const w=arguments[h];var u=typeof w;if(u=u!="object"?u:w?Array.isArray(w)?"array":u:"null",u=="array"||u=="object"&&typeof w.length=="number"){u=s.length||0;const R=w.length||0;s.length=u+R;for(let k=0;k<R;k++)s[u+k]=w[k]}else s.push(w)}}class M{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function B(s){l.setTimeout(()=>{throw s},0)}function G(){var s=y;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class j{constructor(){this.h=this.g=null}add(a,u){const h=tt.get();h.set(a,u),this.h?this.h.next=h:this.g=h,this.h=h}}var tt=new M(()=>new ot,s=>s.reset());class ot{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,gt=!1,y=new j,m=()=>{const s=Promise.resolve(void 0);Y=()=>{s.then(p)}};function p(){for(var s;s=G();){try{s.h.call(s.g)}catch(u){B(u)}var a=tt;a.j(s),a.h<100&&(a.h++,s.next=a.g,a.g=s)}gt=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var v=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};l.addEventListener("test",u,a),l.removeEventListener("test",u,a)}catch{}return s}();function d(s){return/^[\s\xa0]*$/.test(s)}function Q(s,a){E.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,a)}A(Q,E),Q.prototype.init=function(s,a){const u=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget,a||(u=="mouseover"?a=s.fromElement:u=="mouseout"&&(a=s.toElement)),this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&Q.Z.h.call(this)},Q.prototype.h=function(){Q.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var at="closure_listenable_"+(Math.random()*1e6|0),qt=0;function Ft(s,a,u,h,w){this.listener=s,this.proxy=null,this.src=a,this.type=u,this.capture=!!h,this.ha=w,this.key=++qt,this.da=this.fa=!1}function te(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function ee(s,a,u){for(const h in s)a.call(u,s[h],h,s)}function Pe(s,a){for(const u in s)a.call(void 0,s[u],u,s)}function Sn(s){const a={};for(const u in s)a[u]=s[u];return a}const Rn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wr(s,a){let u,h;for(let w=1;w<arguments.length;w++){h=arguments[w];for(u in h)s[u]=h[u];for(let R=0;R<Rn.length;R++)u=Rn[R],Object.prototype.hasOwnProperty.call(h,u)&&(s[u]=h[u])}}function De(s){this.src=s,this.g={},this.h=0}De.prototype.add=function(s,a,u,h,w){const R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);const k=Je(s,a,h,w);return k>-1?(a=s[k],u||(a.fa=!1)):(a=new Ft(a,this.src,R,!!h,w),a.fa=u,s.push(a)),a};function Cn(s,a){const u=a.type;if(u in s.g){var h=s.g[u],w=Array.prototype.indexOf.call(h,a,void 0),R;(R=w>=0)&&Array.prototype.splice.call(h,w,1),R&&(te(a),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Je(s,a,u,h){for(let w=0;w<s.length;++w){const R=s[w];if(!R.da&&R.listener==a&&R.capture==!!u&&R.ha==h)return w}return-1}var Vn="closure_lm_"+(Math.random()*1e6|0),xe={};function Pn(s,a,u,h,w){if(Array.isArray(a)){for(let R=0;R<a.length;R++)Pn(s,a[R],u,h,w);return null}return u=Cr(u),s&&s[at]?s.J(a,u,c(h)?!!h.capture:!1,w):Dn(s,a,u,!1,h,w)}function Dn(s,a,u,h,w,R){if(!a)throw Error("Invalid event type");const k=c(w)?!!w.capture:!!w;let z=Ze(s);if(z||(s[Vn]=z=new De(s)),u=z.add(a,u,h,k,R),u.proxy)return u;if(h=xn(),u.proxy=h,h.src=s,h.listener=u,s.addEventListener)v||(w=k),w===void 0&&(w=!1),s.addEventListener(a.toString(),h,w);else if(s.attachEvent)s.attachEvent(Sr(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return u}function xn(){function s(u){return a.call(s.src,s.listener,u)}const a=Rr;return s}function br(s,a,u,h,w){if(Array.isArray(a))for(var R=0;R<a.length;R++)br(s,a[R],u,h,w);else h=c(h)?!!h.capture:!!h,u=Cr(u),s&&s[at]?(s=s.i,R=String(a).toString(),R in s.g&&(a=s.g[R],u=Je(a,u,h,w),u>-1&&(te(a[u]),Array.prototype.splice.call(a,u,1),a.length==0&&(delete s.g[R],s.h--)))):s&&(s=Ze(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Je(a,u,h,w)),(u=s>-1?a[s]:null)&&Ye(u))}function Ye(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[at])Cn(a.i,s);else{var u=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(u,h,s.capture):a.detachEvent?a.detachEvent(Sr(u),h):a.addListener&&a.removeListener&&a.removeListener(h),(u=Ze(a))?(Cn(u,s),u.h==0&&(u.src=null,a[Vn]=null)):te(s)}}}function Sr(s){return s in xe?xe[s]:xe[s]="on"+s}function Rr(s,a){if(s.da)s=!0;else{a=new Q(a,this);const u=s.listener,h=s.ha||s.src;s.fa&&Ye(s),s=u.call(h,a)}return s}function Ze(s){return s=s[Vn],s instanceof De?s:null}var Nn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Cr(s){return typeof s=="function"?s:(s[Nn]||(s[Nn]=function(a){return s.handleEvent(a)}),s[Nn])}function St(){T.call(this),this.i=new De(this),this.M=this,this.G=null}A(St,T),St.prototype[at]=!0,St.prototype.removeEventListener=function(s,a,u,h){br(this,s,a,u,h)};function At(s,a){var u,h=s.G;if(h)for(u=[];h;h=h.G)u.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new E(a,s);else if(a instanceof E)a.target=a.target||s;else{var w=a;a=new E(h,s),wr(a,w)}w=!0;let R,k;if(u)for(k=u.length-1;k>=0;k--)R=a.g=u[k],w=_(R,h,!0,a)&&w;if(R=a.g=s,w=_(R,h,!0,a)&&w,w=_(R,h,!1,a)&&w,u)for(k=0;k<u.length;k++)R=a.g=u[k],w=_(R,h,!1,a)&&w}St.prototype.N=function(){if(St.Z.N.call(this),this.i){var s=this.i;for(const a in s.g){const u=s.g[a];for(let h=0;h<u.length;h++)te(u[h]);delete s.g[a],s.h--}}this.G=null},St.prototype.J=function(s,a,u,h){return this.i.add(String(s),a,!1,u,h)},St.prototype.K=function(s,a,u,h){return this.i.add(String(s),a,!0,u,h)};function _(s,a,u,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();let w=!0;for(let R=0;R<a.length;++R){const k=a[R];if(k&&!k.da&&k.capture==u){const z=k.listener,vt=k.ha||k.src;k.fa&&Cn(s.i,k),w=z.call(vt,h)!==!1&&w}}return w&&!h.defaultPrevented}function b(s,a){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=g(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:l.setTimeout(s,a||0)}function C(s){s.g=b(()=>{s.g=null,s.i&&(s.i=!1,C(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class O extends T{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:C(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function N(s){T.call(this),this.h=s,this.g={}}A(N,T);var x=[];function $(s){ee(s.g,function(a,u){this.g.hasOwnProperty(u)&&Ye(a)},s),s.g={}}N.prototype.N=function(){N.Z.N.call(this),$(this)},N.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Z=l.JSON.stringify,et=l.JSON.parse,Rt=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function ne(){}function Wt(){}var Ne={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ke(){E.call(this,"d")}A(ke,E);function Oe(){E.call(this,"c")}A(Oe,E);var ce={},kn=null;function tn(){return kn=kn||new St}ce.Ia="serverreachability";function On(s){E.call(this,ce.Ia,s)}A(On,E);function Fn(s){const a=tn();At(a,new On(a))}ce.STAT_EVENT="statevent";function Qi(s,a){E.call(this,ce.STAT_EVENT,s),this.stat=a}A(Qi,E);function Mt(s){const a=tn();At(a,new Qi(a,s))}ce.Ja="timingevent";function Xi(s,a){E.call(this,ce.Ja,s),this.size=a}A(Xi,E);function Mn(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function Ln(){this.g=!0}Ln.prototype.ua=function(){this.g=!1};function Ru(s,a,u,h,w,R){s.info(function(){if(s.g)if(R){var k="",z=R.split("&");for(let rt=0;rt<z.length;rt++){var vt=z[rt].split("=");if(vt.length>1){const It=vt[0];vt=vt[1];const se=It.split("_");k=se.length>=2&&se[1]=="type"?k+(It+"="+vt+"&"):k+(It+"=redacted&")}}}else k=null;else k=R;return"XMLHTTP REQ ("+h+") [attempt "+w+"]: "+a+`
`+u+`
`+k})}function Cu(s,a,u,h,w,R,k){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+w+"]: "+a+`
`+u+`
`+R+" "+k})}function en(s,a,u,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Pu(s,u)+(h?" "+h:"")})}function Vu(s,a){s.info(function(){return"TIMEOUT: "+a})}Ln.prototype.info=function(){};function Pu(s,a){if(!s.g)return a;if(!a)return null;try{const R=JSON.parse(a);if(R){for(s=0;s<R.length;s++)if(Array.isArray(R[s])){var u=R[s];if(!(u.length<2)){var h=u[1];if(Array.isArray(h)&&!(h.length<1)){var w=h[0];if(w!="noop"&&w!="stop"&&w!="close")for(let k=1;k<h.length;k++)h[k]=""}}}}return Z(R)}catch{return a}}var Vr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ji={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Yi;function Ss(){}A(Ss,ne),Ss.prototype.g=function(){return new XMLHttpRequest},Yi=new Ss;function Un(s){return encodeURIComponent(String(s))}function Du(s){var a=1;s=s.split(":");const u=[];for(;a>0&&s.length;)u.push(s.shift()),a--;return s.length&&u.push(s.join(":")),u}function ge(s,a,u,h){this.j=s,this.i=a,this.l=u,this.S=h||1,this.V=new N(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Zi}function Zi(){this.i=null,this.g="",this.h=!1}var to={},Rs={};function Cs(s,a,u){s.M=1,s.A=Dr(re(a)),s.u=u,s.R=!0,eo(s,null)}function eo(s,a){s.F=Date.now(),Pr(s),s.B=re(s.A);var u=s.B,h=s.S;Array.isArray(h)||(h=[String(h)]),go(u.i,"t",h),s.C=0,u=s.j.L,s.h=new Zi,s.g=No(s.j,u?a:null,!s.u),s.P>0&&(s.O=new O(g(s.Y,s,s.g),s.P)),a=s.V,u=s.g,h=s.ba;var w="readystatechange";Array.isArray(w)||(w&&(x[0]=w.toString()),w=x);for(let R=0;R<w.length;R++){const k=Pn(u,w[R],h||a.handleEvent,!1,a.h||a);if(!k)break;a.g[k.key]=k}a=s.J?Sn(s.J):{},s.u?(s.v||(s.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,a)):(s.v="GET",s.g.ea(s.B,s.v,null,a)),Fn(),Ru(s.i,s.v,s.B,s.l,s.S,s.u)}ge.prototype.ba=function(s){s=s.target;const a=this.O;a&&ye(s)==3?a.j():this.Y(s)},ge.prototype.Y=function(s){try{if(s==this.g)t:{const z=ye(this.g),vt=this.g.ya(),rt=this.g.ca();if(!(z<3)&&(z!=3||this.g&&(this.h.h||this.g.la()||Ao(this.g)))){this.K||z!=4||vt==7||(vt==8||rt<=0?Fn(3):Fn(2)),Vs(this);var a=this.g.ca();this.X=a;var u=xu(this);if(this.o=a==200,Cu(this.i,this.v,this.B,this.l,this.S,z,a),this.o){if(this.U&&!this.L){e:{if(this.g){var h,w=this.g;if((h=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(h)){var R=h;break e}}R=null}if(s=R)en(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ps(this,s);else{this.o=!1,this.m=3,Mt(12),Fe(this),Bn(this);break t}}if(this.R){s=!0;let It;for(;!this.K&&this.C<u.length;)if(It=Nu(this,u),It==Rs){z==4&&(this.m=4,Mt(14),s=!1),en(this.i,this.l,null,"[Incomplete Response]");break}else if(It==to){this.m=4,Mt(15),en(this.i,this.l,u,"[Invalid Chunk]"),s=!1;break}else en(this.i,this.l,It,null),Ps(this,It);if(no(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),z!=4||u.length!=0||this.h.h||(this.m=1,Mt(16),s=!1),this.o=this.o&&s,!s)en(this.i,this.l,u,"[Invalid Chunked Response]"),Fe(this),Bn(this);else if(u.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Ls(k),k.P=!0,Mt(11))}}else en(this.i,this.l,u,null),Ps(this,u);z==4&&Fe(this),this.o&&!this.K&&(z==4?Vo(this.j,this):(this.o=!1,Pr(this)))}else Wu(this.g),a==400&&u.indexOf("Unknown SID")>0?(this.m=3,Mt(12)):(this.m=0,Mt(13)),Fe(this),Bn(this)}}}catch{}finally{}};function xu(s){if(!no(s))return s.g.la();const a=Ao(s.g);if(a==="")return"";let u="";const h=a.length,w=ye(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return Fe(s),Bn(s),"";s.h.i=new l.TextDecoder}for(let R=0;R<h;R++)s.h.h=!0,u+=s.h.i.decode(a[R],{stream:!(w&&R==h-1)});return a.length=0,s.h.g+=u,s.C=0,s.h.g}function no(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function Nu(s,a){var u=s.C,h=a.indexOf(`
`,u);return h==-1?Rs:(u=Number(a.substring(u,h)),isNaN(u)?to:(h+=1,h+u>a.length?Rs:(a=a.slice(h,h+u),s.C=h+u,a)))}ge.prototype.cancel=function(){this.K=!0,Fe(this)};function Pr(s){s.T=Date.now()+s.H,ro(s,s.H)}function ro(s,a){if(s.D!=null)throw Error("WatchDog timer not null");s.D=Mn(g(s.aa,s),a)}function Vs(s){s.D&&(l.clearTimeout(s.D),s.D=null)}ge.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(Vu(this.i,this.B),this.M!=2&&(Fn(),Mt(17)),Fe(this),this.m=2,Bn(this)):ro(this,this.T-s)};function Bn(s){s.j.I==0||s.K||Vo(s.j,s)}function Fe(s){Vs(s);var a=s.O;a&&typeof a.dispose=="function"&&a.dispose(),s.O=null,$(s.V),s.g&&(a=s.g,s.g=null,a.abort(),a.dispose())}function Ps(s,a){try{var u=s.j;if(u.I!=0&&(u.g==s||Ds(u.h,s))){if(!s.L&&Ds(u.h,s)&&u.I==3){try{var h=u.Ba.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var w=h;if(w[0]==0){t:if(!u.v){if(u.g)if(u.g.F+3e3<s.F)Fr(u),kr(u);else break t;Ms(u),Mt(18)}}else u.xa=w[1],0<u.xa-u.K&&w[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=Mn(g(u.Va,u),6e3));oo(u.h)<=1&&u.ta&&(u.ta=void 0)}else Le(u,11)}else if((s.L||u.g==s)&&Fr(u),!d(a))for(w=u.Ba.g.parse(a),a=0;a<w.length;a++){let rt=w[a];const It=rt[0];if(!(It<=u.K))if(u.K=It,rt=rt[1],u.I==2)if(rt[0]=="c"){u.M=rt[1],u.ba=rt[2];const se=rt[3];se!=null&&(u.ka=se,u.j.info("VER="+u.ka));const Ue=rt[4];Ue!=null&&(u.za=Ue,u.j.info("SVER="+u.za));const Ee=rt[5];Ee!=null&&typeof Ee=="number"&&Ee>0&&(h=1.5*Ee,u.O=h,u.j.info("backChannelRequestTimeoutMs_="+h)),h=u;const ve=s.g;if(ve){const Lr=ve.g?ve.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Lr){var R=h.h;R.g||Lr.indexOf("spdy")==-1&&Lr.indexOf("quic")==-1&&Lr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(xs(R,R.h),R.h=null))}if(h.G){const Us=ve.g?ve.g.getResponseHeader("X-HTTP-Session-Id"):null;Us&&(h.wa=Us,it(h.J,h.G,Us))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-s.F,u.j.info("Handshake RTT: "+u.T+"ms")),h=u;var k=s;if(h.na=xo(h,h.L?h.ba:null,h.W),k.L){ao(h.h,k);var z=k,vt=h.O;vt&&(z.H=vt),z.D&&(Vs(z),Pr(z)),h.g=k}else Ro(h);u.i.length>0&&Or(u)}else rt[0]!="stop"&&rt[0]!="close"||Le(u,7);else u.I==3&&(rt[0]=="stop"||rt[0]=="close"?rt[0]=="stop"?Le(u,7):Fs(u):rt[0]!="noop"&&u.l&&u.l.qa(rt),u.A=0)}}Fn(4)}catch{}}var ku=class{constructor(s,a){this.g=s,this.map=a}};function so(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function io(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function oo(s){return s.h?1:s.g?s.g.size:0}function Ds(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function xs(s,a){s.g?s.g.add(a):s.h=a}function ao(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}so.prototype.cancel=function(){if(this.i=lo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function lo(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const u of s.g.values())a=a.concat(u.G);return a}return V(s.i)}var uo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ou(s,a){if(s){s=s.split("&");for(let u=0;u<s.length;u++){const h=s[u].indexOf("=");let w,R=null;h>=0?(w=s[u].substring(0,h),R=s[u].substring(h+1)):w=s[u],a(w,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function pe(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;s instanceof pe?(this.l=s.l,jn(this,s.j),this.o=s.o,this.g=s.g,$n(this,s.u),this.h=s.h,Ns(this,po(s.i)),this.m=s.m):s&&(a=String(s).match(uo))?(this.l=!1,jn(this,a[1]||"",!0),this.o=qn(a[2]||""),this.g=qn(a[3]||"",!0),$n(this,a[4]),this.h=qn(a[5]||"",!0),Ns(this,a[6]||"",!0),this.m=qn(a[7]||"")):(this.l=!1,this.i=new zn(null,this.l))}pe.prototype.toString=function(){const s=[];var a=this.j;a&&s.push(Hn(a,co,!0),":");var u=this.g;return(u||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Hn(a,co,!0),"@"),s.push(Un(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&s.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Hn(u,u.charAt(0)=="/"?Lu:Mu,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Hn(u,Bu)),s.join("")},pe.prototype.resolve=function(s){const a=re(this);let u=!!s.j;u?jn(a,s.j):u=!!s.o,u?a.o=s.o:u=!!s.g,u?a.g=s.g:u=s.u!=null;var h=s.h;if(u)$n(a,s.u);else if(u=!!s.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var w=a.h.lastIndexOf("/");w!=-1&&(h=a.h.slice(0,w+1)+h)}if(w=h,w==".."||w==".")h="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){h=w.lastIndexOf("/",0)==0,w=w.split("/");const R=[];for(let k=0;k<w.length;){const z=w[k++];z=="."?h&&k==w.length&&R.push(""):z==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),h&&k==w.length&&R.push("")):(R.push(z),h=!0)}h=R.join("/")}else h=w}return u?a.h=h:u=s.i.toString()!=="",u?Ns(a,po(s.i)):u=!!s.m,u&&(a.m=s.m),a};function re(s){return new pe(s)}function jn(s,a,u){s.j=u?qn(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function $n(s,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);s.u=a}else s.u=null}function Ns(s,a,u){a instanceof zn?(s.i=a,ju(s.i,s.l)):(u||(a=Hn(a,Uu)),s.i=new zn(a,s.l))}function it(s,a,u){s.i.set(a,u)}function Dr(s){return it(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function qn(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Hn(s,a,u){return typeof s=="string"?(s=encodeURI(s).replace(a,Fu),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Fu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var co=/[#\/\?@]/g,Mu=/[#\?:]/g,Lu=/[#\?]/g,Uu=/[#\?@]/g,Bu=/#/g;function zn(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Me(s){s.g||(s.g=new Map,s.h=0,s.i&&Ou(s.i,function(a,u){s.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=zn.prototype,n.add=function(s,a){Me(this),this.i=null,s=nn(this,s);let u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(a),this.h+=1,this};function ho(s,a){Me(s),a=nn(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function fo(s,a){return Me(s),a=nn(s,a),s.g.has(a)}n.forEach=function(s,a){Me(this),this.g.forEach(function(u,h){u.forEach(function(w){s.call(a,w,h,this)},this)},this)};function mo(s,a){Me(s);let u=[];if(typeof a=="string")fo(s,a)&&(u=u.concat(s.g.get(nn(s,a))));else for(s=Array.from(s.g.values()),a=0;a<s.length;a++)u=u.concat(s[a]);return u}n.set=function(s,a){return Me(this),this.i=null,s=nn(this,s),fo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=mo(this,s),s.length>0?String(s[0]):a):a};function go(s,a,u){ho(s,a),u.length>0&&(s.i=null,s.g.set(nn(s,a),V(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(let h=0;h<a.length;h++){var u=a[h];const w=Un(u);u=mo(this,u);for(let R=0;R<u.length;R++){let k=w;u[R]!==""&&(k+="="+Un(u[R])),s.push(k)}}return this.i=s.join("&")};function po(s){const a=new zn;return a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),a}function nn(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function ju(s,a){a&&!s.j&&(Me(s),s.i=null,s.g.forEach(function(u,h){const w=h.toLowerCase();h!=w&&(ho(this,h),go(this,w,u))},s)),s.j=a}function $u(s,a){const u=new Ln;if(l.Image){const h=new Image;h.onload=I(_e,u,"TestLoadImage: loaded",!0,a,h),h.onerror=I(_e,u,"TestLoadImage: error",!1,a,h),h.onabort=I(_e,u,"TestLoadImage: abort",!1,a,h),h.ontimeout=I(_e,u,"TestLoadImage: timeout",!1,a,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function qu(s,a){const u=new Ln,h=new AbortController,w=setTimeout(()=>{h.abort(),_e(u,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(R=>{clearTimeout(w),R.ok?_e(u,"TestPingServer: ok",!0,a):_e(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(w),_e(u,"TestPingServer: error",!1,a)})}function _e(s,a,u,h,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),h(u)}catch{}}function Hu(){this.g=new Rt}function ks(s){this.i=s.Sb||null,this.h=s.ab||!1}A(ks,ne),ks.prototype.g=function(){return new xr(this.i,this.h)};function xr(s,a){St.call(this),this.H=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(xr,St),n=xr.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=a,this.readyState=1,Wn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(a.body=s),(this.H||l).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Gn(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_o(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function _o(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Gn(this):Wn(this),this.readyState==3&&_o(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Gn(this))},n.Na=function(s){this.g&&(this.response=s,Gn(this))},n.ga=function(){this.g&&Gn(this)};function Gn(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Wn(s)}n.setRequestHeader=function(s,a){this.A.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=a.next();return s.join(`\r
`)};function Wn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function yo(s){let a="";return ee(s,function(u,h){a+=h,a+=":",a+=u,a+=`\r
`}),a}function Os(s,a,u){t:{for(h in u){var h=!1;break t}h=!0}h||(u=yo(u),typeof s=="string"?u!=null&&Un(u):it(s,a,u))}function dt(s){St.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(dt,St);var zu=/^https?$/i,Gu=["POST","PUT"];n=dt.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,a,u,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Yi.g(),this.g.onreadystatechange=S(g(this.Ca,this));try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(R){Eo(this,R);return}if(s=u||"",u=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var w in h)u.set(w,h[w]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const R of h.keys())u.set(R,h.get(R));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),w=l.FormData&&s instanceof l.FormData,!(Array.prototype.indexOf.call(Gu,a,void 0)>=0)||h||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,k]of u)this.g.setRequestHeader(R,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(R){Eo(this,R)}};function Eo(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.o=5,vo(s),Nr(s)}function vo(s){s.A||(s.A=!0,At(s,"complete"),At(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,At(this,"complete"),At(this,"abort"),Nr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Nr(this,!0)),dt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?To(this):this.Xa())},n.Xa=function(){To(this)};function To(s){if(s.h&&typeof o<"u"){if(s.v&&ye(s)==4)setTimeout(s.Ca.bind(s),0);else if(At(s,"readystatechange"),ye(s)==4){s.h=!1;try{const R=s.ca();t:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var h;if(h=R===0){let k=String(s.D).match(uo)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),h=!zu.test(k?k.toLowerCase():"")}u=h}if(u)At(s,"complete"),At(s,"success");else{s.o=6;try{var w=ye(s)>2?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.ca()+"]",vo(s)}}finally{Nr(s)}}}}function Nr(s,a){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const u=s.g;s.g=null,a||At(s,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ye(s){return s.g?s.g.readyState:0}n.ca=function(){try{return ye(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),et(a)}};function Ao(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Wu(s){const a={};s=(s.g&&ye(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(d(s[h]))continue;var u=Du(s[h]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=a[w]||[];a[w]=R,R.push(u)}Pe(a,function(h){return h.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kn(s,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||a}function Io(s){this.za=0,this.i=[],this.j=new Ln,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Kn("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Kn("baseRetryDelayMs",5e3,s),this.Za=Kn("retryDelaySeedMs",1e4,s),this.Ta=Kn("forwardChannelMaxRetries",2,s),this.va=Kn("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new so(s&&s.concurrentRequestLimit),this.Ba=new Hu,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Io.prototype,n.ka=8,n.I=1,n.connect=function(s,a,u,h){Mt(0),this.W=s,this.H=a||{},u&&h!==void 0&&(this.H.OSID=u,this.H.OAID=h),this.F=this.X,this.J=xo(this,null,this.W),Or(this)};function Fs(s){if(wo(s),s.I==3){var a=s.V++,u=re(s.J);if(it(u,"SID",s.M),it(u,"RID",a),it(u,"TYPE","terminate"),Qn(s,u),a=new ge(s,s.j,a),a.M=2,a.A=Dr(re(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(a.A.toString(),"")}catch{}!u&&l.Image&&(new Image().src=a.A,u=!0),u||(a.g=No(a.j,null),a.g.ea(a.A)),a.F=Date.now(),Pr(a)}Do(s)}function kr(s){s.g&&(Ls(s),s.g.cancel(),s.g=null)}function wo(s){kr(s),s.v&&(l.clearTimeout(s.v),s.v=null),Fr(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&l.clearTimeout(s.m),s.m=null)}function Or(s){if(!io(s.h)&&!s.m){s.m=!0;var a=s.Ea;Y||m(),gt||(Y(),gt=!0),y.add(a,s),s.D=0}}function Ku(s,a){return oo(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=a.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=Mn(g(s.Ea,s,a),Po(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const w=new ge(this,this.j,s);let R=this.o;if(this.U&&(R?(R=Sn(R),wr(R,this.U)):R=this.U),this.u!==null||this.R||(w.J=R,R=null),this.S)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var h=this.i[u];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,a>4096){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=So(this,w,a),u=re(this.J),it(u,"RID",s),it(u,"CVER",22),this.G&&it(u,"X-HTTP-Session-Id",this.G),Qn(this,u),R&&(this.R?a="headers="+Un(yo(R))+"&"+a:this.u&&Os(u,this.u,R)),xs(this.h,w),this.Ra&&it(u,"TYPE","init"),this.S?(it(u,"$req",a),it(u,"SID","null"),w.U=!0,Cs(w,u,null)):Cs(w,u,a),this.I=2}}else this.I==3&&(s?bo(this,s):this.i.length==0||io(this.h)||bo(this))};function bo(s,a){var u;a?u=a.l:u=s.V++;const h=re(s.J);it(h,"SID",s.M),it(h,"RID",u),it(h,"AID",s.K),Qn(s,h),s.u&&s.o&&Os(h,s.u,s.o),u=new ge(s,s.j,u,s.D+1),s.u===null&&(u.J=s.o),a&&(s.i=a.G.concat(s.i)),a=So(s,u,1e3),u.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),xs(s.h,u),Cs(u,h,a)}function Qn(s,a){s.H&&ee(s.H,function(u,h){it(a,h,u)}),s.l&&ee({},function(u,h){it(a,h,u)})}function So(s,a,u){u=Math.min(s.i.length,u);const h=s.l?g(s.l.Ka,s.l,s):null;t:{var w=s.i;let z=-1;for(;;){const vt=["count="+u];z==-1?u>0?(z=w[0].g,vt.push("ofs="+z)):z=0:vt.push("ofs="+z);let rt=!0;for(let It=0;It<u;It++){var R=w[It].g;const se=w[It].map;if(R-=z,R<0)z=Math.max(0,w[It].g-100),rt=!1;else try{R="req"+R+"_"||"";try{var k=se instanceof Map?se:Object.entries(se);for(const[Ue,Ee]of k){let ve=Ee;c(Ee)&&(ve=Z(Ee)),vt.push(R+Ue+"="+encodeURIComponent(ve))}}catch(Ue){throw vt.push(R+"type="+encodeURIComponent("_badmap")),Ue}}catch{h&&h(se)}}if(rt){k=vt.join("&");break t}}k=void 0}return s=s.i.splice(0,u),a.G=s,k}function Ro(s){if(!s.g&&!s.v){s.Y=1;var a=s.Da;Y||m(),gt||(Y(),gt=!0),y.add(a,s),s.A=0}}function Ms(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=Mn(g(s.Da,s),Po(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,Co(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=Mn(g(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Mt(10),kr(this),Co(this))};function Ls(s){s.B!=null&&(l.clearTimeout(s.B),s.B=null)}function Co(s){s.g=new ge(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var a=re(s.na);it(a,"RID","rpc"),it(a,"SID",s.M),it(a,"AID",s.K),it(a,"CI",s.F?"0":"1"),!s.F&&s.ia&&it(a,"TO",s.ia),it(a,"TYPE","xmlhttp"),Qn(s,a),s.u&&s.o&&Os(a,s.u,s.o),s.O&&(s.g.H=s.O);var u=s.g;s=s.ba,u.M=1,u.A=Dr(re(a)),u.u=null,u.R=!0,eo(u,s)}n.Va=function(){this.C!=null&&(this.C=null,kr(this),Ms(this),Mt(19))};function Fr(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Vo(s,a){var u=null;if(s.g==a){Fr(s),Ls(s),s.g=null;var h=2}else if(Ds(s.h,a))u=a.G,ao(s.h,a),h=1;else return;if(s.I!=0){if(a.o)if(h==1){u=a.u?a.u.length:0,a=Date.now()-a.F;var w=s.D;h=tn(),At(h,new Xi(h,u)),Or(s)}else Ro(s);else if(w=a.m,w==3||w==0&&a.X>0||!(h==1&&Ku(s,a)||h==2&&Ms(s)))switch(u&&u.length>0&&(a=s.h,a.i=a.i.concat(u)),w){case 1:Le(s,5);break;case 4:Le(s,10);break;case 3:Le(s,6);break;default:Le(s,2)}}}function Po(s,a){let u=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(u*=2),u*a}function Le(s,a){if(s.j.info("Error code "+a),a==2){var u=g(s.bb,s),h=s.Ua;const w=!h;h=new pe(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||jn(h,"https"),Dr(h),w?$u(h.toString(),u):qu(h.toString(),u)}else Mt(2);s.I=0,s.l&&s.l.pa(a),Do(s),wo(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function Do(s){if(s.I=0,s.ja=[],s.l){const a=lo(s.h);(a.length!=0||s.i.length!=0)&&(F(s.ja,a),F(s.ja,s.i),s.h.i.length=0,V(s.i),s.i.length=0),s.l.oa()}}function xo(s,a,u){var h=u instanceof pe?re(u):new pe(u);if(h.g!="")a&&(h.g=a+"."+h.g),$n(h,h.u);else{var w=l.location;h=w.protocol,a=a?a+"."+w.hostname:w.hostname,w=+w.port;const R=new pe(null);h&&jn(R,h),a&&(R.g=a),w&&$n(R,w),u&&(R.h=u),h=R}return u=s.G,a=s.wa,u&&a&&it(h,u,a),it(h,"VER",s.ka),Qn(s,h),h}function No(s,a,u){if(a&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Aa&&!s.ma?new dt(new ks({ab:u})):new dt(s.ma),a.Fa(s.L),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ko(){}n=ko.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Mr(){}Mr.prototype.g=function(s,a){return new Ht(s,a)};function Ht(s,a){St.call(this),this.g=new Io(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(s?s["X-WebChannel-Client-Profile"]=a.sa:s={"X-WebChannel-Client-Profile":a.sa}),this.g.U=s,(s=a&&a.Qb)&&!d(s)&&(this.g.u=s),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!d(a)&&(this.g.G=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new rn(this)}A(Ht,St),Ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Fs(this.g)},Ht.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.v&&(u={},u.__data__=Z(s),s=u);a.i.push(new ku(a.Ya++,s)),a.I==3&&Or(a)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Fs(this.g),delete this.g,Ht.Z.N.call(this)};function Oo(s){ke.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const u in a){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}A(Oo,ke);function Fo(){Oe.call(this),this.status=1}A(Fo,Oe);function rn(s){this.g=s}A(rn,ko),rn.prototype.ra=function(){At(this.g,"a")},rn.prototype.qa=function(s){At(this.g,new Oo(s))},rn.prototype.pa=function(s){At(this.g,new Fo)},rn.prototype.oa=function(){At(this.g,"b")},Mr.prototype.createWebChannel=Mr.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Al=function(){return new Mr},Tl=function(){return tn()},vl=ce,si={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Vr.NO_ERROR=0,Vr.TIMEOUT=8,Vr.HTTP_ERROR=6,zr=Vr,Ji.COMPLETE="complete",El=Ji,Wt.EventType=Ne,Ne.OPEN="a",Ne.CLOSE="b",Ne.ERROR="c",Ne.MESSAGE="d",St.prototype.listen=St.prototype.J,tr=Wt,dt.prototype.listenOnce=dt.prototype.K,dt.prototype.getLastError=dt.prototype.Ha,dt.prototype.getLastErrorCode=dt.prototype.ya,dt.prototype.getStatus=dt.prototype.ca,dt.prototype.getResponseJson=dt.prototype.La,dt.prototype.getResponseText=dt.prototype.la,dt.prototype.send=dt.prototype.ea,dt.prototype.setWithCredentials=dt.prototype.Fa,yl=dt}).apply(typeof Ur<"u"?Ur:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Nt.UNAUTHENTICATED=new Nt(null),Nt.GOOGLE_CREDENTIALS=new Nt("google-credentials-uid"),Nt.FIRST_PARTY=new Nt("first-party-uid"),Nt.MOCK_USER=new Nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wn="12.8.0";function xf(n){wn=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new fl("@firebase/firestore");function un(){return ze.logLevel}function U(n,...t){if(ze.logLevel<=J.DEBUG){const e=t.map(Ri);ze.debug(`Firestore (${wn}): ${n}`,...e)}}function Ge(n,...t){if(ze.logLevel<=J.ERROR){const e=t.map(Ri);ze.error(`Firestore (${wn}): ${n}`,...e)}}function _s(n,...t){if(ze.logLevel<=J.WARN){const e=t.map(Ri);ze.warn(`Firestore (${wn}): ${n}`,...e)}}function Ri(n){if(typeof n=="string")return n;try{return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Il(n,r,e)}function Il(n,t,e){let r=`FIRESTORE (${wn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ge(r),new Error(r)}function mt(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Il(t,i,r)}function st(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends In{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Nf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Nt.UNAUTHENTICATED))}shutdown(){}}class kf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Of{constructor(t){this.t=t,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){mt(this.o===void 0,42304);let r=this.i;const i=f=>this.i!==r?(r=this.i,e(f)):Promise.resolve();let o=new qe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new qe,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},c=f=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new qe)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(mt(typeof r.accessToken=="string",31837,{l:r}),new wl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return mt(t===null||typeof t=="string",2055,{h:t}),new Nt(t)}}class Ff{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Mf{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Ff(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ha{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lf{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_f(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){mt(this.o===void 0,3512);const r=o=>{o.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,U("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ha(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(mt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ha(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Uf(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function nt(n,t){return n<t?-1:n>t?1:0}function ii(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return Ws(i)===Ws(o)?nt(i,o):Ws(i)?1:-1}return nt(n.length,t.length)}const Bf=55296,jf=57343;function Ws(n){const t=n.charCodeAt(0);return t>=Bf&&t<=jf}function pn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="__name__";class oe{constructor(t,e,r){e===void 0?e=0:e>t.length&&W(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&W(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return oe.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof oe?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=oe.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return nt(t.length,e.length)}static compareSegments(t,e){const r=oe.isNumericId(t),i=oe.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?oe.extractNumericId(t).compare(oe.extractNumericId(e)):ii(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Si.fromString(t.substring(4,t.length-2))}}class ft extends oe{construct(t,e,r){return new ft(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new q(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new ft(e)}static emptyPath(){return new ft([])}}const $f=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends oe{construct(t,e,r){return new Pt(t,e,r)}static isValidIdentifier(t){return $f.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fa}static keyField(){return new Pt([fa])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new q(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new q(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new q(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,i+=2}else c==="`"?(l=!l,i++):c!=="."||l?(r+=c,i++):(o(),i++)}if(o(),l)throw new q(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Pt(e)}static emptyPath(){return new Pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.path=t}static fromPath(t){return new H(ft.fromString(t))}static fromName(t){return new H(ft.fromString(t).popFirst(5))}static empty(){return new H(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ft.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ft.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new H(new ft(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n,t,e){if(!e)throw new q(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function qf(n,t,e,r){if(t===!0&&r===!0)throw new q(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function da(n){if(!H.isDocumentKey(n))throw new q(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ma(n){if(H.isDocumentKey(n))throw new q(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Sl(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Vi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function Rl(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new q(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Vi(n);throw new q(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n,t){const e={typeString:n};return t&&(e.value=t),e}function yr(n,t){if(!Sl(n))throw new q(D.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const l=n[r];if(i&&typeof l!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&l!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new q(D.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=-62135596800,pa=1e6;class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(t){return ct.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*pa);return new ct(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ga)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/pa}_compareTo(t){return this.seconds===t.seconds?nt(this.nanoseconds,t.nanoseconds):nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(yr(t,ct._jsonSchema))return new ct(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ga;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ct._jsonSchemaVersion="firestore/timestamp/1.0",ct._jsonSchema={type:yt("string",ct._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{static fromTimestamp(t){return new ut(t)}static min(){return new ut(new ct(0,0))}static max(){return new ut(new ct(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=-1;function Hf(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ut.fromTimestamp(r===1e9?new ct(e+1,0):new ct(e,r));return new Se(i,H.empty(),t)}function zf(n){return new Se(n.readTime,n.key,fr)}class Se{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Se(ut.min(),H.empty(),fr)}static max(){return new Se(ut.max(),H.empty(),fr)}}function Gf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=H.comparator(n.documentKey,t.documentKey),e!==0?e:nt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Wf)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let i=0,o=0,l=!1;t.forEach(c=>{++i,c.next(()=>{++o,l&&o===i&&e()},f=>r(f))}),l=!0,o===i&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(i=>i?P.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,i)=>{const o=t.length,l=new Array(o);let c=0;for(let f=0;f<o;f++){const g=f;e(t[g]).next(I=>{l[g]=I,++c,c===o&&r(l)},I=>i(I))}})}static doWhile(t,e){return new P((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Qf(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Er(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Di.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=-1;function Ni(n){return n==null}function ns(n){return n===0&&1/n==-1/0}function Xf(n){return typeof n=="number"&&Number.isInteger(n)&&!ns(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="";function Jf(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=_a(t)),t=Yf(n.get(e),t);return _a(t)}function Yf(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Cl:e+="";break;default:e+=o}}return e}function _a(n){return n+Cl+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function bn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Vl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e){this.comparator=t,this.root=e||Ct.EMPTY}insert(t,e){return new $t(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(t){return new $t(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Br(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Br(this.root,t,this.comparator,!1)}getReverseIterator(){return new Br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Br(this.root,t,this.comparator,!0)}}class Br{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ct{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??Ct.RED,this.left=i??Ct.EMPTY,this.right=o??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new Ct(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw W(27949);return t+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new Ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.comparator=t,this.data=new $t(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ea(this.data.getIterator())}getIteratorFrom(t){return new Ea(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Dt(this.comparator);return e.data=t,e}}class Ea{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this.fields=t,t.sort(Pt.comparator)}static empty(){return new Zt([])}unionWith(t){let e=new Dt(Pt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Zt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return pn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Zf("Invalid base64 string: "+o):o}}(t);return new le(e)}static fromUint8Array(t){const e=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(t);return new le(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}le.EMPTY_BYTE_STRING=new le("");const td=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function We(n){if(mt(!!n,39018),typeof n=="string"){let t=0;const e=td.exec(n);if(mt(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Vt(n.seconds),nanos:Vt(n.nanos)}}function Vt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _n(n){return typeof n=="string"?le.fromBase64String(n):le.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="server_timestamp",Dl="__type__",xl="__previous_value__",Nl="__local_write_time__";function ki(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Dl])==null?void 0:r.stringValue)===Pl}function Oi(n){const t=n.mapValue.fields[xl];return ki(t)?Oi(t):t}function rs(n){const t=We(n.mapValue.fields[Nl].timestampValue);return new ct(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,e,r,i,o,l,c,f,g,I,A){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=g,this.isUsingEmulator=I,this.apiKey=A}}const ss="(default)";class is{constructor(t,e){this.projectId=t,this.database=e||ss}static empty(){return new is("","")}get isDefaultDatabase(){return this.database===ss}isEqual(t){return t instanceof is&&t.projectId===this.projectId&&t.database===this.database}}function nd(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new q(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new is(n.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="__type__",rd="__max__",jr={mapValue:{}},Ol="__vector__",oi="value";function Ke(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ki(n)?4:id(n)?9007199254740991:sd(n)?10:11:W(28295,{value:n})}function ue(n,t){if(n===t)return!0;const e=Ke(n);if(e!==Ke(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return rs(n).isEqual(rs(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=We(i.timestampValue),c=We(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return _n(i.bytesValue).isEqual(_n(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return Vt(i.geoPointValue.latitude)===Vt(o.geoPointValue.latitude)&&Vt(i.geoPointValue.longitude)===Vt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Vt(i.integerValue)===Vt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=Vt(i.doubleValue),c=Vt(o.doubleValue);return l===c?ns(l)===ns(c):isNaN(l)&&isNaN(c)}return!1}(n,t);case 9:return pn(n.arrayValue.values||[],t.arrayValue.values||[],ue);case 10:case 11:return function(i,o){const l=i.mapValue.fields||{},c=o.mapValue.fields||{};if(ya(l)!==ya(c))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(c[f]===void 0||!ue(l[f],c[f])))return!1;return!0}(n,t);default:return W(52216,{left:n})}}function dr(n,t){return(n.values||[]).find(e=>ue(e,t))!==void 0}function yn(n,t){if(n===t)return 0;const e=Ke(n),r=Ke(t);if(e!==r)return nt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return nt(n.booleanValue,t.booleanValue);case 2:return function(o,l){const c=Vt(o.integerValue||o.doubleValue),f=Vt(l.integerValue||l.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(n,t);case 3:return va(n.timestampValue,t.timestampValue);case 4:return va(rs(n),rs(t));case 5:return ii(n.stringValue,t.stringValue);case 6:return function(o,l){const c=_n(o),f=_n(l);return c.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const c=o.split("/"),f=l.split("/");for(let g=0;g<c.length&&g<f.length;g++){const I=nt(c[g],f[g]);if(I!==0)return I}return nt(c.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const c=nt(Vt(o.latitude),Vt(l.latitude));return c!==0?c:nt(Vt(o.longitude),Vt(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ta(n.arrayValue,t.arrayValue);case 10:return function(o,l){var S,V,F,M;const c=o.fields||{},f=l.fields||{},g=(S=c[oi])==null?void 0:S.arrayValue,I=(V=f[oi])==null?void 0:V.arrayValue,A=nt(((F=g==null?void 0:g.values)==null?void 0:F.length)||0,((M=I==null?void 0:I.values)==null?void 0:M.length)||0);return A!==0?A:Ta(g,I)}(n.mapValue,t.mapValue);case 11:return function(o,l){if(o===jr.mapValue&&l===jr.mapValue)return 0;if(o===jr.mapValue)return 1;if(l===jr.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),g=l.fields||{},I=Object.keys(g);f.sort(),I.sort();for(let A=0;A<f.length&&A<I.length;++A){const S=ii(f[A],I[A]);if(S!==0)return S;const V=yn(c[f[A]],g[I[A]]);if(V!==0)return V}return nt(f.length,I.length)}(n.mapValue,t.mapValue);default:throw W(23264,{he:e})}}function va(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return nt(n,t);const e=We(n),r=We(t),i=nt(e.seconds,r.seconds);return i!==0?i:nt(e.nanos,r.nanos)}function Ta(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=yn(e[i],r[i]);if(o)return o}return nt(e.length,r.length)}function En(n){return ai(n)}function ai(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=We(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return _n(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return H.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=ai(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${ai(e.fields[l])}`;return i+"}"}(n.mapValue):W(61005,{value:n})}function Gr(n){switch(Ke(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Oi(n);return t?16+Gr(t):16;case 5:return 2*n.stringValue.length;case 6:return _n(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Gr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return bn(r.fields,(o,l)=>{i+=o.length+Gr(l)}),i}(n.mapValue);default:throw W(13486,{value:n})}}function li(n){return!!n&&"integerValue"in n}function Fi(n){return!!n&&"arrayValue"in n}function Wr(n){return!!n&&"mapValue"in n}function sd(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[kl])==null?void 0:r.stringValue)===Ol}function sr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return bn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=sr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=sr(n.arrayValue.values[e]);return t}return{...n}}function id(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===rd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.value=t}static empty(){return new Jt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Wr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=sr(e)}setAll(t){let e=Pt.emptyPath(),r={},i=[];t.forEach((l,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,r,i),r={},i=[],e=c.popLast()}l?r[c.lastSegment()]=sr(l):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Wr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ue(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Wr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){bn(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Jt(sr(this.value))}}function Fl(n){const t=[];return bn(n.fields,(e,r)=>{const i=new Pt([e]);if(Wr(r)){const o=Fl(r.mapValue).fields;if(o.length===0)t.push(i);else for(const l of o)t.push(i.child(l))}else t.push(i)}),new Zt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e,r,i,o,l,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=c}static newInvalidDocument(t){return new Kt(t,0,ut.min(),ut.min(),ut.min(),Jt.empty(),0)}static newFoundDocument(t,e,r,i){return new Kt(t,1,e,ut.min(),r,i,0)}static newNoDocument(t,e){return new Kt(t,2,e,ut.min(),ut.min(),Jt.empty(),0)}static newUnknownDocument(t,e){return new Kt(t,3,e,ut.min(),ut.min(),Jt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ut.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ut.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Kt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,e){this.position=t,this.inclusive=e}}function Aa(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],l=n.position[i];if(o.field.isKeyField()?r=H.comparator(H.fromName(l.referenceValue),e.key):r=yn(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ia(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ue(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,e="asc"){this.field=t,this.dir=e}}function od(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{}class bt extends Ml{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new ld(t,e,r):e==="array-contains"?new hd(t,r):e==="in"?new fd(t,r):e==="not-in"?new dd(t,r):e==="array-contains-any"?new md(t,r):new bt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ud(t,r):new cd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(yn(e,this.value)):e!==null&&Ke(this.value)===Ke(e)&&this.matchesComparison(yn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Re extends Ml{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Re(t,e)}matches(t){return Ll(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ll(n){return n.op==="and"}function Ul(n){return ad(n)&&Ll(n)}function ad(n){for(const t of n.filters)if(t instanceof Re)return!1;return!0}function ui(n){if(n instanceof bt)return n.field.canonicalString()+n.op.toString()+En(n.value);if(Ul(n))return n.filters.map(t=>ui(t)).join(",");{const t=n.filters.map(e=>ui(e)).join(",");return`${n.op}(${t})`}}function Bl(n,t){return n instanceof bt?function(r,i){return i instanceof bt&&r.op===i.op&&r.field.isEqual(i.field)&&ue(r.value,i.value)}(n,t):n instanceof Re?function(r,i){return i instanceof Re&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,l,c)=>o&&Bl(l,i.filters[c]),!0):!1}(n,t):void W(19439)}function jl(n){return n instanceof bt?function(e){return`${e.field.canonicalString()} ${e.op} ${En(e.value)}`}(n):n instanceof Re?function(e){return e.op.toString()+" {"+e.getFilters().map(jl).join(" ,")+"}"}(n):"Filter"}class ld extends bt{constructor(t,e,r){super(t,e,r),this.key=H.fromName(r.referenceValue)}matches(t){const e=H.comparator(t.key,this.key);return this.matchesComparison(e)}}class ud extends bt{constructor(t,e){super(t,"in",e),this.keys=$l("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class cd extends bt{constructor(t,e){super(t,"not-in",e),this.keys=$l("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function $l(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>H.fromName(r.referenceValue))}class hd extends bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Fi(e)&&dr(e.arrayValue,this.value)}}class fd extends bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&dr(this.value.arrayValue,e)}}class dd extends bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!dr(this.value.arrayValue,e)}}class md extends bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Fi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>dr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(t,e=null,r=[],i=[],o=null,l=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=c,this.Te=null}}function wa(n,t=null,e=[],r=[],i=null,o=null,l=null){return new gd(n,t,e,r,i,o,l)}function Mi(n){const t=st(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ui(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ni(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>En(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>En(r)).join(",")),t.Te=e}return t.Te}function Li(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!od(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Bl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ia(n.startAt,t.startAt)&&Ia(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t,e=null,r=[],i=[],o=null,l="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=f,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function pd(n,t,e,r,i,o,l,c){return new ys(n,t,e,r,i,o,l,c)}function _d(n){return new ys(n)}function ba(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yd(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ed(n){return n.collectionGroup!==null}function ir(n){const t=st(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new Dt(Pt.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(c=c.add(g.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new as(o,r))}),e.has(Pt.keyField().canonicalString())||t.Ie.push(new as(Pt.keyField(),r))}return t.Ie}function He(n){const t=st(n);return t.Ee||(t.Ee=vd(t,ir(n))),t.Ee}function vd(n,t){if(n.limitType==="F")return wa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new as(i.field,o)});const e=n.endAt?new os(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new os(n.startAt.position,n.startAt.inclusive):null;return wa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ci(n,t,e){return new ys(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ql(n,t){return Li(He(n),He(t))&&n.limitType===t.limitType}function Hl(n){return`${Mi(He(n))}|lt:${n.limitType}`}function Yn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>jl(i)).join(", ")}]`),Ni(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>En(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>En(i)).join(",")),`Target(${r})`}(He(n))}; limitType=${n.limitType})`}function Ui(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):H.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of ir(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(l,c,f){const g=Aa(l,c,f);return l.inclusive?g<=0:g<0}(r.startAt,ir(r),i)||r.endAt&&!function(l,c,f){const g=Aa(l,c,f);return l.inclusive?g>=0:g>0}(r.endAt,ir(r),i))}(n,t)}function Td(n){return(t,e)=>{let r=!1;for(const i of ir(n)){const o=Ad(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Ad(n,t,e){const r=n.field.isKeyField()?H.comparator(t.key,e.key):function(o,l,c){const f=l.data.field(o),g=c.data.field(o);return f!==null&&g!==null?yn(f,g):W(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){bn(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Vl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=new $t(H.comparator);function ls(){return Id}const zl=new $t(H.comparator);function $r(...n){let t=zl;for(const e of n)t=t.insert(e.key,e);return t}function Gl(n){let t=zl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function $e(){return or()}function Wl(){return or()}function or(){return new Qe(n=>n.toString(),(n,t)=>n.isEqual(t))}const wd=new $t(H.comparator),bd=new Dt(H.comparator);function kt(...n){let t=bd;for(const e of n)t=t.add(e);return t}const Sd=new Dt(nt);function Rd(){return Sd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ns(t)?"-0":t}}function Kl(n){return{integerValue:""+n}}function Cd(n,t){return Xf(t)?Kl(t):Bi(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this._=void 0}}function Vd(n,t,e){return n instanceof us?function(i,o){const l={fields:{[Dl]:{stringValue:Pl},[Nl]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ki(o)&&(o=Oi(o)),o&&(l.fields[xl]=o),{mapValue:l}}(e,t):n instanceof mr?Xl(n,t):n instanceof gr?Jl(n,t):function(i,o){const l=Ql(i,o),c=Sa(l)+Sa(i.Ae);return li(l)&&li(i.Ae)?Kl(c):Bi(i.serializer,c)}(n,t)}function Pd(n,t,e){return n instanceof mr?Xl(n,t):n instanceof gr?Jl(n,t):e}function Ql(n,t){return n instanceof cs?function(r){return li(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class us extends Es{}class mr extends Es{constructor(t){super(),this.elements=t}}function Xl(n,t){const e=Yl(t);for(const r of n.elements)e.some(i=>ue(i,r))||e.push(r);return{arrayValue:{values:e}}}class gr extends Es{constructor(t){super(),this.elements=t}}function Jl(n,t){let e=Yl(t);for(const r of n.elements)e=e.filter(i=>!ue(i,r));return{arrayValue:{values:e}}}class cs extends Es{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Sa(n){return Vt(n.integerValue||n.doubleValue)}function Yl(n){return Fi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Dd(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof mr&&i instanceof mr||r instanceof gr&&i instanceof gr?pn(r.elements,i.elements,ue):r instanceof cs&&i instanceof cs?ue(r.Ae,i.Ae):r instanceof us&&i instanceof us}(n.transform,t.transform)}class xd{constructor(t,e){this.version=t,this.transformResults=e}}class fe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new fe}static exists(t){return new fe(void 0,t)}static updateTime(t){return new fe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Kr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class vs{}function Zl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new eu(n.key,fe.none()):new vr(n.key,n.data,fe.none());{const e=n.data,r=Jt.empty();let i=new Dt(Pt.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new Xe(n.key,r,new Zt(i.toArray()),fe.none())}}function Nd(n,t,e){n instanceof vr?function(i,o,l){const c=i.value.clone(),f=Ca(i.fieldTransforms,o,l.transformResults);c.setAll(f),o.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Xe?function(i,o,l){if(!Kr(i.precondition,o))return void o.convertToUnknownDocument(l.version);const c=Ca(i.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(tu(i)),f.setAll(c),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,t,e):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function ar(n,t,e,r){return n instanceof vr?function(o,l,c,f){if(!Kr(o.precondition,l))return c;const g=o.value.clone(),I=Va(o.fieldTransforms,f,l);return g.setAll(I),l.convertToFoundDocument(l.version,g).setHasLocalMutations(),null}(n,t,e,r):n instanceof Xe?function(o,l,c,f){if(!Kr(o.precondition,l))return c;const g=Va(o.fieldTransforms,f,l),I=l.data;return I.setAll(tu(o)),I.setAll(g),l.convertToFoundDocument(l.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,r):function(o,l,c){return Kr(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(n,t,e)}function kd(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Ql(r.transform,i||null);o!=null&&(e===null&&(e=Jt.empty()),e.set(r.field,o))}return e||null}function Ra(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&pn(r,i,(o,l)=>Dd(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class vr extends vs{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xe extends vs{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function tu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ca(n,t,e){const r=new Map;mt(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let i=0;i<e.length;i++){const o=n[i],l=o.transform,c=t.data.field(o.field);r.set(o.field,Pd(l,c,e[i]))}return r}function Va(n,t,e){const r=new Map;for(const i of n){const o=i.transform,l=e.data.field(i.field);r.set(i.field,Vd(o,l,t))}return r}class eu extends vs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Od extends vs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Nd(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=ar(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=ar(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Wl();return this.mutations.forEach(i=>{const o=t.get(i.key),l=o.overlayedDocument;let c=this.applyToLocalView(l,o.mutatedFields);c=e.has(i.key)?null:c;const f=Zl(l,c);f!==null&&r.set(i.key,f),l.isValidDocument()||l.convertToNoDocument(ut.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),kt())}isEqual(t){return this.batchId===t.batchId&&pn(this.mutations,t.mutations,(e,r)=>Ra(e,r))&&pn(this.baseMutations,t.baseMutations,(e,r)=>Ra(e,r))}}class ji{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){mt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=function(){return wd}();const o=t.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new ji(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,X;function Ld(n){switch(n){case D.OK:return W(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function Ud(n){if(n===void 0)return Ge("GRPC error has no .code"),D.UNKNOWN;switch(n){case _t.OK:return D.OK;case _t.CANCELLED:return D.CANCELLED;case _t.UNKNOWN:return D.UNKNOWN;case _t.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case _t.INTERNAL:return D.INTERNAL;case _t.UNAVAILABLE:return D.UNAVAILABLE;case _t.UNAUTHENTICATED:return D.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case _t.NOT_FOUND:return D.NOT_FOUND;case _t.ALREADY_EXISTS:return D.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return D.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case _t.ABORTED:return D.ABORTED;case _t.OUT_OF_RANGE:return D.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return D.UNIMPLEMENTED;case _t.DATA_LOSS:return D.DATA_LOSS;default:return W(39323,{code:n})}}(X=_t||(_t={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Si([4294967295,4294967295],0);class Bd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function hi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function jd(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function $d(n,t){return hi(n,t.toTimestamp())}function dn(n){return mt(!!n,49232),ut.fromTimestamp(function(e){const r=We(e);return new ct(r.seconds,r.nanos)}(n))}function nu(n,t){return fi(n,t).canonicalString()}function fi(n,t){const e=function(i){return new ft(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function qd(n){const t=ft.fromString(n);return mt(Jd(t),10190,{key:t.toString()}),t}function di(n,t){return nu(n.databaseId,t.path)}function Hd(n){const t=qd(n);return t.length===4?ft.emptyPath():Gd(t)}function zd(n){return new ft(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Gd(n){return mt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Pa(n,t,e){return{name:di(n,t),fields:e.value.mapValue.fields}}function Wd(n,t){let e;if(t instanceof vr)e={update:Pa(n,t.key,t.value)};else if(t instanceof eu)e={delete:di(n,t.key)};else if(t instanceof Xe)e={update:Pa(n,t.key,t.data),updateMask:Xd(t.fieldMask)};else{if(!(t instanceof Od))return W(16599,{dt:t.type});e={verify:di(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const c=l.transform;if(c instanceof us)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof mr)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof gr)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof cs)return{fieldPath:l.field.canonicalString(),increment:c.Ae};throw W(20930,{transform:l.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:$d(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:W(27497)}(n,t.precondition)),e}function Kd(n,t){return n&&n.length>0?(mt(t!==void 0,14353),n.map(e=>function(i,o){let l=i.updateTime?dn(i.updateTime):dn(o);return l.isEqual(ut.min())&&(l=dn(o)),new xd(l,i.transformResults||[])}(e,t))):[]}function Qd(n){let t=Hd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){mt(r===1,65062);const I=e.from[0];I.allDescendants?i=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(A){const S=ru(A);return S instanceof Re&&Ul(S)?S.getFilters():[S]}(e.where));let l=[];e.orderBy&&(l=function(A){return A.map(S=>function(F){return new as(cn(F.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(S))}(e.orderBy));let c=null;e.limit&&(c=function(A){let S;return S=typeof A=="object"?A.value:A,Ni(S)?null:S}(e.limit));let f=null;e.startAt&&(f=function(A){const S=!!A.before,V=A.values||[];return new os(V,S)}(e.startAt));let g=null;return e.endAt&&(g=function(A){const S=!A.before,V=A.values||[];return new os(V,S)}(e.endAt)),pd(t,i,l,o,c,"F",f,g)}function ru(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=cn(e.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=cn(e.unaryFilter.field);return bt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=cn(e.unaryFilter.field);return bt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=cn(e.unaryFilter.field);return bt.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}}(n):n.fieldFilter!==void 0?function(e){return bt.create(cn(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Re.create(e.compositeFilter.filters.map(r=>ru(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W(1026)}}(e.compositeFilter.op))}(n):W(30097,{filter:n})}function cn(n){return Pt.fromServerFormat(n.fieldPath)}function Xd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Jd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function su(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t){this.yt=t}}function Zd(n){const t=Qd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ci(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.Sn=new em}addToCollectionParentIndex(t,e){return this.Sn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Se.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Se.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class em{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Dt(ft.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Dt(ft.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iu=41943040;class jt{static withCacheSize(t){return new jt(t,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.DEFAULT_COLLECTION_PERCENTILE=10,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jt.DEFAULT=new jt(iu,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jt.DISABLED=new jt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new vn(0)}static ar(){return new vn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="LruGarbageCollector",nm=1048576;function Na([n,t],[e,r]){const i=nt(n,e);return i===0?nt(t,r):i}class rm{constructor(t){this.Pr=t,this.buffer=new Dt(Na),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Na(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class sm{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){U(xa,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Er(e)?U(xa,"Ignoring IndexedDB error during garbage collection: ",e):await Pi(e)}await this.Ar(3e5)})}}class im{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return P.resolve(Di.ce);const r=new rm(e);return this.Vr.forEachTarget(t,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(t,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Da)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Da):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,i,o,l,c,f,g;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,l=Date.now(),this.nthSequenceNumber(t,i))).next(A=>(r=A,c=Date.now(),this.removeTargets(t,r,e))).next(A=>(o=A,f=Date.now(),this.removeOrphanedDocuments(t,r))).next(A=>(g=Date.now(),un()<=J.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-I}ms
	Determined least recently used ${i} in `+(c-l)+`ms
	Removed ${o} targets in `+(f-c)+`ms
	Removed ${A} documents in `+(g-f)+`ms
Total Duration: ${g-I}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A})))}}function om(n,t){return new im(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.changes=new Qe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Kt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&ar(r.mutation,i,Zt.empty(),ct.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,kt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=kt()){const i=$e();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let l=$r();return o.forEach((c,f)=>{l=l.insert(c,f.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=$e();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,kt()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((l,c)=>{e.set(l,c)})})}computeViews(t,e,r,i){let o=ls();const l=or(),c=function(){return or()}();return e.forEach((f,g)=>{const I=r.get(g.key);i.has(g.key)&&(I===void 0||I.mutation instanceof Xe)?o=o.insert(g.key,g):I!==void 0?(l.set(g.key,I.mutation.getFieldMask()),ar(I.mutation,g,I.mutation.getFieldMask(),ct.now())):l.set(g.key,Zt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((g,I)=>l.set(g,I)),e.forEach((g,I)=>c.set(g,new lm(I,l.get(g)??null))),c))}recalculateAndSaveOverlays(t,e){const r=or();let i=new $t((l,c)=>l-c),o=kt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const c of l)c.keys().forEach(f=>{const g=e.get(f);if(g===null)return;let I=r.get(f)||Zt.empty();I=c.applyToLocalView(g,I),r.set(f,I);const A=(i.get(c.batchId)||kt()).add(f);i=i.insert(c.batchId,A)})}).next(()=>{const l=[],c=i.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),g=f.key,I=f.value,A=Wl();I.forEach(S=>{if(!o.has(S)){const V=Zl(e.get(S),r.get(S));V!==null&&A.set(S,V),o=o.add(S)}}),l.push(this.documentOverlayCache.saveOverlays(t,g,A))}return P.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return yd(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ed(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):P.resolve($e());let c=fr,f=o;return l.next(g=>P.forEach(g,(I,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(I)?P.resolve():this.remoteDocumentCache.getEntry(t,I).next(S=>{f=f.insert(I,S)}))).next(()=>this.populateOverlays(t,g,o)).next(()=>this.computeViews(t,f,g,kt())).next(I=>({batchId:c,changes:Gl(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new H(e)).next(r=>{let i=$r();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let l=$r();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,f=>{const g=function(A,S){return new ys(S,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,g,r,i).next(I=>{I.forEach((A,S)=>{l=l.insert(A,S)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(l=>{o.forEach((f,g)=>{const I=g.getKey();l.get(I)===null&&(l=l.insert(I,Kt.newInvalidDocument(I)))});let c=$r();return l.forEach((f,g)=>{const I=o.get(f);I!==void 0&&ar(I.mutation,g,Zt.empty(),ct.now()),Ui(e,g)&&(c=c.insert(f,g))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return P.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:dn(i.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(i){return{name:i.name,query:Zd(i.bundledQuery),readTime:dn(i.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(){this.overlays=new $t(H.comparator),this.Lr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=$e();return P.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.bt(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const i=$e(),o=e.length+1,l=new H(e.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const f=c.getNext().value,g=f.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===o&&f.largestBatchId>r&&i.set(f.getKey(),f)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new $t((g,I)=>g-I);const l=this.overlays.getIterator();for(;l.hasNext();){const g=l.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>r){let I=o.get(g.largestBatchId);I===null&&(I=$e(),o=o.insert(g.largestBatchId,I)),I.set(g.getKey(),g)}}const c=$e(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((g,I)=>c.set(g,I)),!(c.size()>=i)););return P.resolve(c)}bt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new Md(e,r));let o=this.Lr.get(e);o===void 0&&(o=kt(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.sessionToken=le.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.kr=new Dt(wt.Kr),this.qr=new Dt(wt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new wt(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new wt(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new H(new ft([])),r=new wt(e,t),i=new wt(e,t+1),o=[];return this.qr.forEachInRange([r,i],l=>{this.Wr(l),o.push(l.key)}),o}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new H(new ft([])),r=new wt(e,t),i=new wt(e,t+1);let o=kt();return this.qr.forEachInRange([r,i],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new wt(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class wt{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return H.comparator(t.key,e.key)||nt(t.Hr,e.Hr)}static Ur(t,e){return nt(t.Hr,e.Hr)||H.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new Dt(wt.Kr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Fd(o,e,r,i);this.mutationQueue.push(l);for(const c of i)this.Jr=this.Jr.add(new wt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(l)}lookupMutationBatch(t,e){return P.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Xr(r),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?xi:this.Yn-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new wt(e,0),i=new wt(e,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([r,i],l=>{const c=this.Zr(l.Hr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Dt(nt);return e.forEach(i=>{const o=new wt(i,0),l=new wt(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,l],c=>{r=r.add(c.Hr)})}),P.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;H.isDocumentKey(o)||(o=o.child(""));const l=new wt(new H(o),0);let c=new Dt(nt);return this.Jr.forEachWhile(f=>{const g=f.key.path;return!!r.isPrefixOf(g)&&(g.length===i&&(c=c.add(f.Hr)),!0)},l),P.resolve(this.Yr(c))}Yr(t){const e=[];return t.forEach(r=>{const i=this.Zr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){mt(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return P.forEach(e.mutations,i=>{const o=new wt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Jr=r})}nr(t){}containsKey(t,e){const r=new wt(e,0),i=this.Jr.firstAfterOrEqual(r);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(t){this.ti=t,this.docs=function(){return new $t(H.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,l=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():Kt.newInvalidDocument(e))}getEntries(t,e){let r=ls();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Kt.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=ls();const l=e.path,c=new H(l.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:g,value:{document:I}}=f.getNext();if(!l.isPrefixOf(g.path))break;g.path.length>l.length+1||Gf(zf(I),r)<=0||(i.has(I.key)||Ui(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,i){W(9500)}ni(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new gm(this)}getSize(t){return P.resolve(this.size)}}class gm extends am{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Mr.addEntry(t,i)):this.Mr.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(t){this.persistence=t,this.ri=new Qe(e=>Mi(e),Li),this.lastRemoteSnapshotVersion=ut.min(),this.highestTargetId=0,this.ii=0,this.si=new $i,this.targetCount=0,this.oi=vn._r()}forEachTarget(t,e){return this.ri.forEach((r,i)=>e(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),P.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new vn(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.lr(e),P.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.ri.forEach((l,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.ri.delete(l),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(l=>{o.push(i.markPotentiallyOrphaned(t,l))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,e){this._i={},this.overlays={},this.ai=new Di(0),this.ui=!1,this.ui=!0,this.ci=new fm,this.referenceDelegate=t(this),this.li=new pm(this),this.indexManager=new tm,this.remoteDocumentCache=function(i){return new mm(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Yd(e),this.Pi=new cm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new hm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new dm(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){U("MemoryPersistence","Starting transaction:",t);const i=new _m(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(o=>this.referenceDelegate.Ii(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ei(t,e){return P.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class _m extends Kf{constructor(t){super(),this.currentSequenceNumber=t}}class qi{constructor(t){this.persistence=t,this.Ri=new $i,this.Ai=null}static Vi(t){return new qi(t)}get di(){if(this.Ai)return this.Ai;throw W(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,r=>{const i=H.fromPath(r);return this.mi(t,i).next(o=>{o||e.removeEntry(i,ut.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return P.or([()=>P.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class hs{constructor(t,e){this.persistence=t,this.fi=new Qe(r=>Jf(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=om(this,e)}static Vi(t,e){return new hs(t,e)}Ti(){}Ii(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return P.forEach(this.fi,(r,i)=>this.wr(t,r,i).next(o=>o?P.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ni(t,l=>this.wr(t,l,e).next(c=>{c||(r++,o.removeEntry(l,ut.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),P.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),P.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Gr(t.data.value)),e}wr(t,e,r){return P.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.fi.get(e);return P.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=i}static Es(t,e){let r=kt(),i=kt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Hi(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return dh()?8:Qf(hh())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.gs(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ps(t,e,i,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new ym;return this.ys(t,e,l).next(c=>{if(o.result=c,this.As)return this.ws(t,e,l,c.size)})}).next(()=>o.result)}ws(t,e,r,i){return r.documentReadCount<this.Vs?(un()<=J.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Yn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(un()<=J.DEBUG&&U("QueryEngine","Query:",Yn(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(un()<=J.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Yn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,He(e))):P.resolve())}gs(t,e){if(ba(e))return P.resolve(null);let r=He(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ci(e,null,"F"),r=He(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=kt(...o);return this.fs.getDocuments(t,l).next(c=>this.indexManager.getMinOffset(t,r).next(f=>{const g=this.bs(e,c);return this.Ss(e,g,l,f.readTime)?this.gs(t,ci(e,null,"F")):this.Ds(t,g,e,f)}))})))}ps(t,e,r,i){return ba(e)||i.isEqual(ut.min())?P.resolve(null):this.fs.getDocuments(t,r).next(o=>{const l=this.bs(e,o);return this.Ss(e,l,r,i)?P.resolve(null):(un()<=J.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yn(e)),this.Ds(t,l,e,Hf(i,fr)).next(c=>c))})}bs(t,e){let r=new Dt(Td(t));return e.forEach((i,o)=>{Ui(t,o)&&(r=r.add(o))}),r}Ss(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ys(t,e,r){return un()<=J.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Yn(e)),this.fs.getDocumentsMatchingQuery(t,e,Se.min(),r)}Ds(t,e,r,i){return this.fs.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="LocalStore";class Tm{constructor(t,e,r,i){this.persistence=t,this.Cs=e,this.serializer=i,this.vs=new $t(nt),this.Fs=new Qe(o=>Mi(o),Li),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new um(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Am(n,t,e,r){return new Tm(n,t,e,r)}async function au(n,t){const e=st(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],c=[];let f=kt();for(const g of i){l.push(g.batchId);for(const I of g.mutations)f=f.add(I.key)}for(const g of o){c.push(g.batchId);for(const I of g.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(r,f).next(g=>({Ns:g,removedBatchIds:l,addedBatchIds:c}))})})}function Im(n,t){const e=st(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return function(c,f,g,I){const A=g.batch,S=A.keys();let V=P.resolve();return S.forEach(F=>{V=V.next(()=>I.getEntry(f,F)).next(M=>{const B=g.docVersions.get(F);mt(B!==null,48541),M.version.compareTo(B)<0&&(A.applyToRemoteDocument(M,g),M.isValidDocument()&&(M.setReadTime(g.commitVersion),I.addEntry(M)))})}),V.next(()=>c.mutationQueue.removeMutationBatch(f,A))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let f=kt();for(let g=0;g<c.mutationResults.length;++g)c.mutationResults[g].transformResults.length>0&&(f=f.add(c.batch.mutations[g].key));return f}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function wm(n){const t=st(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function bm(n,t){const e=st(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=xi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class ka{constructor(){this.activeTargetIds=Rd()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Sm{constructor(){this.vo=new ka,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new ka,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="ConnectivityMonitor";class Fa{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){U(Oa,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){U(Oa,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr=null;function mi(){return qr===null?qr=function(){return 268435456+Math.round(2147483648*Math.random())}():qr++,"0x"+qr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="RestConnection",Cm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Vm{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===ss?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(t,e,r,i,o){const l=mi(),c=this.Qo(t,e.toUriEncodedString());U(Ks,`Sending RPC '${t}' ${l}:`,c,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(f,i,o);const{host:g}=new URL(c),I=wi(g);return this.zo(t,c,f,r,I).then(A=>(U(Ks,`Received RPC '${t}' ${l}: `,A),A),A=>{throw _s(Ks,`RPC '${t}' ${l} failed with error: `,A,"url: ",c,"request:",r),A})}jo(t,e,r,i,o,l){return this.Wo(t,e,r,i,o)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}Qo(t,e){const r=Cm[t];let i=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection",Zn=(n,t,e)=>{n.listen(t,r=>{try{e(r)}catch(i){setTimeout(()=>{throw i},0)}})};class mn extends Vm{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!mn.c_){const t=Tl();Zn(t,vl.STAT_EVENT,e=>{e.stat===si.PROXY?U(xt,"STAT_EVENT: detected buffering proxy"):e.stat===si.NOPROXY&&U(xt,"STAT_EVENT: detected no buffering proxy")}),mn.c_=!0}}zo(t,e,r,i,o){const l=mi();return new Promise((c,f)=>{const g=new yl;g.setWithCredentials(!0),g.listenOnce(El.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case zr.NO_ERROR:const A=g.getResponseJson();U(xt,`XHR for RPC '${t}' ${l} received:`,JSON.stringify(A)),c(A);break;case zr.TIMEOUT:U(xt,`RPC '${t}' ${l} timed out`),f(new q(D.DEADLINE_EXCEEDED,"Request time out"));break;case zr.HTTP_ERROR:const S=g.getStatus();if(U(xt,`RPC '${t}' ${l} failed with status:`,S,"response text:",g.getResponseText()),S>0){let V=g.getResponseJson();Array.isArray(V)&&(V=V[0]);const F=V==null?void 0:V.error;if(F&&F.status&&F.message){const M=function(G){const j=G.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(j)>=0?j:D.UNKNOWN}(F.status);f(new q(M,F.message))}else f(new q(D.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new q(D.UNAVAILABLE,"Connection failed."));break;default:W(9055,{l_:t,streamId:l,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{U(xt,`RPC '${t}' ${l} completed.`)}});const I=JSON.stringify(i);U(xt,`RPC '${t}' ${l} sending request:`,i),g.send(e,"POST",I,r,15)})}T_(t,e,r){const i=mi(),o=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(c.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const g=o.join("");U(xt,`Creating RPC '${t}' stream ${i}: ${g}`,c);const I=l.createWebChannel(g,c);this.I_(I);let A=!1,S=!1;const V=new Pm({Ho:F=>{S?U(xt,`Not sending because RPC '${t}' stream ${i} is closed:`,F):(A||(U(xt,`Opening RPC '${t}' stream ${i} transport.`),I.open(),A=!0),U(xt,`RPC '${t}' stream ${i} sending:`,F),I.send(F))},Jo:()=>I.close()});return Zn(I,tr.EventType.OPEN,()=>{S||(U(xt,`RPC '${t}' stream ${i} transport opened.`),V.i_())}),Zn(I,tr.EventType.CLOSE,()=>{S||(S=!0,U(xt,`RPC '${t}' stream ${i} transport closed`),V.o_(),this.E_(I))}),Zn(I,tr.EventType.ERROR,F=>{S||(S=!0,_s(xt,`RPC '${t}' stream ${i} transport errored. Name:`,F.name,"Message:",F.message),V.o_(new q(D.UNAVAILABLE,"The operation could not be completed")))}),Zn(I,tr.EventType.MESSAGE,F=>{var M;if(!S){const B=F.data[0];mt(!!B,16349);const G=B,j=(G==null?void 0:G.error)||((M=G[0])==null?void 0:M.error);if(j){U(xt,`RPC '${t}' stream ${i} received error:`,j);const tt=j.status;let ot=function(y){const m=_t[y];if(m!==void 0)return Ud(m)}(tt),Y=j.message;ot===void 0&&(ot=D.INTERNAL,Y="Unknown error status: "+tt+" with message "+j.message),S=!0,V.o_(new q(ot,Y)),I.close()}else U(xt,`RPC '${t}' stream ${i} received:`,B),V.__(B)}}),mn.u_(),setTimeout(()=>{V.s_()},0),V}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Al()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n){return new mn(n)}function Qs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n){return new Bd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn.c_=!1;class lu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=i,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="PersistentStream";class xm{constructor(t,e,r,i,o,l,c,f){this.Ci=t,this.b_=r,this.S_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new lu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(Ge(e.toString()),Ge("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===e&&this.G_(r,i)},r=>{t(()=>{const i=new q(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return U(Ma,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(U(Ma,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nm extends xm{constructor(t,e,r,i,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return mt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,mt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){mt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Kd(t.writeResults,t.commitTime),r=dn(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=zd(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Wd(this.serializer,r))};this.K_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{}class Om extends km{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Wo(t,fi(e,r),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(D.UNKNOWN,o.toString())})}jo(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.jo(t,fi(e,r),i,l,c,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new q(D.UNKNOWN,l.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Fm(n,t,e,r){return new Om(n,t,e,r)}class Mm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ge(e),this.aa=!1):U("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="RemoteStore";class Lm{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(l=>{r.enqueueAndForget(async()=>{Ir(this)&&(U(Tr,"Restarting streams for network reachability change."),await async function(f){const g=st(f);g.Ea.add(4),await Ar(g),g.Va.set("Unknown"),g.Ea.delete(4),await As(g)}(this))})}),this.Va=new Mm(r,i)}}async function As(n){if(Ir(n))for(const t of n.Ra)await t(!0)}async function Ar(n){for(const t of n.Ra)await t(!1)}function Ir(n){return st(n).Ea.size===0}async function uu(n,t,e){if(!Er(t))throw t;n.Ea.add(1),await Ar(n),n.Va.set("Offline"),e||(e=()=>wm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U(Tr,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await As(n)})}function cu(n,t){return t().catch(e=>uu(n,e,t))}async function Is(n){const t=st(n),e=Ce(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:xi;for(;Um(t);)try{const i=await bm(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,Bm(t,i)}catch(i){await uu(t,i)}hu(t)&&fu(t)}function Um(n){return Ir(n)&&n.Ta.length<10}function Bm(n,t){n.Ta.push(t);const e=Ce(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function hu(n){return Ir(n)&&!Ce(n).x_()&&n.Ta.length>0}function fu(n){Ce(n).start()}async function jm(n){Ce(n).ra()}async function $m(n){const t=Ce(n);for(const e of n.Ta)t.ea(e.mutations)}async function qm(n,t,e){const r=n.Ta.shift(),i=ji.from(r,t,e);await cu(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Is(n)}async function Hm(n,t){t&&Ce(n).Y_&&await async function(r,i){if(function(l){return Ld(l)&&l!==D.ABORTED}(i.code)){const o=r.Ta.shift();Ce(r).B_(),await cu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Is(r)}}(n,t),hu(n)&&fu(n)}async function La(n,t){const e=st(n);e.asyncQueue.verifyOperationInProgress(),U(Tr,"RemoteStore received new credentials");const r=Ir(e);e.Ea.add(3),await Ar(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await As(e)}async function zm(n,t){const e=st(n);t?(e.Ea.delete(2),await As(e)):t||(e.Ea.add(2),await Ar(e),e.Va.set("Unknown"))}function Ce(n){return n.fa||(n.fa=function(e,r,i){const o=st(e);return o.sa(),new Nm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:jm.bind(null,n),t_:Hm.bind(null,n),ta:$m.bind(null,n),na:qm.bind(null,n)}),n.Ra.push(async t=>{t?(n.fa.B_(),await Is(n)):(await n.fa.stop(),n.Ta.length>0&&(U(Tr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const l=Date.now()+r,c=new zi(t,e,l,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function du(n,t){if(Ge("AsyncQueue",`${t}: ${n}`),Er(n))return new q(D.UNAVAILABLE,`${t}: ${n}`);throw n}class Gm{constructor(){this.queries=Ua(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=st(e),o=i.queries;i.queries=Ua(),o.forEach((l,c)=>{for(const f of c.ba)f.onError(r)})})(this,new q(D.ABORTED,"Firestore shutting down"))}}function Ua(){return new Qe(n=>Hl(n),ql)}function Wm(n){n.Ca.forEach(t=>{t.next()})}var Ba,ja;(ja=Ba||(Ba={})).Ma="default",ja.Cache="cache";const Km="SyncEngine";class Qm{constructor(t,e,r,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new Qe(c=>Hl(c),ql),this.Iu=new Map,this.Eu=new Set,this.Ru=new $t(H.comparator),this.Au=new Map,this.Vu=new $i,this.du={},this.mu=new Map,this.fu=vn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Xm(n,t,e){const r=tg(n);try{const i=await function(l,c){const f=st(l),g=ct.now(),I=c.reduce((V,F)=>V.add(F.key),kt());let A,S;return f.persistence.runTransaction("Locally write mutations","readwrite",V=>{let F=ls(),M=kt();return f.xs.getEntries(V,I).next(B=>{F=B,F.forEach((G,j)=>{j.isValidDocument()||(M=M.add(G))})}).next(()=>f.localDocuments.getOverlayedDocuments(V,F)).next(B=>{A=B;const G=[];for(const j of c){const tt=kd(j,A.get(j.key).overlayedDocument);tt!=null&&G.push(new Xe(j.key,tt,Fl(tt.value.mapValue),fe.exists(!0)))}return f.mutationQueue.addMutationBatch(V,g,G,c)}).next(B=>{S=B;const G=B.applyToLocalDocumentSet(A,M);return f.documentOverlayCache.saveOverlays(V,B.batchId,G)})}).then(()=>({batchId:S.batchId,changes:Gl(A)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(l,c,f){let g=l.du[l.currentUser.toKey()];g||(g=new $t(nt)),g=g.insert(c,f),l.du[l.currentUser.toKey()]=g}(r,i.batchId,e),await ws(r,i.changes),await Is(r.remoteStore)}catch(i){const o=du(i,"Failed to persist write");e.reject(o)}}function $a(n,t,e){const r=st(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach((o,l)=>{const c=l.view.va(t);c.snapshot&&i.push(c.snapshot)}),function(l,c){const f=st(l);f.onlineState=c;let g=!1;f.queries.forEach((I,A)=>{for(const S of A.ba)S.va(c)&&(g=!0)}),g&&Wm(f)}(r.eventManager,t),i.length&&r.Pu.J_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Jm(n,t){const e=st(n),r=t.batch.batchId;try{const i=await Im(e.localStore,t);gu(e,r,null),mu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await ws(e,i)}catch(i){await Pi(i)}}async function Ym(n,t,e){const r=st(n);try{const i=await function(l,c){const f=st(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let I;return f.mutationQueue.lookupMutationBatch(g,c).next(A=>(mt(A!==null,37113),I=A.keys(),f.mutationQueue.removeMutationBatch(g,A))).next(()=>f.mutationQueue.performConsistencyCheck(g)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(g,I,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,I)).next(()=>f.localDocuments.getDocuments(g,I))})}(r.localStore,t);gu(r,t,e),mu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await ws(r,i)}catch(i){await Pi(i)}}function mu(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function gu(n,t,e){const r=st(n);let i=r.du[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.du[r.currentUser.toKey()]=i}}async function ws(n,t,e){const r=st(n),i=[],o=[],l=[];r.Tu.isEmpty()||(r.Tu.forEach((c,f)=>{l.push(r.pu(f,t,e).then(g=>{var I;if((g||e)&&r.isPrimaryClient){const A=g?!g.fromCache:(I=e==null?void 0:e.targetChanges.get(f.targetId))==null?void 0:I.current;r.sharedClientState.updateQueryState(f.targetId,A?"current":"not-current")}if(g){i.push(g);const A=Hi.Es(f.targetId,g);o.push(A)}}))}),await Promise.all(l),r.Pu.J_(i),await async function(f,g){const I=st(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>P.forEach(g,S=>P.forEach(S.Ts,V=>I.persistence.referenceDelegate.addReference(A,S.targetId,V)).next(()=>P.forEach(S.Is,V=>I.persistence.referenceDelegate.removeReference(A,S.targetId,V)))))}catch(A){if(!Er(A))throw A;U(vm,"Failed to update sequence numbers: "+A)}for(const A of g){const S=A.targetId;if(!A.fromCache){const V=I.vs.get(S),F=V.snapshotVersion,M=V.withLastLimboFreeSnapshotVersion(F);I.vs=I.vs.insert(S,M)}}}(r.localStore,o))}async function Zm(n,t){const e=st(n);if(!e.currentUser.isEqual(t)){U(Km,"User change. New user:",t.toKey());const r=await au(e.localStore,t);e.currentUser=t,function(o,l){o.mu.forEach(c=>{c.forEach(f=>{f.reject(new q(D.CANCELLED,l))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ws(e,r.Ns)}}function tg(n){const t=st(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Jm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ym.bind(null,t),t}class fs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ts(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Am(this.persistence,new Em,t.initialUser,this.serializer)}Cu(t){return new ou(qi.Vi,this.serializer)}Du(t){return new Sm}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fs.provider={build:()=>new fs};class eg extends fs{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){mt(this.persistence.referenceDelegate instanceof hs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new sm(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?jt.withCacheSize(this.cacheSizeBytes):jt.DEFAULT;return new ou(r=>hs.Vi(r,e),this.serializer)}}class gi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$a(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zm.bind(null,this.syncEngine),await zm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Gm}()}createDatastore(t){const e=Ts(t.databaseInfo.databaseId),r=Dm(t.databaseInfo);return Fm(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,l,c){return new Lm(r,i,o,l,c)}(this.localStore,this.datastore,t.asyncQueue,e=>$a(this.syncEngine,e,0),function(){return Fa.v()?new Fa:new Rm}())}createSyncEngine(t,e){return function(i,o,l,c,f,g,I){const A=new Qm(i,o,l,c,f,g);return I&&(A.gu=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=st(i);U(Tr,"RemoteStore shutting down."),o.Ea.add(5),await Ar(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}gi.provider={build:()=>new gi};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="FirestoreClient";class ng{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=i,this.user=Nt.UNAUTHENTICATED,this.clientId=Ci.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async l=>{U(Ve,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(U(Ve,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=du(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Xs(n,t){n.asyncQueue.verifyOperationInProgress(),U(Ve,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await au(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function qa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await rg(n);U(Ve,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>La(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>La(t.remoteStore,i)),n._onlineComponents=t}async function rg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(Ve,"Using user provided OfflineComponentProvider");try{await Xs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;_s("Error using user provided cache. Falling back to memory cache: "+e),await Xs(n,new fs)}}else U(Ve,"Using default OfflineComponentProvider"),await Xs(n,new eg(void 0));return n._offlineComponents}async function sg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(Ve,"Using user provided OnlineComponentProvider"),await qa(n,n._uninitializedComponentsProvider._online)):(U(Ve,"Using default OnlineComponentProvider"),await qa(n,new gi))),n._onlineComponents}function ig(n){return sg(n).then(t=>t.syncEngine)}function og(n,t){const e=new qe;return n.asyncQueue.enqueueAndForget(async()=>Xm(await ig(n),t,e)),e.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="ComponentProvider",Ha=new Map;function lg(n,t,e,r,i){return new ed(n,t,e,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,pu(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="firestore.googleapis.com",za=!0;class Ga{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new q(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_u,this.ssl=za}else this.host=t.host,this.ssl=t.ssl??za;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=iu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<nm)throw new q(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pu(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class bs{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ga({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new q(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ga(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nf;switch(r.type){case"firstParty":return new Mf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ha.get(e);r&&(U(ag,"Removing Datastore"),Ha.delete(e),r.terminate())}(this),Promise.resolve()}}function ug(n,t,e,r={}){var g;n=Rl(n,bs);const i=wi(t),o=n._getSettings(),l={...o,emulatorOptions:n._getEmulatorOptions()},c=`${t}:${e}`;i&&(oh(`https://${c}`),ch("Firestore",!0)),o.host!==_u&&o.host!==c&&_s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...o,host:c,ssl:i,emulatorOptions:r};if(!Zr(f,l)&&(n._setSettings(f),r.mockUserToken)){let I,A;if(typeof r.mockUserToken=="string")I=r.mockUserToken,A=Nt.MOCK_USER;else{I=ah(r.mockUserToken,(g=n._app)==null?void 0:g.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new q(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Nt(S)}n._authCredentials=new kf(new wl(I,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Gi(this.firestore,t,this._query)}}class Ot{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new be(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ot(this.firestore,t,this._key)}toJSON(){return{type:Ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(yr(e,Ot._jsonSchema))return new Ot(t,r||null,new H(ft.fromString(e.referencePath)))}}Ot._jsonSchemaVersion="firestore/documentReference/1.0",Ot._jsonSchema={type:yt("string",Ot._jsonSchemaVersion),referencePath:yt("string")};class be extends Gi{constructor(t,e,r){super(t,e,_d(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ot(this.firestore,null,new H(t))}withConverter(t){return new be(this.firestore,t,this._path)}}function cg(n,t,...e){if(n=ur(n),bl("collection","path",t),n instanceof bs){const r=ft.fromString(t,...e);return ma(r),new be(n,null,r)}{if(!(n instanceof Ot||n instanceof be))throw new q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return ma(r),new be(n.firestore,null,r)}}function hg(n,t,...e){if(n=ur(n),arguments.length===1&&(t=Ci.newId()),bl("doc","path",t),n instanceof bs){const r=ft.fromString(t,...e);return da(r),new Ot(n,null,new H(r))}{if(!(n instanceof Ot||n instanceof be))throw new q(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return da(r),new Ot(n.firestore,n instanceof be?n.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="AsyncQueue";class Ka{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new lu(this,"async_queue_retry"),this._c=()=>{const r=Qs();r&&U(Wa,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Qs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Qs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new qe;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!Er(t))throw t;U(Wa,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,Ge("INTERNAL UNHANDLED ERROR: ",Qa(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=zi.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&W(47125,{Pc:Qa(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Qa(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class yu extends bs{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Ka,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ka(t),this._firestoreClient=void 0,await t}}}function fg(n,t){const e=typeof n=="object"?n:Tf(),r=typeof n=="string"?n:ss,i=pf(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=sh("firestore");o&&ug(i,...o)}return i}function dg(n){if(n._terminated)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||mg(n),n._firestoreClient}function mg(n){var r,i,o,l;const t=n._freezeSettings(),e=lg(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,t);n._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((l=t.localCache)!=null&&l._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new ng(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Yt(le.fromBase64String(t))}catch(e){throw new q(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Yt(le.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Yt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(yr(t,Yt._jsonSchema))return Yt.fromBase64String(t.bytes)}}Yt._jsonSchemaVersion="firestore/bytes/1.0",Yt._jsonSchema={type:yt("string",Yt._jsonSchemaVersion),bytes:yt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new q(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new q(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new q(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return nt(this._lat,t._lat)||nt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:de._jsonSchemaVersion}}static fromJSON(t){if(yr(t,de._jsonSchema))return new de(t.latitude,t.longitude)}}de._jsonSchemaVersion="firestore/geoPoint/1.0",de._jsonSchema={type:yt("string",de._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:ae._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(yr(t,ae._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new ae(t.vectorValues);throw new q(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ae._jsonSchemaVersion="firestore/vectorValue/1.0",ae._jsonSchema={type:yt("string",ae._jsonSchemaVersion),vectorValues:yt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=/^__.*__$/;class pg{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Xe(t,this.data,this.fieldMask,e,this.fieldTransforms):new vr(t,this.data,e,this.fieldTransforms)}}function Tu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{dataSource:n})}}class Wi{constructor(t,e,r,i,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new Wi({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return ds(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(Tu(this.dataSource)&&gg.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class _g{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Ts(t)}createContext(t,e,r,i=!1){return new Wi({dataSource:t,methodName:e,targetDoc:r,path:Pt.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yg(n){const t=n._freezeSettings(),e=Ts(n._databaseId);return new _g(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Eg(n,t,e,r,i,o={}){const l=n.createContext(o.merge||o.mergeFields?2:0,t,e,i);bu("Data must be an object, but it was:",l,r);const c=Iu(r,l);let f,g;if(o.merge)f=new Zt(l.fieldMask),g=l.fieldTransforms;else if(o.mergeFields){const I=[];for(const A of o.mergeFields){const S=Ki(t,A,e);if(!l.contains(S))throw new q(D.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Ag(I,S)||I.push(S)}f=new Zt(I),g=l.fieldTransforms.filter(A=>f.covers(A.field))}else f=null,g=l.fieldTransforms;return new pg(new Jt(c),f,g)}function Au(n,t){if(wu(n=ur(n)))return bu("Unsupported field value:",t,n),Iu(n,t);if(n instanceof vu)return function(r,i){if(!Tu(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return function(r,i){const o=[];let l=0;for(const c of r){let f=Au(c,i.childContextForArray(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=ur(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Cd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ct.fromDate(r);return{timestampValue:hi(i.serializer,o)}}if(r instanceof ct){const o=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hi(i.serializer,o)}}if(r instanceof de)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yt)return{bytesValue:jd(i.serializer,r._byteString)};if(r instanceof Ot){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:nu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ae)return function(l,c){const f=l instanceof ae?l.toArray():l;return{mapValue:{fields:{[kl]:{stringValue:Ol},[oi]:{arrayValue:{values:f.map(I=>{if(typeof I!="number")throw c.createError("VectorValues must only contain numeric values.");return Bi(c.serializer,I)})}}}}}}(r,i);if(su(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Vi(r)}`)}(n,t)}function Iu(n,t){const e={};return Vl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):bn(n,(r,i)=>{const o=Au(i,t.childContextForField(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function wu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ct||n instanceof de||n instanceof Yt||n instanceof Ot||n instanceof vu||n instanceof ae||su(n))}function bu(n,t,e){if(!wu(e)||!Sl(e)){const r=Vi(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function Ki(n,t,e){if((t=ur(t))instanceof Eu)return t._internalPath;if(typeof t=="string")return Tg(n,t);throw ds("Field path arguments must be of type string or ",n,!1,void 0,e)}const vg=new RegExp("[~\\*/\\[\\]]");function Tg(n,t,e){if(t.search(vg)>=0)throw ds(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Eu(...t.split("."))._internalPath}catch{throw ds(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ds(n,t,e,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${r}`),l&&(f+=` in document ${i}`),f+=")"),new q(D.INVALID_ARGUMENT,c+n+f)}function Ag(n,t){return n.some(e=>e.isEqual(t))}const Xa="@firebase/firestore",Ja="4.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ig(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Ki("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ig extends Su{data(){return super.data()}}function wg(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Hr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class gn extends Su{constructor(t,e,r,i,o,l){super(t,e,r,i,l),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Qr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ki("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=gn._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}gn._jsonSchemaVersion="firestore/documentSnapshot/1.0",gn._jsonSchema={type:yt("string",gn._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class Qr extends gn{data(t={}){return super.data(t)}}class lr{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Hr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Qr(this._firestore,this._userDataWriter,r.key,r,new Hr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new q(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(c=>{const f=new Qr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Hr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const f=new Qr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Hr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let g=-1,I=-1;return c.type!==0&&(g=l.indexOf(c.doc.key),l=l.delete(c.doc.key)),c.type!==1&&(l=l.add(c.doc),I=l.indexOf(c.doc.key)),{type:bg(c.type),doc:f,oldIndex:g,newIndex:I}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=lr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ci.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function bg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lr._jsonSchemaVersion="firestore/querySnapshot/1.0",lr._jsonSchema={type:yt("string",lr._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};function Sg(n,t){const e=Rl(n.firestore,yu),r=hg(n),i=wg(n.converter,t),o=yg(n.firestore);return Rg(e,[Eg(o,"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,fe.exists(!1))]).then(()=>r)}function Rg(n,t){const e=dg(n);return og(e,t)}(function(t,e=!0){xf(vf),es(new cr("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),c=new yu(new Of(r.getProvider("auth-internal")),new Lf(l,r.getProvider("app-check-internal")),nd(l,i),l);return o={useFetchStreams:e,...o},c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),fn(Xa,Ja,t),fn(Xa,Ja,"esm2020")})();var Cg="firebase",Vg="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(Cg,Vg,"app");const Pg={apiKey:"AIzaSyB6ni9THCcYe8X9AfoMYSX53CXrsiDoAeM",authDomain:"portfolio-e82f1.firebaseapp.com",projectId:"portfolio-e82f1",storageBucket:"portfolio-e82f1.appspot.com",messagingSenderId:"381502552191",appId:"1:381502552191:web:9b8bd9fed9d8dd2122674a",measurementId:"G-GM47XWJEJ2"},Dg=gl(Pg),xg=fg(Dg);Ya.registerPlugin(oc);function Mg(){var I,A,S,V,F;const n=Gt.useRef(null),[t,e]=Gt.useState(!1),r=ec("gray.100","whiteAlpha.100"),i=Ac(),{register:o,handleSubmit:l,reset:c,formState:{errors:f}}=Wc();nc(()=>{Ya.from(".contact-content",{scrollTrigger:{trigger:n.current,start:"top 75%"},y:50,opacity:0,duration:1,ease:"power2.out"})},{scope:n});const g=async M=>{e(!0);try{await Sg(cg(xg,"todos"),{fname:M.firstName,lname:M.lastName,email:M.email,mobile:M.mobile,message:M.message,date:new Date().toLocaleString()}),i({title:"Message Sent!",description:`Thanks ${M.firstName}, I'll get back to you soon.`,status:"success",duration:5e3,isClosable:!0,position:"bottom"}),c()}catch(B){console.error("Error adding document: ",B),i({title:"Error",description:"Something went wrong. Please try again later.",status:"error",duration:5e3,isClosable:!0})}finally{e(!1)}};return K.jsx(rc,{ref:n,py:0,minH:"100vh",h:"auto",p:"5rem",display:"flex",alignItems:"center",id:"contact",children:K.jsx(sc,{maxW:"container.md",className:"contact-content",position:"relative",children:K.jsxs(Uo,{spacing:8,align:"center",textAlign:"center",children:[K.jsx(ac,{as:"h2",fontSize:["4xl","5xl"],children:"Let's Work Together"}),K.jsx(js,{fontSize:"xl",color:"gray.500",maxW:"600px",children:"Have a project in mind? I'm always open to discussing new ideas and opportunities."}),K.jsxs(Uo,{w:"full",spacing:4,as:"form",onSubmit:l(g),children:[K.jsxs(uc,{columns:[1,2],spacing:4,w:"full",children:[K.jsxs(on,{isInvalid:!!f.firstName,children:[K.jsx(hn,{placeholder:"First Name",size:"lg",bg:r,border:"none",_focus:{ring:2,ringColor:"cyan.400"},...o("firstName",{required:"First name is required"})}),K.jsx(an,{children:(I=f.firstName)==null?void 0:I.message})]}),K.jsxs(on,{isInvalid:!!f.lastName,children:[K.jsx(hn,{placeholder:"Last Name",size:"lg",bg:r,border:"none",_focus:{ring:2,ringColor:"cyan.400"},...o("lastName",{required:"Last name is required"})}),K.jsx(an,{children:(A=f.lastName)==null?void 0:A.message})]})]}),K.jsxs(on,{isInvalid:!!f.email,children:[K.jsx(hn,{placeholder:"Email",size:"lg",bg:r,border:"none",_focus:{ring:2,ringColor:"cyan.400"},...o("email",{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}),K.jsx(an,{children:(S=f.email)==null?void 0:S.message})]}),K.jsxs(on,{isInvalid:!!f.mobile,children:[K.jsx(hn,{placeholder:"Mobile Number",size:"lg",bg:r,border:"none",_focus:{ring:2,ringColor:"cyan.400"},...o("mobile",{required:"Mobile number is required"})}),K.jsx(an,{children:(V=f.mobile)==null?void 0:V.message})]}),K.jsxs(on,{isInvalid:!!f.message,children:[K.jsx(tl,{placeholder:"Message",size:"lg",rows:6,bg:r,border:"none",_focus:{ring:2,ringColor:"cyan.400"},...o("message",{required:"Message is required"})}),K.jsx(an,{children:(F=f.message)==null?void 0:F.message})]}),K.jsx(ic,{size:"lg",colorScheme:"cyan",w:"full",fontSize:"lg",h:14,type:"submit",isLoading:t,loadingText:"Sending...",children:"Send Message"})]}),K.jsxs(js,{pt:10,color:"gray.500",children:["Or email me directly at"," ",K.jsx(js,{as:"span",color:"cyan.400",fontWeight:"bold",children:lc.contact.email})]})]})})})}export{Mg as default};
