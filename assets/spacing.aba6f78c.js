var d=Object.defineProperty,f=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var p=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,o=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&p(e,a,t[a]);if(n)for(var a of n(t))m.call(t,a)&&p(e,a,t[a]);return e},u=(e,t)=>f(e,c(t));var s=(e,t)=>{var a={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&n)for(var r of n(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a};import{c as l}from"./vendor.edaa74ed.js";import{S as g}from"./Example.ff25f8ca.js";import"./index.fbed2ae8.js";import"./ToggleButton.f96f519d.js";import"./FieldSet.a273a814.js";const b={},x="wrapper";function j(a){var r=a,{components:e}=r,t=s(r,["components"]);return l(x,u(o(o({},b),t),{components:e,mdxType:"MDXLayout"}),l("h1",null,"Spacing"),l(g,{mdxType:"Spacing"}),l("ul",null,l("li",{parentName:"ul"},"Basen er 8."),l("li",{parentName:"ul"},"Mindre spacing (4 - 2) blir brukt for sm\xE5 avstander mellom titler og meta."),l("li",{parentName:"ul"},"8 - 16 blir brukt til padding."),l("li",{parentName:"ul"},"16 < blir brukt for avstander mellom elementer.")))}j.isMDXComponent=!0;export{j as default};
