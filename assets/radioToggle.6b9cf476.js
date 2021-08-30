var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,o=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&i(e,r,t[r]);if(s)for(var r of s(t))a.call(t,r)&&i(e,r,t[r]);return e},l=(e,s)=>t(e,r(s));import{r as u,c}from"./vendor.029ff854.js";import{F as d,R as f}from"./FieldSet.0d0ce07d.js";import{a as m}from"./index.fd16767d.js";var g=e=>"checkbox"===e.type,h=e=>e instanceof Date,y=e=>null==e;const b=e=>"object"==typeof e;var p=e=>!y(e)&&!Array.isArray(e)&&b(e)&&!h(e),v=e=>e.substring(0,e.search(/.\d/))||e,O=e=>e.filter(Boolean),_=e=>void 0===e,j=(e,t,r)=>{if(p(e)&&t){const s=O(t.split(/[,[\].]+?/)).reduce(((e,t)=>y(e)?e:e[t]),e);return _(s)||s===e?_(e[t])?r:e[t]:s}};const w="blur",V="onBlur",F="onChange",x="onSubmit",S="onTouched",k="all",A="max",D="min",N="maxLength",T="minLength",C="pattern",E="required",I="validate";var R=(e,t)=>{const r=Object.assign({},e);return delete r[t],r};u.exports.createContext(null).displayName="RHFContext";var M=e=>p(e)&&!Object.keys(e).length,B=e=>Array.isArray(e)?e:[e],U=e=>/^\w*$/.test(e),L=e=>O(e.replace(/["|']|\]/g,"").split(/\.|\[/));function P(e,t,r){let s=-1;const n=U(t)?[t]:L(t),a=n.length,i=a-1;for(;++s<a;){const t=n[s];let a=r;if(s!==i){const r=e[t];a=p(r)||Array.isArray(r)?r:isNaN(+n[s+1])?{}:[]}e[t]=a,e=e[t]}return e}var q=(e,t,r,s,n)=>t?Object.assign(Object.assign({},r[e]),{types:Object.assign(Object.assign({},r[e]&&r[e].types?r[e].types:{}),{[s]:n||!0})}):{};const H=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=j(e,s);if(r){const e=r._f,s=R(r,"_f");if(e&&t(e.name)){if(e.ref.focus&&_(e.ref.focus()))break;if(e.refs){e.refs[0].focus();break}}else p(s)&&H(s,t)}}};function Y(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e.getTime());else{if(!r&&!p(e))return e;t=r?[]:{};for(const r in e)t[r]=Y(e[r])}return t}var $=e=>y(e)||!b(e);function X(e,t){if($(e)||$(t)||h(e)||h(t))return e===t;const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const n of r){const r=e[n];if(!s.includes(n))return!1;if("ref"!==n){const e=t[n];if((p(r)||Array.isArray(r))&&(p(e)||Array.isArray(e))?!X(r,e):r!==e)return!1}}return!0}var W=e=>({isOnSubmit:!e||e===x,isOnBlur:e===V,isOnChange:e===F,isOnAll:e===k,isOnTouch:e===S}),z=e=>"file"===e.type,G=e=>"function"==typeof e,J=e=>e instanceof HTMLElement,K=e=>"select-multiple"===e.type,Q=e=>"radio"===e.type,Z=e=>"string"==typeof e,ee="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document,te=e=>!J(e)||!document.contains(e),re=(e,t)=>e.map(((e={})=>R(e,t)));class se{constructor(){this.tearDowns=[]}add(e){this.tearDowns.push(e)}unsubscribe(){for(const e of this.tearDowns)e();this.tearDowns=[]}}class ne{constructor(e,t){this.observer=e,this.closed=!1,t.add((()=>this.closed=!0))}next(e){this.closed||this.observer.next(e)}}class ae{constructor(){this.observers=[]}next(e){for(const t of this.observers)t.next(e)}subscribe(e){const t=new se,r=new ne(e,t);return this.observers.push(r),t}unsubscribe(){this.observers=[]}}var ie=e=>"boolean"==typeof e;function oe(e,t){const r=U(t)?[t]:L(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=_(e)?s++:e[t[s++]];return e}(e,r),n=r[r.length-1];let a;s&&delete s[n];for(let i=0;i<r.slice(0,-1).length;i++){let t,s=-1;const n=r.slice(0,-(i+1)),o=n.length-1;for(i>0&&(a=e);++s<n.length;){const r=n[s];t=t?t[r]:e[r],o===s&&(p(t)&&M(t)||Array.isArray(t)&&!t.filter((e=>p(e)&&!M(e)||ie(e))).length)&&(a?delete a[r]:delete e[r]),a=t}}return e}const le={value:!1,isValid:!1},ue={value:!0,isValid:!0};var ce=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!_(e[0].attributes.value)?_(e[0].value)||""===e[0].value?ue:{value:e[0].value,isValid:!0}:ue:le}return le},de=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>_(e)?e:t?""===e?NaN:+e:r?new Date(e):s?s(e):e;const fe={isValid:!1,value:null};var me=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),fe):fe;function ge(e){if(e&&e._f){const r=e._f.ref;if(e._f.refs?e._f.refs.every((e=>e.disabled)):r.disabled)return;return z(r)?r.files:Q(r)?me(e._f.refs).value:K(r)?(t=r.options,[...t].filter((({selected:e})=>e)).map((({value:e})=>e))):g(r)?ce(e._f.refs).value:de(_(r.value)?e._f.ref.value:r.value,e._f)}var t}function he(e,t){if($(e)||$(t))return t;for(const s in t){const n=e[s],a=t[s];try{e[s]=p(n)&&p(a)||Array.isArray(n)&&Array.isArray(a)?he(n,a):a}catch(r){}}return e}function ye(e,t,r,s,n){let a=-1;for(;++a<e.length;){for(const s in e[a])Array.isArray(e[a][s])?(!r[a]&&(r[a]={}),r[a][s]=[],ye(e[a][s],j(t[a]||{},s,[]),r[a][s],r[a],s)):!y(t)&&X(j(t[a]||{},s),e[a][s])?P(r[a]||{},s):r[a]=Object.assign(Object.assign({},r[a]),{[s]:!0});s&&!r.length&&delete s[n]}return r}var be=(e,t,r)=>he(ye(e,t,r.slice(0,e.length)),ye(t,e,r.slice(0,e.length))),pe=(e,t)=>!O(j(e,t,[])).length&&oe(e,t),ve=e=>Z(e)||u.exports.isValidElement(e),Oe=e=>e instanceof RegExp;function _e(e,t,r="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||ie(e)&&!e)return{type:r,message:ve(e)?e:"",ref:t}}var je=e=>p(e)&&!Oe(e)?e:{value:e,message:""},we=async(e,t,r,s)=>{const{ref:n,refs:a,required:i,maxLength:o,minLength:l,min:u,max:c,pattern:d,validate:f,name:m,valueAsNumber:h,mount:b,disabled:v}=e._f;if(!b||v)return{};const O=a?a[0]:n,_=e=>{s&&O.reportValidity&&(O.setCustomValidity(ie(e)?"":e||" "),O.reportValidity())},j={},w=Q(n),V=g(n),F=w||V,x=(h||z(n))&&!n.value||""===t||Array.isArray(t)&&!t.length,S=q.bind(null,m,r,j),k=(e,t,r,s=N,a=T)=>{const i=e?t:r;j[m]=Object.assign({type:e?s:a,message:i,ref:n},S(e?s:a,i))};if(i&&(!F&&(x||y(t))||ie(t)&&!t||V&&!ce(a).isValid||w&&!me(a).isValid)){const{value:e,message:t}=ve(i)?{value:!!i,message:i}:je(i);if(e&&(j[m]=Object.assign({type:E,message:t,ref:O},S(E,t)),!r))return _(t),j}if(!(x||y(u)&&y(c))){let e,s;const a=je(c),i=je(u);if(isNaN(t)){const r=n.valueAsDate||new Date(t);Z(a.value)&&(e=r>new Date(a.value)),Z(i.value)&&(s=r<new Date(i.value))}else{const r=n.valueAsNumber||parseFloat(t);y(a.value)||(e=r>a.value),y(i.value)||(s=r<i.value)}if((e||s)&&(k(!!e,a.message,i.message,A,D),!r))return _(j[m].message),j}if((o||l)&&!x&&Z(t)){const e=je(o),s=je(l),n=!y(e.value)&&t.length>e.value,a=!y(s.value)&&t.length<s.value;if((n||a)&&(k(n,e.message,s.message),!r))return _(j[m].message),j}if(d&&!x&&Z(t)){const{value:e,message:s}=je(d);if(Oe(e)&&!t.match(e)&&(j[m]=Object.assign({type:C,message:s,ref:n},S(C,s)),!r))return _(s),j}if(f)if(G(f)){const e=_e(await f(t),O);if(e&&(j[m]=Object.assign(Object.assign({},e),S(I,e.message)),!r))return _(e.message),j}else if(p(f)){let e={};for(const s in f){if(!M(e)&&!r)break;const n=_e(await f[s](t),O,s);n&&(e=Object.assign(Object.assign({},n),S(s,n.message)),_(n.message),r&&(j[m]=e))}if(!M(e)&&(j[m]=Object.assign({ref:O},e),!r))return j}return _(!0),j};const Ve={mode:x,reValidateMode:F,shouldFocusError:!0},Fe="undefined"==typeof window;function xe(e={}){let t,r=Object.assign(Object.assign({},Ve),e),s={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},n={},a={},i=r.defaultValues||{},o=!1,l=!1,u=0,c={mount:new Set,unMount:new Set,array:new Set,watch:new Set},d={};const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={watch:new ae,control:new ae,array:new ae,state:new ae},b=W(r.mode),V=r.criteriaMode===k,F=e=>c.watchAll||c.watch.has(e)||c.watch.has((e.match(/\w+/)||[])[0]),x=(e,t)=>{P(s.errors,e,t),m.state.next({errors:s.errors})},S=async(n,a,i,o,l,c)=>{const g=j(s.errors,a),h=!(!f.isValid||!(r.resolver?l:U()));var y,b;if(e.delayError&&i?(t=t||(y=x,b=e.delayError,(...e)=>{clearTimeout(u),u=window.setTimeout((()=>y(...e)),b)}),t(a,i)):(clearTimeout(u),i?P(s.errors,a,i):oe(s.errors,a)),(c||(i?!X(g,i):g)||!M(o)||r.resolver&&s.isValid!==h)&&!n){const e=Object.assign(Object.assign(Object.assign({},o),f.isValid&&r.resolver?{isValid:h}:{}),{errors:s.errors,name:a});s=Object.assign(Object.assign({},s),e),m.state.next(c?{name:a}:e)}d[a]--,d[a]||(m.state.next({isValidating:!1}),d={})},A=(e,t,r={},s)=>{const i=j(n,e);if(i){const n=i._f;if(n){P(a,e,de(t,n));const i=ee&&J(n.ref)&&y(t)?"":t;z(n.ref)&&!Z(i)?n.ref.files=i:K(n.ref)?[...n.ref.options].forEach((e=>e.selected=i.includes(e.value))):n.refs?g(n.ref)?n.refs.length>1?n.refs.forEach((e=>e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value)):n.refs[0].checked=!!i:n.refs.forEach((e=>e.checked=e.value===i)):n.ref.value=i,s&&m.control.next({values:ie(),name:e}),(r.shouldDirty||r.shouldTouch)&&D(e,i,r.shouldTouch),r.shouldValidate&&ne(e)}}},D=(e,t,r,n=!0)=>{const a={name:e};let o=!1;if(f.isDirty){const e=s.isDirty;s.isDirty=I(),a.isDirty=s.isDirty,o=e!==a.isDirty}if(f.dirtyFields&&!r){const r=j(s.dirtyFields,e);!X(j(i,e),t)?P(s.dirtyFields,e,!0):oe(s.dirtyFields,e),a.dirtyFields=s.dirtyFields,o=o||r!==j(s.dirtyFields,e)}const l=j(s.touchedFields,e);return r&&!l&&(P(s.touchedFields,e,r),a.touchedFields=s.touchedFields,o=o||f.touchedFields&&l!==r),o&&n&&m.state.next(a),o?a:{}},N=async e=>r.resolver?await r.resolver(Object.assign({},a),r.context,((e,t,r,s)=>{const n={};for(const a of e){const e=j(t,a);e&&P(n,a,e._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:s}})(e||c.mount,n,r.criteriaMode,r.shouldUseNativeValidation)):{},T=async(e,t,n={valid:!0})=>{for(const i in e){const o=e[i];if(o){const e=o._f,i=R(o,"_f");if(e){const i=await we(o,j(a,e.name),V,r.shouldUseNativeValidation);if(t){if(i[e.name]){n.valid=!1;break}}else i[e.name]&&(n.valid=!1),i[e.name]?P(s.errors,e.name,i[e.name]):oe(s.errors,e.name)}i&&await T(i,t,n)}}return n.valid},C=async({type:e,target:t,target:{value:i,name:o,type:l}})=>{let u,c;const f=j(n,o);if(f){let n=l?ge(f):void 0;n=_(n)?i:n;const y=e===w,{isOnBlur:p,isOnChange:O}=W(r.reValidateMode),x=(h=f._f,!(f._f.mount&&h&&(h.required||h.min||h.max||h.maxLength||h.minLength||h.pattern||h.validate)||r.resolver||j(s.errors,o)||f._f.deps)||(({isOnBlur:e,isOnChange:t,isOnTouch:r,isTouched:s,isReValidateOnBlur:n,isReValidateOnChange:a,isBlurEvent:i,isSubmitted:o,isOnAll:l})=>!l&&(!o&&r?!(s||i):(o?n:e)?!i:!(o?a:t)||i))(Object.assign({isBlurEvent:y,isTouched:!!j(s.touchedFields,o),isSubmitted:s.isSubmitted,isReValidateOnBlur:p,isReValidateOnChange:O},b))),k=!y&&F(o);_(n)||P(a,o,n);const A=D(o,n,y,!1),T=!M(A)||k;if(x)return!y&&m.watch.next({name:o,type:e}),T&&m.state.next(k?{name:o}:Object.assign(Object.assign({},A),{name:o}));if(d[o]=(d[o],1),m.state.next({isValidating:!0}),r.resolver){const{errors:e}=await N([o]);if(u=j(e,o),g(t)&&!u){const t=v(o),r=j(e,t,{});r.type&&r.message&&(u=r),(r||j(s.errors,t))&&(o=t)}c=M(e)}else u=(await we(f,j(a,o),V,r.shouldUseNativeValidation))[o];!y&&m.watch.next({name:o,type:e,values:ie()}),f._f.deps&&ne(f._f.deps),S(!1,o,u,A,c,k)}var h},E=(e,t,r)=>{const s=j(n,e);if(s){const n=j(a,e),o=_(n)?j(i,e):n;_(o)||t&&t.defaultChecked||r?P(a,e,r?o:ge(s)):A(e,o)}l&&f.isValid&&U()},I=(e,t)=>(e&&t&&P(a,e,t),!X(Object.assign({},ie()),i)),U=async()=>{const e=r.resolver?M((await N()).errors):await T(n,!0);e!==s.isValid&&(s.isValid=e,m.state.next({isValid:e}))},L=(e,t,r)=>Object.entries(t).forEach((([t,s])=>{const a=`${e}.${t}`,i=j(n,a);!c.array.has(e)&&$(s)&&(!i||i._f)||h(s)?A(a,s,r,!0):L(a,s,r)})),q=(e,t,r)=>{const s=Object.assign({},l?a:_(t)?i:Z(e)?{[e]:t}:t);if(!e)return r&&(c.watchAll=!0),s;const n=[];for(const a of B(e))r&&c.watch.add(a),n.push(j(s,a));return Array.isArray(e)?n:n[0]},se=(e,t="")=>{for(const r in e){const s=e[r],i=t+(t?".":"")+r,o=j(n,i);o&&o._f||(p(s)&&Object.keys(s).length||Array.isArray(s)&&s.length?se(s,i):o||P(a,i,s))}},ne=async(e,t={})=>{const a=B(e);let i;if(m.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await N();if(e)for(const r of e){const e=j(t,r);e?P(s.errors,r,e):oe(s.errors,r)}else s.errors=t;return t})(_(e)?e:a);i=e?a.every((e=>!j(t,e))):M(t)}else e?i=(await Promise.all(a.map((async e=>{const t=j(n,e);return await T(t._f?{[e]:t}:t)})))).every(Boolean):(await T(n),i=M(s.errors));return m.state.next(Object.assign(Object.assign({},Z(e)?{name:e}:{}),{errors:s.errors,isValidating:!1})),t.shouldFocus&&!i&&H(n,(e=>j(s.errors,e)),e?a:c.mount),f.isValid&&U(),i},ie=e=>{const t=Object.assign(Object.assign({},i),a);return _(e)?t:Z(e)?j(t,e):e.map((e=>j(t,e)))},le=(e,t={})=>{for(const o of e?B(e):c.mount)c.mount.delete(o),c.array.delete(o),j(n,o)&&(t.keepValue||(oe(n,o),oe(a,o)),!t.keepError&&oe(s.errors,o),!t.keepDirty&&oe(s.dirtyFields,o),!t.keepTouched&&oe(s.touchedFields,o),!r.shouldUnregister&&!t.keepDefaultValue&&oe(i,o));m.watch.next({}),m.state.next(Object.assign(Object.assign({},s),t.keepDirty?{isDirty:I()}:{})),!t.keepIsValid&&U()},ue=(e,t,r)=>{ce(e,r);let s=j(n,e);const a=_(t.value)&&t.querySelectorAll&&t.querySelectorAll("input,select,textarea")[0]||t,i=(e=>Q(e)||g(e))(a);a===s._f.ref||i&&O(s._f.refs||[]).find((e=>e===a))||(s={_f:i?Object.assign(Object.assign({},s._f),{refs:[...O(s._f.refs||[]).filter((e=>J(e)&&document.contains(e))),a],ref:{type:a.type,name:e}}):Object.assign(Object.assign({},s._f),{ref:a})},P(n,e,s),E(e,a))},ce=(e,t={})=>{const s=j(n,e);return P(n,e,{_f:Object.assign(Object.assign(Object.assign({},s&&s._f?s._f:{ref:{name:e}}),{name:e,mount:!0}),t)}),t.value&&P(a,e,t.value),!_(t.disabled)&&s&&s._f&&s._f.ref.disabled!==t.disabled&&P(a,e,t.disabled?void 0:s._f.ref.value),c.mount.add(e),!s&&E(e,void 0,!0),Fe?{name:e}:Object.assign(Object.assign({name:e},_(t.disabled)?{}:{disabled:t.disabled}),{onChange:C,onBlur:C,ref:s=>{if(s)ue(e,s,t);else{const s=j(n,e,{}),a=r.shouldUnregister||t.shouldUnregister;s._f&&(s._f.mount=!1),a&&(!((e,t)=>[...e].some((e=>v(t)===e)))(c.array,e)||!o)&&c.unMount.add(e)}}})};return{control:{register:ce,unregister:le,_getWatch:q,_getIsDirty:I,_updateValid:U,_updateValues:se,_removeFields:()=>{for(const e of c.unMount){const t=j(n,e);t&&(t._f.refs?t._f.refs.every(te):te(t._f.ref))&&le(e)}c.unMount=new Set},_updateFieldArray:(e,t,r,l,u=[],c=!0,d=!0)=>{let g;const h=re(u,e);if(o=!0,d&&j(n,t)&&(g=r(j(n,t),l.argA,l.argB),c&&P(n,t,g)),g=r(j(a,t),l.argA,l.argB),c&&P(a,t,g),Array.isArray(j(s.errors,t))){const e=r(j(s.errors,t),l.argA,l.argB);c&&P(s.errors,t,e),pe(s.errors,t)}if(f.touchedFields&&j(s.touchedFields,t)){const e=r(j(s.touchedFields,t),l.argA,l.argB);c&&P(s.touchedFields,t,e),pe(s.touchedFields,t)}(f.dirtyFields||f.isDirty)&&(P(s.dirtyFields,t,be(re(h,e),j(i,t,[]),j(s.dirtyFields,t,[]))),h&&P(s.dirtyFields,t,be(re(h,e),j(i,t,[]),j(s.dirtyFields,t,[]))),pe(s.dirtyFields,t)),m.state.next({isDirty:I(t,re(h,e)),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})},_getFieldArrayValue:e=>j(l?a:i,e,[]),_subjects:m,_shouldUnregister:r.shouldUnregister,_fields:n,_proxyFormState:f,get _formValues(){return a},set _formValues(e){a=e},get _isMounted(){return l},set _isMounted(e){l=e},get _defaultValues(){return i},set _defaultValues(e){i=e},get _names(){return c},set _names(e){c=e},_isInAction:{get val(){return o},set val(e){o=e}},_formState:{get val(){return s},set val(e){s=e}},_updateProps:e=>{r=Object.assign(Object.assign({},Ve),e)}},trigger:ne,register:ce,handleSubmit:(e,t)=>async i=>{i&&(i.preventDefault&&i.preventDefault(),i.persist&&i.persist());let o=!0,l=Object.assign({},a);m.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await N();s.errors=e,l=t}else await T(n);M(s.errors)&&Object.keys(s.errors).every((e=>j(l,e)))?(m.state.next({errors:{},isSubmitting:!0}),await e(l,i)):(t&&await t(s.errors,i),r.shouldFocusError&&H(n,(e=>j(s.errors,e)),c.mount))}catch(u){throw o=!1,u}finally{s.isSubmitted=!0,m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(s.errors)&&o,submitCount:s.submitCount+1,errors:s.errors})}},watch:(e,t)=>G(e)?m.watch.subscribe({next:r=>e(q(void 0,t),r)}):q(e,t,!0),setValue:(e,t,r={})=>{const o=j(n,e),l=c.array.has(e);P(a,e,t),l?(m.array.next({name:e,values:a}),(f.isDirty||f.dirtyFields)&&r.shouldDirty&&(P(s.dirtyFields,e,be(t,j(i,e,[]),j(s.dirtyFields,e,[]))),m.state.next({name:e,dirtyFields:s.dirtyFields,isDirty:I(e,t)}))):!o||o._f||y(t)?A(e,t,r,!0):L(e,t,r),F(e)&&m.state.next({}),m.watch.next({name:e})},getValues:ie,reset:(e,t={})=>{const r=e||i,o=Y(r);if(a=o,ee&&!t.keepValues)for(const s of c.mount){const e=j(n,s);if(e&&e._f){const t=Array.isArray(e._f.refs)?e._f.refs[0]:e._f.ref;try{J(t)&&t.closest("form").reset();break}catch(u){}}}t.keepDefaultValues||(i=Object.assign({},r)),t.keepValues||(n={},m.control.next({values:t.keepDefaultValues?i:Object.assign({},r)}),m.watch.next({}),m.array.next({values:o})),c={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},m.state.next({submitCount:t.keepSubmitCount?s.submitCount:0,isDirty:t.keepDirty?s.isDirty:!!t.keepDefaultValues&&X(e,i),isSubmitted:!!t.keepIsSubmitted&&s.isSubmitted,dirtyFields:t.keepDirty?s.dirtyFields:{},touchedFields:t.keepTouched?s.touchedFields:{},errors:t.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1}),l=!!t.keepIsValid},clearErrors:e=>{e?B(e).forEach((e=>oe(s.errors,e))):s.errors={},m.state.next({errors:s.errors})},unregister:le,setError:(e,t,r)=>{const a=(j(n,e,{_f:{}})._f||{}).ref;P(s.errors,e,Object.assign(Object.assign({},t),{ref:a})),m.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:e=>j(n,e)._f.ref.focus()}}function Se(e={}){const t=u.exports.useRef(),[r,s]=u.exports.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._updateProps(e):t.current=Object.assign(Object.assign({},xe(e)),{formState:r});const n=t.current.control;return u.exports.useEffect((()=>{const e=n._subjects.state.subscribe({next(e){((e,t,r)=>{const s=R(e,"name");return M(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find((e=>t[e]===(!r||k)))})(e,n._proxyFormState,!0)&&(n._formState.val=Object.assign(Object.assign({},n._formState.val),e),s(Object.assign({},n._formState.val)))}});return()=>{e.unsubscribe()}}),[n]),u.exports.useEffect((()=>{n._isMounted||(n._isMounted=!0,n._proxyFormState.isValid&&n._updateValid(),!e.shouldUnregister&&n._updateValues(n._defaultValues)),n._removeFields()})),t.current.formState=((e,t,r,s=!0)=>{function n(n){return()=>{if(n in e)return t[n]!==k&&(t[n]=!s||k),r&&(r[n]=!0),e[n]}}const a={};for(const i in e)Object.defineProperty(a,i,{get:n(i)});return a})(r,n._proxyFormState),t.current}const ke=["I går","I dag","I morgen"],Ae=()=>{const{register:e,watch:t}=Se({mode:"onChange",defaultValues:{fieldName:ke[1]}}),r=t();return console.log(r),m("form",{onSubmit:e=>e.preventDefault(),children:m(d,{legend:"Velg dag",name:"fieldName",children:ke.map((t=>u.exports.createElement(f,l(o({},e("fieldName")),{value:t,label:t,key:t}))))})})},De={};function Ne(e){var t=e,{components:r}=t,i=((e,t)=>{var r={};for(var i in e)n.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&s)for(var i of s(e))t.indexOf(i)<0&&a.call(e,i)&&(r[i]=e[i]);return r})(t,["components"]);return c("wrapper",l(o(o({},De),i),{components:r,mdxType:"MDXLayout"}),c("h1",null,"RadioToggle"),c("p",null,"Hvis man setter showLegend til false vil den kun være der for screenreaders."),c(Ae,{mdxType:"Example"}),c("pre",null,c("code",o({parentName:"pre"},{className:"language-tsx",metastring:"live=true",live:"true"}),'<FieldSet\n  legend="Is The Room the greatest movie ever"\n  name="the-room"\n  showLegend="true"\n>\n  <RadioToggleInput\n    value={0}\n    label="Yes"\n  />\n  <RadioToggleInput\n    value={1}\n    label="No"\n  />\n</FieldSet>\n')),c("pre",null,c("code",o({parentName:"pre"},{className:"language-tsx",metastring:"live=true",live:"true"}),'<RadioToggleInput\n  value={0}\n  label="Yes"\n  name="demo"\n/>\n')),c("h2",null,"Controlled component"),c("p",null,"Hvis du ønsker å bruke komponenten direkte som en kontrollert komponent kan det gjøres\nved å gi hver ",c("inlineCode",{parentName:"p"},"RadioToggleInput")," en ",c("inlineCode",{parentName:"p"},"checked")," verdi og ",c("inlineCode",{parentName:"p"},"onChange")," handler.\n",c("inlineCode",{parentName:"p"},"name")," settes på fieldsetet rundt."),c("pre",null,c("code",o({parentName:"pre"},{className:"language-tsx"}),'const [value, setValue] = useState(1);\n\nconst changeValue = (e) => {\n  setValue(parseFloat(e.target.value));\n}\n\nreturn (\n  <FieldSet\n    legend="Is The Room the greatest movie ever"\n    name="the-room"\n  >\n    <RadioToggleInput\n      value={0}\n      checked={value === 0}\n      onChange={changeValue}\n      label="Yes"\n    />\n    <RadioToggleInput\n      value={1}\n      checked={value === 1}\n      onChange={changeValue}\n      label="No"\n    />\n  </FieldSet>\n);\n')),c("h2",null,"Uncontrolled"),c("p",null,"Den kan også brukes som en ukontrollert komponent. Du kan gi referanse til både fieldsetet og inputene for\nå ta ut verdiene."),c("pre",null,c("code",o({parentName:"pre"},{className:"language-tsx"}),'<FieldSet\n  legend="Is The Room the greatest movie ever"\n  name="the-room"\n>\n  <RadioToggleInput\n    value={0}\n    label="Yes"\n  />\n  <RadioToggleInput\n    value={1}\n    label="No"\n  />\n</FieldSet>\n')),c("h2",null,"Uncontrolled with react-hook-form"),c("p",null,"Det er kanskje mest interessant sammen med et form-bibliotek som  ",c("inlineCode",{parentName:"p"},"react-hook-form"),".\nDa register du hvert enkelt input felt med register funksjonen. Det må ha samme navn som du gir til fieldsetet."),c("pre",null,c("code",o({parentName:"pre"},{className:"language-tsx"}),'const {\n  register,\n  handleSubmit,\n} = useForm();\nconst onSubmit = data => console.log(data);\n\nreturn (\n  <form onSubmit={handleSubmit(onSubmit)}>\n    <FieldSet\n      legend="Is The Room the greatest movie ever"\n      name="the-room"\n    >\n      <RadioToggleInput\n        {...register(\'the-room\')}\n        value="0"\n        label="Yes"\n      />\n      <RadioToggleInput\n        {...register(\'the-room\')}\n        value="1"\n        label="No"\n      />\n    </FieldSet>\n    <PrimaryButton type="submit">\n      Send inn\n    </PrimaryButton>\n  </form>\n);\n')))}Ne.isMDXComponent=!0;export default Ne;
