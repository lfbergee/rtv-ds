var d=Object.defineProperty,c=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var p=(e,a,r)=>a in e?d(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,o=(e,a)=>{for(var r in a||(a={}))i.call(a,r)&&p(e,r,a[r]);if(l)for(var r of l(a))m.call(a,r)&&p(e,r,a[r]);return e},u=(e,a)=>c(e,f(a));var s=(e,a)=>{var r={};for(var t in e)i.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&l)for(var t of l(e))a.indexOf(t)<0&&m.call(e,t)&&(r[t]=e[t]);return r};import{c as n}from"./vendor.ba92daf6.js";import{S as b}from"./Example.ad56eef5.js";import"./index.92ef6ac8.js";const g={},x="wrapper";function y(r){var t=r,{components:e}=t,a=s(t,["components"]);return n(x,u(o(o({},g),a),{components:e,mdxType:"MDXLayout"}),n("h1",null,"Spacing"),n(b,{mdxType:"Spacing"}),n("ul",null,n("li",{parentName:"ul"},"Basen er 8."),n("li",{parentName:"ul"},"Mindre spacing (4 - 2) blir brukt for sm\xE5 avstander mellom titler og meta."),n("li",{parentName:"ul"},"8 - 16 blir brukt til padding."),n("li",{parentName:"ul"},"16 < blir brukt for avstander mellom elementer.")))}y.isMDXComponent=!0;export{y as default};
