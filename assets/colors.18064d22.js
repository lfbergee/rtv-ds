var i=Object.defineProperty,u=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var d=(o,e,t)=>e in o?i(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,n=(o,e)=>{for(var t in e||(e={}))p.call(e,t)&&d(o,t,e[t]);if(a)for(var t of a(e))m.call(e,t)&&d(o,t,e[t]);return o},l=(o,e)=>u(o,f(e));var c=(o,e)=>{var t={};for(var r in o)p.call(o,r)&&e.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&a)for(var r of a(o))e.indexOf(r)<0&&m.call(o,r)&&(t[r]=o[r]);return t};import{c as s}from"./vendor.edaa74ed.js";import{C as b}from"./Example.0a9cda0d.js";import"./index.ec4aa0b6.js";import"./ToggleButton.2d9ba0bc.js";import"./FieldSet.cabfb6f2.js";const j={},x="wrapper";function y(t){var r=t,{components:o}=r,e=c(r,["components"]);return s(x,l(n(n({},j),e),{components:o,mdxType:"MDXLayout"}),s("h1",null,"Farger"),s(b,{mdxType:"Colors"}))}y.isMDXComponent=!0;export{y as default};
