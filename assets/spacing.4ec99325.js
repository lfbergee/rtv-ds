var d=Object.defineProperty,c=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var p=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(n)for(var r of n(t))m.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>c(e,g(t));var s=(e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&n)for(var a of n(e))t.indexOf(a)<0&&m.call(e,a)&&(r[a]=e[a]);return r};import{c as l}from"./vendor.edaa74ed.js";import{S as b}from"./Example.d30ea045.js";import"./index.6924a207.js";import"./ToggleButton.f427305c.js";import"./FieldSet.92631b2d.js";const f={},x="wrapper";function j(r){var a=r,{components:e}=a,t=s(a,["components"]);return l(x,u(o(o({},f),t),{components:e,mdxType:"MDXLayout"}),l("h1",null,"Spacing"),l(b,{mdxType:"Spacing"}),l("ul",null,l("li",{parentName:"ul"},"Basen er 8."),l("li",{parentName:"ul"},"Mindre spacing (4 - 2) blir brukt for sm\xE5 avstander mellom titler og meta."),l("li",{parentName:"ul"},"8 - 16 blir brukt til padding."),l("li",{parentName:"ul"},"16 < blir brukt for avstander mellom elementer.")))}j.isMDXComponent=!0;export{j as default};
