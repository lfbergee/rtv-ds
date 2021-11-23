var ct=Object.defineProperty,dt=Object.defineProperties;var ft=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var Le=(e,s,t)=>s in e?ct(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,ie=(e,s)=>{for(var t in s||(s={}))Ce.call(s,t)&&Le(e,t,s[t]);if(se)for(var t of se(s))Ie.call(s,t)&&Le(e,t,s[t]);return e},be=(e,s)=>dt(e,ft(s));var Me=(e,s)=>{var t={};for(var n in e)Ce.call(e,n)&&s.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&se)for(var n of se(e))s.indexOf(n)<0&&Ie.call(e,n)&&(t[n]=e[n]);return t};import{r as q,c as F}from"./vendor.54e71f68.js";import{F as gt,R as ht}from"./FieldSet.be91de0e.js";import{a as Ue}from"./index.882a99bd.js";var ne=e=>e.type==="checkbox",Y=e=>e instanceof Date,E=e=>e==null;const Be=e=>typeof e=="object";var R=e=>!E(e)&&!Array.isArray(e)&&Be(e)&&!Y(e),yt=e=>e.substring(0,e.search(/.\d/))||e,bt=(e,s)=>[...e].some(t=>yt(s)===t),J=e=>e.filter(Boolean),k=e=>e===void 0,g=(e,s,t)=>{if(R(e)&&s){const n=J(s.split(/[,[\].]+?/)).reduce((l,o)=>E(l)?l:l[o],e);return k(n)||n===e?k(e[s])?t:e[s]:n}};const mt={BLUR:"blur",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},P={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};var me=(e,s)=>{const t=Object.assign({},e);return delete t[s],t};q.exports.createContext(null);var vt=(e,s,t,n=!0)=>{function l(f){return()=>{if(f in e)return s[f]!==I.all&&(s[f]=!n||I.all),t&&(t[f]=!0),e[f]}}const o={};for(const f in e)Object.defineProperty(o,f,{get:l(f)});return o},N=e=>R(e)&&!Object.keys(e).length,xt=(e,s,t)=>{const n=me(e,"name");return N(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(l=>s[l]===(!t||I.all))},ve=e=>Array.isArray(e)?e:[e];function Ft(e){const s=q.exports.useRef(e);s.current=e,q.exports.useEffect(()=>{const t=l=>{l&&l.unsubscribe()},n=!e.disabled&&s.current.subject.subscribe({next:s.current.callback});return()=>t(n)},[e.disabled])}var U=e=>typeof e=="string",Ot=(e,s,t,n)=>{const l=Array.isArray(e);return U(e)?(n&&s.watch.add(e),g(t,e)):l?e.map(o=>(n&&s.watch.add(o),g(t,o))):(n&&(s.watchAll=!0),t)},xe=e=>typeof e=="function",_t=(e,s,t,n,l)=>s?Object.assign(Object.assign({},t[e]),{types:Object.assign(Object.assign({},t[e]&&t[e].types?t[e].types:{}),{[n]:l||!0})}):{},Fe=e=>/^\w*$/.test(e),Pe=e=>J(e.replace(/["|']|\]/g,"").split(/\.|\[/));function p(e,s,t){let n=-1;const l=Fe(s)?[s]:Pe(s),o=l.length,f=o-1;for(;++n<o;){const b=l[n];let V=t;if(n!==f){const A=e[b];V=R(A)||Array.isArray(A)?A:isNaN(+l[n+1])?{}:[]}e[b]=V,e=e[b]}return e}const Oe=(e,s,t)=>{for(const n of t||Object.keys(e)){const l=g(e,n);if(l){const o=l._f,f=me(l,"_f");if(o&&s(o.name)){if(o.ref.focus&&k(o.ref.focus()))break;if(o.refs){o.refs[0].focus();break}}else R(f)&&Oe(f,s)}}};var qe=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));function Q(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(t||R(e)){s=t?[]:{};for(const n in e){if(xe(e[n])){s=e;break}s[n]=Q(e[n])}}else return e;return s}function _e(){let e=[];return{get observers(){return e},next:l=>{for(const o of e)o.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(o=>o!==l)}}),unsubscribe:()=>{e=[]}}}var Z=e=>E(e)||!Be(e);function X(e,s){if(Z(e)||Z(s))return e===s;if(Y(e)&&Y(s))return e.getTime()===s.getTime();const t=Object.keys(e),n=Object.keys(s);if(t.length!==n.length)return!1;for(const l of t){const o=e[l];if(!n.includes(l))return!1;if(l!=="ref"){const f=s[l];if(Y(o)&&Y(f)||R(o)&&R(f)||Array.isArray(o)&&Array.isArray(f)?!X(o,f):o!==f)return!1}}return!0}var He=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),$=e=>typeof e=="boolean",pe=e=>e.type==="file",Ve=e=>e instanceof HTMLElement,We=e=>e.type==="select-multiple",we=e=>e.type==="radio",pt=e=>we(e)||ne(e),Ye=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined",ke=e=>Ve(e)&&document.contains(e);function Vt(e,s){const t=s.slice(0,-1).length;let n=0;for(;n<t;)e=k(e)?n++:e[s[n++]];return e}function S(e,s){const t=Fe(s)?[s]:Pe(s),n=t.length==1?e:Vt(e,t),l=t[t.length-1];let o;n&&delete n[l];for(let f=0;f<t.slice(0,-1).length;f++){let b=-1,V;const A=t.slice(0,-(f+1)),L=A.length-1;for(f>0&&(o=e);++b<A.length;){const O=A[b];V=V?V[O]:e[O],L===b&&(R(V)&&N(V)||Array.isArray(V)&&!V.filter(y=>R(y)&&!N(y)||$(y)).length)&&(o?delete o[O]:delete e[O]),o=V}}return e}const Xe={value:!1,isValid:!1},$e={value:!0,isValid:!0};var Ke=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||e[0].value===""?$e:{value:e[0].value,isValid:!0}:$e:Xe}return Xe},Ge=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:n})=>k(e)?e:s?e===""?NaN:+e:t?new Date(e):n?n(e):e;const ze={isValid:!1,value:null};var Je=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,ze):ze;function Se(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return pe(s)?s.files:we(s)?Je(e.refs).value:We(s)?[...s.selectedOptions].map(({value:t})=>t):ne(s)?Ke(e.refs).value:Ge(k(s.value)?e.ref.value:s.value,e)}var wt=(e,s,t,n)=>{const l={};for(const o of e){const f=g(s,o);f&&p(l,o,f._f)}return{criteriaMode:t,names:[...e],fields:l,shouldUseNativeValidation:n}},kt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Qe(e,s,t){const n=g(e,t);if(n||Fe(t))return{error:n,name:t};const l=t.split(".");for(;l.length;){const o=l.join("."),f=g(s,o),b=g(e,o);if(f&&!Array.isArray(f)&&t!==o)return{name:t};if(b&&b.type)return{name:o,error:b};l.pop()}return{name:t}}function Ze(e,s){if(Z(e)||Z(s))return s;for(const t in s){const n=e[t],l=s[t];try{e[t]=R(n)&&R(l)||Array.isArray(n)&&Array.isArray(l)?Ze(n,l):l}catch{}}return e}function Ae(e,s,t,n,l){let o=-1;for(;++o<e.length;){for(const f in e[o])Array.isArray(e[o][f])?(!t[o]&&(t[o]={}),t[o][f]=[],Ae(e[o][f],g(s[o]||{},f,[]),t[o][f],t[o],f)):!E(s)&&X(g(s[o]||{},f),e[o][f])?p(t[o]||{},f):t[o]=Object.assign(Object.assign({},t[o]),{[f]:!0});n&&!t.length&&delete n[l]}return t}var St=(e,s,t)=>Ze(Ae(e,s,t.slice(0,e.length)),Ae(s,e,t.slice(0,e.length))),At=(e,s,t,n,l)=>l.isOnAll?!1:!t&&l.isOnTouch?!(s||e):(t?n.isOnBlur:l.isOnBlur)?!e:(t?n.isOnChange:l.isOnChange)?e:!0,je=(e,s)=>!J(g(e,s,[])).length&&S(e,s),ae=e=>U(e)||q.exports.isValidElement(e),et=e=>e instanceof RegExp;function tt(e,s,t="validate"){if(ae(e)||Array.isArray(e)&&e.every(ae)||$(e)&&!e)return{type:t,message:ae(e)?e:"",ref:s}}var K=e=>R(e)&&!et(e)?e:{value:e,message:""},rt=async(e,s,t,n)=>{const{ref:l,refs:o,required:f,maxLength:b,minLength:V,min:A,max:L,pattern:O,validate:y,name:T,valueAsNumber:le,mount:ee,disabled:oe}=e._f;if(!ee||oe)return{};const j=o?o[0]:l,B=m=>{n&&j.reportValidity&&(j.setCustomValidity($(m)?"":m||" "),j.reportValidity())},w={},G=we(l),z=ne(l),te=G||z,H=(le||pe(l))&&!l.value||s===""||Array.isArray(s)&&!s.length,C=_t.bind(null,T,t,w),re=(m,v,_,D=P.maxLength,M=P.minLength)=>{const W=m?v:_;w[T]=Object.assign({type:m?D:M,message:W,ref:l},C(m?D:M,W))};if(f&&(!te&&(H||E(s))||$(s)&&!s||z&&!Ke(o).isValid||G&&!Je(o).isValid)){const{value:m,message:v}=ae(f)?{value:!!f,message:f}:K(f);if(m&&(w[T]=Object.assign({type:P.required,message:v,ref:j},C(P.required,v)),!t))return B(v),w}if(!H&&(!E(A)||!E(L))){let m,v;const _=K(L),D=K(A);if(isNaN(s)){const M=l.valueAsDate||new Date(s);U(_.value)&&(m=M>new Date(_.value)),U(D.value)&&(v=M<new Date(D.value))}else{const M=l.valueAsNumber||parseFloat(s);E(_.value)||(m=M>_.value),E(D.value)||(v=M<D.value)}if((m||v)&&(re(!!m,_.message,D.message,P.max,P.min),!t))return B(w[T].message),w}if((b||V)&&!H&&U(s)){const m=K(b),v=K(V),_=!E(m.value)&&s.length>m.value,D=!E(v.value)&&s.length<v.value;if((_||D)&&(re(_,m.message,v.message),!t))return B(w[T].message),w}if(O&&!H&&U(s)){const{value:m,message:v}=K(O);if(et(m)&&!s.match(m)&&(w[T]=Object.assign({type:P.pattern,message:v,ref:l},C(P.pattern,v)),!t))return B(v),w}if(y){if(xe(y)){const m=await y(s),v=tt(m,j);if(v&&(w[T]=Object.assign(Object.assign({},v),C(P.validate,v.message)),!t))return B(v.message),w}else if(R(y)){let m={};for(const v in y){if(!N(m)&&!t)break;const _=tt(await y[v](s),j,v);_&&(m=Object.assign(Object.assign({},_),C(v,_.message)),B(_.message),t&&(w[T]=m))}if(!N(m)&&(w[T]=Object.assign({ref:j},m),!t))return w}}return B(!0),w};const jt={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0},Dt=typeof window=="undefined";function Et(e={}){let s=Object.assign(Object.assign({},jt),e),t={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},n={},l=s.defaultValues||{},o=s.shouldUnregister?{}:Q(l),f={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},V,A=0,L={};const O={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},y={watch:_e(),array:_e(),state:_e()},T=He(s.mode),le=He(s.reValidateMode),ee=s.criteriaMode===I.all,oe=(r,i)=>(...a)=>{clearTimeout(A),A=window.setTimeout(()=>r(...a),i)},j=async r=>{let i=!1;return O.isValid&&(i=s.resolver?N((await C()).errors):await m(n,!0),!r&&i!==t.isValid&&(t.isValid=i,y.state.next({isValid:i}))),i},B=(r,i,a,d=[],c=!0,u=!0)=>{if(f.action=!0,u&&g(n,r)){const h=i(g(n,r),a.argA,a.argB);c&&p(n,r,h)}if(Array.isArray(g(t.errors,r))){const h=i(g(t.errors,r),a.argA,a.argB);c&&p(t.errors,r,h),je(t.errors,r)}if(O.touchedFields&&g(t.touchedFields,r)){const h=i(g(t.touchedFields,r),a.argA,a.argB);c&&p(t.touchedFields,r,h),je(t.touchedFields,r)}(O.dirtyFields||O.isDirty)&&te(r,d),y.state.next({isDirty:_(r,d),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})},w=(r,i)=>(p(t.errors,r,i),y.state.next({errors:t.errors})),G=(r,i,a)=>{const d=g(n,r);if(d){const c=g(o,r,g(l,r));k(c)||a&&a.defaultChecked||i?p(o,r,i?c:Se(d._f)):W(r,c)}f.mount&&j()},z=(r,i,a,d=!0)=>{let c=!1;const u={name:r},h=g(t.touchedFields,r);if(O.isDirty){const x=t.isDirty;t.isDirty=u.isDirty=_(),c=x!==u.isDirty}if(O.dirtyFields&&!a){const x=g(t.dirtyFields,r);X(g(l,r),i)?S(t.dirtyFields,r):p(t.dirtyFields,r,!0),u.dirtyFields=t.dirtyFields,c=c||x!==g(t.dirtyFields,r)}return a&&!h&&(p(t.touchedFields,r,a),u.touchedFields=t.touchedFields,c=c||O.touchedFields&&h!==a),c&&d&&y.state.next(u),c?u:{}},te=(r,i)=>(p(t.dirtyFields,r,St(i,g(l,r,[]),g(t.dirtyFields,r,[]))),je(t.dirtyFields,r)),H=async(r,i,a,d,c)=>{const u=g(t.errors,i),h=O.isValid&&t.isValid!==a;if(e.delayError&&d?(V=V||oe(w,e.delayError),V(i,d)):(clearTimeout(A),d?p(t.errors,i,d):S(t.errors,i)),((d?!X(u,d):u)||!N(c)||h)&&!r){const x=Object.assign(Object.assign(Object.assign({},c),h?{isValid:a}:{}),{errors:t.errors,name:i});t=Object.assign(Object.assign({},t),x),y.state.next(x)}L[i]--,O.isValidating&&!L[i]&&(y.state.next({isValidating:!1}),L={})},C=async r=>s.resolver?await s.resolver(Object.assign({},o),s.context,wt(r||b.mount,n,s.criteriaMode,s.shouldUseNativeValidation)):{},re=async r=>{const{errors:i}=await C();if(r)for(const a of r){const d=g(i,a);d?p(t.errors,a,d):S(t.errors,a)}else t.errors=i;return i},m=async(r,i,a={valid:!0})=>{for(const d in r){const c=r[d];if(c){const u=c._f,h=me(c,"_f");if(u){const x=await rt(c,g(o,u.name),ee,s.shouldUseNativeValidation);if(x[u.name]&&(a.valid=!1,i))break;i||(x[u.name]?p(t.errors,u.name,x[u.name]):S(t.errors,u.name))}h&&await m(h,i,a)}}return a.valid},v=()=>{for(const r of b.unMount){const i=g(n,r);i&&(i._f.refs?i._f.refs.every(a=>!ke(a)):!ke(i._f.ref))&&de(r)}b.unMount=new Set},_=(r,i)=>(r&&i&&p(o,r,i),!X(Re(),l)),D=(r,i,a)=>{const d=Object.assign({},f.mount?o:k(i)?l:U(r)?{[r]:i}:i);return Ot(r,b,d,a)},M=r=>g(f.mount?o:l,r,e.shouldUnregister?g(l,r,[]):[]),W=(r,i,a={})=>{const d=g(n,r);let c=i;if(d){const u=d._f;u&&(p(o,r,Ge(i,u)),c=Ye&&Ve(u.ref)&&E(i)?"":i,pe(u.ref)&&!U(c)?u.ref.files=c:We(u.ref)?[...u.ref.options].forEach(h=>h.selected=c.includes(h.value)):u.refs?ne(u.ref)?u.refs.length>1?u.refs.forEach(h=>h.checked=Array.isArray(c)?!!c.find(x=>x===h.value):c===h.value):u.refs[0].checked=!!c:u.refs.forEach(h=>h.checked=h.value===c):u.ref.value=c)}(a.shouldDirty||a.shouldTouch)&&z(r,c,a.shouldTouch),a.shouldValidate&&ce(r)},De=(r,i,a)=>{for(const d in i){const c=i[d],u=`${r}.${d}`,h=g(n,u);(b.array.has(r)||!Z(c)||h&&!h._f)&&!Y(c)?De(u,c,a):W(u,c,a)}},ue=(r,i,a={})=>{const d=g(n,r),c=b.array.has(r);p(o,r,i),c?(y.array.next({name:r,values:o}),(O.isDirty||O.dirtyFields)&&a.shouldDirty&&(te(r,i),y.state.next({name:r,dirtyFields:t.dirtyFields,isDirty:_(r,i)}))):d&&!d._f&&!E(i)?De(r,i,a):W(r,i,a),qe(r,b)&&y.state.next({}),y.watch.next({name:r})},Ee=async r=>{const i=r.target;let a=i.name;const d=g(n,a);if(d){let c,u;const h=i.type?Se(d._f):i.value,x=r.type===mt.BLUR,ge=!kt(d._f)&&!s.resolver&&!g(t.errors,a)&&!d._f.deps||At(x,g(t.touchedFields,a),t.isSubmitted,le,T),he=qe(a,b,x);x?d._f.onBlur&&d._f.onBlur(r):d._f.onChange&&d._f.onChange(r),p(o,a,h);const ye=z(a,h,x,!1),ot=!N(ye)||he;if(!x&&y.watch.next({name:a,type:r.type}),ge)return ot&&y.state.next(Object.assign({name:a},he?{}:ye));if(!x&&he&&y.state.next({}),L[a]=(L[a],1),O.isValidating&&y.state.next({isValidating:!0}),s.resolver){const{errors:Ne}=await C([a]),ut=Qe(t.errors,n,a),Te=Qe(Ne,n,ut.name||a);c=Te.error,a=Te.name,u=N(Ne)}else c=(await rt(d,g(o,a),ee,s.shouldUseNativeValidation))[a],u=await j(!0);d._f.deps&&ce(d._f.deps),H(!1,a,u,c,ye)}},ce=async(r,i={})=>{let a,d;const c=ve(r);if(y.state.next({isValidating:!0}),s.resolver){const u=await re(k(r)?r:c);a=N(u),d=r?!c.some(h=>g(u,h)):a}else r?(d=(await Promise.all(c.map(async u=>{const h=g(n,u);return await m(h&&h._f?{[u]:h}:h)}))).every(Boolean),!(!d&&!t.isValid)&&j()):d=a=await m(n);return y.state.next(Object.assign(Object.assign(Object.assign({},!U(r)||O.isValid&&a!==t.isValid?{}:{name:r}),s.resolver?{isValid:a}:{}),{errors:t.errors,isValidating:!1})),i.shouldFocus&&!d&&Oe(n,u=>g(t.errors,u),r?c:b.mount),d},Re=r=>{const i=Object.assign(Object.assign({},l),f.mount?o:{});return k(r)?i:U(r)?g(i,r):r.map(a=>g(i,a))},nt=r=>{r?ve(r).forEach(i=>S(t.errors,i)):t.errors={},y.state.next({errors:t.errors,isValid:!0})},at=(r,i,a)=>{const d=(g(n,r,{_f:{}})._f||{}).ref;p(t.errors,r,Object.assign(Object.assign({},i),{ref:d})),y.state.next({name:r,errors:t.errors,isValid:!1}),a&&a.shouldFocus&&d&&d.focus&&d.focus()},lt=(r,i)=>xe(r)?y.watch.subscribe({next:a=>r(D(void 0,i),a)}):D(r,i,!0),de=(r,i={})=>{for(const a of r?ve(r):b.mount)b.mount.delete(a),b.array.delete(a),g(n,a)&&(i.keepValue||(S(n,a),S(o,a)),!i.keepError&&S(t.errors,a),!i.keepDirty&&S(t.dirtyFields,a),!i.keepTouched&&S(t.touchedFields,a),!s.shouldUnregister&&!i.keepDefaultValue&&S(l,a));y.watch.next({}),y.state.next(Object.assign(Object.assign({},t),i.keepDirty?{isDirty:_()}:{})),!i.keepIsValid&&j()},fe=(r,i={})=>{const a=g(n,r);return p(n,r,{_f:Object.assign(Object.assign(Object.assign({},a&&a._f?a._f:{ref:{name:r}}),{name:r,mount:!0}),i)}),b.mount.add(r),!k(i.value)&&!i.disabled&&p(o,r,g(o,r,i.value)),a?$(i.disabled)&&p(o,r,i.disabled?void 0:g(o,r,Se(a._f))):G(r,!0),Dt?{name:r}:Object.assign(Object.assign({name:r},$(i.disabled)?{disabled:i.disabled}:{}),{onChange:Ee,onBlur:Ee,ref:d=>{if(d){fe(r,i);let c=g(n,r);const u=k(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,h=pt(u);if(u===c._f.ref||h&&J(c._f.refs||[]).find(x=>x===u))return;c={_f:h?Object.assign(Object.assign({},c._f),{refs:[...J(c._f.refs||[]).filter(ke),u],ref:{type:u.type,name:r}}):Object.assign(Object.assign({},c._f),{ref:u})},p(n,r,c),(!i||!i.disabled)&&G(r,!1,u)}else{const c=g(n,r,{}),u=s.shouldUnregister||i.shouldUnregister;c._f&&(c._f.mount=!1),u&&!(bt(b.array,r)&&f.action)&&b.unMount.add(r)}}})};return{control:{register:fe,unregister:de,_executeSchema:C,_getWatch:D,_getDirty:_,_updateValid:j,_removeUnmounted:v,_updateFieldArray:B,_getFieldArray:M,_subjects:y,_proxyFormState:O,get _fields(){return n},set _fields(r){n=r},get _formValues(){return o},set _formValues(r){o=r},get _stateFlags(){return f},set _stateFlags(r){f=r},get _defaultValues(){return l},set _defaultValues(r){l=r},get _names(){return b},set _names(r){b=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s=Object.assign(Object.assign({},s),r)}},trigger:ce,register:fe,handleSubmit:(r,i)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let d=!0,c=s.shouldUnregister?Q(o):Object.assign({},o);y.state.next({isSubmitting:!0});try{if(s.resolver){const{errors:u,values:h}=await C();t.errors=u,c=h}else await m(n);N(t.errors)&&Object.keys(t.errors).every(u=>g(c,u))?(y.state.next({errors:{},isSubmitting:!0}),await r(c,a)):(i&&await i(t.errors,a),s.shouldFocusError&&Oe(n,u=>g(t.errors,u),b.mount))}catch(u){throw d=!1,u}finally{t.isSubmitted=!0,y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:N(t.errors)&&d,submitCount:t.submitCount+1,errors:t.errors})}},watch:lt,setValue:ue,getValues:Re,reset:(r,i={})=>{const a=r||l,d=Q(a),c=N(r)?l:d;if(i.keepDefaultValues||(l=a),!i.keepValues){if(Ye)for(const u of b.mount){const h=g(n,u);if(h&&h._f){const x=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;try{Ve(x)&&x.closest("form").reset();break}catch{}}}o=e.shouldUnregister?i.keepDefaultValues?Q(l):{}:d,n={},y.watch.next({values:c}),y.array.next({values:c})}b={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:i.keepDirty?t.isDirty:i.keepDefaultValues?!X(r,l):!1,isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:i.keepDirty?t.dirtyFields:i.keepDefaultValues&&r?Object.entries(r).reduce((u,[h,x])=>Object.assign(Object.assign({},u),{[h]:x!==g(l,h)}),{}):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1}),f.mount=!O.isValid||!!i.keepIsValid,f.watch=!!e.shouldUnregister},resetField:(r,i={})=>{k(i.defaultValue)?ue(r,g(l,r)):(ue(r,i.defaultValue),p(l,r,i.defaultValue)),i.keepTouched||S(t.touchedFields,r),i.keepDirty||(S(t.dirtyFields,r),t.isDirty=i.defaultValue?_(r,g(l,r)):_()),i.keepError||(S(t.errors,r),O.isValid&&j()),y.state.next(Object.assign({},t))},clearErrors:nt,unregister:de,setError:at,setFocus:r=>{const i=g(n,r)._f;(i.ref.focus?i.ref:i.refs[0]).focus()}}}function Rt(e={}){const s=q.exports.useRef(),[t,n]=q.exports.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});s.current?s.current.control._options=e:s.current=Object.assign(Object.assign({},Et(e)),{formState:t});const l=s.current.control;return Ft({subject:l._subjects.state,callback:o=>{xt(o,l._proxyFormState,!0)&&(l._formState=Object.assign(Object.assign({},l._formState),o),n(Object.assign({},l._formState)))}}),q.exports.useEffect(()=>{l._stateFlags.mount||(l._proxyFormState.isValid&&l._updateValid(),l._stateFlags.mount=!0),l._stateFlags.watch&&(l._stateFlags.watch=!1,l._subjects.state.next({})),l._removeUnmounted()}),s.current.formState=vt(t,l._proxyFormState),s.current}const st=["I g\xE5r","I dag","I morgen"],it="fieldName",Nt=()=>{const{register:e,watch:s}=Rt({mode:"onChange",defaultValues:{fieldName:st[1]}}),t=s();return console.log(t),Ue("form",{onSubmit:n=>n.preventDefault(),children:Ue(gt,{legend:"Velg dag",name:it,children:st.map(n=>q.exports.createElement(ht,be(ie({},e(it)),{value:n,label:n,key:n})))})})},Tt={},Ct="wrapper";function It(t){var n=t,{components:e}=n,s=Me(n,["components"]);return F(Ct,be(ie(ie({},Tt),s),{components:e,mdxType:"MDXLayout"}),F("h1",null,"RadioToggle"),F("p",null,"Hvis man setter showLegend til false vil den kun v\xE6re der for screenreaders."),F(Nt,{mdxType:"Example"}),F("pre",null,F("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<FieldSet
  legend="Is The Room the greatest movie ever"
  name="the-room"
  showLegend="true"
>
  <RadioToggleInput
    value={0}
    label="Yes"
  />
  <RadioToggleInput
    value={1}
    label="No"
  />
</FieldSet>
`)),F("pre",null,F("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<RadioToggleInput
  value={0}
  label="Yes"
  name="demo"
/>
`)),F("h2",null,"Controlled component"),F("p",null,`Hvis du \xF8nsker \xE5 bruke komponenten direkte som en kontrollert komponent kan det gj\xF8res
ved \xE5 gi hver `,F("inlineCode",{parentName:"p"},"RadioToggleInput")," en ",F("inlineCode",{parentName:"p"},"checked")," verdi og ",F("inlineCode",{parentName:"p"},"onChange"),` handler.
`,F("inlineCode",{parentName:"p"},"name")," settes p\xE5 fieldsetet rundt."),F("pre",null,F("code",{parentName:"pre",className:"language-tsx"},`const [value, setValue] = useState(1);

const changeValue = (e) => {
  setValue(parseFloat(e.target.value));
}

return (
  <FieldSet
    legend="Is The Room the greatest movie ever"
    name="the-room"
  >
    <RadioToggleInput
      value={0}
      checked={value === 0}
      onChange={changeValue}
      label="Yes"
    />
    <RadioToggleInput
      value={1}
      checked={value === 1}
      onChange={changeValue}
      label="No"
    />
  </FieldSet>
);
`)),F("h2",null,"Uncontrolled"),F("p",null,`Den kan ogs\xE5 brukes som en ukontrollert komponent. Du kan gi referanse til b\xE5de fieldsetet og inputene for
\xE5 ta ut verdiene.`),F("pre",null,F("code",{parentName:"pre",className:"language-tsx"},`<FieldSet
  legend="Is The Room the greatest movie ever"
  name="the-room"
>
  <RadioToggleInput
    value={0}
    label="Yes"
  />
  <RadioToggleInput
    value={1}
    label="No"
  />
</FieldSet>
`)),F("h2",null,"Uncontrolled with react-hook-form"),F("p",null,"Det er kanskje mest interessant sammen med et form-bibliotek som  ",F("inlineCode",{parentName:"p"},"react-hook-form"),`.
Da register du hvert enkelt input felt med register funksjonen. Det m\xE5 ha samme navn som du gir til fieldsetet.`),F("pre",null,F("code",{parentName:"pre",className:"language-tsx"},`const {
  register,
  handleSubmit,
} = useForm();
const onSubmit = data => console.log(data);

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <FieldSet
      legend="Is The Room the greatest movie ever"
      name="the-room"
    >
      <RadioToggleInput
        {...register('the-room')}
        value="0"
        label="Yes"
      />
      <RadioToggleInput
        {...register('the-room')}
        value="1"
        label="No"
      />
    </FieldSet>
    <PrimaryButton type="submit">
      Send inn
    </PrimaryButton>
  </form>
);
`)))}It.isMDXComponent=!0;export{It as default};
