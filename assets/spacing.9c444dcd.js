var d=Object.defineProperty,c=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var p=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,o=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&p(e,a,t[a]);if(n)for(var a of n(t))m.call(t,a)&&p(e,a,t[a]);return e},u=(e,t)=>c(e,g(t));var s=(e,t)=>{var a={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&n)for(var r of n(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a};import{c as l}from"./vendor.edaa74ed.js";import{S as b}from"./Example.a9ad9596.js";import"./index.0c67b61f.js";import"./ToggleButton.21e9e1d9.js";import"./FieldSet.3e424a20.js";const f={},x="wrapper";function j(a){var r=a,{components:e}=r,t=s(r,["components"]);return l(x,u(o(o({},f),t),{components:e,mdxType:"MDXLayout"}),l("h1",null,"Spacing"),l(b,{mdxType:"Spacing"}),l("ul",null,l("li",{parentName:"ul"},"Basen er 8."),l("li",{parentName:"ul"},"Mindre spacing (4 - 2) blir brukt for sm\xE5 avstander mellom titler og meta."),l("li",{parentName:"ul"},"8 - 16 blir brukt til padding."),l("li",{parentName:"ul"},"16 < blir brukt for avstander mellom elementer.")))}j.isMDXComponent=!0;export{j as default};
