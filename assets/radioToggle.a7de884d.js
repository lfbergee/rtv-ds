var bt=Object.defineProperty,mt=Object.defineProperties;var vt=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable;var Te=(e,t,i)=>t in e?bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ie=(e,t)=>{for(var i in t||(t={}))Re.call(t,i)&&Te(e,i,t[i]);if(ne)for(var i of ne(t))Ne.call(t,i)&&Te(e,i,t[i]);return e},_e=(e,t)=>mt(e,vt(t));var Ie=(e,t)=>{var i={};for(var r in e)Re.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(e!=null&&ne)for(var r of ne(e))t.indexOf(r)<0&&Ne.call(e,r)&&(i[r]=e[r]);return i};import{r as U,c as p}from"./vendor.edaa74ed.js";import{F as xt,R as pt}from"./FieldSet.95f95ba9.js";import{a as Me}from"./index.0b0e15db.js";var $=e=>e.type==="checkbox",ae=e=>e instanceof Date,D=e=>e==null;const Le=e=>typeof e=="object";var A=e=>!D(e)&&!Array.isArray(e)&&Le(e)&&!ae(e),Be=e=>e.substring(0,e.search(/.\d/))||e,_t=(e,t)=>[...e].some(i=>Be(t)===i),ee=e=>e.filter(Boolean),k=e=>e===void 0,g=(e,t,i)=>{if(A(e)&&t){const r=ee(t.split(/[,[\].]+?/)).reduce((a,c)=>D(a)?a:a[c],e);return k(r)||r===e?k(e[t])?i:e[t]:r}};const Ft={BLUR:"blur",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},P={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};var le=(e,t)=>{const i=Object.assign({},e);return delete i[t],i};const wt=U.exports.createContext(null);wt.displayName="RHFContext";var Ot=(e,t,i,r=!0)=>{function a(d){return()=>{if(d in e)return t[d]!==I.all&&(t[d]=!r||I.all),i&&(i[d]=!0),e[d]}}const c={};for(const d in e)Object.defineProperty(c,d,{get:a(d)});return c},C=e=>A(e)&&!Object.keys(e).length,Vt=(e,t,i)=>{const r=le(e,"name");return C(r)||Object.keys(r).length>=Object.keys(t).length||Object.keys(r).find(a=>t[a]===(!i||I.all))},oe=e=>Array.isArray(e)?e:[e];function St({disabled:e,subject:t,callback:i}){const r=U.exports.useRef(t),a=U.exports.useRef();e?r.current&&(a.current&&a.current.unsubscribe(),r.current=a.current=void 0):(r.current||(r.current=t),!a.current&&r.current&&(a.current=r.current.subscribe({next:i}))),U.exports.useEffect(()=>()=>{a.current&&a.current.unsubscribe()},[])}var kt=(e,t,i,r,a)=>t?Object.assign(Object.assign({},i[e]),{types:Object.assign(Object.assign({},i[e]&&i[e].types?i[e].types:{}),{[r]:a||!0})}):{},Ue=e=>/^\w*$/.test(e),Pe=e=>ee(e.replace(/["|']|\]/g,"").split(/\.|\[/));function _(e,t,i){let r=-1;const a=Ue(t)?[t]:Pe(t),c=a.length,d=c-1;for(;++r<c;){const w=a[r];let V=i;if(r!==d){const b=e[w];V=A(b)||Array.isArray(b)?b:isNaN(+a[r+1])?{}:[]}e[w]=V,e=e[w]}return e}const Fe=(e,t,i)=>{for(const r of i||Object.keys(e)){const a=g(e,r);if(a){const c=a._f,d=le(a,"_f");if(c&&t(c.name)){if(c.ref.focus&&k(c.ref.focus()))break;if(c.refs){c.refs[0].focus();break}}else A(d)&&Fe(d,t)}}};var we=(e,t)=>e.map((i={})=>le(i,t));function Oe(e){let t;const i=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(i||A(e)){t=i?[]:{};for(const r in e)t[r]=Oe(e[r])}else return e;return t}var te=e=>D(e)||!Le(e);function G(e,t){if(te(e)||te(t)||ae(e)||ae(t))return e===t;const i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(const a of i){const c=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const d=t[a];if((A(c)||Array.isArray(c))&&(A(d)||Array.isArray(d))?!G(c,d):c!==d)return!1}}return!0}var qe=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),K=e=>typeof e=="boolean",Ve=e=>e.type==="file",He=e=>typeof e=="function",ue=e=>e instanceof HTMLElement,We=e=>e.type==="select-multiple",Se=e=>e.type==="radio",jt=e=>Se(e)||$(e),q=e=>typeof e=="string",Ye=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined",Xe=e=>!ue(e)||!document.contains(e);class Dt{constructor(){this.tearDowns=[]}add(t){this.tearDowns.push(t)}unsubscribe(){for(const t of this.tearDowns)t();this.tearDowns=[]}}class At{constructor(t,i){this.observer=t,this.closed=!1,i.add(()=>this.closed=!0)}next(t){this.closed||this.observer.next(t)}}class ce{constructor(){this.observers=[]}next(t){for(const i of this.observers)i.next(t)}subscribe(t){const i=new Dt,r=new At(t,i);return this.observers.push(r),i}unsubscribe(){this.observers=[]}}function Et(e,t){const i=t.slice(0,-1).length;let r=0;for(;r<i;)e=k(e)?r++:e[t[r++]];return e}function R(e,t){const i=Ue(t)?[t]:Pe(t),r=i.length==1?e:Et(e,i),a=i[i.length-1];let c;r&&delete r[a];for(let d=0;d<i.slice(0,-1).length;d++){let w=-1,V;const b=i.slice(0,-(d+1)),M=b.length-1;for(d>0&&(c=e);++w<b.length;){const F=b[w];V=V?V[F]:e[F],M===w&&(A(V)&&C(V)||Array.isArray(V)&&!V.filter(y=>A(y)&&!C(y)||K(y)).length)&&(c?delete c[F]:delete e[F]),c=V}}return e}const $e={value:!1,isValid:!1},Ge={value:!0,isValid:!0};var Ke=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||e[0].value===""?Ge:{value:e[0].value,isValid:!0}:Ge:$e}return $e},ze=(e,{valueAsNumber:t,valueAsDate:i,setValueAs:r})=>k(e)?e:t?e===""?NaN:+e:i?new Date(e):r?r(e):e,Ct=e=>[...e].filter(({selected:t})=>t).map(({value:t})=>t);const Je={isValid:!1,value:null};var Qe=e=>Array.isArray(e)?e.reduce((t,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:t,Je):Je;function ke(e){const t=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):t.disabled))return Ve(t)?t.files:Se(t)?Qe(e.refs).value:We(t)?Ct(t.options):$(t)?Ke(e.refs).value:ze(k(t.value)?e.ref.value:t.value,e)}var Rt=(e,t,i,r)=>{const a={};for(const c of e){const d=g(t,c);d&&_(a,c,d._f)}return{criteriaMode:i,names:[...e],fields:a,shouldUseNativeValidation:r}},Nt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ze(e,t){if(te(e)||te(t))return t;for(const i in t){const r=e[i],a=t[i];try{e[i]=A(r)&&A(a)||Array.isArray(r)&&Array.isArray(a)?Ze(r,a):a}catch(c){}}return e}function je(e,t,i,r,a){let c=-1;for(;++c<e.length;){for(const d in e[c])Array.isArray(e[c][d])?(!i[c]&&(i[c]={}),i[c][d]=[],je(e[c][d],g(t[c]||{},d,[]),i[c][d],i[c],d)):!D(t)&&G(g(t[c]||{},d),e[c][d])?_(i[c]||{},d):i[c]=Object.assign(Object.assign({},i[c]),{[d]:!0});r&&!i.length&&delete r[a]}return i}var De=(e,t,i)=>Ze(je(e,t,i.slice(0,e.length)),je(t,e,i.slice(0,e.length))),Tt=(e,t,i,r,a)=>a.isOnAll?!1:!i&&a.isOnTouch?!(t||e):(i?r.isOnBlur:a.isOnBlur)?!e:(i?r.isOnChange:a.isOnChange)?e:!0,Ae=(e,t)=>!ee(g(e,t,[])).length&&R(e,t),de=e=>q(e)||U.exports.isValidElement(e),et=e=>e instanceof RegExp;function tt(e,t,i="validate"){if(de(e)||Array.isArray(e)&&e.every(de)||K(e)&&!e)return{type:i,message:de(e)?e:"",ref:t}}var z=e=>A(e)&&!et(e)?e:{value:e,message:""},rt=async(e,t,i,r)=>{const{ref:a,refs:c,required:d,maxLength:w,minLength:V,min:b,max:M,pattern:F,validate:y,name:N,valueAsNumber:fe,mount:re,disabled:ge}=e._f;if(!re||ge)return{};const L=c?c[0]:a,B=v=>{r&&L.reportValidity&&(L.setCustomValidity(K(v)?"":v||" "),L.reportValidity())},S={},W=Se(a),J=$(a),Y=W||J,X=(fe||Ve(a))&&!a.value||t===""||Array.isArray(t)&&!t.length,T=kt.bind(null,N,i,S),Q=(v,m,O,j=P.maxLength,E=P.minLength)=>{const se=v?m:O;S[N]=Object.assign({type:v?j:E,message:se,ref:a},T(v?j:E,se))};if(d&&(!Y&&(X||D(t))||K(t)&&!t||J&&!Ke(c).isValid||W&&!Qe(c).isValid)){const{value:v,message:m}=de(d)?{value:!!d,message:d}:z(d);if(v&&(S[N]=Object.assign({type:P.required,message:m,ref:L},T(P.required,m)),!i))return B(m),S}if(!X&&(!D(b)||!D(M))){let v,m;const O=z(M),j=z(b);if(isNaN(t)){const E=a.valueAsDate||new Date(t);q(O.value)&&(v=E>new Date(O.value)),q(j.value)&&(m=E<new Date(j.value))}else{const E=a.valueAsNumber||parseFloat(t);D(O.value)||(v=E>O.value),D(j.value)||(m=E<j.value)}if((v||m)&&(Q(!!v,O.message,j.message,P.max,P.min),!i))return B(S[N].message),S}if((w||V)&&!X&&q(t)){const v=z(w),m=z(V),O=!D(v.value)&&t.length>v.value,j=!D(m.value)&&t.length<m.value;if((O||j)&&(Q(O,v.message,m.message),!i))return B(S[N].message),S}if(F&&!X&&q(t)){const{value:v,message:m}=z(F);if(et(v)&&!t.match(v)&&(S[N]=Object.assign({type:P.pattern,message:m,ref:a},T(P.pattern,m)),!i))return B(m),S}if(y){if(He(y)){const v=await y(t),m=tt(v,L);if(m&&(S[N]=Object.assign(Object.assign({},m),T(P.validate,m.message)),!i))return B(m.message),S}else if(A(y)){let v={};for(const m in y){if(!C(v)&&!i)break;const O=tt(await y[m](t),L,m);O&&(v=Object.assign(Object.assign({},O),T(m,O.message)),B(O.message),i&&(S[N]=v))}if(!C(v)&&(S[N]=Object.assign({ref:L},v),!i))return S}}return B(!0),S};const st={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0},It=typeof window=="undefined";function Mt(e={}){let t=Object.assign(Object.assign({},st),e),i,r={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},a={},c=t.defaultValues||{},d=t.shouldUnregister?{}:Oe(c),w={action:!1,mount:!1,watch:!1},V=0,b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},M={};const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},y={watch:new ce,control:new ce,array:new ce,state:new ce},N=qe(t.mode),fe=qe(t.reValidateMode),re=t.criteriaMode===I.all,ge=(s,n)=>(...l)=>{clearTimeout(V),V=window.setTimeout(()=>s(...l),n)},L=s=>b.watchAll||b.watch.has(s)||b.watch.has((s.match(/\w+/)||[])[0]),B=(s,n)=>{_(r.errors,s,n),y.state.next({errors:r.errors})},S=async(s,n,l,u,f)=>{const o=g(r.errors,n),h=F.isValid&&r.isValid!==l;if(e.delayError&&u?(i=i||ge(B,e.delayError),i(n,u)):(clearTimeout(V),u?_(r.errors,n,u):R(r.errors,n)),((u?!G(o,u):o)||!C(f)||h)&&!s){const x=Object.assign(Object.assign(Object.assign({},f),h?{isValid:l}:{}),{errors:r.errors,name:n});r=Object.assign(Object.assign({},r),x),y.state.next(x)}M[n]--,F.isValidating&&!M[n]&&(y.state.next({isValidating:!1}),M={})},W=(s,n,l={},u)=>{const f=g(a,s);let o=n;if(f){const h=f._f;h&&(_(d,s,ze(n,h)),o=Ye&&ue(h.ref)&&D(n)?"":n,Ve(h.ref)&&!q(o)?h.ref.files=o:We(h.ref)?[...h.ref.options].forEach(x=>x.selected=o.includes(x.value)):h.refs?$(h.ref)?h.refs.length>1?h.refs.forEach(x=>x.checked=Array.isArray(o)?!!o.find(H=>H===x.value):o===x.value):h.refs[0].checked=!!o:h.refs.forEach(x=>x.checked=x.value===o):h.ref.value=o,u&&y.control.next({values:d,name:s}))}(l.shouldDirty||l.shouldTouch)&&J(s,o,l.shouldTouch),l.shouldValidate&&he(s)},J=(s,n,l,u=!0)=>{const f={name:s};let o=!1;if(F.isDirty){const x=r.isDirty;r.isDirty=m(),f.isDirty=r.isDirty,o=x!==f.isDirty}if(F.dirtyFields&&!l){const x=g(r.dirtyFields,s);!G(g(c,s),n)?_(r.dirtyFields,s,!0):R(r.dirtyFields,s),f.dirtyFields=r.dirtyFields,o=o||x!==g(r.dirtyFields,s)}const h=g(r.touchedFields,s);return l&&!h&&(_(r.touchedFields,s,l),f.touchedFields=r.touchedFields,o=o||F.touchedFields&&h!==l),o&&u&&y.state.next(f),o?f:{}},Y=async s=>t.resolver?await t.resolver(Object.assign({},d),t.context,Rt(s||b.mount,a,t.criteriaMode,t.shouldUseNativeValidation)):{},X=async s=>{const{errors:n}=await Y();if(s)for(const l of s){const u=g(n,l);u?_(r.errors,l,u):R(r.errors,l)}else r.errors=n;return n},T=async(s,n,l={valid:!0})=>{for(const u in s){const f=s[u];if(f){const o=f._f,h=le(f,"_f");if(o){const x=await rt(f,g(d,o.name),re,t.shouldUseNativeValidation);if(x[o.name]&&(l.valid=!1,n))break;n||(x[o.name]?_(r.errors,o.name,x[o.name]):R(r.errors,o.name))}h&&await T(h,n,l)}}return l.valid},Q=async s=>{const n=s.target;let l=n.name;const u=g(a,l);if(u){let f,o;const h=n.type?ke(u._f):n.value,x=s.type===Ft.BLUR;x&&u._f.onBlur?u._f.onBlur(s):u._f.onChange&&u._f.onChange(s);const H=!Nt(u._f)&&!t.resolver&&!g(r.errors,l)&&!u._f.deps||Tt(x,g(r.touchedFields,l),r.isSubmitted,fe,N),me=!x&&L(l);_(d,l,h);const ve=J(l,h,x,!1),yt=!C(ve)||me;if(!x&&y.watch.next({name:l,type:s.type}),H)return yt&&y.state.next(Object.assign({name:l},me?{}:ve));if(!x&&me&&y.state.next({}),M[l]=(M[l],1),F.isValidating&&y.state.next({isValidating:!0}),t.resolver){const{errors:xe}=await Y([l]);if(f=g(xe,l),$(n)&&!f){const pe=Be(l),Ce=g(a,pe);if(Array.isArray(Ce)&&Ce.every(Z=>Z._f&&$(Z._f.ref))){const Z=g(xe,pe,{});Z.type&&(f=Z),l=pe}}o=C(xe)}else f=(await rt(u,g(d,l),re,t.shouldUseNativeValidation))[l],o=await O(!0);u._f.deps&&he(u._f.deps),S(!1,l,o,f,ve)}},v=(s,n,l)=>{const u=g(a,s);if(u){const f=g(d,s),o=k(f)?g(c,s):f;k(o)||l&&l.defaultChecked||n?_(d,s,n?o:ke(u._f)):W(s,o)}w.mount&&O()},m=(s,n)=>(s&&n&&_(d,s,n),!G(Object.assign({},Ee()),c)),O=async s=>{let n=!1;return F.isValid&&(n=t.resolver?C((await Y()).errors):await T(a,!0),!s&&n!==r.isValid&&(r.isValid=n,y.state.next({isValid:n}))),n},j=(s,n,l)=>Object.entries(n).forEach(([u,f])=>{const o=`${s}.${u}`,h=g(a,o);(b.array.has(s)||!te(f)||h&&!h._f)&&!ae(f)?j(o,f,l):W(o,f,l,!0)}),E=(s,n,l,u)=>{const f=Object.assign({},l||w.mount?d:k(n)?c:q(s)?{[s]:n}:n);if(!s)return u&&(b.watchAll=!0),f;const o=[];for(const h of oe(s))u&&b.watch.add(h),o.push(g(f,h));return Array.isArray(s)?o:o[0]},se=(s,n,l,u,f=[],o=!0,h=!0)=>{let x;if(w.action=!0,h&&g(a,n)&&(x=l(g(a,n),u.argA,u.argB),o&&_(a,n,x)),Array.isArray(g(r.errors,n))){const H=l(g(r.errors,n),u.argA,u.argB);o&&_(r.errors,n,H),Ae(r.errors,n)}if(F.touchedFields&&g(r.touchedFields,n)){const H=l(g(r.touchedFields,n),u.argA,u.argB);o&&_(r.touchedFields,n,H),Ae(r.touchedFields,n)}(F.dirtyFields||F.isDirty)&&(_(r.dirtyFields,n,De(we(f,s),g(c,n,[]),g(r.dirtyFields,n,[]))),f&&_(r.dirtyFields,n,De(we(f,s),g(c,n,[]),g(r.dirtyFields,n,[]))),Ae(r.dirtyFields,n)),y.state.next({isDirty:m(n,we(f,s)),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})},at=s=>g(w.mount?d:c,s,[]),lt=(s,n,l={})=>{const u=g(a,s),f=b.array.has(s);_(d,s,n),f?(y.array.next({name:s,values:d}),(F.isDirty||F.dirtyFields)&&l.shouldDirty&&(_(r.dirtyFields,s,De(n,g(c,s,[]),g(r.dirtyFields,s,[]))),y.state.next({name:s,dirtyFields:r.dirtyFields,isDirty:m(s,n)}))):u&&!u._f&&!D(n)?j(s,n,l):W(s,n,l,!0),L(s)&&y.state.next({}),y.watch.next({name:s})},he=async(s,n={})=>{const l=oe(s);let u;if(y.state.next({isValidating:!0}),t.resolver){const f=await X(k(s)?s:l);u=s?l.every(o=>!g(f,o)):C(f)}else s?(u=(await Promise.all(l.map(async f=>{const o=g(a,f);return await T(o&&o._f?{[f]:o}:o)}))).every(Boolean),O()):u=await T(a);return y.state.next(Object.assign(Object.assign({},q(s)?{name:s}:{}),{errors:r.errors,isValid:u,isValidating:!1})),n.shouldFocus&&!u&&Fe(a,f=>g(r.errors,f),s?l:b.mount),u},Ee=s=>{const n=Object.assign(Object.assign({},c),w.mount?d:{});return k(s)?n:q(s)?g(n,s):s.map(l=>g(n,l))},ot=s=>{s?oe(s).forEach(n=>R(r.errors,n)):r.errors={},y.state.next({errors:r.errors})},ut=(s,n,l)=>{const u=(g(a,s,{_f:{}})._f||{}).ref;_(r.errors,s,Object.assign(Object.assign({},n),{ref:u})),y.state.next({name:s,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&u&&u.focus&&u.focus()},ct=(s,n)=>He(s)?y.watch.subscribe({next:l=>s(E(void 0,n),l)}):E(s,n,!1,!0),ye=(s,n={})=>{for(const l of s?oe(s):b.mount)b.mount.delete(l),b.array.delete(l),g(a,l)&&(n.keepValue||(R(a,l),R(d,l)),!n.keepError&&R(r.errors,l),!n.keepDirty&&R(r.dirtyFields,l),!n.keepTouched&&R(r.touchedFields,l),!t.shouldUnregister&&!n.keepDefaultValue&&R(c,l));y.watch.next({}),y.state.next(Object.assign(Object.assign({},r),n.keepDirty?{isDirty:m()}:{})),!n.keepIsValid&&O()},dt=(s,n,l)=>{be(s,l);let u=g(a,s);const f=k(n.value)&&n.querySelectorAll&&n.querySelectorAll("input,select,textarea")[0]||n,o=jt(f);f===u._f.ref||o&&ee(u._f.refs||[]).find(h=>h===f)||(u={_f:o?Object.assign(Object.assign({},u._f),{refs:[...ee(u._f.refs||[]).filter(h=>ue(h)&&document.contains(h)),f],ref:{type:f.type,name:s}}):Object.assign(Object.assign({},u._f),{ref:f})},_(a,s,u),(!l||!l.disabled)&&v(s,!1,f))},be=(s,n={})=>{const l=g(a,s);return _(a,s,{_f:Object.assign(Object.assign(Object.assign({},l&&l._f?l._f:{ref:{name:s}}),{name:s,mount:!0}),n)}),b.mount.add(s),k(n.value)||_(d,s,n.value),l&&K(n.disabled)&&_(d,s,n.disabled?void 0:g(d,s,ke(l._f))),!l&&v(s,!0),It?{name:s}:Object.assign(Object.assign({name:s},K(n.disabled)?{disabled:n.disabled}:{}),{onChange:Q,onBlur:Q,ref:u=>{if(u)dt(s,u,n);else{const f=g(a,s,{}),o=t.shouldUnregister||n.shouldUnregister;f._f&&(f._f.mount=!1),o&&!(_t(b.array,s)&&w.action)&&b.unMount.add(s)}}})},ft=(s,n)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let u=!0,f=Object.assign({},d);y.state.next({isSubmitting:!0});try{if(t.resolver){const{errors:o,values:h}=await Y();r.errors=o,f=h}else await T(a);C(r.errors)&&Object.keys(r.errors).every(o=>g(f,o))?(y.state.next({errors:{},isSubmitting:!0}),await s(f,l)):(n&&await n(r.errors,l),t.shouldFocusError&&Fe(a,o=>g(r.errors,o),b.mount))}catch(o){throw u=!1,o}finally{r.isSubmitted=!0,y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:C(r.errors)&&u,submitCount:r.submitCount+1,errors:r.errors})}},gt=(s,n={})=>{const l=s||c,u=Oe(l);if(n.keepValues||(d=e.shouldUnregister?{}:u),Ye&&!n.keepValues)for(const f of b.mount){const o=g(a,f);if(o&&o._f){const h=Array.isArray(o._f.refs)?o._f.refs[0]:o._f.ref;try{ue(h)&&h.closest("form").reset();break}catch(x){}}}n.keepDefaultValues||(c=Object.assign({},l)),n.keepValues||(a={},y.control.next({values:n.keepDefaultValues?c:Object.assign({},l)}),y.watch.next({}),y.array.next({values:u})),b={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.state.next({submitCount:n.keepSubmitCount?r.submitCount:0,isDirty:n.keepDirty?r.isDirty:n.keepDefaultValues?G(s,c):!1,isSubmitted:n.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:n.keepDirty?r.dirtyFields:{},touchedFields:n.keepTouched?r.touchedFields:{},errors:n.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1}),w.mount=!F.isValid||!!n.keepIsValid,w.watch=!!e.shouldUnregister},ht=s=>g(a,s)._f.ref.focus();return{control:{register:be,unregister:ye,_getWatch:E,_getIsDirty:m,_updateValid:O,_removeFields:()=>{for(const s of b.unMount){const n=g(a,s);n&&(n._f.refs?n._f.refs.every(Xe):Xe(n._f.ref))&&ye(s)}b.unMount=new Set},_updateFieldArray:se,_getFieldArrayValue:at,_subjects:y,_shouldUnregister:t.shouldUnregister,_proxyFormState:F,get _fields(){return a},set _fields(s){a=s},get _formValues(){return d},set _formValues(s){d=s},get _stateFlags(){return w},set _stateFlags(s){w=s},get _defaultValues(){return c},set _defaultValues(s){c=s},get _names(){return b},set _names(s){b=s},get _formState(){return r},set _formState(s){r=s},_updateProps:s=>{t=Object.assign(Object.assign({},st),s)}},trigger:he,register:be,handleSubmit:ft,watch:ct,setValue:lt,getValues:Ee,reset:gt,clearErrors:ot,unregister:ye,setError:ut,setFocus:ht}}function Lt(e={}){const t=U.exports.useRef(),[i,r]=U.exports.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._updateProps(e):t.current=Object.assign(Object.assign({},Mt(e)),{formState:i});const a=t.current.control;return St({subject:a._subjects.state,callback:c=>{Vt(c,a._proxyFormState,!0)&&(a._formState=Object.assign(Object.assign({},a._formState),c),r(Object.assign({},a._formState)))}}),U.exports.useEffect(()=>{a._stateFlags.mount||(a._proxyFormState.isValid&&a._updateValid(),a._stateFlags.mount=!0),a._stateFlags.watch&&(a._stateFlags.watch=!1,a._subjects.state.next({})),a._removeFields()}),t.current.formState=Ot(i,a._proxyFormState),t.current}const nt=["I g\xE5r","I dag","I morgen"],it="fieldName",Bt=()=>{const{register:e,watch:t}=Lt({mode:"onChange",defaultValues:{fieldName:nt[1]}}),i=t();return console.log(i),Me("form",{onSubmit:r=>r.preventDefault(),children:Me(xt,{legend:"Velg dag",name:it,children:nt.map(r=>U.exports.createElement(pt,_e(ie({},e(it)),{value:r,label:r,key:r})))})})},Ut={},Pt="wrapper";function qt(i){var r=i,{components:e}=r,t=Ie(r,["components"]);return p(Pt,_e(ie(ie({},Ut),t),{components:e,mdxType:"MDXLayout"}),p("h1",null,"RadioToggle"),p("p",null,"Hvis man setter showLegend til false vil den kun v\xE6re der for screenreaders."),p(Bt,{mdxType:"Example"}),p("pre",null,p("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<FieldSet
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
`)),p("pre",null,p("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<RadioToggleInput
  value={0}
  label="Yes"
  name="demo"
/>
`)),p("h2",null,"Controlled component"),p("p",null,`Hvis du \xF8nsker \xE5 bruke komponenten direkte som en kontrollert komponent kan det gj\xF8res
ved \xE5 gi hver `,p("inlineCode",{parentName:"p"},"RadioToggleInput")," en ",p("inlineCode",{parentName:"p"},"checked")," verdi og ",p("inlineCode",{parentName:"p"},"onChange"),` handler.
`,p("inlineCode",{parentName:"p"},"name")," settes p\xE5 fieldsetet rundt."),p("pre",null,p("code",{parentName:"pre",className:"language-tsx"},`const [value, setValue] = useState(1);

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
`)),p("h2",null,"Uncontrolled"),p("p",null,`Den kan ogs\xE5 brukes som en ukontrollert komponent. Du kan gi referanse til b\xE5de fieldsetet og inputene for
\xE5 ta ut verdiene.`),p("pre",null,p("code",{parentName:"pre",className:"language-tsx"},`<FieldSet
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
`)),p("h2",null,"Uncontrolled with react-hook-form"),p("p",null,"Det er kanskje mest interessant sammen med et form-bibliotek som  ",p("inlineCode",{parentName:"p"},"react-hook-form"),`.
Da register du hvert enkelt input felt med register funksjonen. Det m\xE5 ha samme navn som du gir til fieldsetet.`),p("pre",null,p("code",{parentName:"pre",className:"language-tsx"},`const {
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
`)))}qt.isMDXComponent=!0;export{qt as default};
