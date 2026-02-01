import{m as kn,x as Ni,y as Oi,q as bs,s as xn,j as W,n as br,r as Qt,z as ca,A as Se,D as ti,I as lh,p as ch,o as uh,E as or,J as ua,K as hh,L as fh,M as dh,R as Ut,u as mh,a as gh,B as ph,C as yh,T as ei,b as _h,g as xl,w as Eh}from"./index-K_y38zN6.js";import{V as ha,H as vh,p as Th}from"./content-CxeRd41N.js";import{S as wh}from"./simple-grid-B8GTzsjI.js";function fa(...n){return function(e){n.some(r=>(r==null||r(e),e==null?void 0:e.defaultPrevented))}}const[Ih,Ah]=Ni({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[bh,Ss]=Ni({strict:!1,name:"FormControlContext"});function Sh(n){const{id:t,isRequired:e,isInvalid:r,isDisabled:s,isReadOnly:o,...a}=n,u=Qt.useId(),h=t||`field-${u}`,d=`${h}-label`,I=`${h}-feedback`,T=`${h}-helptext`,[S,P]=Qt.useState(!1),[F,M]=Qt.useState(!1),[L,H]=Qt.useState(!1),U=Qt.useCallback((_={},g=null)=>({id:T,..._,ref:ca(g,p=>{p&&M(!0)})}),[T]),X=Qt.useCallback((_={},g=null)=>({..._,ref:g,"data-focus":Se(L),"data-disabled":Se(s),"data-invalid":Se(r),"data-readonly":Se(o),id:_.id!==void 0?_.id:d,htmlFor:_.htmlFor!==void 0?_.htmlFor:h}),[h,s,L,r,o,d]),ot=Qt.useCallback((_={},g=null)=>({id:I,..._,ref:ca(g,p=>{p&&P(!0)}),"aria-live":"polite"}),[I]),Z=Qt.useCallback((_={},g=null)=>({..._,...a,ref:g,role:"group","data-focus":Se(L),"data-disabled":Se(s),"data-invalid":Se(r),"data-readonly":Se(o)}),[a,s,L,r,o]),gt=Qt.useCallback((_={},g=null)=>({..._,ref:g,role:"presentation","aria-hidden":!0,children:_.children||"*"}),[]);return{isRequired:!!e,isInvalid:!!r,isReadOnly:!!o,isDisabled:!!s,isFocused:!!L,onFocus:()=>H(!0),onBlur:()=>H(!1),hasFeedbackText:S,setHasFeedbackText:P,hasHelpText:F,setHasHelpText:M,id:h,labelId:d,feedbackId:I,helpTextId:T,htmlProps:a,getHelpTextProps:U,getErrorMessageProps:ot,getRootProps:Z,getLabelProps:X,getRequiredIndicatorProps:gt}}const yn=kn(function(t,e){const r=Oi("Form",t),s=bs(t),{getRootProps:o,htmlProps:a,...u}=Sh(s),h=xn("chakra-form-control",t.className);return W.jsx(bh,{value:u,children:W.jsx(Ih,{value:r,children:W.jsx(br.div,{...o({},e),className:h,__css:r.container})})})});yn.displayName="FormControl";const Rh=kn(function(t,e){const r=Ss(),s=Ah(),o=xn("chakra-form__helper-text",t.className);return W.jsx(br.div,{...r==null?void 0:r.getHelpTextProps(t,e),__css:s.helperText,className:o})});Rh.displayName="FormHelperText";function Nl(n){const{isDisabled:t,isInvalid:e,isReadOnly:r,isRequired:s,...o}=Ch(n);return{...o,disabled:t,readOnly:r,required:s,"aria-invalid":ti(e),"aria-required":ti(s),"aria-readonly":ti(r)}}function Ch(n){const t=Ss(),{id:e,disabled:r,readOnly:s,required:o,isRequired:a,isInvalid:u,isReadOnly:h,isDisabled:d,onFocus:I,onBlur:T,...S}=n,P=n["aria-describedby"]?[n["aria-describedby"]]:[];return t!=null&&t.hasFeedbackText&&(t!=null&&t.isInvalid)&&P.push(t.feedbackId),t!=null&&t.hasHelpText&&P.push(t.helpTextId),{...S,"aria-describedby":P.join(" ")||void 0,id:e??(t==null?void 0:t.id),isDisabled:r??d??(t==null?void 0:t.isDisabled),isReadOnly:s??h??(t==null?void 0:t.isReadOnly),isRequired:o??a??(t==null?void 0:t.isRequired),isInvalid:u??(t==null?void 0:t.isInvalid),onFocus:fa(t==null?void 0:t.onFocus,I),onBlur:fa(t==null?void 0:t.onBlur,T)}}const[Ph,Vh]=Ni({name:"FormErrorStylesContext",errorMessage:`useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `}),_n=kn((n,t)=>{const e=Oi("FormError",n),r=bs(n),s=Ss();return s!=null&&s.isInvalid?W.jsx(Ph,{value:e,children:W.jsx(br.div,{...s==null?void 0:s.getErrorMessageProps(r,t),className:xn("chakra-form__error-message",n.className),__css:{display:"flex",alignItems:"center",...e.text}})}):null});_n.displayName="FormErrorMessage";const Dh=kn((n,t)=>{const e=Vh(),r=Ss();if(!(r!=null&&r.isInvalid))return null;const s=xn("chakra-form__error-icon",n.className);return W.jsx(lh,{ref:t,"aria-hidden":!0,...n,__css:e.icon,className:s,children:W.jsx("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})});Dh.displayName="FormErrorIcon";const wn=kn(function(t,e){const{htmlSize:r,...s}=t,o=Oi("Input",s),a=bs(s),u=Nl(a),h=xn("chakra-input",t.className);return W.jsx(br.input,{size:r,...u,__css:o.field,ref:e,className:h})});wn.displayName="Input";wn.id="Input";const kh=["h","minH","height","minHeight"],Ol=kn((n,t)=>{const e=ch("Textarea",n),{className:r,rows:s,...o}=bs(n),a=Nl(o),u=s?uh(e,kh):e;return W.jsx(br.textarea,{ref:t,rows:s,...a,className:xn("chakra-textarea",r),__css:u})});Ol.displayName="Textarea";function xh(n,t){const e=n??"bottom",s={"top-start":{ltr:"top-left",rtl:"top-right"},"top-end":{ltr:"top-right",rtl:"top-left"},"bottom-start":{ltr:"bottom-left",rtl:"bottom-right"},"bottom-end":{ltr:"bottom-right",rtl:"bottom-left"}}[e];return(s==null?void 0:s[t])??e}function Nh(n,t){const e=s=>({...t,...s,position:xh((s==null?void 0:s.position)??(t==null?void 0:t.position),n)}),r=s=>{const o=e(s),a=hh(o);return or.notify(a,o)};return r.update=(s,o)=>{or.update(s,e(o))},r.promise=(s,o)=>{const a=r({...o.loading,status:"loading",duration:null});s.then(u=>r.update(a,{status:"success",duration:5e3,...ua(o.success,u)})).catch(u=>r.update(a,{status:"error",duration:5e3,...ua(o.error,u)}))},r.closeAll=or.closeAll,r.close=or.close,r.isActive=or.isActive,r}function Oh(n){const{theme:t}=fh(),e=dh();return Qt.useMemo(()=>Nh(t.direction,{...e,...n}),[n,t.direction,e])}var Sr=n=>n.type==="checkbox",Qe=n=>n instanceof Date,$t=n=>n==null;const Fl=n=>typeof n=="object";var Et=n=>!$t(n)&&!Array.isArray(n)&&Fl(n)&&!Qe(n),Fh=n=>Et(n)&&n.target?Sr(n.target)?n.target.checked:n.target.value:n,Mh=n=>n.substring(0,n.search(/\.\d+(\.|$)/))||n,Lh=(n,t)=>n.has(Mh(t)),Uh=n=>{const t=n.constructor&&n.constructor.prototype;return Et(t)&&t.hasOwnProperty("isPrototypeOf")},Fi=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Tt(n){if(n instanceof Date)return new Date(n);const t=typeof FileList<"u"&&n instanceof FileList;if(Fi&&(n instanceof Blob||t))return n;const e=Array.isArray(n);if(!e&&!(Et(n)&&Uh(n)))return n;const r=e?[]:Object.create(Object.getPrototypeOf(n));for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=Tt(n[s]));return r}var Rs=n=>/^\w*$/.test(n),ht=n=>n===void 0,Mi=n=>Array.isArray(n)?n.filter(Boolean):[],Li=n=>Mi(n.replace(/["|']|\]/g,"").split(/\.|\[/)),B=(n,t,e)=>{if(!t||!Et(n))return e;const r=(Rs(t)?[t]:Li(t)).reduce((s,o)=>$t(s)?s:s[o],n);return ht(r)||r===n?ht(n[t])?e:n[t]:r},le=n=>typeof n=="boolean",Xt=n=>typeof n=="function",lt=(n,t,e)=>{let r=-1;const s=Rs(t)?[t]:Li(t),o=s.length,a=o-1;for(;++r<o;){const u=s[r];let h=e;if(r!==a){const d=n[u];h=Et(d)||Array.isArray(d)?d:isNaN(+s[r+1])?{}:[]}if(u==="__proto__"||u==="constructor"||u==="prototype")return;n[u]=h,n=n[u]}};const da={BLUR:"blur",FOCUS_OUT:"focusout"},Zt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ge={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Bh=Ut.createContext(null);Bh.displayName="HookFormControlContext";var jh=(n,t,e,r=!0)=>{const s={defaultValues:t._defaultValues};for(const o in n)Object.defineProperty(s,o,{get:()=>{const a=o;return t._proxyFormState[a]!==Zt.all&&(t._proxyFormState[a]=!r||Zt.all),n[a]}});return s};const $h=typeof window<"u"?Ut.useLayoutEffect:Ut.useEffect;var Kt=n=>typeof n=="string",qh=(n,t,e,r,s)=>Kt(n)?(r&&t.watch.add(n),B(e,n,s)):Array.isArray(n)?n.map(o=>(r&&t.watch.add(o),B(e,o))):(r&&(t.watchAll=!0),e),mi=n=>$t(n)||!Fl(n);function Re(n,t,e=new WeakSet){if(mi(n)||mi(t))return Object.is(n,t);if(Qe(n)&&Qe(t))return Object.is(n.getTime(),t.getTime());const r=Object.keys(n),s=Object.keys(t);if(r.length!==s.length)return!1;if(e.has(n)||e.has(t))return!0;e.add(n),e.add(t);for(const o of r){const a=n[o];if(!s.includes(o))return!1;if(o!=="ref"){const u=t[o];if(Qe(a)&&Qe(u)||Et(a)&&Et(u)||Array.isArray(a)&&Array.isArray(u)?!Re(a,u,e):!Object.is(a,u))return!1}}return!0}const Hh=Ut.createContext(null);Hh.displayName="HookFormContext";var zh=(n,t,e,r,s)=>t?{...e[n],types:{...e[n]&&e[n].types?e[n].types:{},[r]:s||!0}}:{},hr=n=>Array.isArray(n)?n:[n],ma=()=>{let n=[];return{get observers(){return n},next:s=>{for(const o of n)o.next&&o.next(s)},subscribe:s=>(n.push(s),{unsubscribe:()=>{n=n.filter(o=>o!==s)}}),unsubscribe:()=>{n=[]}}};function Ml(n,t){const e={};for(const r in n)if(n.hasOwnProperty(r)){const s=n[r],o=t[r];if(s&&Et(s)&&o){const a=Ml(s,o);Et(a)&&(e[r]=a)}else n[r]&&(e[r]=o)}return e}var Bt=n=>Et(n)&&!Object.keys(n).length,Ui=n=>n.type==="file",as=n=>{if(!Fi)return!1;const t=n?n.ownerDocument:0;return n instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Ll=n=>n.type==="select-multiple",Bi=n=>n.type==="radio",Gh=n=>Bi(n)||Sr(n),ni=n=>as(n)&&n.isConnected;function Kh(n,t){const e=t.slice(0,-1).length;let r=0;for(;r<e;)n=ht(n)?r++:n[t[r++]];return n}function Wh(n){for(const t in n)if(n.hasOwnProperty(t)&&!ht(n[t]))return!1;return!0}function pt(n,t){const e=Array.isArray(t)?t:Rs(t)?[t]:Li(t),r=e.length===1?n:Kh(n,e),s=e.length-1,o=e[s];return r&&delete r[o],s!==0&&(Et(r)&&Bt(r)||Array.isArray(r)&&Wh(r))&&pt(n,e.slice(0,-1)),n}var Qh=n=>{for(const t in n)if(Xt(n[t]))return!0;return!1};function Ul(n){return Array.isArray(n)||Et(n)&&!Qh(n)}function gi(n,t={}){for(const e in n){const r=n[e];Ul(r)?(t[e]=Array.isArray(r)?[]:{},gi(r,t[e])):ht(r)||(t[e]=!0)}return t}function En(n,t,e){e||(e=gi(t));for(const r in n){const s=n[r];if(Ul(s))ht(t)||mi(e[r])?e[r]=gi(s,Array.isArray(s)?[]:{}):En(s,$t(t)?{}:t[r],e[r]);else{const o=t[r];e[r]=!Re(s,o)}}return e}const ga={value:!1,isValid:!1},pa={value:!0,isValid:!0};var Bl=n=>{if(Array.isArray(n)){if(n.length>1){const t=n.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return n[0].checked&&!n[0].disabled?n[0].attributes&&!ht(n[0].attributes.value)?ht(n[0].value)||n[0].value===""?pa:{value:n[0].value,isValid:!0}:pa:ga}return ga},jl=(n,{valueAsNumber:t,valueAsDate:e,setValueAs:r})=>ht(n)?n:t?n===""?NaN:n&&+n:e&&Kt(n)?new Date(n):r?r(n):n;const ya={isValid:!1,value:null};var $l=n=>Array.isArray(n)?n.reduce((t,e)=>e&&e.checked&&!e.disabled?{isValid:!0,value:e.value}:t,ya):ya;function _a(n){const t=n.ref;return Ui(t)?t.files:Bi(t)?$l(n.refs).value:Ll(t)?[...t.selectedOptions].map(({value:e})=>e):Sr(t)?Bl(n.refs).value:jl(ht(t.value)?n.ref.value:t.value,n)}var Jh=(n,t,e,r)=>{const s={};for(const o of n){const a=B(t,o);a&&lt(s,o,a._f)}return{criteriaMode:e,names:[...n],fields:s,shouldUseNativeValidation:r}},ls=n=>n instanceof RegExp,ar=n=>ht(n)?n:ls(n)?n.source:Et(n)?ls(n.value)?n.value.source:n.value:n,Ea=n=>({isOnSubmit:!n||n===Zt.onSubmit,isOnBlur:n===Zt.onBlur,isOnChange:n===Zt.onChange,isOnAll:n===Zt.all,isOnTouch:n===Zt.onTouched});const va="AsyncFunction";var Yh=n=>!!n&&!!n.validate&&!!(Xt(n.validate)&&n.validate.constructor.name===va||Et(n.validate)&&Object.values(n.validate).find(t=>t.constructor.name===va)),Xh=n=>n.mount&&(n.required||n.min||n.max||n.maxLength||n.minLength||n.pattern||n.validate),Ta=(n,t,e)=>!e&&(t.watchAll||t.watch.has(n)||[...t.watch].some(r=>n.startsWith(r)&&/^\.\w+/.test(n.slice(r.length))));const fr=(n,t,e,r)=>{for(const s of e||Object.keys(n)){const o=B(n,s);if(o){const{_f:a,...u}=o;if(a){if(a.refs&&a.refs[0]&&t(a.refs[0],s)&&!r)return!0;if(a.ref&&t(a.ref,a.name)&&!r)return!0;if(fr(u,t))break}else if(Et(u)&&fr(u,t))break}}};function wa(n,t,e){const r=B(n,e);if(r||Rs(e))return{error:r,name:e};const s=e.split(".");for(;s.length;){const o=s.join("."),a=B(t,o),u=B(n,o);if(a&&!Array.isArray(a)&&e!==o)return{name:e};if(u&&u.type)return{name:o,error:u};if(u&&u.root&&u.root.type)return{name:`${o}.root`,error:u.root};s.pop()}return{name:e}}var Zh=(n,t,e,r)=>{e(n);const{name:s,...o}=n;return Bt(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(a=>t[a]===(!r||Zt.all))},tf=(n,t,e)=>!n||!t||n===t||hr(n).some(r=>r&&(e?r===t:r.startsWith(t)||t.startsWith(r))),ef=(n,t,e,r,s)=>s.isOnAll?!1:!e&&s.isOnTouch?!(t||n):(e?r.isOnBlur:s.isOnBlur)?!n:(e?r.isOnChange:s.isOnChange)?n:!0,nf=(n,t)=>!Mi(B(n,t)).length&&pt(n,t),rf=(n,t,e)=>{const r=hr(B(n,e));return lt(r,"root",t[e]),lt(n,e,r),n};function Ia(n,t,e="validate"){if(Kt(n)||Array.isArray(n)&&n.every(Kt)||le(n)&&!n)return{type:e,message:Kt(n)?n:"",ref:t}}var pn=n=>Et(n)&&!ls(n)?n:{value:n,message:""},Aa=async(n,t,e,r,s,o)=>{const{ref:a,refs:u,required:h,maxLength:d,minLength:I,min:T,max:S,pattern:P,validate:F,name:M,valueAsNumber:L,mount:H}=n._f,U=B(e,M);if(!H||t.has(M))return{};const X=u?u[0]:a,ot=v=>{s&&X.reportValidity&&(X.setCustomValidity(le(v)?"":v||""),X.reportValidity())},Z={},gt=Bi(a),_=Sr(a),g=gt||_,p=(L||Ui(a))&&ht(a.value)&&ht(U)||as(a)&&a.value===""||U===""||Array.isArray(U)&&!U.length,w=zh.bind(null,M,r,Z),E=(v,m,Q,at=ge.maxLength,zt=ge.minLength)=>{const Mt=v?m:Q;Z[M]={type:v?at:zt,message:Mt,ref:a,...w(v?at:zt,Mt)}};if(o?!Array.isArray(U)||!U.length:h&&(!g&&(p||$t(U))||le(U)&&!U||_&&!Bl(u).isValid||gt&&!$l(u).isValid)){const{value:v,message:m}=Kt(h)?{value:!!h,message:h}:pn(h);if(v&&(Z[M]={type:ge.required,message:m,ref:X,...w(ge.required,m)},!r))return ot(m),Z}if(!p&&(!$t(T)||!$t(S))){let v,m;const Q=pn(S),at=pn(T);if(!$t(U)&&!isNaN(U)){const zt=a.valueAsNumber||U&&+U;$t(Q.value)||(v=zt>Q.value),$t(at.value)||(m=zt<at.value)}else{const zt=a.valueAsDate||new Date(U),Mt=Le=>new Date(new Date().toDateString()+" "+Le),re=a.type=="time",se=a.type=="week";Kt(Q.value)&&U&&(v=re?Mt(U)>Mt(Q.value):se?U>Q.value:zt>new Date(Q.value)),Kt(at.value)&&U&&(m=re?Mt(U)<Mt(at.value):se?U<at.value:zt<new Date(at.value))}if((v||m)&&(E(!!v,Q.message,at.message,ge.max,ge.min),!r))return ot(Z[M].message),Z}if((d||I)&&!p&&(Kt(U)||o&&Array.isArray(U))){const v=pn(d),m=pn(I),Q=!$t(v.value)&&U.length>+v.value,at=!$t(m.value)&&U.length<+m.value;if((Q||at)&&(E(Q,v.message,m.message),!r))return ot(Z[M].message),Z}if(P&&!p&&Kt(U)){const{value:v,message:m}=pn(P);if(ls(v)&&!U.match(v)&&(Z[M]={type:ge.pattern,message:m,ref:a,...w(ge.pattern,m)},!r))return ot(m),Z}if(F){if(Xt(F)){const v=await F(U,e),m=Ia(v,X);if(m&&(Z[M]={...m,...w(ge.validate,m.message)},!r))return ot(m.message),Z}else if(Et(F)){let v={};for(const m in F){if(!Bt(v)&&!r)break;const Q=Ia(await F[m](U,e),X,m);Q&&(v={...Q,...w(m,Q.message)},ot(Q.message),r&&(Z[M]=v))}if(!Bt(v)&&(Z[M]={ref:X,...v},!r))return Z}}return ot(!0),Z};const sf={mode:Zt.onSubmit,reValidateMode:Zt.onChange,shouldFocusError:!0};function of(n={}){let t={...sf,...n},e={submitCount:0,isDirty:!1,isReady:!1,isLoading:Xt(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},s=Et(t.defaultValues)||Et(t.values)?Tt(t.defaultValues||t.values)||{}:{},o=t.shouldUnregister?{}:Tt(s),a={action:!1,mount:!1,watch:!1,keepIsValid:!1},u={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},h,d=0;const I={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},T={...I};let S={...T};const P={array:ma(),state:ma()},F=t.criteriaMode===Zt.all,M=y=>b=>{clearTimeout(d),d=setTimeout(y,b)},L=async y=>{if(!a.keepIsValid&&!t.disabled&&(T.isValid||S.isValid||y)){let b;t.resolver?(b=Bt((await g()).errors),H()):b=await w(r,!0),b!==e.isValid&&P.state.next({isValid:b})}},H=(y,b)=>{!t.disabled&&(T.isValidating||T.validatingFields||S.isValidating||S.validatingFields)&&((y||Array.from(u.mount)).forEach(C=>{C&&(b?lt(e.validatingFields,C,b):pt(e.validatingFields,C))}),P.state.next({validatingFields:e.validatingFields,isValidating:!Bt(e.validatingFields)}))},U=(y,b=[],C,O,x=!0,k=!0)=>{if(O&&C&&!t.disabled){if(a.action=!0,k&&Array.isArray(B(r,y))){const $=C(B(r,y),O.argA,O.argB);x&&lt(r,y,$)}if(k&&Array.isArray(B(e.errors,y))){const $=C(B(e.errors,y),O.argA,O.argB);x&&lt(e.errors,y,$),nf(e.errors,y)}if((T.touchedFields||S.touchedFields)&&k&&Array.isArray(B(e.touchedFields,y))){const $=C(B(e.touchedFields,y),O.argA,O.argB);x&&lt(e.touchedFields,y,$)}(T.dirtyFields||S.dirtyFields)&&(e.dirtyFields=En(s,o)),P.state.next({name:y,isDirty:v(y,b),dirtyFields:e.dirtyFields,errors:e.errors,isValid:e.isValid})}else lt(o,y,b)},X=(y,b)=>{lt(e.errors,y,b),P.state.next({errors:e.errors})},ot=y=>{e.errors=y,P.state.next({errors:e.errors,isValid:!1})},Z=(y,b,C,O)=>{const x=B(r,y);if(x){const k=B(o,y,ht(C)?B(s,y):C);ht(k)||O&&O.defaultChecked||b?lt(o,y,b?k:_a(x._f)):at(y,k),a.mount&&!a.action&&L()}},gt=(y,b,C,O,x)=>{let k=!1,$=!1;const tt={name:y};if(!t.disabled){if(!C||O){(T.isDirty||S.isDirty)&&($=e.isDirty,e.isDirty=tt.isDirty=v(),k=$!==tt.isDirty);const et=Re(B(s,y),b);$=!!B(e.dirtyFields,y),et?pt(e.dirtyFields,y):lt(e.dirtyFields,y,!0),tt.dirtyFields=e.dirtyFields,k=k||(T.dirtyFields||S.dirtyFields)&&$!==!et}if(C){const et=B(e.touchedFields,y);et||(lt(e.touchedFields,y,C),tt.touchedFields=e.touchedFields,k=k||(T.touchedFields||S.touchedFields)&&et!==C)}k&&x&&P.state.next(tt)}return k?tt:{}},_=(y,b,C,O)=>{const x=B(e.errors,y),k=(T.isValid||S.isValid)&&le(b)&&e.isValid!==b;if(t.delayError&&C?(h=M(()=>X(y,C)),h(t.delayError)):(clearTimeout(d),h=null,C?lt(e.errors,y,C):pt(e.errors,y)),(C?!Re(x,C):x)||!Bt(O)||k){const $={...O,...k&&le(b)?{isValid:b}:{},errors:e.errors,name:y};e={...e,...$},P.state.next($)}},g=async y=>(H(y,!0),await t.resolver(o,t.context,Jh(y||u.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),p=async y=>{const{errors:b}=await g(y);if(H(y),y)for(const C of y){const O=B(b,C);O?lt(e.errors,C,O):pt(e.errors,C)}else e.errors=b;return b},w=async(y,b,C={valid:!0})=>{for(const O in y){const x=y[O];if(x){const{_f:k,...$}=x;if(k){const tt=u.array.has(k.name),et=x._f&&Yh(x._f);et&&T.validatingFields&&H([k.name],!0);const Rt=await Aa(x,u.disabled,o,F,t.shouldUseNativeValidation&&!b,tt);if(et&&T.validatingFields&&H([k.name]),Rt[k.name]&&(C.valid=!1,b||n.shouldUseNativeValidation))break;!b&&(B(Rt,k.name)?tt?rf(e.errors,Rt,k.name):lt(e.errors,k.name,Rt[k.name]):pt(e.errors,k.name))}!Bt($)&&await w($,b,C)}}return C.valid},E=()=>{for(const y of u.unMount){const b=B(r,y);b&&(b._f.refs?b._f.refs.every(C=>!ni(C)):!ni(b._f.ref))&&Be(y)}u.unMount=new Set},v=(y,b)=>!t.disabled&&(y&&b&&lt(o,y,b),!Re(Fn(),s)),m=(y,b,C)=>qh(y,u,{...a.mount?o:ht(b)?s:Kt(y)?{[y]:b}:b},C,b),Q=y=>Mi(B(a.mount?o:s,y,t.shouldUnregister?B(s,y,[]):[])),at=(y,b,C={})=>{const O=B(r,y);let x=b;if(O){const k=O._f;k&&(!k.disabled&&lt(o,y,jl(b,k)),x=as(k.ref)&&$t(b)?"":b,Ll(k.ref)?[...k.ref.options].forEach($=>$.selected=x.includes($.value)):k.refs?Sr(k.ref)?k.refs.forEach($=>{(!$.defaultChecked||!$.disabled)&&(Array.isArray(x)?$.checked=!!x.find(tt=>tt===$.value):$.checked=x===$.value||!!x)}):k.refs.forEach($=>$.checked=$.value===x):Ui(k.ref)?k.ref.value="":(k.ref.value=x,k.ref.type||P.state.next({name:y,values:Tt(o)})))}(C.shouldDirty||C.shouldTouch)&&gt(y,x,C.shouldTouch,C.shouldDirty,!0),C.shouldValidate&&Le(y)},zt=(y,b,C)=>{for(const O in b){if(!b.hasOwnProperty(O))return;const x=b[O],k=y+"."+O,$=B(r,k);(u.array.has(y)||Et(x)||$&&!$._f)&&!Qe(x)?zt(k,x,C):at(k,x,C)}},Mt=(y,b,C={})=>{const O=B(r,y),x=u.array.has(y),k=Tt(b);lt(o,y,k),x?(P.array.next({name:y,values:Tt(o)}),(T.isDirty||T.dirtyFields||S.isDirty||S.dirtyFields)&&C.shouldDirty&&P.state.next({name:y,dirtyFields:En(s,o),isDirty:v(y,k)})):O&&!O._f&&!$t(k)?zt(y,k,C):at(y,k,C),Ta(y,u)?P.state.next({...e,name:y,values:Tt(o)}):P.state.next({name:a.mount?y:void 0,values:Tt(o)})},re=async y=>{a.mount=!0;const b=y.target;let C=b.name,O=!0;const x=B(r,C),k=et=>{O=Number.isNaN(et)||Qe(et)&&isNaN(et.getTime())||Re(et,B(o,C,et))},$=Ea(t.mode),tt=Ea(t.reValidateMode);if(x){let et,Rt;const ie=b.type?_a(x._f):Fh(y),Jt=y.type===da.BLUR||y.type===da.FOCUS_OUT,je=!Xh(x._f)&&!t.resolver&&!B(e.errors,C)&&!x._f.deps||ef(Jt,B(e.touchedFields,C),e.isSubmitted,tt,$),$e=Ta(C,u,Jt);lt(o,C,ie),Jt?(!b||!b.readOnly)&&(x._f.onBlur&&x._f.onBlur(y),h&&h(0)):x._f.onChange&&x._f.onChange(y);const qe=gt(C,ie,Jt),me=!Bt(qe)||$e;if(!Jt&&P.state.next({name:C,type:y.type,values:Tt(o)}),je)return(T.isValid||S.isValid)&&(t.mode==="onBlur"?Jt&&L():Jt||L()),me&&P.state.next({name:C,...$e?{}:qe});if(!Jt&&$e&&P.state.next({...e}),t.resolver){const{errors:Hn}=await g([C]);if(H([C]),k(ie),O){const fn=wa(e.errors,r,C),zn=wa(Hn,r,fn.name||C);et=zn.error,C=zn.name,Rt=Bt(Hn)}}else H([C],!0),et=(await Aa(x,u.disabled,o,F,t.shouldUseNativeValidation))[C],H([C]),k(ie),O&&(et?Rt=!1:(T.isValid||S.isValid)&&(Rt=await w(r,!0)));O&&(x._f.deps&&(!Array.isArray(x._f.deps)||x._f.deps.length>0)&&Le(x._f.deps),_(C,Rt,et,qe))}},se=(y,b)=>{if(B(e.errors,b)&&y.focus)return y.focus(),1},Le=async(y,b={})=>{let C,O;const x=hr(y);if(t.resolver){const k=await p(ht(y)?y:x);C=Bt(k),O=y?!x.some($=>B(k,$)):C}else y?(O=(await Promise.all(x.map(async k=>{const $=B(r,k);return await w($&&$._f?{[k]:$}:$)}))).every(Boolean),!(!O&&!e.isValid)&&L()):O=C=await w(r);return P.state.next({...!Kt(y)||(T.isValid||S.isValid)&&C!==e.isValid?{}:{name:y},...t.resolver||!y?{isValid:C}:{},errors:e.errors}),b.shouldFocus&&!O&&fr(r,se,y?x:u.mount),O},Fn=(y,b)=>{let C={...a.mount?o:s};return b&&(C=Ml(b.dirtyFields?e.dirtyFields:e.touchedFields,C)),ht(y)?C:Kt(y)?B(C,y):y.map(O=>B(C,O))},Mn=(y,b)=>({invalid:!!B((b||e).errors,y),isDirty:!!B((b||e).dirtyFields,y),error:B((b||e).errors,y),isValidating:!!B(e.validatingFields,y),isTouched:!!B((b||e).touchedFields,y)}),Or=y=>{y&&hr(y).forEach(b=>pt(e.errors,b)),P.state.next({errors:y?e.errors:{}})},Ue=(y,b,C)=>{const O=(B(r,y,{_f:{}})._f||{}).ref,x=B(e.errors,y)||{},{ref:k,message:$,type:tt,...et}=x;lt(e.errors,y,{...et,...b,ref:O}),P.state.next({name:y,errors:e.errors,isValid:!1}),C&&C.shouldFocus&&O&&O.focus&&O.focus()},Ln=(y,b)=>Xt(y)?P.state.subscribe({next:C=>"values"in C&&y(m(void 0,b),C)}):m(y,b,!0),cn=y=>P.state.subscribe({next:b=>{tf(y.name,b.name,y.exact)&&Zh(b,y.formState||T,Ur,y.reRenderRoot)&&y.callback({values:{...o},...e,...b,defaultValues:s})}}).unsubscribe,Un=y=>(a.mount=!0,S={...S,...y.formState},cn({...y,formState:{...I,...y.formState}})),Be=(y,b={})=>{for(const C of y?hr(y):u.mount)u.mount.delete(C),u.array.delete(C),b.keepValue||(pt(r,C),pt(o,C)),!b.keepError&&pt(e.errors,C),!b.keepDirty&&pt(e.dirtyFields,C),!b.keepTouched&&pt(e.touchedFields,C),!b.keepIsValidating&&pt(e.validatingFields,C),!t.shouldUnregister&&!b.keepDefaultValue&&pt(s,C);P.state.next({values:Tt(o)}),P.state.next({...e,...b.keepDirty?{isDirty:v()}:{}}),!b.keepIsValid&&L()},Bn=({disabled:y,name:b})=>{if(le(y)&&a.mount||y||u.disabled.has(b)){const x=u.disabled.has(b)!==!!y;y?u.disabled.add(b):u.disabled.delete(b),x&&a.mount&&!a.action&&L()}},jn=(y,b={})=>{let C=B(r,y);const O=le(b.disabled)||le(t.disabled);return lt(r,y,{...C||{},_f:{...C&&C._f?C._f:{ref:{name:y}},name:y,mount:!0,...b}}),u.mount.add(y),C?Bn({disabled:le(b.disabled)?b.disabled:t.disabled,name:y}):Z(y,!0,b.value),{...O?{disabled:b.disabled||t.disabled}:{},...t.progressive?{required:!!b.required,min:ar(b.min),max:ar(b.max),minLength:ar(b.minLength),maxLength:ar(b.maxLength),pattern:ar(b.pattern)}:{},name:y,onChange:re,onBlur:re,ref:x=>{if(x){jn(y,b),C=B(r,y);const k=ht(x.value)&&x.querySelectorAll&&x.querySelectorAll("input,select,textarea")[0]||x,$=Gh(k),tt=C._f.refs||[];if($?tt.find(et=>et===k):k===C._f.ref)return;lt(r,y,{_f:{...C._f,...$?{refs:[...tt.filter(ni),k,...Array.isArray(B(s,y))?[{}]:[]],ref:{type:k.type,name:y}}:{ref:k}}}),Z(y,!1,void 0,k)}else C=B(r,y,{}),C._f&&(C._f.mount=!1),(t.shouldUnregister||b.shouldUnregister)&&!(Lh(u.array,y)&&a.action)&&u.unMount.add(y)}}},$n=()=>t.shouldFocusError&&fr(r,se,u.mount),Fr=y=>{le(y)&&(P.state.next({disabled:y}),fr(r,(b,C)=>{const O=B(r,C);O&&(b.disabled=O._f.disabled||y,Array.isArray(O._f.refs)&&O._f.refs.forEach(x=>{x.disabled=O._f.disabled||y}))},0,!1))},un=(y,b)=>async C=>{let O;C&&(C.preventDefault&&C.preventDefault(),C.persist&&C.persist());let x=Tt(o);if(P.state.next({isSubmitting:!0}),t.resolver){const{errors:k,values:$}=await g();H(),e.errors=k,x=Tt($)}else await w(r);if(u.disabled.size)for(const k of u.disabled)pt(x,k);if(pt(e.errors,"root"),Bt(e.errors)){P.state.next({errors:{}});try{await y(x,C)}catch(k){O=k}}else b&&await b({...e.errors},C),$n(),setTimeout($n);if(P.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Bt(e.errors)&&!O,submitCount:e.submitCount+1,errors:e.errors}),O)throw O},Mr=(y,b={})=>{B(r,y)&&(ht(b.defaultValue)?Mt(y,Tt(B(s,y))):(Mt(y,b.defaultValue),lt(s,y,Tt(b.defaultValue))),b.keepTouched||pt(e.touchedFields,y),b.keepDirty||(pt(e.dirtyFields,y),e.isDirty=b.defaultValue?v(y,Tt(B(s,y))):v()),b.keepError||(pt(e.errors,y),T.isValid&&L()),P.state.next({...e}))},Lr=(y,b={})=>{const C=y?Tt(y):s,O=Tt(C),x=Bt(y),k=x?s:O;if(b.keepDefaultValues||(s=C),!b.keepValues){if(b.keepDirtyValues){const $=new Set([...u.mount,...Object.keys(En(s,o))]);for(const tt of Array.from($)){const et=B(e.dirtyFields,tt),Rt=B(o,tt),ie=B(k,tt);et&&!ht(Rt)?lt(k,tt,Rt):!et&&!ht(ie)&&Mt(tt,ie)}}else{if(Fi&&ht(y))for(const $ of u.mount){const tt=B(r,$);if(tt&&tt._f){const et=Array.isArray(tt._f.refs)?tt._f.refs[0]:tt._f.ref;if(as(et)){const Rt=et.closest("form");if(Rt){Rt.reset();break}}}}if(b.keepFieldsRef)for(const $ of u.mount)Mt($,B(k,$));else r={}}o=t.shouldUnregister?b.keepDefaultValues?Tt(s):{}:Tt(k),P.array.next({values:{...k}}),P.state.next({values:{...k}})}u={mount:b.keepDirtyValues?u.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},a.mount=!T.isValid||!!b.keepIsValid||!!b.keepDirtyValues||!t.shouldUnregister&&!Bt(k),a.watch=!!t.shouldUnregister,a.keepIsValid=!!b.keepIsValid,a.action=!1,b.keepErrors||(e.errors={}),P.state.next({submitCount:b.keepSubmitCount?e.submitCount:0,isDirty:x?!1:b.keepDirty?e.isDirty:!!(b.keepDefaultValues&&!Re(y,s)),isSubmitted:b.keepIsSubmitted?e.isSubmitted:!1,dirtyFields:x?{}:b.keepDirtyValues?b.keepDefaultValues&&o?En(s,o):e.dirtyFields:b.keepDefaultValues&&y?En(s,y):b.keepDirty?e.dirtyFields:{},touchedFields:b.keepTouched?e.touchedFields:{},errors:b.keepErrors?e.errors:{},isSubmitSuccessful:b.keepIsSubmitSuccessful?e.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:s})},hn=(y,b)=>Lr(Xt(y)?y(o):y,{...t.resetOptions,...b}),qn=(y,b={})=>{const C=B(r,y),O=C&&C._f;if(O){const x=O.refs?O.refs[0]:O.ref;x.focus&&setTimeout(()=>{x.focus(),b.shouldSelect&&Xt(x.select)&&x.select()})}},Ur=y=>{e={...e,...y}},wt={control:{register:jn,unregister:Be,getFieldState:Mn,handleSubmit:un,setError:Ue,_subscribe:cn,_runSchema:g,_updateIsValidating:H,_focusError:$n,_getWatch:m,_getDirty:v,_setValid:L,_setFieldArray:U,_setDisabledField:Bn,_setErrors:ot,_getFieldArray:Q,_reset:Lr,_resetDefaultValues:()=>Xt(t.defaultValues)&&t.defaultValues().then(y=>{hn(y,t.resetOptions),P.state.next({isLoading:!1})}),_removeUnmounted:E,_disableForm:Fr,_subjects:P,_proxyFormState:T,get _fields(){return r},get _formValues(){return o},get _state(){return a},set _state(y){a=y},get _defaultValues(){return s},get _names(){return u},set _names(y){u=y},get _formState(){return e},get _options(){return t},set _options(y){t={...t,...y}}},subscribe:Un,trigger:Le,register:jn,handleSubmit:un,watch:Ln,setValue:Mt,getValues:Fn,reset:hn,resetField:Mr,clearErrors:Or,unregister:Be,setError:Ue,setFocus:qn,getFieldState:Mn};return{...wt,formControl:wt}}function af(n={}){const t=Ut.useRef(void 0),e=Ut.useRef(void 0),[r,s]=Ut.useState({isDirty:!1,isValidating:!1,isLoading:Xt(n.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1,isReady:!1,defaultValues:Xt(n.defaultValues)?void 0:n.defaultValues});if(!t.current)if(n.formControl)t.current={...n.formControl,formState:r},n.defaultValues&&!Xt(n.defaultValues)&&n.formControl.reset(n.defaultValues,n.resetOptions);else{const{formControl:a,...u}=of(n);t.current={...u,formState:r}}const o=t.current.control;return o._options=n,$h(()=>{const a=o._subscribe({formState:o._proxyFormState,callback:()=>s({...o._formState}),reRenderRoot:!0});return s(u=>({...u,isReady:!0})),o._formState.isReady=!0,a},[o]),Ut.useEffect(()=>o._disableForm(n.disabled),[o,n.disabled]),Ut.useEffect(()=>{n.mode&&(o._options.mode=n.mode),n.reValidateMode&&(o._options.reValidateMode=n.reValidateMode)},[o,n.mode,n.reValidateMode]),Ut.useEffect(()=>{n.errors&&(o._setErrors(n.errors),o._focusError())},[o,n.errors]),Ut.useEffect(()=>{n.shouldUnregister&&o._subjects.state.next({values:o._getWatch()})},[o,n.shouldUnregister]),Ut.useEffect(()=>{if(o._proxyFormState.isDirty){const a=o._getDirty();a!==r.isDirty&&o._subjects.state.next({isDirty:a})}},[o,r.isDirty]),Ut.useEffect(()=>{var a;n.values&&!Re(n.values,e.current)?(o._reset(n.values,{keepFieldsRef:!0,...o._options.resetOptions}),!((a=o._options.resetOptions)===null||a===void 0)&&a.keepIsValid||o._setValid(),e.current=n.values,s(u=>({...u}))):o._resetDefaultValues()},[o,n.values]),Ut.useEffect(()=>{o._state.mount||(o._setValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=Ut.useMemo(()=>jh(r,o),[o,r]),t.current}const lf=()=>{};var ba={};/**
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
 */const ql=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},cf=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Hl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,I=o>>2,T=(o&3)<<4|u>>4;let S=(u&15)<<2|d>>6,P=d&63;h||(P=64,a||(S=64)),r.push(e[I],e[T],e[S],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ql(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):cf(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const T=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||T==null)throw new uf;const S=o<<2|u>>4;if(r.push(S),d!==64){const P=u<<4&240|d>>2;if(r.push(P),T!==64){const F=d<<6&192|T;r.push(F)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class uf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hf=function(n){const t=ql(n);return Hl.encodeByteArray(t,!0)},cs=function(n){return hf(n).replace(/\./g,"")},ff=function(n){try{return Hl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function df(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mf=()=>df().__FIREBASE_DEFAULTS__,gf=()=>{if(typeof process>"u"||typeof ba>"u")return;const n=ba.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},pf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ff(n[1]);return t&&JSON.parse(t)},ji=()=>{try{return lf()||mf()||gf()||pf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yf=n=>{var t,e;return(e=(t=ji())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},_f=n=>{const t=yf(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},zl=()=>{var n;return(n=ji())==null?void 0:n.config};/**
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
 */class Ef{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function $i(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vf(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Tf(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[cs(JSON.stringify(e)),cs(JSON.stringify(a)),""].join(".")}const dr={};function wf(){const n={prod:[],emulator:[]};for(const t of Object.keys(dr))dr[t]?n.emulator.push(t):n.prod.push(t);return n}function If(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Sa=!1;function Af(n,t){if(typeof window>"u"||typeof document>"u"||!$i(window.location.host)||dr[n]===t||dr[n]||Sa)return;dr[n]=t;function e(S){return`__firebase__banner__${S}`}const r="__firebase__banner",o=wf().prod.length>0;function a(){const S=document.getElementById(r);S&&S.remove()}function u(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function h(S,P){S.setAttribute("width","24"),S.setAttribute("id",P),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function d(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Sa=!0,a()},S}function I(S,P){S.setAttribute("id",P),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=If(r),P=e("text"),F=document.getElementById(P)||document.createElement("span"),M=e("learnmore"),L=document.getElementById(M)||document.createElement("a"),H=e("preprendIcon"),U=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const X=S.element;u(X),I(L,M);const ot=d();h(U,H),X.append(U,F,L,ot),document.body.appendChild(X)}o?(F.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,F.innerText="Preview backend running in this workspace."),F.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function bf(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sf(){var t;const n=(t=ji())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Cf(){return!Sf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gl(){try{return typeof indexedDB=="object"}catch{return!1}}function Kl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}function Pf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Vf="FirebaseError";class Me extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Vf,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Df(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Me(s,u,r)}}function Df(n,t){return n.replace(kf,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const kf=/\{\$([^}]+)}/g;function Er(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Ra(o)&&Ra(a)){if(!Er(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Ra(n){return n!==null&&typeof n=="object"}/**
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
 */const xf=1e3,Nf=2,Of=4*60*60*1e3,Ff=.5;function Ca(n,t=xf,e=Nf){const r=t*Math.pow(e,n),s=Math.round(Ff*r*(Math.random()-.5)*2);return Math.min(Of,r+s)}/**
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
 */function De(n){return n&&n._delegate?n._delegate:n}class _e{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const We="[DEFAULT]";/**
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
 */class Mf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ef;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Uf(t))try{this.getOrInitializeService({instanceIdentifier:We})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=We){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=We){return this.instances.has(t)}getOptions(t=We){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lf(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=We){return this.component?this.component.multipleInstances?t:We:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lf(n){return n===We?void 0:n}function Uf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Bf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Mf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const jf={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},$f=Y.INFO,qf={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Hf=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=qf[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qi{constructor(t){this.name=t,this._logLevel=$f,this._logHandler=Hf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const zf=(n,t)=>t.some(e=>n instanceof e);let Pa,Va;function Gf(){return Pa||(Pa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kf(){return Va||(Va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wl=new WeakMap,pi=new WeakMap,Ql=new WeakMap,ri=new WeakMap,Hi=new WeakMap;function Wf(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Ce(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Wl.set(e,n)}).catch(()=>{}),Hi.set(t,n),t}function Qf(n){if(pi.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});pi.set(n,t)}let yi={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return pi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ql.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ce(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Jf(n){yi=n(yi)}function Yf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(si(this),t,...e);return Ql.set(r,t.sort?t.sort():[t]),Ce(r)}:Kf().includes(n)?function(...t){return n.apply(si(this),t),Ce(Wl.get(this))}:function(...t){return Ce(n.apply(si(this),t))}}function Xf(n){return typeof n=="function"?Yf(n):(n instanceof IDBTransaction&&Qf(n),zf(n,Gf())?new Proxy(n,yi):n)}function Ce(n){if(n instanceof IDBRequest)return Wf(n);if(ri.has(n))return ri.get(n);const t=Xf(n);return t!==n&&(ri.set(n,t),Hi.set(t,n)),t}const si=n=>Hi.get(n);function Jl(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=Ce(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Ce(a.result),h.oldVersion,h.newVersion,Ce(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Zf=["get","getKey","getAll","getAllKeys","count"],td=["put","add","delete","clear"],ii=new Map;function Da(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ii.get(t))return ii.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=td.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zf.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return ii.set(t,o),o}Jf(n=>({...n,get:(t,e,r)=>Da(t,e)||n.get(t,e,r),has:(t,e)=>!!Da(t,e)||n.has(t,e)}));/**
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
 */class ed{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(nd(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function nd(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _i="@firebase/app",ka="0.14.7";/**
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
 */const Ee=new qi("@firebase/app"),rd="@firebase/app-compat",sd="@firebase/analytics-compat",id="@firebase/analytics",od="@firebase/app-check-compat",ad="@firebase/app-check",ld="@firebase/auth",cd="@firebase/auth-compat",ud="@firebase/database",hd="@firebase/data-connect",fd="@firebase/database-compat",dd="@firebase/functions",md="@firebase/functions-compat",gd="@firebase/installations",pd="@firebase/installations-compat",yd="@firebase/messaging",_d="@firebase/messaging-compat",Ed="@firebase/performance",vd="@firebase/performance-compat",Td="@firebase/remote-config",wd="@firebase/remote-config-compat",Id="@firebase/storage",Ad="@firebase/storage-compat",bd="@firebase/firestore",Sd="@firebase/ai",Rd="@firebase/firestore-compat",Cd="firebase",Pd="12.8.0";/**
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
 */const Ei="[DEFAULT]",Vd={[_i]:"fire-core",[rd]:"fire-core-compat",[id]:"fire-analytics",[sd]:"fire-analytics-compat",[ad]:"fire-app-check",[od]:"fire-app-check-compat",[ld]:"fire-auth",[cd]:"fire-auth-compat",[ud]:"fire-rtdb",[hd]:"fire-data-connect",[fd]:"fire-rtdb-compat",[dd]:"fire-fn",[md]:"fire-fn-compat",[gd]:"fire-iid",[pd]:"fire-iid-compat",[yd]:"fire-fcm",[_d]:"fire-fcm-compat",[Ed]:"fire-perf",[vd]:"fire-perf-compat",[Td]:"fire-rc",[wd]:"fire-rc-compat",[Id]:"fire-gcs",[Ad]:"fire-gcs-compat",[bd]:"fire-fst",[Rd]:"fire-fst-compat",[Sd]:"fire-vertex","fire-js":"fire-js",[Cd]:"fire-js-all"};/**
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
 */const us=new Map,Dd=new Map,vi=new Map;function xa(n,t){try{n.container.addComponent(t)}catch(e){Ee.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ke(n){const t=n.name;if(vi.has(t))return Ee.debug(`There were multiple attempts to register component ${t}.`),!1;vi.set(t,n);for(const e of us.values())xa(e,n);for(const e of Dd.values())xa(e,n);return!0}function Rr(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function kd(n){return n==null?!1:n.settings!==void 0}/**
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
 */const xd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pe=new Cs("app","Firebase",xd);/**
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
 */class Nd{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pe.create("app-deleted",{appName:this._name})}}/**
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
 */const Od=Pd;function Yl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Ei,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Pe.create("bad-app-name",{appName:String(s)});if(e||(e=zl()),!e)throw Pe.create("no-options");const o=us.get(s);if(o){if(Er(e,o.options)&&Er(r,o.config))return o;throw Pe.create("duplicate-app",{appName:s})}const a=new Bf(s);for(const h of vi.values())a.addComponent(h);const u=new Nd(e,r,a);return us.set(s,u),u}function Xl(n=Ei){const t=us.get(n);if(!t&&n===Ei&&zl())return Yl();if(!t)throw Pe.create("no-app",{appName:n});return t}function ue(n,t,e){let r=Vd[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ee.warn(a.join(" "));return}ke(new _e(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Fd="firebase-heartbeat-database",Md=1,vr="firebase-heartbeat-store";let oi=null;function Zl(){return oi||(oi=Jl(Fd,Md,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(vr)}catch(e){console.warn(e)}}}}).catch(n=>{throw Pe.create("idb-open",{originalErrorMessage:n.message})})),oi}async function Ld(n){try{const e=(await Zl()).transaction(vr),r=await e.objectStore(vr).get(tc(n));return await e.done,r}catch(t){if(t instanceof Me)Ee.warn(t.message);else{const e=Pe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ee.warn(e.message)}}}async function Na(n,t){try{const r=(await Zl()).transaction(vr,"readwrite");await r.objectStore(vr).put(t,tc(n)),await r.done}catch(e){if(e instanceof Me)Ee.warn(e.message);else{const r=Pe.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ee.warn(r.message)}}}function tc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ud=1024,Bd=30;class jd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new qd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Oa();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Bd){const a=Hd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ee.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Oa(),{heartbeatsToSend:r,unsentEntries:s}=$d(this._heartbeatsCache.heartbeats),o=cs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ee.warn(e),""}}}function Oa(){return new Date().toISOString().substring(0,10)}function $d(n,t=Ud){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Fa(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Fa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class qd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gl()?Kl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Ld(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Na(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Na(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Fa(n){return cs(JSON.stringify({version:2,heartbeats:n})).length}function Hd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function zd(n){ke(new _e("platform-logger",t=>new ed(t),"PRIVATE")),ke(new _e("heartbeat",t=>new jd(t),"PRIVATE")),ue(_i,ka,n),ue(_i,ka,"esm2020"),ue("fire-js","")}zd("");var Ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zi;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(_,g){function p(){}p.prototype=g.prototype,_.F=g.prototype,_.prototype=new p,_.prototype.constructor=_,_.D=function(w,E,v){for(var m=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)m[Q-2]=arguments[Q];return g.prototype[E].apply(w,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,g,p){p||(p=0);const w=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)w[E]=g.charCodeAt(p++)|g.charCodeAt(p++)<<8|g.charCodeAt(p++)<<16|g.charCodeAt(p++)<<24;else for(E=0;E<16;++E)w[E]=g[p++]|g[p++]<<8|g[p++]<<16|g[p++]<<24;g=_.g[0],p=_.g[1],E=_.g[2];let v=_.g[3],m;m=g+(v^p&(E^v))+w[0]+3614090360&4294967295,g=p+(m<<7&4294967295|m>>>25),m=v+(E^g&(p^E))+w[1]+3905402710&4294967295,v=g+(m<<12&4294967295|m>>>20),m=E+(p^v&(g^p))+w[2]+606105819&4294967295,E=v+(m<<17&4294967295|m>>>15),m=p+(g^E&(v^g))+w[3]+3250441966&4294967295,p=E+(m<<22&4294967295|m>>>10),m=g+(v^p&(E^v))+w[4]+4118548399&4294967295,g=p+(m<<7&4294967295|m>>>25),m=v+(E^g&(p^E))+w[5]+1200080426&4294967295,v=g+(m<<12&4294967295|m>>>20),m=E+(p^v&(g^p))+w[6]+2821735955&4294967295,E=v+(m<<17&4294967295|m>>>15),m=p+(g^E&(v^g))+w[7]+4249261313&4294967295,p=E+(m<<22&4294967295|m>>>10),m=g+(v^p&(E^v))+w[8]+1770035416&4294967295,g=p+(m<<7&4294967295|m>>>25),m=v+(E^g&(p^E))+w[9]+2336552879&4294967295,v=g+(m<<12&4294967295|m>>>20),m=E+(p^v&(g^p))+w[10]+4294925233&4294967295,E=v+(m<<17&4294967295|m>>>15),m=p+(g^E&(v^g))+w[11]+2304563134&4294967295,p=E+(m<<22&4294967295|m>>>10),m=g+(v^p&(E^v))+w[12]+1804603682&4294967295,g=p+(m<<7&4294967295|m>>>25),m=v+(E^g&(p^E))+w[13]+4254626195&4294967295,v=g+(m<<12&4294967295|m>>>20),m=E+(p^v&(g^p))+w[14]+2792965006&4294967295,E=v+(m<<17&4294967295|m>>>15),m=p+(g^E&(v^g))+w[15]+1236535329&4294967295,p=E+(m<<22&4294967295|m>>>10),m=g+(E^v&(p^E))+w[1]+4129170786&4294967295,g=p+(m<<5&4294967295|m>>>27),m=v+(p^E&(g^p))+w[6]+3225465664&4294967295,v=g+(m<<9&4294967295|m>>>23),m=E+(g^p&(v^g))+w[11]+643717713&4294967295,E=v+(m<<14&4294967295|m>>>18),m=p+(v^g&(E^v))+w[0]+3921069994&4294967295,p=E+(m<<20&4294967295|m>>>12),m=g+(E^v&(p^E))+w[5]+3593408605&4294967295,g=p+(m<<5&4294967295|m>>>27),m=v+(p^E&(g^p))+w[10]+38016083&4294967295,v=g+(m<<9&4294967295|m>>>23),m=E+(g^p&(v^g))+w[15]+3634488961&4294967295,E=v+(m<<14&4294967295|m>>>18),m=p+(v^g&(E^v))+w[4]+3889429448&4294967295,p=E+(m<<20&4294967295|m>>>12),m=g+(E^v&(p^E))+w[9]+568446438&4294967295,g=p+(m<<5&4294967295|m>>>27),m=v+(p^E&(g^p))+w[14]+3275163606&4294967295,v=g+(m<<9&4294967295|m>>>23),m=E+(g^p&(v^g))+w[3]+4107603335&4294967295,E=v+(m<<14&4294967295|m>>>18),m=p+(v^g&(E^v))+w[8]+1163531501&4294967295,p=E+(m<<20&4294967295|m>>>12),m=g+(E^v&(p^E))+w[13]+2850285829&4294967295,g=p+(m<<5&4294967295|m>>>27),m=v+(p^E&(g^p))+w[2]+4243563512&4294967295,v=g+(m<<9&4294967295|m>>>23),m=E+(g^p&(v^g))+w[7]+1735328473&4294967295,E=v+(m<<14&4294967295|m>>>18),m=p+(v^g&(E^v))+w[12]+2368359562&4294967295,p=E+(m<<20&4294967295|m>>>12),m=g+(p^E^v)+w[5]+4294588738&4294967295,g=p+(m<<4&4294967295|m>>>28),m=v+(g^p^E)+w[8]+2272392833&4294967295,v=g+(m<<11&4294967295|m>>>21),m=E+(v^g^p)+w[11]+1839030562&4294967295,E=v+(m<<16&4294967295|m>>>16),m=p+(E^v^g)+w[14]+4259657740&4294967295,p=E+(m<<23&4294967295|m>>>9),m=g+(p^E^v)+w[1]+2763975236&4294967295,g=p+(m<<4&4294967295|m>>>28),m=v+(g^p^E)+w[4]+1272893353&4294967295,v=g+(m<<11&4294967295|m>>>21),m=E+(v^g^p)+w[7]+4139469664&4294967295,E=v+(m<<16&4294967295|m>>>16),m=p+(E^v^g)+w[10]+3200236656&4294967295,p=E+(m<<23&4294967295|m>>>9),m=g+(p^E^v)+w[13]+681279174&4294967295,g=p+(m<<4&4294967295|m>>>28),m=v+(g^p^E)+w[0]+3936430074&4294967295,v=g+(m<<11&4294967295|m>>>21),m=E+(v^g^p)+w[3]+3572445317&4294967295,E=v+(m<<16&4294967295|m>>>16),m=p+(E^v^g)+w[6]+76029189&4294967295,p=E+(m<<23&4294967295|m>>>9),m=g+(p^E^v)+w[9]+3654602809&4294967295,g=p+(m<<4&4294967295|m>>>28),m=v+(g^p^E)+w[12]+3873151461&4294967295,v=g+(m<<11&4294967295|m>>>21),m=E+(v^g^p)+w[15]+530742520&4294967295,E=v+(m<<16&4294967295|m>>>16),m=p+(E^v^g)+w[2]+3299628645&4294967295,p=E+(m<<23&4294967295|m>>>9),m=g+(E^(p|~v))+w[0]+4096336452&4294967295,g=p+(m<<6&4294967295|m>>>26),m=v+(p^(g|~E))+w[7]+1126891415&4294967295,v=g+(m<<10&4294967295|m>>>22),m=E+(g^(v|~p))+w[14]+2878612391&4294967295,E=v+(m<<15&4294967295|m>>>17),m=p+(v^(E|~g))+w[5]+4237533241&4294967295,p=E+(m<<21&4294967295|m>>>11),m=g+(E^(p|~v))+w[12]+1700485571&4294967295,g=p+(m<<6&4294967295|m>>>26),m=v+(p^(g|~E))+w[3]+2399980690&4294967295,v=g+(m<<10&4294967295|m>>>22),m=E+(g^(v|~p))+w[10]+4293915773&4294967295,E=v+(m<<15&4294967295|m>>>17),m=p+(v^(E|~g))+w[1]+2240044497&4294967295,p=E+(m<<21&4294967295|m>>>11),m=g+(E^(p|~v))+w[8]+1873313359&4294967295,g=p+(m<<6&4294967295|m>>>26),m=v+(p^(g|~E))+w[15]+4264355552&4294967295,v=g+(m<<10&4294967295|m>>>22),m=E+(g^(v|~p))+w[6]+2734768916&4294967295,E=v+(m<<15&4294967295|m>>>17),m=p+(v^(E|~g))+w[13]+1309151649&4294967295,p=E+(m<<21&4294967295|m>>>11),m=g+(E^(p|~v))+w[4]+4149444226&4294967295,g=p+(m<<6&4294967295|m>>>26),m=v+(p^(g|~E))+w[11]+3174756917&4294967295,v=g+(m<<10&4294967295|m>>>22),m=E+(g^(v|~p))+w[2]+718787259&4294967295,E=v+(m<<15&4294967295|m>>>17),m=p+(v^(E|~g))+w[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,_.g[2]=_.g[2]+E&4294967295,_.g[3]=_.g[3]+v&4294967295}r.prototype.v=function(_,g){g===void 0&&(g=_.length);const p=g-this.blockSize,w=this.C;let E=this.h,v=0;for(;v<g;){if(E==0)for(;v<=p;)s(this,_,v),v+=this.blockSize;if(typeof _=="string"){for(;v<g;)if(w[E++]=_.charCodeAt(v++),E==this.blockSize){s(this,w),E=0;break}}else for(;v<g;)if(w[E++]=_[v++],E==this.blockSize){s(this,w),E=0;break}}this.h=E,this.o+=g},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;g=this.o*8;for(var p=_.length-8;p<_.length;++p)_[p]=g&255,g/=256;for(this.v(_),_=Array(16),g=0,p=0;p<4;++p)for(let w=0;w<32;w+=8)_[g++]=this.g[p]>>>w&255;return _};function o(_,g){var p=u;return Object.prototype.hasOwnProperty.call(p,_)?p[_]:p[_]=g(_)}function a(_,g){this.h=g;const p=[];let w=!0;for(let E=_.length-1;E>=0;E--){const v=_[E]|0;w&&v==g||(p[E]=v,w=!1)}this.g=p}var u={};function h(_){return-128<=_&&_<128?o(_,function(g){return new a([g|0],g<0?-1:0)}):new a([_|0],_<0?-1:0)}function d(_){if(isNaN(_)||!isFinite(_))return T;if(_<0)return L(d(-_));const g=[];let p=1;for(let w=0;_>=p;w++)g[w]=_/p|0,p*=4294967296;return new a(g,0)}function I(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return L(I(_.substring(1),g));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const p=d(Math.pow(g,8));let w=T;for(let v=0;v<_.length;v+=8){var E=Math.min(8,_.length-v);const m=parseInt(_.substring(v,v+E),g);E<8?(E=d(Math.pow(g,E)),w=w.j(E).add(d(m))):(w=w.j(p),w=w.add(d(m)))}return w}var T=h(0),S=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(M(this))return-L(this).m();let _=0,g=1;for(let p=0;p<this.g.length;p++){const w=this.i(p);_+=(w>=0?w:4294967296+w)*g,g*=4294967296}return _},n.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(F(this))return"0";if(M(this))return"-"+L(this).toString(_);const g=d(Math.pow(_,6));var p=this;let w="";for(;;){const E=ot(p,g).g;p=H(p,E.j(g));let v=((p.g.length>0?p.g[0]:p.h)>>>0).toString(_);if(p=E,F(p))return v+w;for(;v.length<6;)v="0"+v;w=v+w}},n.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function F(_){if(_.h!=0)return!1;for(let g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function M(_){return _.h==-1}n.l=function(_){return _=H(this,_),M(_)?-1:F(_)?0:1};function L(_){const g=_.g.length,p=[];for(let w=0;w<g;w++)p[w]=~_.g[w];return new a(p,~_.h).add(S)}n.abs=function(){return M(this)?L(this):this},n.add=function(_){const g=Math.max(this.g.length,_.g.length),p=[];let w=0;for(let E=0;E<=g;E++){let v=w+(this.i(E)&65535)+(_.i(E)&65535),m=(v>>>16)+(this.i(E)>>>16)+(_.i(E)>>>16);w=m>>>16,v&=65535,m&=65535,p[E]=m<<16|v}return new a(p,p[p.length-1]&-2147483648?-1:0)};function H(_,g){return _.add(L(g))}n.j=function(_){if(F(this)||F(_))return T;if(M(this))return M(_)?L(this).j(L(_)):L(L(this).j(_));if(M(_))return L(this.j(L(_)));if(this.l(P)<0&&_.l(P)<0)return d(this.m()*_.m());const g=this.g.length+_.g.length,p=[];for(var w=0;w<2*g;w++)p[w]=0;for(w=0;w<this.g.length;w++)for(let E=0;E<_.g.length;E++){const v=this.i(w)>>>16,m=this.i(w)&65535,Q=_.i(E)>>>16,at=_.i(E)&65535;p[2*w+2*E]+=m*at,U(p,2*w+2*E),p[2*w+2*E+1]+=v*at,U(p,2*w+2*E+1),p[2*w+2*E+1]+=m*Q,U(p,2*w+2*E+1),p[2*w+2*E+2]+=v*Q,U(p,2*w+2*E+2)}for(_=0;_<g;_++)p[_]=p[2*_+1]<<16|p[2*_];for(_=g;_<2*g;_++)p[_]=0;return new a(p,0)};function U(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function X(_,g){this.g=_,this.h=g}function ot(_,g){if(F(g))throw Error("division by zero");if(F(_))return new X(T,T);if(M(_))return g=ot(L(_),g),new X(L(g.g),L(g.h));if(M(g))return g=ot(_,L(g)),new X(L(g.g),g.h);if(_.g.length>30){if(M(_)||M(g))throw Error("slowDivide_ only works with positive integers.");for(var p=S,w=g;w.l(_)<=0;)p=Z(p),w=Z(w);var E=gt(p,1),v=gt(w,1);for(w=gt(w,2),p=gt(p,2);!F(w);){var m=v.add(w);m.l(_)<=0&&(E=E.add(p),v=m),w=gt(w,1),p=gt(p,1)}return g=H(_,E.j(g)),new X(E,g)}for(E=T;_.l(g)>=0;){for(p=Math.max(1,Math.floor(_.m()/g.m())),w=Math.ceil(Math.log(p)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),v=d(p),m=v.j(g);M(m)||m.l(_)>0;)p-=w,v=d(p),m=v.j(g);F(v)&&(v=S),E=E.add(v),_=H(_,m)}return new X(E,_)}n.B=function(_){return ot(this,_).h},n.and=function(_){const g=Math.max(this.g.length,_.g.length),p=[];for(let w=0;w<g;w++)p[w]=this.i(w)&_.i(w);return new a(p,this.h&_.h)},n.or=function(_){const g=Math.max(this.g.length,_.g.length),p=[];for(let w=0;w<g;w++)p[w]=this.i(w)|_.i(w);return new a(p,this.h|_.h)},n.xor=function(_){const g=Math.max(this.g.length,_.g.length),p=[];for(let w=0;w<g;w++)p[w]=this.i(w)^_.i(w);return new a(p,this.h^_.h)};function Z(_){const g=_.g.length+1,p=[];for(let w=0;w<g;w++)p[w]=_.i(w)<<1|_.i(w-1)>>>31;return new a(p,_.h)}function gt(_,g){const p=g>>5;g%=32;const w=_.g.length-p,E=[];for(let v=0;v<w;v++)E[v]=g>0?_.i(v+p)>>>g|_.i(v+p+1)<<32-g:_.i(v+p);return new a(E,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=I,zi=a}).apply(typeof Ma<"u"?Ma:typeof self<"u"?self:typeof window<"u"?window:{});var Jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ec,ur,nc,ns,Ti,rc,sc,ic;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jr=="object"&&Jr];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in c))break t;c=c[A]}i=i[i.length-1],f=c[i],l=l(f),l!=f&&l!=null&&t(c,i,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(l){var c=[],f;for(f in l)Object.prototype.hasOwnProperty.call(l,f)&&c.push([f,l[f]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function h(i,l,c){return i.call.apply(i.bind,arguments)}function d(i,l,c){return d=h,d.apply(null,arguments)}function I(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function T(i,l){function c(){}c.prototype=l.prototype,i.Z=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Ob=function(f,A,R){for(var N=Array(arguments.length-2),G=2;G<arguments.length;G++)N[G-2]=arguments[G];return l.prototype[A].apply(f,N)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function P(i){const l=i.length;if(l>0){const c=Array(l);for(let f=0;f<l;f++)c[f]=i[f];return c}return[]}function F(i,l){for(let f=1;f<arguments.length;f++){const A=arguments[f];var c=typeof A;if(c=c!="object"?c:A?Array.isArray(A)?"array":c:"null",c=="array"||c=="object"&&typeof A.length=="number"){c=i.length||0;const R=A.length||0;i.length=c+R;for(let N=0;N<R;N++)i[c+N]=A[N]}else i.push(A)}}class M{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function L(i){a.setTimeout(()=>{throw i},0)}function H(){var i=_;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class U{constructor(){this.h=this.g=null}add(l,c){const f=X.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var X=new M(()=>new ot,i=>i.reset());class ot{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,gt=!1,_=new U,g=()=>{const i=Promise.resolve(void 0);Z=()=>{i.then(p)}};function p(){for(var i;i=H();){try{i.h.call(i.g)}catch(c){L(c)}var l=X;l.j(i),l.h<100&&(l.h++,i.next=l.g,l.g=i)}gt=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var v=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};a.addEventListener("test",c,l),a.removeEventListener("test",c,l)}catch{}return i}();function m(i){return/^[\s\xa0]*$/.test(i)}function Q(i,l){E.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,l)}T(Q,E),Q.prototype.init=function(i,l){const c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget,l||(c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement)),this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Q.Z.h.call(this)},Q.prototype.h=function(){Q.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var at="closure_listenable_"+(Math.random()*1e6|0),zt=0;function Mt(i,l,c,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=A,this.key=++zt,this.da=this.fa=!1}function re(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function se(i,l,c){for(const f in i)l.call(c,i[f],f,i)}function Le(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function Fn(i){const l={};for(const c in i)l[c]=i[c];return l}const Mn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Or(i,l){let c,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(c in f)i[c]=f[c];for(let R=0;R<Mn.length;R++)c=Mn[R],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function Ue(i){this.src=i,this.g={},this.h=0}Ue.prototype.add=function(i,l,c,f,A){const R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);const N=cn(i,l,f,A);return N>-1?(l=i[N],c||(l.fa=!1)):(l=new Mt(l,this.src,R,!!f,A),l.fa=c,i.push(l)),l};function Ln(i,l){const c=l.type;if(c in i.g){var f=i.g[c],A=Array.prototype.indexOf.call(f,l,void 0),R;(R=A>=0)&&Array.prototype.splice.call(f,A,1),R&&(re(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function cn(i,l,c,f){for(let A=0;A<i.length;++A){const R=i[A];if(!R.da&&R.listener==l&&R.capture==!!c&&R.ha==f)return A}return-1}var Un="closure_lm_"+(Math.random()*1e6|0),Be={};function Bn(i,l,c,f,A){if(Array.isArray(l)){for(let R=0;R<l.length;R++)Bn(i,l[R],c,f,A);return null}return c=Ur(c),i&&i[at]?i.J(l,c,u(f)?!!f.capture:!1,A):jn(i,l,c,!1,f,A)}function jn(i,l,c,f,A,R){if(!l)throw Error("Invalid event type");const N=u(A)?!!A.capture:!!A;let G=hn(i);if(G||(i[Un]=G=new Ue(i)),c=G.add(l,c,f,N,R),c.proxy)return c;if(f=$n(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)v||(A=N),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(Mr(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function $n(){function i(c){return l.call(i.src,i.listener,c)}const l=Lr;return i}function Fr(i,l,c,f,A){if(Array.isArray(l))for(var R=0;R<l.length;R++)Fr(i,l[R],c,f,A);else f=u(f)?!!f.capture:!!f,c=Ur(c),i&&i[at]?(i=i.i,R=String(l).toString(),R in i.g&&(l=i.g[R],c=cn(l,c,f,A),c>-1&&(re(l[c]),Array.prototype.splice.call(l,c,1),l.length==0&&(delete i.g[R],i.h--)))):i&&(i=hn(i))&&(l=i.g[l.toString()],i=-1,l&&(i=cn(l,c,f,A)),(c=i>-1?l[i]:null)&&un(c))}function un(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[at])Ln(l.i,i);else{var c=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(c,f,i.capture):l.detachEvent?l.detachEvent(Mr(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=hn(l))?(Ln(c,i),c.h==0&&(c.src=null,l[Un]=null)):re(i)}}}function Mr(i){return i in Be?Be[i]:Be[i]="on"+i}function Lr(i,l){if(i.da)i=!0;else{l=new Q(l,this);const c=i.listener,f=i.ha||i.src;i.fa&&un(i),i=c.call(f,l)}return i}function hn(i){return i=i[Un],i instanceof Ue?i:null}var qn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ur(i){return typeof i=="function"?i:(i[qn]||(i[qn]=function(l){return i.handleEvent(l)}),i[qn])}function St(){w.call(this),this.i=new Ue(this),this.M=this,this.G=null}T(St,w),St.prototype[at]=!0,St.prototype.removeEventListener=function(i,l,c,f){Fr(this,i,l,c,f)};function wt(i,l){var c,f=i.G;if(f)for(c=[];f;f=f.G)c.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new E(l,i);else if(l instanceof E)l.target=l.target||i;else{var A=l;l=new E(f,i),Or(l,A)}A=!0;let R,N;if(c)for(N=c.length-1;N>=0;N--)R=l.g=c[N],A=y(R,f,!0,l)&&A;if(R=l.g=i,A=y(R,f,!0,l)&&A,A=y(R,f,!1,l)&&A,c)for(N=0;N<c.length;N++)R=l.g=c[N],A=y(R,f,!1,l)&&A}St.prototype.N=function(){if(St.Z.N.call(this),this.i){var i=this.i;for(const l in i.g){const c=i.g[l];for(let f=0;f<c.length;f++)re(c[f]);delete i.g[l],i.h--}}this.G=null},St.prototype.J=function(i,l,c,f){return this.i.add(String(i),l,!1,c,f)},St.prototype.K=function(i,l,c,f){return this.i.add(String(i),l,!0,c,f)};function y(i,l,c,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();let A=!0;for(let R=0;R<l.length;++R){const N=l[R];if(N&&!N.da&&N.capture==c){const G=N.listener,vt=N.ha||N.src;N.fa&&Ln(i.i,N),A=G.call(vt,f)!==!1&&A}}return A&&!f.defaultPrevented}function b(i,l){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(i,l||0)}function C(i){i.g=b(()=>{i.g=null,i.i&&(i.i=!1,C(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class O extends w{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:C(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function x(i){w.call(this),this.h=i,this.g={}}T(x,w);var k=[];function $(i){se(i.g,function(l,c){this.g.hasOwnProperty(c)&&un(l)},i),i.g={}}x.prototype.N=function(){x.Z.N.call(this),$(this)},x.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tt=a.JSON.stringify,et=a.JSON.parse,Rt=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function ie(){}function Jt(){}var je={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $e(){E.call(this,"d")}T($e,E);function qe(){E.call(this,"c")}T(qe,E);var me={},Hn=null;function fn(){return Hn=Hn||new St}me.Ia="serverreachability";function zn(i){E.call(this,me.Ia,i)}T(zn,E);function Gn(i){const l=fn();wt(l,new zn(l))}me.STAT_EVENT="statevent";function wo(i,l){E.call(this,me.STAT_EVENT,i),this.stat=l}T(wo,E);function Lt(i){const l=fn();wt(l,new wo(l,i))}me.Ja="timingevent";function Io(i,l){E.call(this,me.Ja,i),this.size=l}T(Io,E);function Kn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},l)}function Wn(){this.g=!0}Wn.prototype.ua=function(){this.g=!1};function Bu(i,l,c,f,A,R){i.info(function(){if(i.g)if(R){var N="",G=R.split("&");for(let rt=0;rt<G.length;rt++){var vt=G[rt].split("=");if(vt.length>1){const It=vt[0];vt=vt[1];const ae=It.split("_");N=ae.length>=2&&ae[1]=="type"?N+(It+"="+vt+"&"):N+(It+"=redacted&")}}}else N=null;else N=R;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+c+`
`+N})}function ju(i,l,c,f,A,R,N){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+c+`
`+R+" "+N})}function dn(i,l,c,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+qu(i,c)+(f?" "+f:"")})}function $u(i,l){i.info(function(){return"TIMEOUT: "+l})}Wn.prototype.info=function(){};function qu(i,l){if(!i.g)return l;if(!l)return null;try{const R=JSON.parse(l);if(R){for(i=0;i<R.length;i++)if(Array.isArray(R[i])){var c=R[i];if(!(c.length<2)){var f=c[1];if(Array.isArray(f)&&!(f.length<1)){var A=f[0];if(A!="noop"&&A!="stop"&&A!="close")for(let N=1;N<f.length;N++)f[N]=""}}}}return tt(R)}catch{return l}}var Br={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ao={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},bo;function Bs(){}T(Bs,ie),Bs.prototype.g=function(){return new XMLHttpRequest},bo=new Bs;function Qn(i){return encodeURIComponent(String(i))}function Hu(i){var l=1;i=i.split(":");const c=[];for(;l>0&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function ve(i,l,c,f){this.j=i,this.i=l,this.l=c,this.S=f||1,this.V=new x(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new So}function So(){this.i=null,this.g="",this.h=!1}var Ro={},js={};function $s(i,l,c){i.M=1,i.A=$r(oe(l)),i.u=c,i.R=!0,Co(i,null)}function Co(i,l){i.F=Date.now(),jr(i),i.B=oe(i.A);var c=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),jo(c.i,"t",f),i.C=0,c=i.j.L,i.h=new So,i.g=ia(i.j,c?l:null,!i.u),i.P>0&&(i.O=new O(d(i.Y,i,i.g),i.P)),l=i.V,c=i.g,f=i.ba;var A="readystatechange";Array.isArray(A)||(A&&(k[0]=A.toString()),A=k);for(let R=0;R<A.length;R++){const N=Bn(c,A[R],f||l.handleEvent,!1,l.h||l);if(!N)break;l.g[N.key]=N}l=i.J?Fn(i.J):{},i.u?(i.v||(i.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,l)):(i.v="GET",i.g.ea(i.B,i.v,null,l)),Gn(),Bu(i.i,i.v,i.B,i.l,i.S,i.u)}ve.prototype.ba=function(i){i=i.target;const l=this.O;l&&Ie(i)==3?l.j():this.Y(i)},ve.prototype.Y=function(i){try{if(i==this.g)t:{const G=Ie(this.g),vt=this.g.ya(),rt=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||Wo(this.g)))){this.K||G!=4||vt==7||(vt==8||rt<=0?Gn(3):Gn(2)),qs(this);var l=this.g.ca();this.X=l;var c=zu(this);if(this.o=l==200,ju(this.i,this.v,this.B,this.l,this.S,G,l),this.o){if(this.U&&!this.L){e:{if(this.g){var f,A=this.g;if((f=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(f)){var R=f;break e}}R=null}if(i=R)dn(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Hs(this,i);else{this.o=!1,this.m=3,Lt(12),He(this),Jn(this);break t}}if(this.R){i=!0;let It;for(;!this.K&&this.C<c.length;)if(It=Gu(this,c),It==js){G==4&&(this.m=4,Lt(14),i=!1),dn(this.i,this.l,null,"[Incomplete Response]");break}else if(It==Ro){this.m=4,Lt(15),dn(this.i,this.l,c,"[Invalid Chunk]"),i=!1;break}else dn(this.i,this.l,It,null),Hs(this,It);if(Po(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||c.length!=0||this.h.h||(this.m=1,Lt(16),i=!1),this.o=this.o&&i,!i)dn(this.i,this.l,c,"[Invalid Chunked Response]"),He(this),Jn(this);else if(c.length>0&&!this.W){this.W=!0;var N=this.j;N.g==this&&N.aa&&!N.P&&(N.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),Xs(N),N.P=!0,Lt(11))}}else dn(this.i,this.l,c,null),Hs(this,c);G==4&&He(this),this.o&&!this.K&&(G==4?ea(this.j,this):(this.o=!1,jr(this)))}else oh(this.g),l==400&&c.indexOf("Unknown SID")>0?(this.m=3,Lt(12)):(this.m=0,Lt(13)),He(this),Jn(this)}}}catch{}finally{}};function zu(i){if(!Po(i))return i.g.la();const l=Wo(i.g);if(l==="")return"";let c="";const f=l.length,A=Ie(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return He(i),Jn(i),"";i.h.i=new a.TextDecoder}for(let R=0;R<f;R++)i.h.h=!0,c+=i.h.i.decode(l[R],{stream:!(A&&R==f-1)});return l.length=0,i.h.g+=c,i.C=0,i.h.g}function Po(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Gu(i,l){var c=i.C,f=l.indexOf(`
`,c);return f==-1?js:(c=Number(l.substring(c,f)),isNaN(c)?Ro:(f+=1,f+c>l.length?js:(l=l.slice(f,f+c),i.C=f+c,l)))}ve.prototype.cancel=function(){this.K=!0,He(this)};function jr(i){i.T=Date.now()+i.H,Vo(i,i.H)}function Vo(i,l){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Kn(d(i.aa,i),l)}function qs(i){i.D&&(a.clearTimeout(i.D),i.D=null)}ve.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?($u(this.i,this.B),this.M!=2&&(Gn(),Lt(17)),He(this),this.m=2,Jn(this)):Vo(this,this.T-i)};function Jn(i){i.j.I==0||i.K||ea(i.j,i)}function He(i){qs(i);var l=i.O;l&&typeof l.dispose=="function"&&l.dispose(),i.O=null,$(i.V),i.g&&(l=i.g,i.g=null,l.abort(),l.dispose())}function Hs(i,l){try{var c=i.j;if(c.I!=0&&(c.g==i||zs(c.h,i))){if(!i.L&&zs(c.h,i)&&c.I==3){try{var f=c.Ba.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<i.F)Kr(c),zr(c);else break t;Ys(c),Lt(18)}}else c.xa=A[1],0<c.xa-c.K&&A[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=Kn(d(c.Va,c),6e3));xo(c.h)<=1&&c.ta&&(c.ta=void 0)}else Ge(c,11)}else if((i.L||c.g==i)&&Kr(c),!m(l))for(A=c.Ba.g.parse(l),l=0;l<A.length;l++){let rt=A[l];const It=rt[0];if(!(It<=c.K))if(c.K=It,rt=rt[1],c.I==2)if(rt[0]=="c"){c.M=rt[1],c.ba=rt[2];const ae=rt[3];ae!=null&&(c.ka=ae,c.j.info("VER="+c.ka));const Ke=rt[4];Ke!=null&&(c.za=Ke,c.j.info("SVER="+c.za));const Ae=rt[5];Ae!=null&&typeof Ae=="number"&&Ae>0&&(f=1.5*Ae,c.O=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const be=i.g;if(be){const Qr=be.g?be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qr){var R=f.h;R.g||Qr.indexOf("spdy")==-1&&Qr.indexOf("quic")==-1&&Qr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Gs(R,R.h),R.h=null))}if(f.G){const Zs=be.g?be.g.getResponseHeader("X-HTTP-Session-Id"):null;Zs&&(f.wa=Zs,it(f.J,f.G,Zs))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-i.F,c.j.info("Handshake RTT: "+c.T+"ms")),f=c;var N=i;if(f.na=sa(f,f.L?f.ba:null,f.W),N.L){No(f.h,N);var G=N,vt=f.O;vt&&(G.H=vt),G.D&&(qs(G),jr(G)),f.g=N}else Zo(f);c.i.length>0&&Gr(c)}else rt[0]!="stop"&&rt[0]!="close"||Ge(c,7);else c.I==3&&(rt[0]=="stop"||rt[0]=="close"?rt[0]=="stop"?Ge(c,7):Js(c):rt[0]!="noop"&&c.l&&c.l.qa(rt),c.A=0)}}Gn(4)}catch{}}var Ku=class{constructor(i,l){this.g=i,this.map=l}};function Do(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ko(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function xo(i){return i.h?1:i.g?i.g.size:0}function zs(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Gs(i,l){i.g?i.g.add(l):i.h=l}function No(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Do.prototype.cancel=function(){if(this.i=Oo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Oo(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.G);return l}return P(i.i)}var Fo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wu(i,l){if(i){i=i.split("&");for(let c=0;c<i.length;c++){const f=i[c].indexOf("=");let A,R=null;f>=0?(A=i[c].substring(0,f),R=i[c].substring(f+1)):A=i[c],l(A,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Te(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;i instanceof Te?(this.l=i.l,Yn(this,i.j),this.o=i.o,this.g=i.g,Xn(this,i.u),this.h=i.h,Ks(this,$o(i.i)),this.m=i.m):i&&(l=String(i).match(Fo))?(this.l=!1,Yn(this,l[1]||"",!0),this.o=Zn(l[2]||""),this.g=Zn(l[3]||"",!0),Xn(this,l[4]),this.h=Zn(l[5]||"",!0),Ks(this,l[6]||"",!0),this.m=Zn(l[7]||"")):(this.l=!1,this.i=new er(null,this.l))}Te.prototype.toString=function(){const i=[];var l=this.j;l&&i.push(tr(l,Mo,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(tr(l,Mo,!0),"@"),i.push(Qn(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&i.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(tr(c,c.charAt(0)=="/"?Yu:Ju,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",tr(c,Zu)),i.join("")},Te.prototype.resolve=function(i){const l=oe(this);let c=!!i.j;c?Yn(l,i.j):c=!!i.o,c?l.o=i.o:c=!!i.g,c?l.g=i.g:c=i.u!=null;var f=i.h;if(c)Xn(l,i.u);else if(c=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var A=l.h.lastIndexOf("/");A!=-1&&(f=l.h.slice(0,A+1)+f)}if(A=f,A==".."||A==".")f="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){f=A.lastIndexOf("/",0)==0,A=A.split("/");const R=[];for(let N=0;N<A.length;){const G=A[N++];G=="."?f&&N==A.length&&R.push(""):G==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),f&&N==A.length&&R.push("")):(R.push(G),f=!0)}f=R.join("/")}else f=A}return c?l.h=f:c=i.i.toString()!=="",c?Ks(l,$o(i.i)):c=!!i.m,c&&(l.m=i.m),l};function oe(i){return new Te(i)}function Yn(i,l,c){i.j=c?Zn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Xn(i,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);i.u=l}else i.u=null}function Ks(i,l,c){l instanceof er?(i.i=l,th(i.i,i.l)):(c||(l=tr(l,Xu)),i.i=new er(l,i.l))}function it(i,l,c){i.i.set(l,c)}function $r(i){return it(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Zn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function tr(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,Qu),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Qu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Mo=/[#\/\?@]/g,Ju=/[#\?:]/g,Yu=/[#\?]/g,Xu=/[#\?@]/g,Zu=/#/g;function er(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function ze(i){i.g||(i.g=new Map,i.h=0,i.i&&Wu(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=er.prototype,n.add=function(i,l){ze(this),this.i=null,i=mn(this,i);let c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function Lo(i,l){ze(i),l=mn(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Uo(i,l){return ze(i),l=mn(i,l),i.g.has(l)}n.forEach=function(i,l){ze(this),this.g.forEach(function(c,f){c.forEach(function(A){i.call(l,A,f,this)},this)},this)};function Bo(i,l){ze(i);let c=[];if(typeof l=="string")Uo(i,l)&&(c=c.concat(i.g.get(mn(i,l))));else for(i=Array.from(i.g.values()),l=0;l<i.length;l++)c=c.concat(i[l]);return c}n.set=function(i,l){return ze(this),this.i=null,i=mn(this,i),Uo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=Bo(this,i),i.length>0?String(i[0]):l):l};function jo(i,l,c){Lo(i,l),c.length>0&&(i.i=null,i.g.set(mn(i,l),P(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(let f=0;f<l.length;f++){var c=l[f];const A=Qn(c);c=Bo(this,c);for(let R=0;R<c.length;R++){let N=A;c[R]!==""&&(N+="="+Qn(c[R])),i.push(N)}}return this.i=i.join("&")};function $o(i){const l=new er;return l.i=i.i,i.g&&(l.g=new Map(i.g),l.h=i.h),l}function mn(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function th(i,l){l&&!i.j&&(ze(i),i.i=null,i.g.forEach(function(c,f){const A=f.toLowerCase();f!=A&&(Lo(this,f),jo(this,A,c))},i)),i.j=l}function eh(i,l){const c=new Wn;if(a.Image){const f=new Image;f.onload=I(we,c,"TestLoadImage: loaded",!0,l,f),f.onerror=I(we,c,"TestLoadImage: error",!1,l,f),f.onabort=I(we,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=I(we,c,"TestLoadImage: timeout",!1,l,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function nh(i,l){const c=new Wn,f=new AbortController,A=setTimeout(()=>{f.abort(),we(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(A),R.ok?we(c,"TestPingServer: ok",!0,l):we(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),we(c,"TestPingServer: error",!1,l)})}function we(i,l,c,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(c)}catch{}}function rh(){this.g=new Rt}function Ws(i){this.i=i.Sb||null,this.h=i.ab||!1}T(Ws,ie),Ws.prototype.g=function(){return new qr(this.i,this.h)};function qr(i,l){St.call(this),this.H=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(qr,St),n=qr.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=l,this.readyState=1,rr(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(l.body=i),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,nr(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,rr(this)),this.g&&(this.readyState=3,rr(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;qo(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function qo(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?nr(this):rr(this),this.readyState==3&&qo(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,nr(this))},n.Na=function(i){this.g&&(this.response=i,nr(this))},n.ga=function(){this.g&&nr(this)};function nr(i){i.readyState=4,i.l=null,i.j=null,i.B=null,rr(i)}n.setRequestHeader=function(i,l){this.A.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function rr(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ho(i){let l="";return se(i,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function Qs(i,l,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=Ho(c),typeof i=="string"?c!=null&&Qn(c):it(i,l,c))}function dt(i){St.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(dt,St);var sh=/^https?$/i,ih=["POST","PUT"];n=dt.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():bo.g(),this.g.onreadystatechange=S(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(R){zo(this,R);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)c.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())c.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),A=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(ih,l,void 0)>=0)||f||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,N]of c)this.g.setRequestHeader(R,N);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(R){zo(this,R)}};function zo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.o=5,Go(i),Hr(i)}function Go(i){i.A||(i.A=!0,wt(i,"complete"),wt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,wt(this,"complete"),wt(this,"abort"),Hr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hr(this,!0)),dt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ko(this):this.Xa())},n.Xa=function(){Ko(this)};function Ko(i){if(i.h&&typeof o<"u"){if(i.v&&Ie(i)==4)setTimeout(i.Ca.bind(i),0);else if(wt(i,"readystatechange"),Ie(i)==4){i.h=!1;try{const R=i.ca();t:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var f;if(f=R===0){let N=String(i.D).match(Fo)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),f=!sh.test(N?N.toLowerCase():"")}c=f}if(c)wt(i,"complete"),wt(i,"success");else{i.o=6;try{var A=Ie(i)>2?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.ca()+"]",Go(i)}}finally{Hr(i)}}}}function Hr(i,l){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const c=i.g;i.g=null,l||wt(i,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ie(i){return i.g?i.g.readyState:0}n.ca=function(){try{return Ie(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),et(l)}};function Wo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function oh(i){const l={};i=(i.g&&Ie(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(m(i[f]))continue;var c=Hu(i[f]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=l[A]||[];l[A]=R,R.push(c)}Le(l,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function Qo(i){this.za=0,this.i=[],this.j=new Wn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=sr("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=sr("baseRetryDelayMs",5e3,i),this.Za=sr("retryDelaySeedMs",1e4,i),this.Ta=sr("forwardChannelMaxRetries",2,i),this.va=sr("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Do(i&&i.concurrentRequestLimit),this.Ba=new rh,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Qo.prototype,n.ka=8,n.I=1,n.connect=function(i,l,c,f){Lt(0),this.W=i,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.J=sa(this,null,this.W),Gr(this)};function Js(i){if(Jo(i),i.I==3){var l=i.V++,c=oe(i.J);if(it(c,"SID",i.M),it(c,"RID",l),it(c,"TYPE","terminate"),ir(i,c),l=new ve(i,i.j,l),l.M=2,l.A=$r(oe(c)),c=!1,a.navigator&&a.navigator.sendBeacon)try{c=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!c&&a.Image&&(new Image().src=l.A,c=!0),c||(l.g=ia(l.j,null),l.g.ea(l.A)),l.F=Date.now(),jr(l)}ra(i)}function zr(i){i.g&&(Xs(i),i.g.cancel(),i.g=null)}function Jo(i){zr(i),i.v&&(a.clearTimeout(i.v),i.v=null),Kr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Gr(i){if(!ko(i.h)&&!i.m){i.m=!0;var l=i.Ea;Z||g(),gt||(Z(),gt=!0),_.add(l,i),i.D=0}}function ah(i,l){return xo(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=l.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Kn(d(i.Ea,i,l),na(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const A=new ve(this,this.j,i);let R=this.o;if(this.U&&(R?(R=Fn(R),Or(R,this.U)):R=this.U),this.u!==null||this.R||(A.J=R,R=null),this.S)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,l>4096){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=Xo(this,A,l),c=oe(this.J),it(c,"RID",i),it(c,"CVER",22),this.G&&it(c,"X-HTTP-Session-Id",this.G),ir(this,c),R&&(this.R?l="headers="+Qn(Ho(R))+"&"+l:this.u&&Qs(c,this.u,R)),Gs(this.h,A),this.Ra&&it(c,"TYPE","init"),this.S?(it(c,"$req",l),it(c,"SID","null"),A.U=!0,$s(A,c,null)):$s(A,c,l),this.I=2}}else this.I==3&&(i?Yo(this,i):this.i.length==0||ko(this.h)||Yo(this))};function Yo(i,l){var c;l?c=l.l:c=i.V++;const f=oe(i.J);it(f,"SID",i.M),it(f,"RID",c),it(f,"AID",i.K),ir(i,f),i.u&&i.o&&Qs(f,i.u,i.o),c=new ve(i,i.j,c,i.D+1),i.u===null&&(c.J=i.o),l&&(i.i=l.G.concat(i.i)),l=Xo(i,c,1e3),c.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Gs(i.h,c),$s(c,f,l)}function ir(i,l){i.H&&se(i.H,function(c,f){it(l,f,c)}),i.l&&se({},function(c,f){it(l,f,c)})}function Xo(i,l,c){c=Math.min(i.i.length,c);const f=i.l?d(i.l.Ka,i.l,i):null;t:{var A=i.i;let G=-1;for(;;){const vt=["count="+c];G==-1?c>0?(G=A[0].g,vt.push("ofs="+G)):G=0:vt.push("ofs="+G);let rt=!0;for(let It=0;It<c;It++){var R=A[It].g;const ae=A[It].map;if(R-=G,R<0)G=Math.max(0,A[It].g-100),rt=!1;else try{R="req"+R+"_"||"";try{var N=ae instanceof Map?ae:Object.entries(ae);for(const[Ke,Ae]of N){let be=Ae;u(Ae)&&(be=tt(Ae)),vt.push(R+Ke+"="+encodeURIComponent(be))}}catch(Ke){throw vt.push(R+"type="+encodeURIComponent("_badmap")),Ke}}catch{f&&f(ae)}}if(rt){N=vt.join("&");break t}}N=void 0}return i=i.i.splice(0,c),l.G=i,N}function Zo(i){if(!i.g&&!i.v){i.Y=1;var l=i.Da;Z||g(),gt||(Z(),gt=!0),_.add(l,i),i.A=0}}function Ys(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Kn(d(i.Da,i),na(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,ta(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Kn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Lt(10),zr(this),ta(this))};function Xs(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function ta(i){i.g=new ve(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var l=oe(i.na);it(l,"RID","rpc"),it(l,"SID",i.M),it(l,"AID",i.K),it(l,"CI",i.F?"0":"1"),!i.F&&i.ia&&it(l,"TO",i.ia),it(l,"TYPE","xmlhttp"),ir(i,l),i.u&&i.o&&Qs(l,i.u,i.o),i.O&&(i.g.H=i.O);var c=i.g;i=i.ba,c.M=1,c.A=$r(oe(l)),c.u=null,c.R=!0,Co(c,i)}n.Va=function(){this.C!=null&&(this.C=null,zr(this),Ys(this),Lt(19))};function Kr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function ea(i,l){var c=null;if(i.g==l){Kr(i),Xs(i),i.g=null;var f=2}else if(zs(i.h,l))c=l.G,No(i.h,l),f=1;else return;if(i.I!=0){if(l.o)if(f==1){c=l.u?l.u.length:0,l=Date.now()-l.F;var A=i.D;f=fn(),wt(f,new Io(f,c)),Gr(i)}else Zo(i);else if(A=l.m,A==3||A==0&&l.X>0||!(f==1&&ah(i,l)||f==2&&Ys(i)))switch(c&&c.length>0&&(l=i.h,l.i=l.i.concat(c)),A){case 1:Ge(i,5);break;case 4:Ge(i,10);break;case 3:Ge(i,6);break;default:Ge(i,2)}}}function na(i,l){let c=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(c*=2),c*l}function Ge(i,l){if(i.j.info("Error code "+l),l==2){var c=d(i.bb,i),f=i.Ua;const A=!f;f=new Te(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Yn(f,"https"),$r(f),A?eh(f.toString(),c):nh(f.toString(),c)}else Lt(2);i.I=0,i.l&&i.l.pa(l),ra(i),Jo(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function ra(i){if(i.I=0,i.ja=[],i.l){const l=Oo(i.h);(l.length!=0||i.i.length!=0)&&(F(i.ja,l),F(i.ja,i.i),i.h.i.length=0,P(i.i),i.i.length=0),i.l.oa()}}function sa(i,l,c){var f=c instanceof Te?oe(c):new Te(c);if(f.g!="")l&&(f.g=l+"."+f.g),Xn(f,f.u);else{var A=a.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;const R=new Te(null);f&&Yn(R,f),l&&(R.g=l),A&&Xn(R,A),c&&(R.h=c),f=R}return c=i.G,l=i.wa,c&&l&&it(f,c,l),it(f,"VER",i.ka),ir(i,f),f}function ia(i,l,c){if(l&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Aa&&!i.ma?new dt(new Ws({ab:c})):new dt(i.ma),l.Fa(i.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function oa(){}n=oa.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Wr(){}Wr.prototype.g=function(i,l){return new Gt(i,l)};function Gt(i,l){St.call(this),this.g=new Qo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(i?i["X-WebChannel-Client-Profile"]=l.sa:i={"X-WebChannel-Client-Profile":l.sa}),this.g.U=i,(i=l&&l.Qb)&&!m(i)&&(this.g.u=i),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!m(l)&&(this.g.G=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new gn(this)}T(Gt,St),Gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){Js(this.g)},Gt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.v&&(c={},c.__data__=tt(i),i=c);l.i.push(new Ku(l.Ya++,i)),l.I==3&&Gr(l)},Gt.prototype.N=function(){this.g.l=null,delete this.j,Js(this.g),delete this.g,Gt.Z.N.call(this)};function aa(i){$e.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const c in l){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}T(aa,$e);function la(){qe.call(this),this.status=1}T(la,qe);function gn(i){this.g=i}T(gn,oa),gn.prototype.ra=function(){wt(this.g,"a")},gn.prototype.qa=function(i){wt(this.g,new aa(i))},gn.prototype.pa=function(i){wt(this.g,new la)},gn.prototype.oa=function(){wt(this.g,"b")},Wr.prototype.createWebChannel=Wr.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,ic=function(){return new Wr},sc=function(){return fn()},rc=me,Ti={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Br.NO_ERROR=0,Br.TIMEOUT=8,Br.HTTP_ERROR=6,ns=Br,Ao.COMPLETE="complete",nc=Ao,Jt.EventType=je,je.OPEN="a",je.CLOSE="b",je.ERROR="c",je.MESSAGE="d",St.prototype.listen=St.prototype.J,ur=Jt,dt.prototype.listenOnce=dt.prototype.K,dt.prototype.getLastError=dt.prototype.Ha,dt.prototype.getLastErrorCode=dt.prototype.ya,dt.prototype.getStatus=dt.prototype.ca,dt.prototype.getResponseJson=dt.prototype.La,dt.prototype.getResponseText=dt.prototype.la,dt.prototype.send=dt.prototype.ea,dt.prototype.setWithCredentials=dt.prototype.Fa,ec=dt}).apply(typeof Jr<"u"?Jr:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Nn="12.8.0";function Gd(n){Nn=n}/**
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
 */const tn=new qi("@firebase/firestore");function vn(){return tn.logLevel}function j(n,...t){if(tn.logLevel<=Y.DEBUG){const e=t.map(Gi);tn.debug(`Firestore (${Nn}): ${n}`,...e)}}function en(n,...t){if(tn.logLevel<=Y.ERROR){const e=t.map(Gi);tn.error(`Firestore (${Nn}): ${n}`,...e)}}function Ps(n,...t){if(tn.logLevel<=Y.WARN){const e=t.map(Gi);tn.warn(`Firestore (${Nn}): ${n}`,...e)}}function Gi(n){if(typeof n=="string")return n;try{return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function K(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,oc(n,r,e)}function oc(n,t,e){let r=`FIRESTORE (${Nn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw en(r),new Error(r)}function mt(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||oc(t,s,r)}function st(n,t){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Me{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class ac{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Nt.UNAUTHENTICATED))}shutdown(){}}class Wd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Qd{constructor(t){this.t=t,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){mt(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Xe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xe,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xe)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(mt(typeof r.accessToken=="string",31837,{l:r}),new ac(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return mt(t===null||typeof t=="string",2055,{h:t}),new Nt(t)}}class Jd{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Yd{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Jd(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class La{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xd{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kd(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){mt(this.o===void 0,3512);const r=o=>{o.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,j("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new La(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(mt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new La(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Zd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Ki{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Zd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function nt(n,t){return n<t?-1:n>t?1:0}function wi(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return ai(s)===ai(o)?nt(s,o):ai(s)?1:-1}return nt(n.length,t.length)}const tm=55296,em=57343;function ai(n){const t=n.charCodeAt(0);return t>=tm&&t<=em}function Rn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const Ua="__name__";class ce{constructor(t,e,r){e===void 0?e=0:e>t.length&&K(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&K(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ce.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ce?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=ce.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return nt(t.length,e.length)}static compareSegments(t,e){const r=ce.isNumericId(t),s=ce.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?ce.extractNumericId(t).compare(ce.extractNumericId(e)):wi(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return zi.fromString(t.substring(4,t.length-2))}}class ft extends ce{construct(t,e,r){return new ft(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new q(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new ft(e)}static emptyPath(){return new ft([])}}const nm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends ce{construct(t,e,r){return new Dt(t,e,r)}static isValidIdentifier(t){return nm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ua}static keyField(){return new Dt([Ua])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new q(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new q(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new q(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new q(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Dt(e)}static emptyPath(){return new Dt([])}}/**
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
 */class z{constructor(t){this.path=t}static fromPath(t){return new z(ft.fromString(t))}static fromName(t){return new z(ft.fromString(t).popFirst(5))}static empty(){return new z(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ft.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ft.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new z(new ft(t.slice()))}}/**
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
 */function lc(n,t,e){if(!e)throw new q(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function rm(n,t,e,r){if(t===!0&&r===!0)throw new q(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ba(n){if(!z.isDocumentKey(n))throw new q(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ja(n){if(z.isDocumentKey(n))throw new q(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function cc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":K(12329,{type:typeof n})}function uc(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new q(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Wi(n);throw new q(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function _t(n,t){const e={typeString:n};return t&&(e.value=t),e}function Cr(n,t){if(!cc(n))throw new q(D.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new q(D.INVALID_ARGUMENT,e);return!0}/**
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
 */const $a=-62135596800,qa=1e6;class ut{static now(){return ut.fromMillis(Date.now())}static fromDate(t){return ut.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*qa);return new ut(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<$a)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qa}_compareTo(t){return this.seconds===t.seconds?nt(this.nanoseconds,t.nanoseconds):nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ut._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Cr(t,ut._jsonSchema))return new ut(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-$a;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ut._jsonSchemaVersion="firestore/timestamp/1.0",ut._jsonSchema={type:_t("string",ut._jsonSchemaVersion),seconds:_t("number"),nanoseconds:_t("number")};/**
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
 */class ct{static fromTimestamp(t){return new ct(t)}static min(){return new ct(new ut(0,0))}static max(){return new ct(new ut(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Tr=-1;function sm(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ct.fromTimestamp(r===1e9?new ut(e+1,0):new ut(e,r));return new xe(s,z.empty(),t)}function im(n){return new xe(n.readTime,n.key,Tr)}class xe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new xe(ct.min(),z.empty(),Tr)}static max(){return new xe(ct.max(),z.empty(),Tr)}}function om(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=z.comparator(n.documentKey,t.documentKey),e!==0?e:nt(n.largestBatchId,t.largestBatchId))}/**
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
 */const am="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Qi(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==am)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,r)=>{e(t)})}static reject(t){return new V((e,r)=>{r(t)})}static waitFor(t){return new V((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=V.resolve(!1);for(const r of t)e=e.next(s=>s?V.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new V((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(I=>{a[d]=I,++u,u===o&&r(a)},I=>s(I))}})}static doWhile(t,e){return new V((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function cm(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Pr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ji{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ji.ce=-1;/**
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
 */const Yi=-1;function Xi(n){return n==null}function hs(n){return n===0&&1/n==-1/0}function um(n){return typeof n=="number"&&Number.isInteger(n)&&!hs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const hc="";function hm(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ha(t)),t=fm(n.get(e),t);return Ha(t)}function fm(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case hc:e+="";break;default:e+=o}}return e}function Ha(n){return n+hc+""}/**
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
 */function za(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function On(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function fc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Ht{constructor(t,e){this.comparator=t,this.root=e||Ct.EMPTY}insert(t,e){return new Ht(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(t){return new Ht(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Yr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Yr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Yr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Yr(this.root,t,this.comparator,!0)}}class Yr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ct{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??Ct.RED,this.left=s??Ct.EMPTY,this.right=o??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new Ct(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw K(27949);return t+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new Ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(t){this.comparator=t,this.data=new Ht(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ga(this.data.getIterator())}getIteratorFrom(t){return new Ga(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof kt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new kt(this.comparator);return e.data=t,e}}class Ga{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ne{constructor(t){this.fields=t,t.sort(Dt.comparator)}static empty(){return new ne([])}unionWith(t){let e=new kt(Dt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ne(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Rn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class dm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class fe{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new dm("Invalid base64 string: "+o):o}}(t);return new fe(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new fe(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}fe.EMPTY_BYTE_STRING=new fe("");const mm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nn(n){if(mt(!!n,39018),typeof n=="string"){let t=0;const e=mm.exec(n);if(mt(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Pt(n.seconds),nanos:Pt(n.nanos)}}function Pt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Cn(n){return typeof n=="string"?fe.fromBase64String(n):fe.fromUint8Array(n)}/**
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
 */const dc="server_timestamp",mc="__type__",gc="__previous_value__",pc="__local_write_time__";function Zi(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[mc])==null?void 0:r.stringValue)===dc}function to(n){const t=n.mapValue.fields[gc];return Zi(t)?to(t):t}function fs(n){const t=nn(n.mapValue.fields[pc].timestampValue);return new ut(t.seconds,t.nanos)}/**
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
 */class gm{constructor(t,e,r,s,o,a,u,h,d,I,T){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=I,this.apiKey=T}}const ds="(default)";class ms{constructor(t,e){this.projectId=t,this.database=e||ds}static empty(){return new ms("","")}get isDefaultDatabase(){return this.database===ds}isEqual(t){return t instanceof ms&&t.projectId===this.projectId&&t.database===this.database}}function pm(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new q(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ms(n.options.projectId,t)}/**
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
 */const yc="__type__",ym="__max__",Xr={mapValue:{}},_c="__vector__",Ii="value";function rn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zi(n)?4:Em(n)?9007199254740991:_m(n)?10:11:K(28295,{value:n})}function de(n,t){if(n===t)return!0;const e=rn(n);if(e!==rn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return fs(n).isEqual(fs(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=nn(s.timestampValue),u=nn(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Cn(s.bytesValue).isEqual(Cn(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return Pt(s.geoPointValue.latitude)===Pt(o.geoPointValue.latitude)&&Pt(s.geoPointValue.longitude)===Pt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Pt(s.integerValue)===Pt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Pt(s.doubleValue),u=Pt(o.doubleValue);return a===u?hs(a)===hs(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Rn(n.arrayValue.values||[],t.arrayValue.values||[],de);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(za(a)!==za(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!de(a[h],u[h])))return!1;return!0}(n,t);default:return K(52216,{left:n})}}function wr(n,t){return(n.values||[]).find(e=>de(e,t))!==void 0}function Pn(n,t){if(n===t)return 0;const e=rn(n),r=rn(t);if(e!==r)return nt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return nt(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=Pt(o.integerValue||o.doubleValue),h=Pt(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return Ka(n.timestampValue,t.timestampValue);case 4:return Ka(fs(n),fs(t));case 5:return wi(n.stringValue,t.stringValue);case 6:return function(o,a){const u=Cn(o),h=Cn(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const I=nt(u[d],h[d]);if(I!==0)return I}return nt(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=nt(Pt(o.latitude),Pt(a.latitude));return u!==0?u:nt(Pt(o.longitude),Pt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Wa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var S,P,F,M;const u=o.fields||{},h=a.fields||{},d=(S=u[Ii])==null?void 0:S.arrayValue,I=(P=h[Ii])==null?void 0:P.arrayValue,T=nt(((F=d==null?void 0:d.values)==null?void 0:F.length)||0,((M=I==null?void 0:I.values)==null?void 0:M.length)||0);return T!==0?T:Wa(d,I)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Xr.mapValue&&a===Xr.mapValue)return 0;if(o===Xr.mapValue)return 1;if(a===Xr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},I=Object.keys(d);h.sort(),I.sort();for(let T=0;T<h.length&&T<I.length;++T){const S=wi(h[T],I[T]);if(S!==0)return S;const P=Pn(u[h[T]],d[I[T]]);if(P!==0)return P}return nt(h.length,I.length)}(n.mapValue,t.mapValue);default:throw K(23264,{he:e})}}function Ka(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return nt(n,t);const e=nn(n),r=nn(t),s=nt(e.seconds,r.seconds);return s!==0?s:nt(e.nanos,r.nanos)}function Wa(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Pn(e[s],r[s]);if(o)return o}return nt(e.length,r.length)}function Vn(n){return Ai(n)}function Ai(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=nn(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Cn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return z.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ai(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ai(e.fields[a])}`;return s+"}"}(n.mapValue):K(61005,{value:n})}function rs(n){switch(rn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=to(n);return t?16+rs(t):16;case 5:return 2*n.stringValue.length;case 6:return Cn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+rs(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return On(r.fields,(o,a)=>{s+=o.length+rs(a)}),s}(n.mapValue);default:throw K(13486,{value:n})}}function bi(n){return!!n&&"integerValue"in n}function eo(n){return!!n&&"arrayValue"in n}function ss(n){return!!n&&"mapValue"in n}function _m(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[yc])==null?void 0:r.stringValue)===_c}function mr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return On(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=mr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=mr(n.arrayValue.values[e]);return t}return{...n}}function Em(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ym}/**
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
 */class te{constructor(t){this.value=t}static empty(){return new te({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ss(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=mr(e)}setAll(t){let e=Dt.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=mr(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());ss(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return de(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ss(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){On(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new te(mr(this.value))}}function Ec(n){const t=[];return On(n.fields,(e,r)=>{const s=new Dt([e]);if(ss(r)){const o=Ec(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new ne(t)}/**
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
 */class Yt{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new Yt(t,0,ct.min(),ct.min(),ct.min(),te.empty(),0)}static newFoundDocument(t,e,r,s){return new Yt(t,1,e,ct.min(),r,s,0)}static newNoDocument(t,e){return new Yt(t,2,e,ct.min(),ct.min(),te.empty(),0)}static newUnknownDocument(t,e){return new Yt(t,3,e,ct.min(),ct.min(),te.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ct.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=te.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=te.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ct.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gs{constructor(t,e){this.position=t,this.inclusive=e}}function Qa(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=z.comparator(z.fromName(a.referenceValue),e.key):r=Pn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ja(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!de(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class ps{constructor(t,e="asc"){this.field=t,this.dir=e}}function vm(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class vc{}class bt extends vc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new wm(t,e,r):e==="array-contains"?new bm(t,r):e==="in"?new Sm(t,r):e==="not-in"?new Rm(t,r):e==="array-contains-any"?new Cm(t,r):new bt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Im(t,r):new Am(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Pn(e,this.value)):e!==null&&rn(this.value)===rn(e)&&this.matchesComparison(Pn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ne extends vc{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ne(t,e)}matches(t){return Tc(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Tc(n){return n.op==="and"}function wc(n){return Tm(n)&&Tc(n)}function Tm(n){for(const t of n.filters)if(t instanceof Ne)return!1;return!0}function Si(n){if(n instanceof bt)return n.field.canonicalString()+n.op.toString()+Vn(n.value);if(wc(n))return n.filters.map(t=>Si(t)).join(",");{const t=n.filters.map(e=>Si(e)).join(",");return`${n.op}(${t})`}}function Ic(n,t){return n instanceof bt?function(r,s){return s instanceof bt&&r.op===s.op&&r.field.isEqual(s.field)&&de(r.value,s.value)}(n,t):n instanceof Ne?function(r,s){return s instanceof Ne&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&Ic(a,s.filters[u]),!0):!1}(n,t):void K(19439)}function Ac(n){return n instanceof bt?function(e){return`${e.field.canonicalString()} ${e.op} ${Vn(e.value)}`}(n):n instanceof Ne?function(e){return e.op.toString()+" {"+e.getFilters().map(Ac).join(" ,")+"}"}(n):"Filter"}class wm extends bt{constructor(t,e,r){super(t,e,r),this.key=z.fromName(r.referenceValue)}matches(t){const e=z.comparator(t.key,this.key);return this.matchesComparison(e)}}class Im extends bt{constructor(t,e){super(t,"in",e),this.keys=bc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Am extends bt{constructor(t,e){super(t,"not-in",e),this.keys=bc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function bc(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>z.fromName(r.referenceValue))}class bm extends bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return eo(e)&&wr(e.arrayValue,this.value)}}class Sm extends bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&wr(this.value.arrayValue,e)}}class Rm extends bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!wr(this.value.arrayValue,e)}}class Cm extends bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!eo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>wr(this.value.arrayValue,r))}}/**
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
 */class Pm{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function Ya(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Pm(n,t,e,r,s,o,a)}function no(n){const t=st(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Si(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Xi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Vn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Vn(r)).join(",")),t.Te=e}return t.Te}function ro(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!vm(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ic(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ja(n.startAt,t.startAt)&&Ja(n.endAt,t.endAt)}/**
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
 */class Vs{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Vm(n,t,e,r,s,o,a,u){return new Vs(n,t,e,r,s,o,a,u)}function Dm(n){return new Vs(n)}function Xa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function km(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function xm(n){return n.collectionGroup!==null}function gr(n){const t=st(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new kt(Dt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new ps(o,r))}),e.has(Dt.keyField().canonicalString())||t.Ie.push(new ps(Dt.keyField(),r))}return t.Ie}function Ze(n){const t=st(n);return t.Ee||(t.Ee=Nm(t,gr(n))),t.Ee}function Nm(n,t){if(n.limitType==="F")return Ya(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new ps(s.field,o)});const e=n.endAt?new gs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gs(n.startAt.position,n.startAt.inclusive):null;return Ya(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ri(n,t,e){return new Vs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Sc(n,t){return ro(Ze(n),Ze(t))&&n.limitType===t.limitType}function Rc(n){return`${no(Ze(n))}|lt:${n.limitType}`}function lr(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Ac(s)).join(", ")}]`),Xi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Vn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Vn(s)).join(",")),`Target(${r})`}(Ze(n))}; limitType=${n.limitType})`}function so(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):z.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of gr(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=Qa(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,gr(r),s)||r.endAt&&!function(a,u,h){const d=Qa(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,gr(r),s))}(n,t)}function Om(n){return(t,e)=>{let r=!1;for(const s of gr(n)){const o=Fm(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Fm(n,t,e){const r=n.field.isKeyField()?z.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Pn(h,d):K(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:n.dir})}}/**
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
 */class an{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){On(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return fc(this.inner)}size(){return this.innerSize}}/**
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
 */const Mm=new Ht(z.comparator);function ys(){return Mm}const Cc=new Ht(z.comparator);function Zr(...n){let t=Cc;for(const e of n)t=t.insert(e.key,e);return t}function Pc(n){let t=Cc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Je(){return pr()}function Vc(){return pr()}function pr(){return new an(n=>n.toString(),(n,t)=>n.isEqual(t))}const Lm=new Ht(z.comparator),Um=new kt(z.comparator);function Ot(...n){let t=Um;for(const e of n)t=t.add(e);return t}const Bm=new kt(nt);function jm(){return Bm}/**
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
 */function io(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hs(t)?"-0":t}}function Dc(n){return{integerValue:""+n}}function $m(n,t){return um(t)?Dc(t):io(n,t)}/**
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
 */class Ds{constructor(){this._=void 0}}function qm(n,t,e){return n instanceof _s?function(s,o){const a={fields:{[mc]:{stringValue:dc},[pc]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Zi(o)&&(o=to(o)),o&&(a.fields[gc]=o),{mapValue:a}}(e,t):n instanceof Ir?xc(n,t):n instanceof Ar?Nc(n,t):function(s,o){const a=kc(s,o),u=Za(a)+Za(s.Ae);return bi(a)&&bi(s.Ae)?Dc(u):io(s.serializer,u)}(n,t)}function Hm(n,t,e){return n instanceof Ir?xc(n,t):n instanceof Ar?Nc(n,t):e}function kc(n,t){return n instanceof Es?function(r){return bi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class _s extends Ds{}class Ir extends Ds{constructor(t){super(),this.elements=t}}function xc(n,t){const e=Oc(t);for(const r of n.elements)e.some(s=>de(s,r))||e.push(r);return{arrayValue:{values:e}}}class Ar extends Ds{constructor(t){super(),this.elements=t}}function Nc(n,t){let e=Oc(t);for(const r of n.elements)e=e.filter(s=>!de(s,r));return{arrayValue:{values:e}}}class Es extends Ds{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Za(n){return Pt(n.integerValue||n.doubleValue)}function Oc(n){return eo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function zm(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Ir&&s instanceof Ir||r instanceof Ar&&s instanceof Ar?Rn(r.elements,s.elements,de):r instanceof Es&&s instanceof Es?de(r.Ae,s.Ae):r instanceof _s&&s instanceof _s}(n.transform,t.transform)}class Gm{constructor(t,e){this.version=t,this.transformResults=e}}class pe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new pe}static exists(t){return new pe(void 0,t)}static updateTime(t){return new pe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function is(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ks{}function Fc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Lc(n.key,pe.none()):new Vr(n.key,n.data,pe.none());{const e=n.data,r=te.empty();let s=new kt(Dt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ln(n.key,r,new ne(s.toArray()),pe.none())}}function Km(n,t,e){n instanceof Vr?function(s,o,a){const u=s.value.clone(),h=el(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof ln?function(s,o,a){if(!is(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=el(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Mc(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function yr(n,t,e,r){return n instanceof Vr?function(o,a,u,h){if(!is(o.precondition,a))return u;const d=o.value.clone(),I=nl(o.fieldTransforms,h,a);return d.setAll(I),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof ln?function(o,a,u,h){if(!is(o.precondition,a))return u;const d=nl(o.fieldTransforms,h,a),I=a.data;return I.setAll(Mc(o)),I.setAll(d),a.convertToFoundDocument(a.version,I).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,u){return is(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Wm(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=kc(r.transform,s||null);o!=null&&(e===null&&(e=te.empty()),e.set(r.field,o))}return e||null}function tl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Rn(r,s,(o,a)=>zm(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Vr extends ks{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ln extends ks{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Mc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function el(n,t,e){const r=new Map;mt(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,Hm(a,u,e[s]))}return r}function nl(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,qm(o,a,t))}return r}class Lc extends ks{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qm extends ks{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Jm{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Km(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=yr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=yr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Vc();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Fc(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(ct.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Ot())}isEqual(t){return this.batchId===t.batchId&&Rn(this.mutations,t.mutations,(e,r)=>tl(e,r))&&Rn(this.baseMutations,t.baseMutations,(e,r)=>tl(e,r))}}class oo{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){mt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return Lm}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new oo(t,e,r,s)}}/**
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
 */class Ym{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var yt,J;function Xm(n){switch(n){case D.OK:return K(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return K(15467,{code:n})}}function Zm(n){if(n===void 0)return en("GRPC error has no .code"),D.UNKNOWN;switch(n){case yt.OK:return D.OK;case yt.CANCELLED:return D.CANCELLED;case yt.UNKNOWN:return D.UNKNOWN;case yt.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case yt.INTERNAL:return D.INTERNAL;case yt.UNAVAILABLE:return D.UNAVAILABLE;case yt.UNAUTHENTICATED:return D.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case yt.NOT_FOUND:return D.NOT_FOUND;case yt.ALREADY_EXISTS:return D.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return D.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case yt.ABORTED:return D.ABORTED;case yt.OUT_OF_RANGE:return D.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return D.UNIMPLEMENTED;case yt.DATA_LOSS:return D.DATA_LOSS;default:return K(39323,{code:n})}}(J=yt||(yt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new zi([4294967295,4294967295],0);class tg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ci(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function eg(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ng(n,t){return Ci(n,t.toTimestamp())}function In(n){return mt(!!n,49232),ct.fromTimestamp(function(e){const r=nn(e);return new ut(r.seconds,r.nanos)}(n))}function Uc(n,t){return Pi(n,t).canonicalString()}function Pi(n,t){const e=function(s){return new ft(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function rg(n){const t=ft.fromString(n);return mt(hg(t),10190,{key:t.toString()}),t}function Vi(n,t){return Uc(n.databaseId,t.path)}function sg(n){const t=rg(n);return t.length===4?ft.emptyPath():og(t)}function ig(n){return new ft(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function og(n){return mt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function rl(n,t,e){return{name:Vi(n,t),fields:e.value.mapValue.fields}}function ag(n,t){let e;if(t instanceof Vr)e={update:rl(n,t.key,t.value)};else if(t instanceof Lc)e={delete:Vi(n,t.key)};else if(t instanceof ln)e={update:rl(n,t.key,t.data),updateMask:ug(t.fieldMask)};else{if(!(t instanceof Qm))return K(16599,{dt:t.type});e={verify:Vi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof _s)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Ir)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Ar)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Es)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw K(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:ng(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:K(27497)}(n,t.precondition)),e}function lg(n,t){return n&&n.length>0?(mt(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?In(s.updateTime):In(o);return a.isEqual(ct.min())&&(a=In(o)),new Gm(a,s.transformResults||[])}(e,t))):[]}function cg(n){let t=sg(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){mt(r===1,65062);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(T){const S=Bc(T);return S instanceof Ne&&wc(S)?S.getFilters():[S]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(S=>function(F){return new ps(Tn(F.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(S))}(e.orderBy));let u=null;e.limit&&(u=function(T){let S;return S=typeof T=="object"?T.value:T,Xi(S)?null:S}(e.limit));let h=null;e.startAt&&(h=function(T){const S=!!T.before,P=T.values||[];return new gs(P,S)}(e.startAt));let d=null;return e.endAt&&(d=function(T){const S=!T.before,P=T.values||[];return new gs(P,S)}(e.endAt)),Vm(t,s,a,o,u,"F",h,d)}function Bc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Tn(e.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Tn(e.unaryFilter.field);return bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Tn(e.unaryFilter.field);return bt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Tn(e.unaryFilter.field);return bt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(n):n.fieldFilter!==void 0?function(e){return bt.create(Tn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ne.create(e.compositeFilter.filters.map(r=>Bc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(e.compositeFilter.op))}(n):K(30097,{filter:n})}function Tn(n){return Dt.fromServerFormat(n.fieldPath)}function ug(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function hg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function jc(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class fg{constructor(t){this.yt=t}}function dg(n){const t=cg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ri(t,t.limit,"L"):t}/**
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
 */class mg{constructor(){this.Sn=new gg}addToCollectionParentIndex(t,e){return this.Sn.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(xe.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(xe.min())}updateCollectionGroup(t,e,r){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class gg{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new kt(ft.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new kt(ft.comparator)).toArray()}}/**
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
 */const sl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$c=41943040;class qt{static withCacheSize(t){return new qt(t,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */qt.DEFAULT_COLLECTION_PERCENTILE=10,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qt.DEFAULT=new qt($c,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qt.DISABLED=new qt(-1,0,0);/**
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
 */class Dn{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Dn(0)}static ar(){return new Dn(-1)}}/**
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
 */const il="LruGarbageCollector",pg=1048576;function ol([n,t],[e,r]){const s=nt(n,e);return s===0?nt(t,r):s}class yg{constructor(t){this.Pr=t,this.buffer=new kt(ol),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ol(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class _g{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){j(il,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Pr(e)?j(il,"Ignoring IndexedDB error during garbage collection: ",e):await Qi(e)}await this.Ar(3e5)})}}class Eg{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return V.resolve(Ji.ce);const r=new yg(e);return this.Vr.forEachTarget(t,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(sl)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sl):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,o,a,u,h,d;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),s=this.params.maximumSequenceNumbersToCollect):s=T,a=Date.now(),this.nthSequenceNumber(t,s))).next(T=>(r=T,u=Date.now(),this.removeTargets(t,r,e))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(T=>(d=Date.now(),vn()<=Y.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-I}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${T} documents in `+(d-h)+`ms
Total Duration: ${d-I}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:T})))}}function vg(n,t){return new Eg(n,t)}/**
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
 */class Tg{constructor(){this.changes=new an(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?V.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class wg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Ig{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&yr(r.mutation,s,ne.empty(),ut.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Ot()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Ot()){const s=Je();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=Zr();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Je();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Ot()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=ys();const a=pr(),u=function(){return pr()}();return e.forEach((h,d)=>{const I=r.get(d.key);s.has(d.key)&&(I===void 0||I.mutation instanceof ln)?o=o.insert(d.key,d):I!==void 0?(a.set(d.key,I.mutation.getFieldMask()),yr(I.mutation,d,I.mutation.getFieldMask(),ut.now())):a.set(d.key,ne.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,I)=>a.set(d,I)),e.forEach((d,I)=>u.set(d,new wg(I,a.get(d)??null))),u))}recalculateAndSaveOverlays(t,e){const r=pr();let s=new Ht((a,u)=>a-u),o=Ot();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let I=r.get(h)||ne.empty();I=u.applyToLocalView(d,I),r.set(h,I);const T=(s.get(u.batchId)||Ot()).add(h);s=s.insert(u.batchId,T)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,I=h.value,T=Vc();I.forEach(S=>{if(!o.has(S)){const P=Fc(e.get(S),r.get(S));P!==null&&T.set(S,P),o=o.add(S)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,T))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return km(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xm(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):V.resolve(Je());let u=Tr,h=o;return a.next(d=>V.forEach(d,(I,T)=>(u<T.largestBatchId&&(u=T.largestBatchId),o.get(I)?V.resolve():this.remoteDocumentCache.getEntry(t,I).next(S=>{h=h.insert(I,S)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,Ot())).next(I=>({batchId:u,changes:Pc(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new z(e)).next(r=>{let s=Zr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Zr();return this.indexManager.getCollectionParents(t,o).next(u=>V.forEach(u,h=>{const d=function(T,S){return new Vs(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(I=>{I.forEach((T,S)=>{a=a.insert(T,S)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const I=d.getKey();a.get(I)===null&&(a=a.insert(I,Yt.newInvalidDocument(I)))});let u=Zr();return a.forEach((h,d)=>{const I=o.get(h);I!==void 0&&yr(I.mutation,d,ne.empty(),ut.now()),so(e,d)&&(u=u.insert(h,d))}),u})}}/**
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
 */class Ag{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return V.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:In(s.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(s){return{name:s.name,query:dg(s.bundledQuery),readTime:In(s.readTime)}}(e)),V.resolve()}}/**
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
 */class bg{constructor(){this.overlays=new Ht(z.comparator),this.Lr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Je();return V.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.bt(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),V.resolve()}getOverlaysForCollection(t,e,r){const s=Je(),o=e.length+1,a=new z(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Ht((d,I)=>d-I);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let I=o.get(d.largestBatchId);I===null&&(I=Je(),o=o.insert(d.largestBatchId,I)),I.set(d.getKey(),d)}}const u=Je(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,I)=>u.set(d,I)),!(u.size()>=s)););return V.resolve(u)}bt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ym(e,r));let o=this.Lr.get(e);o===void 0&&(o=Ot(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
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
 */class Sg{constructor(){this.sessionToken=fe.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
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
 */class ao{constructor(){this.kr=new kt(At.Kr),this.qr=new kt(At.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new At(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new At(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new z(new ft([])),r=new At(e,t),s=new At(e,t+1),o=[];return this.qr.forEachInRange([r,s],a=>{this.Wr(a),o.push(a.key)}),o}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new z(new ft([])),r=new At(e,t),s=new At(e,t+1);let o=Ot();return this.qr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new At(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class At{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return z.comparator(t.key,e.key)||nt(t.Hr,e.Hr)}static Ur(t,e){return nt(t.Hr,e.Hr)||z.comparator(t.key,e.key)}}/**
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
 */class Rg{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new kt(At.Kr)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Jm(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Jr=this.Jr.add(new At(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,e){return V.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Yi:this.Yn-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new At(e,0),s=new At(e,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([r,s],a=>{const u=this.Zr(a.Hr);o.push(u)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new kt(nt);return e.forEach(s=>{const o=new At(s,0),a=new At(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],u=>{r=r.add(u.Hr)})}),V.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;z.isDocumentKey(o)||(o=o.child(""));const a=new At(new z(o),0);let u=new kt(nt);return this.Jr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Hr)),!0)},a),V.resolve(this.Yr(u))}Yr(t){const e=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){mt(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return V.forEach(e.mutations,s=>{const o=new At(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Jr=r})}nr(t){}containsKey(t,e){const r=new At(e,0),s=this.Jr.firstAfterOrEqual(r);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Cg{constructor(t){this.ti=t,this.docs=function(){return new Ht(z.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return V.resolve(r?r.document.mutableCopy():Yt.newInvalidDocument(e))}getEntries(t,e){let r=ys();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Yt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=ys();const a=e.path,u=new z(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:I}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||om(im(I),r)<=0||(s.has(I.key)||so(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,r,s){K(9500)}ni(t,e){return V.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Pg(this)}getSize(t){return V.resolve(this.size)}}class Pg extends Tg{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)}),V.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class Vg{constructor(t){this.persistence=t,this.ri=new an(e=>no(e),ro),this.lastRemoteSnapshotVersion=ct.min(),this.highestTargetId=0,this.ii=0,this.si=new ao,this.targetCount=0,this.oi=Dn._r()}forEachTarget(t,e){return this.ri.forEach((r,s)=>e(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),V.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Dn(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.lr(e),V.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ri.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),V.waitFor(o).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return V.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),V.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return V.resolve(r)}containsKey(t,e){return V.resolve(this.si.containsKey(e))}}/**
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
 */class qc{constructor(t,e){this._i={},this.overlays={},this.ai=new Ji(0),this.ui=!1,this.ui=!0,this.ci=new Sg,this.referenceDelegate=t(this),this.li=new Vg(this),this.indexManager=new mg,this.remoteDocumentCache=function(s){return new Cg(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new fg(e),this.Pi=new Ag(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new bg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new Rg(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){j("MemoryPersistence","Starting transaction:",t);const s=new Dg(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(o=>this.referenceDelegate.Ii(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ei(t,e){return V.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class Dg extends lm{constructor(t){super(),this.currentSequenceNumber=t}}class lo{constructor(t){this.persistence=t,this.Ri=new ao,this.Ai=null}static Vi(t){return new lo(t)}get di(){if(this.Ai)return this.Ai;throw K(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),V.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),V.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.di,r=>{const s=z.fromPath(r);return this.mi(t,s).next(o=>{o||e.removeEntry(s,ct.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return V.or([()=>V.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class vs{constructor(t,e){this.persistence=t,this.fi=new an(r=>hm(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=vg(this,e)}static Vi(t,e){return new vs(t,e)}Ti(){}Ii(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return V.forEach(this.fi,(r,s)=>this.wr(t,r,s).next(o=>o?V.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(t,a=>this.wr(t,a,e).next(u=>{u||(r++,o.removeEntry(a,ct.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),V.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),V.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=rs(t.data.value)),e}wr(t,e,r){return V.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class co{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=s}static Es(t,e){let r=Ot(),s=Ot();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new co(t,e.fromCache,r,s)}}/**
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
 */class kg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class xg{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Cf()?8:cm(bf())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.gs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ps(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new kg;return this.ys(t,e,a).next(u=>{if(o.result=u,this.As)return this.ws(t,e,a,u.size)})}).next(()=>o.result)}ws(t,e,r,s){return r.documentReadCount<this.Vs?(vn()<=Y.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",lr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(vn()<=Y.DEBUG&&j("QueryEngine","Query:",lr(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(vn()<=Y.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",lr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ze(e))):V.resolve())}gs(t,e){if(Xa(e))return V.resolve(null);let r=Ze(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ri(e,null,"F"),r=Ze(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=Ot(...o);return this.fs.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.bs(e,u);return this.Ss(e,d,a,h.readTime)?this.gs(t,Ri(e,null,"F")):this.Ds(t,d,e,h)}))})))}ps(t,e,r,s){return Xa(e)||s.isEqual(ct.min())?V.resolve(null):this.fs.getDocuments(t,r).next(o=>{const a=this.bs(e,o);return this.Ss(e,a,r,s)?V.resolve(null):(vn()<=Y.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),lr(e)),this.Ds(t,a,e,sm(s,Tr)).next(u=>u))})}bs(t,e){let r=new kt(Om(t));return e.forEach((s,o)=>{so(t,o)&&(r=r.add(o))}),r}Ss(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(t,e,r){return vn()<=Y.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",lr(e)),this.fs.getDocumentsMatchingQuery(t,e,xe.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const Ng="LocalStore";class Og{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new Ht(nt),this.Fs=new an(o=>no(o),ro),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ig(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Fg(n,t,e,r){return new Og(n,t,e,r)}async function Hc(n,t){const e=st(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=Ot();for(const d of s){a.push(d.batchId);for(const I of d.mutations)h=h.add(I.key)}for(const d of o){u.push(d.batchId);for(const I of d.mutations)h=h.add(I.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:u}))})})}function Mg(n,t){const e=st(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,I){const T=d.batch,S=T.keys();let P=V.resolve();return S.forEach(F=>{P=P.next(()=>I.getEntry(h,F)).next(M=>{const L=d.docVersions.get(F);mt(L!==null,48541),M.version.compareTo(L)<0&&(T.applyToRemoteDocument(M,d),M.isValidDocument()&&(M.setReadTime(d.commitVersion),I.addEntry(M)))})}),P.next(()=>u.mutationQueue.removeMutationBatch(h,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=Ot();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Lg(n){const t=st(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function Ug(n,t){const e=st(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Yi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class al{constructor(){this.activeTargetIds=jm()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Bg{constructor(){this.vo=new al,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new al,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class jg{Mo(t){}shutdown(){}}/**
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
 */const ll="ConnectivityMonitor";class cl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){j(ll,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){j(ll,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ts=null;function Di(){return ts===null?ts=function(){return 268435456+Math.round(2147483648*Math.random())}():ts++,"0x"+ts.toString(16)}/**
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
 */const li="RestConnection",$g={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class qg{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===ds?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=Di(),u=this.Qo(t,e.toUriEncodedString());j(li,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,s,o);const{host:d}=new URL(u),I=$i(d);return this.zo(t,u,h,r,I).then(T=>(j(li,`Received RPC '${t}' ${a}: `,T),T),T=>{throw Ps(li,`RPC '${t}' ${a} failed with error: `,T,"url: ",u,"request:",r),T})}jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}Qo(t,e){const r=$g[t];let s=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class Hg{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const xt="WebChannelConnection",cr=(n,t,e)=>{n.listen(t,r=>{try{e(r)}catch(s){setTimeout(()=>{throw s},0)}})};class An extends qg{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!An.c_){const t=sc();cr(t,rc.STAT_EVENT,e=>{e.stat===Ti.PROXY?j(xt,"STAT_EVENT: detected buffering proxy"):e.stat===Ti.NOPROXY&&j(xt,"STAT_EVENT: detected no buffering proxy")}),An.c_=!0}}zo(t,e,r,s,o){const a=Di();return new Promise((u,h)=>{const d=new ec;d.setWithCredentials(!0),d.listenOnce(nc.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case ns.NO_ERROR:const T=d.getResponseJson();j(xt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(T)),u(T);break;case ns.TIMEOUT:j(xt,`RPC '${t}' ${a} timed out`),h(new q(D.DEADLINE_EXCEEDED,"Request time out"));break;case ns.HTTP_ERROR:const S=d.getStatus();if(j(xt,`RPC '${t}' ${a} failed with status:`,S,"response text:",d.getResponseText()),S>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const F=P==null?void 0:P.error;if(F&&F.status&&F.message){const M=function(H){const U=H.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(U)>=0?U:D.UNKNOWN}(F.status);h(new q(M,F.message))}else h(new q(D.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new q(D.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{j(xt,`RPC '${t}' ${a} completed.`)}});const I=JSON.stringify(s);j(xt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",I,r,15)})}T_(t,e,r){const s=Di(),o=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const d=o.join("");j(xt,`Creating RPC '${t}' stream ${s}: ${d}`,u);const I=a.createWebChannel(d,u);this.I_(I);let T=!1,S=!1;const P=new Hg({Ho:F=>{S?j(xt,`Not sending because RPC '${t}' stream ${s} is closed:`,F):(T||(j(xt,`Opening RPC '${t}' stream ${s} transport.`),I.open(),T=!0),j(xt,`RPC '${t}' stream ${s} sending:`,F),I.send(F))},Jo:()=>I.close()});return cr(I,ur.EventType.OPEN,()=>{S||(j(xt,`RPC '${t}' stream ${s} transport opened.`),P.i_())}),cr(I,ur.EventType.CLOSE,()=>{S||(S=!0,j(xt,`RPC '${t}' stream ${s} transport closed`),P.o_(),this.E_(I))}),cr(I,ur.EventType.ERROR,F=>{S||(S=!0,Ps(xt,`RPC '${t}' stream ${s} transport errored. Name:`,F.name,"Message:",F.message),P.o_(new q(D.UNAVAILABLE,"The operation could not be completed")))}),cr(I,ur.EventType.MESSAGE,F=>{var M;if(!S){const L=F.data[0];mt(!!L,16349);const H=L,U=(H==null?void 0:H.error)||((M=H[0])==null?void 0:M.error);if(U){j(xt,`RPC '${t}' stream ${s} received error:`,U);const X=U.status;let ot=function(_){const g=yt[_];if(g!==void 0)return Zm(g)}(X),Z=U.message;ot===void 0&&(ot=D.INTERNAL,Z="Unknown error status: "+X+" with message "+U.message),S=!0,P.o_(new q(ot,Z)),I.close()}else j(xt,`RPC '${t}' stream ${s} received:`,L),P.__(L)}}),An.u_(),setTimeout(()=>{P.s_()},0),P}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ic()}}/**
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
 */function zg(n){return new An(n)}function ci(){return typeof document<"u"?document:null}/**
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
 */function xs(n){return new tg(n,!0)}/**
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
 */An.c_=!1;class zc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const ul="PersistentStream";class Gg{constructor(t,e,r,s,o,a,u,h){this.Ci=t,this.b_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new zc(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(en(e.toString()),en("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new q(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return j(ul,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(j(ul,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Kg extends Gg{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return mt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,mt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){mt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=lg(t.writeResults,t.commitTime),r=In(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=ig(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>ag(this.serializer,r))};this.K_(e)}}/**
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
 */class Wg{}class Qg extends Wg{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(t,Pi(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(D.UNKNOWN,o.toString())})}jo(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.jo(t,Pi(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(D.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Jg(n,t,e,r){return new Qg(n,t,e,r)}class Yg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(en(e),this.aa=!1):j("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Dr="RemoteStore";class Xg{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{xr(this)&&(j(Dr,"Restarting streams for network reachability change."),await async function(h){const d=st(h);d.Ea.add(4),await kr(d),d.Va.set("Unknown"),d.Ea.delete(4),await Ns(d)}(this))})}),this.Va=new Yg(r,s)}}async function Ns(n){if(xr(n))for(const t of n.Ra)await t(!0)}async function kr(n){for(const t of n.Ra)await t(!1)}function xr(n){return st(n).Ea.size===0}async function Gc(n,t,e){if(!Pr(t))throw t;n.Ea.add(1),await kr(n),n.Va.set("Offline"),e||(e=()=>Lg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{j(Dr,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Ns(n)})}function Kc(n,t){return t().catch(e=>Gc(n,e,t))}async function Os(n){const t=st(n),e=Oe(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Yi;for(;Zg(t);)try{const s=await Ug(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,tp(t,s)}catch(s){await Gc(t,s)}Wc(t)&&Qc(t)}function Zg(n){return xr(n)&&n.Ta.length<10}function tp(n,t){n.Ta.push(t);const e=Oe(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function Wc(n){return xr(n)&&!Oe(n).x_()&&n.Ta.length>0}function Qc(n){Oe(n).start()}async function ep(n){Oe(n).ra()}async function np(n){const t=Oe(n);for(const e of n.Ta)t.ea(e.mutations)}async function rp(n,t,e){const r=n.Ta.shift(),s=oo.from(r,t,e);await Kc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Os(n)}async function sp(n,t){t&&Oe(n).Y_&&await async function(r,s){if(function(a){return Xm(a)&&a!==D.ABORTED}(s.code)){const o=r.Ta.shift();Oe(r).B_(),await Kc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Os(r)}}(n,t),Wc(n)&&Qc(n)}async function hl(n,t){const e=st(n);e.asyncQueue.verifyOperationInProgress(),j(Dr,"RemoteStore received new credentials");const r=xr(e);e.Ea.add(3),await kr(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Ns(e)}async function ip(n,t){const e=st(n);t?(e.Ea.delete(2),await Ns(e)):t||(e.Ea.add(2),await kr(e),e.Va.set("Unknown"))}function Oe(n){return n.fa||(n.fa=function(e,r,s){const o=st(e);return o.sa(),new Kg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ep.bind(null,n),t_:sp.bind(null,n),ta:np.bind(null,n),na:rp.bind(null,n)}),n.Ra.push(async t=>{t?(n.fa.B_(),await Os(n)):(await n.fa.stop(),n.Ta.length>0&&(j(Dr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class uo{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new uo(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jc(n,t){if(en("AsyncQueue",`${t}: ${n}`),Pr(n))return new q(D.UNAVAILABLE,`${t}: ${n}`);throw n}class op{constructor(){this.queries=fl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=st(e),o=s.queries;s.queries=fl(),o.forEach((a,u)=>{for(const h of u.ba)h.onError(r)})})(this,new q(D.ABORTED,"Firestore shutting down"))}}function fl(){return new an(n=>Rc(n),Sc)}function ap(n){n.Ca.forEach(t=>{t.next()})}var dl,ml;(ml=dl||(dl={})).Ma="default",ml.Cache="cache";const lp="SyncEngine";class cp{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new an(u=>Rc(u),Sc),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ht(z.comparator),this.Au=new Map,this.Vu=new ao,this.du={},this.mu=new Map,this.fu=Dn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function up(n,t,e){const r=mp(n);try{const s=await function(a,u){const h=st(a),d=ut.now(),I=u.reduce((P,F)=>P.add(F.key),Ot());let T,S;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let F=ys(),M=Ot();return h.xs.getEntries(P,I).next(L=>{F=L,F.forEach((H,U)=>{U.isValidDocument()||(M=M.add(H))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,F)).next(L=>{T=L;const H=[];for(const U of u){const X=Wm(U,T.get(U.key).overlayedDocument);X!=null&&H.push(new ln(U.key,X,Ec(X.value.mapValue),pe.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,H,u)}).next(L=>{S=L;const H=L.applyToLocalDocumentSet(T,M);return h.documentOverlayCache.saveOverlays(P,L.batchId,H)})}).then(()=>({batchId:S.batchId,changes:Pc(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.du[a.currentUser.toKey()];d||(d=new Ht(nt)),d=d.insert(u,h),a.du[a.currentUser.toKey()]=d}(r,s.batchId,e),await Fs(r,s.changes),await Os(r.remoteStore)}catch(s){const o=Jc(s,"Failed to persist write");e.reject(o)}}function gl(n,t,e){const r=st(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach((o,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=st(a);h.onlineState=u;let d=!1;h.queries.forEach((I,T)=>{for(const S of T.ba)S.va(u)&&(d=!0)}),d&&ap(h)}(r.eventManager,t),s.length&&r.Pu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function hp(n,t){const e=st(n),r=t.batch.batchId;try{const s=await Mg(e.localStore,t);Xc(e,r,null),Yc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Fs(e,s)}catch(s){await Qi(s)}}async function fp(n,t,e){const r=st(n);try{const s=await function(a,u){const h=st(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let I;return h.mutationQueue.lookupMutationBatch(d,u).next(T=>(mt(T!==null,37113),I=T.keys(),h.mutationQueue.removeMutationBatch(d,T))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,I,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,I)).next(()=>h.localDocuments.getDocuments(d,I))})}(r.localStore,t);Xc(r,t,e),Yc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Fs(r,s)}catch(s){await Qi(s)}}function Yc(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function Xc(n,t,e){const r=st(n);let s=r.du[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}async function Fs(n,t,e){const r=st(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((u,h)=>{a.push(r.pu(h,t,e).then(d=>{var I;if((d||e)&&r.isPrimaryClient){const T=d?!d.fromCache:(I=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:I.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){s.push(d);const T=co.Es(h.targetId,d);o.push(T)}}))}),await Promise.all(a),r.Pu.J_(s),await async function(h,d){const I=st(h);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>V.forEach(d,S=>V.forEach(S.Ts,P=>I.persistence.referenceDelegate.addReference(T,S.targetId,P)).next(()=>V.forEach(S.Is,P=>I.persistence.referenceDelegate.removeReference(T,S.targetId,P)))))}catch(T){if(!Pr(T))throw T;j(Ng,"Failed to update sequence numbers: "+T)}for(const T of d){const S=T.targetId;if(!T.fromCache){const P=I.vs.get(S),F=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(F);I.vs=I.vs.insert(S,M)}}}(r.localStore,o))}async function dp(n,t){const e=st(n);if(!e.currentUser.isEqual(t)){j(lp,"User change. New user:",t.toKey());const r=await Hc(e.localStore,t);e.currentUser=t,function(o,a){o.mu.forEach(u=>{u.forEach(h=>{h.reject(new q(D.CANCELLED,a))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Fs(e,r.Ns)}}function mp(n){const t=st(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=fp.bind(null,t),t}class Ts{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=xs(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Fg(this.persistence,new xg,t.initialUser,this.serializer)}Cu(t){return new qc(lo.Vi,this.serializer)}Du(t){return new Bg}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ts.provider={build:()=>new Ts};class gp extends Ts{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){mt(this.persistence.referenceDelegate instanceof vs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new _g(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?qt.withCacheSize(this.cacheSizeBytes):qt.DEFAULT;return new qc(r=>vs.Vi(r,e),this.serializer)}}class ki{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dp.bind(null,this.syncEngine),await ip(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new op}()}createDatastore(t){const e=xs(t.databaseInfo.databaseId),r=zg(t.databaseInfo);return Jg(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new Xg(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>gl(this.syncEngine,e,0),function(){return cl.v()?new cl:new jg}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,I){const T=new cp(s,o,a,u,h,d);return I&&(T.gu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=st(s);j(Dr,"RemoteStore shutting down."),o.Ea.add(5),await kr(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ki.provider={build:()=>new ki};/**
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
 */const Fe="FirestoreClient";class pp{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=Nt.UNAUTHENTICATED,this.clientId=Ki.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{j(Fe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(j(Fe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Jc(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ui(n,t){n.asyncQueue.verifyOperationInProgress(),j(Fe,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Hc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function pl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await yp(n);j(Fe,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>hl(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>hl(t.remoteStore,s)),n._onlineComponents=t}async function yp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(Fe,"Using user provided OfflineComponentProvider");try{await ui(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ps("Error using user provided cache. Falling back to memory cache: "+e),await ui(n,new Ts)}}else j(Fe,"Using default OfflineComponentProvider"),await ui(n,new gp(void 0));return n._offlineComponents}async function _p(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(Fe,"Using user provided OnlineComponentProvider"),await pl(n,n._uninitializedComponentsProvider._online)):(j(Fe,"Using default OnlineComponentProvider"),await pl(n,new ki))),n._onlineComponents}function Ep(n){return _p(n).then(t=>t.syncEngine)}function vp(n,t){const e=new Xe;return n.asyncQueue.enqueueAndForget(async()=>up(await Ep(n),t,e)),e.promise}/**
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
 */function Zc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Tp="ComponentProvider",yl=new Map;function wp(n,t,e,r,s){return new gm(n,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Zc(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const tu="firestore.googleapis.com",_l=!0;class El{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new q(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tu,this.ssl=_l}else this.host=t.host,this.ssl=t.ssl??_l;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=$c;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<pg)throw new q(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}rm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zc(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ms{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new El({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new q(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new El(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Kd;switch(r.type){case"firstParty":return new Yd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=yl.get(e);r&&(j(Tp,"Removing Datastore"),yl.delete(e),r.terminate())}(this),Promise.resolve()}}function Ip(n,t,e,r={}){var d;n=uc(n,Ms);const s=$i(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;s&&(vf(`https://${u}`),Af("Firestore",!0)),o.host!==tu&&o.host!==u&&Ps("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:s,emulatorOptions:r};if(!Er(h,a)&&(n._setSettings(h),r.mockUserToken)){let I,T;if(typeof r.mockUserToken=="string")I=r.mockUserToken,T=Nt.MOCK_USER;else{I=Tf(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new q(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Nt(S)}n._authCredentials=new Wd(new ac(I,T))}}/**
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
 */class ho{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ho(this.firestore,t,this._query)}}class Ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ve(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ft(this.firestore,t,this._key)}toJSON(){return{type:Ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Cr(e,Ft._jsonSchema))return new Ft(t,r||null,new z(ft.fromString(e.referencePath)))}}Ft._jsonSchemaVersion="firestore/documentReference/1.0",Ft._jsonSchema={type:_t("string",Ft._jsonSchemaVersion),referencePath:_t("string")};class Ve extends ho{constructor(t,e,r){super(t,e,Dm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ft(this.firestore,null,new z(t))}withConverter(t){return new Ve(this.firestore,t,this._path)}}function Ap(n,t,...e){if(n=De(n),lc("collection","path",t),n instanceof Ms){const r=ft.fromString(t,...e);return ja(r),new Ve(n,null,r)}{if(!(n instanceof Ft||n instanceof Ve))throw new q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return ja(r),new Ve(n.firestore,null,r)}}function bp(n,t,...e){if(n=De(n),arguments.length===1&&(t=Ki.newId()),lc("doc","path",t),n instanceof Ms){const r=ft.fromString(t,...e);return Ba(r),new Ft(n,null,new z(r))}{if(!(n instanceof Ft||n instanceof Ve))throw new q(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return Ba(r),new Ft(n.firestore,n instanceof Ve?n.converter:null,new z(r))}}/**
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
 */const vl="AsyncQueue";class Tl{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new zc(this,"async_queue_retry"),this._c=()=>{const r=ci();r&&j(vl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=ci();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=ci();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Xe;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!Pr(t))throw t;j(vl,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,en("INTERNAL UNHANDLED ERROR: ",wl(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=uo.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&K(47125,{Pc:wl(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function wl(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class eu extends Ms{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Tl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Tl(t),this._firestoreClient=void 0,await t}}}function Sp(n,t){const e=typeof n=="object"?n:Xl(),r=typeof n=="string"?n:ds,s=Rr(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=_f("firestore");o&&Ip(s,...o)}return s}function Rp(n){if(n._terminated)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Cp(n),n._firestoreClient}function Cp(n){var r,s,o,a;const t=n._freezeSettings(),e=wp(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,t);n._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new pp(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class ee{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ee(fe.fromBase64String(t))}catch(e){throw new q(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ee(fe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:ee._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Cr(t,ee._jsonSchema))return ee.fromBase64String(t.bytes)}}ee._jsonSchemaVersion="firestore/bytes/1.0",ee._jsonSchema={type:_t("string",ee._jsonSchemaVersion),bytes:_t("string")};/**
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
 */class nu{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new q(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ru{constructor(t){this._methodName=t}}/**
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
 */class ye{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new q(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new q(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return nt(this._lat,t._lat)||nt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ye._jsonSchemaVersion}}static fromJSON(t){if(Cr(t,ye._jsonSchema))return new ye(t.latitude,t.longitude)}}ye._jsonSchemaVersion="firestore/geoPoint/1.0",ye._jsonSchema={type:_t("string",ye._jsonSchemaVersion),latitude:_t("number"),longitude:_t("number")};/**
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
 */class he{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:he._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Cr(t,he._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new he(t.vectorValues);throw new q(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}he._jsonSchemaVersion="firestore/vectorValue/1.0",he._jsonSchema={type:_t("string",he._jsonSchemaVersion),vectorValues:_t("object")};/**
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
 */const Pp=/^__.*__$/;class Vp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ln(t,this.data,this.fieldMask,e,this.fieldTransforms):new Vr(t,this.data,e,this.fieldTransforms)}}function su(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:n})}}class fo{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new fo({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return ws(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(su(this.dataSource)&&Pp.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class Dp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||xs(t)}createContext(t,e,r,s=!1){return new fo({dataSource:t,methodName:e,targetDoc:r,path:Dt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kp(n){const t=n._freezeSettings(),e=xs(n._databaseId);return new Dp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function xp(n,t,e,r,s,o={}){const a=n.createContext(o.merge||o.mergeFields?2:0,t,e,s);lu("Data must be an object, but it was:",a,r);const u=ou(r,a);let h,d;if(o.merge)h=new ne(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const I=[];for(const T of o.mergeFields){const S=mo(t,T,e);if(!a.contains(S))throw new q(D.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Fp(I,S)||I.push(S)}h=new ne(I),d=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,d=a.fieldTransforms;return new Vp(new te(u),h,d)}function iu(n,t){if(au(n=De(n)))return lu("Unsupported field value:",t,n),ou(n,t);if(n instanceof ru)return function(r,s){if(!su(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=iu(u,s.childContextForArray(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $m(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ut.fromDate(r);return{timestampValue:Ci(s.serializer,o)}}if(r instanceof ut){const o=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ci(s.serializer,o)}}if(r instanceof ye)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ee)return{bytesValue:eg(s.serializer,r._byteString)};if(r instanceof Ft){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Uc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof he)return function(a,u){const h=a instanceof he?a.toArray():a;return{mapValue:{fields:{[yc]:{stringValue:_c},[Ii]:{arrayValue:{values:h.map(I=>{if(typeof I!="number")throw u.createError("VectorValues must only contain numeric values.");return io(u.serializer,I)})}}}}}}(r,s);if(jc(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Wi(r)}`)}(n,t)}function ou(n,t){const e={};return fc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):On(n,(r,s)=>{const o=iu(s,t.childContextForField(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function au(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ut||n instanceof ye||n instanceof ee||n instanceof Ft||n instanceof ru||n instanceof he||jc(n))}function lu(n,t,e){if(!au(e)||!cc(e)){const r=Wi(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function mo(n,t,e){if((t=De(t))instanceof nu)return t._internalPath;if(typeof t=="string")return Op(n,t);throw ws("Field path arguments must be of type string or ",n,!1,void 0,e)}const Np=new RegExp("[~\\*/\\[\\]]");function Op(n,t,e){if(t.search(Np)>=0)throw ws(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new nu(...t.split("."))._internalPath}catch{throw ws(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ws(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new q(D.INVALID_ARGUMENT,u+n+h)}function Fp(n,t){return n.some(e=>e.isEqual(t))}const Il="@firebase/firestore",Al="4.10.0";/**
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
 */class cu{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Mp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(mo("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Mp extends cu{data(){return super.data()}}function Lp(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class es{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class bn extends cu{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new os(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(mo("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=bn._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}bn._jsonSchemaVersion="firestore/documentSnapshot/1.0",bn._jsonSchema={type:_t("string",bn._jsonSchemaVersion),bundleSource:_t("string","DocumentSnapshot"),bundleName:_t("string"),bundle:_t("string")};class os extends bn{data(t={}){return super.data(t)}}class _r{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new es(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new os(this._firestore,this._userDataWriter,r.key,r,new es(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new q(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new os(s._firestore,s._userDataWriter,u.doc.key,u.doc,new es(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new os(s._firestore,s._userDataWriter,u.doc.key,u.doc,new es(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,I=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),I=a.indexOf(u.doc.key)),{type:Up(u.type),doc:h,oldIndex:d,newIndex:I}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=_r._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ki.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Up(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:n})}}/**
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
 */_r._jsonSchemaVersion="firestore/querySnapshot/1.0",_r._jsonSchema={type:_t("string",_r._jsonSchemaVersion),bundleSource:_t("string","QuerySnapshot"),bundleName:_t("string"),bundle:_t("string")};function Bp(n,t){const e=uc(n.firestore,eu),r=bp(n),s=Lp(n.converter,t),o=kp(n.firestore);return jp(e,[xp(o,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,pe.exists(!1))]).then(()=>r)}function jp(n,t){const e=Rp(n);return vp(e,t)}(function(t,e=!0){Gd(Od),ke(new _e("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new eu(new Qd(r.getProvider("auth-internal")),new Xd(a,r.getProvider("app-check-internal")),pm(a,s),a);return o={useFetchStreams:e,...o},u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),ue(Il,Al,t),ue(Il,Al,"esm2020")})();var $p="firebase",qp="12.8.0";/**
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
 */ue($p,qp,"app");const uu="@firebase/installations",go="0.6.19";/**
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
 */const hu=1e4,fu=`w:${go}`,du="FIS_v2",Hp="https://firebaseinstallations.googleapis.com/v1",zp=60*60*1e3,Gp="installations",Kp="Installations";/**
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
 */const Wp={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},sn=new Cs(Gp,Kp,Wp);function mu(n){return n instanceof Me&&n.code.includes("request-failed")}/**
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
 */function gu({projectId:n}){return`${Hp}/projects/${n}/installations`}function pu(n){return{token:n.token,requestStatus:2,expiresIn:Jp(n.expiresIn),creationTime:Date.now()}}async function yu(n,t){const r=(await t.json()).error;return sn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function _u({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Qp(n,{refreshToken:t}){const e=_u(n);return e.append("Authorization",Yp(t)),e}async function Eu(n){const t=await n();return t.status>=500&&t.status<600?n():t}function Jp(n){return Number(n.replace("s","000"))}function Yp(n){return`${du} ${n}`}/**
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
 */async function Xp({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=gu(n),s=_u(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:du,appId:n.appId,sdkVersion:fu},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await Eu(()=>fetch(r,u));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:pu(d.authToken)}}else throw await yu("Create Installation",h)}/**
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
 */function vu(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function Zp(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ty=/^[cdef][\w-]{21}$/,xi="";function ey(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=ny(n);return ty.test(e)?e:xi}catch{return xi}}function ny(n){return Zp(n).substr(0,22)}/**
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
 */function Ls(n){return`${n.appName}!${n.appId}`}/**
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
 */const Tu=new Map;function wu(n,t){const e=Ls(n);Iu(e,t),ry(e,t)}function Iu(n,t){const e=Tu.get(n);if(e)for(const r of e)r(t)}function ry(n,t){const e=sy();e&&e.postMessage({key:n,fid:t}),iy()}let Ye=null;function sy(){return!Ye&&"BroadcastChannel"in self&&(Ye=new BroadcastChannel("[Firebase] FID Change"),Ye.onmessage=n=>{Iu(n.data.key,n.data.fid)}),Ye}function iy(){Tu.size===0&&Ye&&(Ye.close(),Ye=null)}/**
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
 */const oy="firebase-installations-database",ay=1,on="firebase-installations-store";let hi=null;function po(){return hi||(hi=Jl(oy,ay,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(on)}}})),hi}async function Is(n,t){const e=Ls(n),s=(await po()).transaction(on,"readwrite"),o=s.objectStore(on),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&wu(n,t.fid),t}async function Au(n){const t=Ls(n),r=(await po()).transaction(on,"readwrite");await r.objectStore(on).delete(t),await r.done}async function Us(n,t){const e=Ls(n),s=(await po()).transaction(on,"readwrite"),o=s.objectStore(on),a=await o.get(e),u=t(a);return u===void 0?await o.delete(e):await o.put(u,e),await s.done,u&&(!a||a.fid!==u.fid)&&wu(n,u.fid),u}/**
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
 */async function yo(n){let t;const e=await Us(n.appConfig,r=>{const s=ly(r),o=cy(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===xi?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function ly(n){const t=n||{fid:ey(),registrationStatus:0};return bu(t)}function cy(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(sn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=uy(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:hy(n)}:{installationEntry:t}}async function uy(n,t){try{const e=await Xp(n,t);return Is(n.appConfig,e)}catch(e){throw mu(e)&&e.customData.serverCode===409?await Au(n.appConfig):await Is(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function hy(n){let t=await bl(n.appConfig);for(;t.registrationStatus===1;)await vu(100),t=await bl(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await yo(n);return r||e}return t}function bl(n){return Us(n,t=>{if(!t)throw sn.create("installation-not-found");return bu(t)})}function bu(n){return fy(n)?{fid:n.fid,registrationStatus:0}:n}function fy(n){return n.registrationStatus===1&&n.registrationTime+hu<Date.now()}/**
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
 */async function dy({appConfig:n,heartbeatServiceProvider:t},e){const r=my(n,e),s=Qp(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:fu,appId:n.appId}},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await Eu(()=>fetch(r,u));if(h.ok){const d=await h.json();return pu(d)}else throw await yu("Generate Auth Token",h)}function my(n,{fid:t}){return`${gu(n)}/${t}/authTokens:generate`}/**
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
 */async function _o(n,t=!1){let e;const r=await Us(n.appConfig,o=>{if(!Su(o))throw sn.create("not-registered");const a=o.authToken;if(!t&&yy(a))return o;if(a.requestStatus===1)return e=gy(n,t),o;{if(!navigator.onLine)throw sn.create("app-offline");const u=Ey(o);return e=py(n,u),u}});return e?await e:r.authToken}async function gy(n,t){let e=await Sl(n.appConfig);for(;e.authToken.requestStatus===1;)await vu(100),e=await Sl(n.appConfig);const r=e.authToken;return r.requestStatus===0?_o(n,t):r}function Sl(n){return Us(n,t=>{if(!Su(t))throw sn.create("not-registered");const e=t.authToken;return vy(e)?{...t,authToken:{requestStatus:0}}:t})}async function py(n,t){try{const e=await dy(n,t),r={...t,authToken:e};return await Is(n.appConfig,r),e}catch(e){if(mu(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Au(n.appConfig);else{const r={...t,authToken:{requestStatus:0}};await Is(n.appConfig,r)}throw e}}function Su(n){return n!==void 0&&n.registrationStatus===2}function yy(n){return n.requestStatus===2&&!_y(n)}function _y(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+zp}function Ey(n){const t={requestStatus:1,requestTime:Date.now()};return{...n,authToken:t}}function vy(n){return n.requestStatus===1&&n.requestTime+hu<Date.now()}/**
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
 */async function Ty(n){const t=n,{installationEntry:e,registrationPromise:r}=await yo(t);return r?r.catch(console.error):_o(t).catch(console.error),e.fid}/**
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
 */async function wy(n,t=!1){const e=n;return await Iy(e),(await _o(e,t)).token}async function Iy(n){const{registrationPromise:t}=await yo(n);t&&await t}/**
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
 */function Ay(n){if(!n||!n.options)throw fi("App Configuration");if(!n.name)throw fi("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw fi(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function fi(n){return sn.create("missing-app-config-values",{valueName:n})}/**
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
 */const Ru="installations",by="installations-internal",Sy=n=>{const t=n.getProvider("app").getImmediate(),e=Ay(t),r=Rr(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ry=n=>{const t=n.getProvider("app").getImmediate(),e=Rr(t,Ru).getImmediate();return{getId:()=>Ty(e),getToken:s=>wy(e,s)}};function Cy(){ke(new _e(Ru,Sy,"PUBLIC")),ke(new _e(by,Ry,"PRIVATE"))}Cy();ue(uu,go);ue(uu,go,"esm2020");/**
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
 */const As="analytics",Py="firebase_id",Vy="origin",Dy=60*1e3,ky="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Eo="https://www.googletagmanager.com/gtag/js";/**
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
 */const jt=new qi("@firebase/analytics");/**
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
 */const xy={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Wt=new Cs("analytics","Analytics",xy);/**
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
 */function Ny(n){if(!n.startsWith(Eo)){const t=Wt.create("invalid-gtag-resource",{gtagURL:n});return jt.warn(t.message),""}return n}function Cu(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Oy(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Fy(n,t){const e=Oy("firebase-js-sdk-policy",{createScriptURL:Ny}),r=document.createElement("script"),s=`${Eo}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function My(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Ly(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await Cu(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(u){jt.error(u)}n("config",s,o)}async function Uy(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const u=await Cu(e);for(const h of a){const d=u.find(T=>T.measurementId===h),I=d&&t[d.appId];if(I)o.push(I);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){jt.error(o)}}function By(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[u,h]=a;await Uy(n,t,e,u,h)}else if(o==="config"){const[u,h]=a;await Ly(n,t,e,r,u,h)}else if(o==="consent"){const[u,h]=a;n("consent",u,h)}else if(o==="get"){const[u,h,d]=a;n("get",u,h,d)}else if(o==="set"){const[u]=a;n("set",u)}else n(o,...a)}catch(u){jt.error(u)}}return s}function jy(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=By(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function $y(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Eo)&&e.src.includes(n))return e;return null}/**
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
 */const qy=30,Hy=1e3;class zy{constructor(t={},e=Hy){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Pu=new zy;function Gy(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Ky(n){var a;const{appId:t,apiKey:e}=n,r={method:"GET",headers:Gy(e)},s=ky.replace("{app-id}",t),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let u="";try{const h=await o.json();(a=h.error)!=null&&a.message&&(u=h.error.message)}catch{}throw Wt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:u})}return o.json()}async function Wy(n,t=Pu,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw Wt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Wt.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new Yy;return setTimeout(async()=>{u.abort()},Dy),Vu({appId:r,apiKey:s,measurementId:o},a,u,t)}async function Vu(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=Pu){var u;const{appId:o,measurementId:a}=n;try{await Qy(r,t)}catch(h){if(a)return jt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:a};throw h}try{const h=await Ky(n);return s.deleteThrottleMetadata(o),h}catch(h){const d=h;if(!Jy(d)){if(s.deleteThrottleMetadata(o),a)return jt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:a};throw h}const I=Number((u=d==null?void 0:d.customData)==null?void 0:u.httpStatus)===503?Ca(e,s.intervalMillis,qy):Ca(e,s.intervalMillis),T={throttleEndTimeMillis:Date.now()+I,backoffCount:e+1};return s.setThrottleMetadata(o,T),jt.debug(`Calling attemptFetch again in ${I} millis`),Vu(n,T,r,s)}}function Qy(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(Wt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Jy(n){if(!(n instanceof Me)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class Yy{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Xy(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a={...r,send_to:o};n("event",e,a)}}async function Zy(n,t,e,r){if(r&&r.global){const s={};for(const o of Object.keys(e))s[`user_properties.${o}`]=e[o];return n("set",s),Promise.resolve()}else{const s=await t;n("config",s,{update:!0,user_properties:e})}}/**
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
 */async function t_(){if(Gl())try{await Kl()}catch(n){return jt.warn(Wt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return jt.warn(Wt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function e_(n,t,e,r,s,o,a){const u=Wy(n);u.then(S=>{e[S.measurementId]=S.appId,n.options.measurementId&&S.measurementId!==n.options.measurementId&&jt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>jt.error(S)),t.push(u);const h=t_().then(S=>{if(S)return r.getId()}),[d,I]=await Promise.all([u,h]);$y(o)||Fy(o,d.measurementId),s("js",new Date);const T=(a==null?void 0:a.config)??{};return T[Vy]="firebase",T.update=!0,I!=null&&(T[Py]=I),s("config",d.measurementId,T),d.measurementId}/**
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
 */class n_{constructor(t){this.app=t}_delete(){return delete Sn[this.app.options.appId],Promise.resolve()}}let Sn={},Rl=[];const Cl={};let di="dataLayer",r_="gtag",Pl,vo,Vl=!1;function s_(){const n=[];if(Rf()&&n.push("This is a browser extension environment."),Pf()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=Wt.create("invalid-analytics-context",{errorInfo:t});jt.warn(e.message)}}function i_(n,t,e){s_();const r=n.options.appId;if(!r)throw Wt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)jt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Wt.create("no-api-key");if(Sn[r]!=null)throw Wt.create("already-exists",{id:r});if(!Vl){My(di);const{wrappedGtag:o,gtagCore:a}=jy(Sn,Rl,Cl,di,r_);vo=o,Pl=a,Vl=!0}return Sn[r]=e_(n,Rl,Cl,t,Pl,di,e),new n_(n)}function o_(n=Xl()){n=De(n);const t=Rr(n,As);return t.isInitialized()?t.getImmediate():a_(n)}function a_(n,t={}){const e=Rr(n,As);if(e.isInitialized()){const s=e.getImmediate();if(Er(t,e.getOptions()))return s;throw Wt.create("already-initialized")}return e.initialize({options:t})}function l_(n,t,e){n=De(n),Zy(vo,Sn[n.app.options.appId],t,e).catch(r=>jt.error(r))}function c_(n,t,e,r){n=De(n),Xy(vo,Sn[n.app.options.appId],t,e,r).catch(s=>jt.error(s))}const Dl="@firebase/analytics",kl="0.10.19";function u_(){ke(new _e(As,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return i_(r,s,e)},"PUBLIC")),ke(new _e("analytics-internal",n,"PRIVATE")),ue(Dl,kl),ue(Dl,kl,"esm2020");function n(t){try{const e=t.getProvider(As).getImmediate();return{logEvent:(r,s,o)=>c_(e,r,s,o),setUserProperties:(r,s)=>l_(e,r,s)}}catch(e){throw Wt.create("interop-component-reg-failed",{reason:e})}}}u_();const h_={apiKey:"AIzaSyAUUYVVGM_N9qR4mpJpJ0gGVsHpp7aJ2ck",authDomain:"newportfol.firebaseapp.com",projectId:"newportfol",storageBucket:"newportfol.firebasestorage.app",messagingSenderId:"898829658734",appId:"1:898829658734:web:75ed0262511f055641947f",measurementId:"G-1YQTHX6B0P"},Du=Yl(h_),f_=Sp(Du);typeof window<"u"&&o_(Du);class Nr{constructor(t=0,e="Network Error"){this.status=t,this.text=e}}const d_=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,t)=>Promise.resolve(localStorage.setItem(n,t)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},Vt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:d_()},To=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},m_=(n,t="https://api.emailjs.com")=>{if(!n)return;const e=To(n);Vt.publicKey=e.publicKey,Vt.blockHeadless=e.blockHeadless,Vt.storageProvider=e.storageProvider,Vt.blockList=e.blockList,Vt.limitRate=e.limitRate,Vt.origin=e.origin||t},ku=async(n,t,e={})=>{const r=await fetch(Vt.origin+n,{method:"POST",headers:e,body:t}),s=await r.text(),o=new Nr(r.status,s);if(r.ok)return o;throw o},xu=(n,t,e)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!e||typeof e!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},g_=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Nu=n=>n.webdriver||!n.languages||n.languages.length===0,Ou=()=>new Nr(451,"Unavailable For Headless Browser"),p_=(n,t)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},y_=n=>{var t;return!((t=n.list)!=null&&t.length)||!n.watchVariable},__=(n,t)=>n instanceof FormData?n.get(t):n[t],Fu=(n,t)=>{if(y_(n))return!1;p_(n.list,n.watchVariable);const e=__(t,n.watchVariable);return typeof e!="string"?!1:n.list.includes(e)},Mu=()=>new Nr(403,"Forbidden"),E_=(n,t)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},v_=async(n,t,e)=>{const r=Number(await e.get(n)||0);return t-Date.now()+r},Lu=async(n,t,e)=>{if(!t.throttle||!e)return!1;E_(t.throttle,t.id);const r=t.id||n;return await v_(r,t.throttle,e)>0?!0:(await e.set(r,Date.now().toString()),!1)},Uu=()=>new Nr(429,"Too Many Requests"),T_=async(n,t,e,r)=>{const s=To(r),o=s.publicKey||Vt.publicKey,a=s.blockHeadless||Vt.blockHeadless,u=s.storageProvider||Vt.storageProvider,h={...Vt.blockList,...s.blockList},d={...Vt.limitRate,...s.limitRate};return a&&Nu(navigator)?Promise.reject(Ou()):(xu(o,n,t),g_(e),e&&Fu(h,e)?Promise.reject(Mu()):await Lu(location.pathname,d,u)?Promise.reject(Uu()):ku("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:o,service_id:n,template_id:t,template_params:e}),{"Content-type":"application/json"}))},w_=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},I_=n=>typeof n=="string"?document.querySelector(n):n,A_=async(n,t,e,r)=>{const s=To(r),o=s.publicKey||Vt.publicKey,a=s.blockHeadless||Vt.blockHeadless,u=Vt.storageProvider||s.storageProvider,h={...Vt.blockList,...s.blockList},d={...Vt.limitRate,...s.limitRate};if(a&&Nu(navigator))return Promise.reject(Ou());const I=I_(e);xu(o,n,t),w_(I);const T=new FormData(I);return Fu(h,T)?Promise.reject(Mu()):await Lu(location.pathname,d,u)?Promise.reject(Uu()):(T.append("lib_version","4.4.1"),T.append("service_id",n),T.append("template_id",t),T.append("user_id",o),ku("/api/v1.0/email/send-form",T))},b_={init:m_,send:T_,sendForm:A_,EmailJSResponseStatus:Nr};xl.registerPlugin(Eh);function V_(){var I,T,S,P,F;const n=Qt.useRef(null),[t,e]=Qt.useState(!1),r=mh("gray.100","whiteAlpha.100"),s=Oh(),{register:o,handleSubmit:a,reset:u,formState:{errors:h}}=af();gh(()=>{xl.from(".contact-content",{scrollTrigger:{trigger:n.current,start:"top 75%"},y:50,opacity:0,duration:1,ease:"power2.out"})},{scope:n});const d=async M=>{e(!0);try{await Bp(Ap(f_,"todos"),{fname:M.firstName,lname:M.lastName,email:M.email,mobile:M.mobile,message:M.message,date:new Date().toLocaleString()});const L="service_xf7z91o",H="template_uxhv3uq",U="user_lOVyWwC9xWmzokD0pkxNB",X={to_name:M.firstName,to_email:M.email,from_name:"Atif Moin",message:M.message};await b_.send(L,H,X,U),s({title:"Message & Auto-Reply Sent!",description:`Thanks ${M.firstName}, check your email for a confirmation.`,status:"success",duration:5e3,isClosable:!0,position:"bottom"}),u()}catch(L){console.error("Submission error: ",L),s({title:"Submission Error",description:"Firestore saved, but email failed. Check your EmailJS keys.",status:"warning",duration:5e3,isClosable:!0})}finally{e(!1)}};return W.jsx(ph,{ref:n,py:0,minH:"100vh",h:"auto",p:"5rem",display:"flex",alignItems:"center",id:"contact",children:W.jsx(yh,{maxW:"container.md",className:"contact-content",position:"relative",children:W.jsxs(ha,{spacing:8,align:"center",textAlign:"center",children:[W.jsx(vh,{as:"h2",fontSize:["4xl","5xl"],children:"Let's Work Together"}),W.jsx(ei,{fontSize:"xl",color:"gray.500",maxW:"600px",children:"Have a project in mind? I'm always open to discussing new ideas and opportunities."}),W.jsxs(ha,{w:"full",spacing:4,as:"form",onSubmit:a(d),children:[W.jsxs(wh,{columns:[1,2],spacing:4,w:"full",children:[W.jsxs(yn,{isInvalid:!!h.firstName,children:[W.jsx(wn,{placeholder:"First Name",size:"lg",bg:r,border:"none",_focus:{ring:2,ringColor:"cyan.400"},...o("firstName",{required:"First name is required"})}),W.jsx(_n,{children:(I=h.firstName)==null?void 0:I.message})]}),W.jsxs(yn,{isInvalid:!!h.lastName,children:[W.jsx(wn,{placeholder:"Last Name",size:"lg",bg:r,border:"none",_focus:{ring:2,ringColor:"cyan.400"},...o("lastName",{required:"Last name is required"})}),W.jsx(_n,{children:(T=h.lastName)==null?void 0:T.message})]})]}),W.jsxs(yn,{isInvalid:!!h.email,children:[W.jsx(wn,{placeholder:"Email",size:"lg",bg:r,border:"none",_focus:{ring:2,ringColor:"cyan.400"},...o("email",{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}),W.jsx(_n,{children:(S=h.email)==null?void 0:S.message})]}),W.jsxs(yn,{isInvalid:!!h.mobile,children:[W.jsx(wn,{placeholder:"Mobile Number",size:"lg",bg:r,border:"none",_focus:{ring:2,ringColor:"cyan.400"},...o("mobile",{required:"Mobile number is required"})}),W.jsx(_n,{children:(P=h.mobile)==null?void 0:P.message})]}),W.jsxs(yn,{isInvalid:!!h.message,children:[W.jsx(Ol,{placeholder:"Message",size:"lg",rows:6,bg:r,border:"none",_focus:{ring:2,ringColor:"cyan.400"},...o("message",{required:"Message is required"})}),W.jsx(_n,{children:(F=h.message)==null?void 0:F.message})]}),W.jsx(_h,{size:"lg",colorScheme:"cyan",w:"full",fontSize:"lg",h:14,type:"submit",isLoading:t,loadingText:"Sending...",children:"Send Message"})]}),W.jsxs(ei,{pt:10,color:"gray.500",children:["Or email me directly at"," ",W.jsx(ei,{as:"span",color:"cyan.400",fontWeight:"bold",children:Th.contact.email})]})]})})})}export{V_ as default};
