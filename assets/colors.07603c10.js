var u=Object.defineProperty,c=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var m=(o,e,t)=>e in o?u(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,n=(o,e)=>{for(var t in e||(e={}))p.call(e,t)&&m(o,t,e[t]);if(a)for(var t of a(e))d.call(e,t)&&m(o,t,e[t]);return o},l=(o,e)=>c(o,b(e));var i=(o,e)=>{var t={};for(var r in o)p.call(o,r)&&e.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&a)for(var r of a(o))e.indexOf(r)<0&&d.call(o,r)&&(t[r]=o[r]);return t};import{c as s}from"./vendor.edaa74ed.js";import{C as f}from"./Example.6d17fb05.js";import"./index.4a7b4051.js";import"./ToggleButton.ddca7eba.js";import"./FieldSet.cbdb2748.js";const j={},x="wrapper";function y(t){var r=t,{components:o}=r,e=i(r,["components"]);return s(x,l(n(n({},j),e),{components:o,mdxType:"MDXLayout"}),s("h1",null,"Farger"),s(f,{mdxType:"Colors"}))}y.isMDXComponent=!0;export{y as default};
