var i=Object.defineProperty,u=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var d=(o,e,t)=>e in o?i(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,n=(o,e)=>{for(var t in e||(e={}))p.call(e,t)&&d(o,t,e[t]);if(a)for(var t of a(e))m.call(e,t)&&d(o,t,e[t]);return o},f=(o,e)=>u(o,c(e));var l=(o,e)=>{var t={};for(var r in o)p.call(o,r)&&e.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&a)for(var r of a(o))e.indexOf(r)<0&&m.call(o,r)&&(t[r]=o[r]);return t};import{c as s}from"./vendor.edaa74ed.js";import{C as j}from"./Example.ff25f8ca.js";import"./index.fbed2ae8.js";import"./ToggleButton.f96f519d.js";import"./FieldSet.a273a814.js";const x={},y="wrapper";function C(t){var r=t,{components:o}=r,e=l(r,["components"]);return s(y,f(n(n({},x),e),{components:o,mdxType:"MDXLayout"}),s("h1",null,"Farger"),s(j,{mdxType:"Colors"}))}C.isMDXComponent=!0;export{C as default};