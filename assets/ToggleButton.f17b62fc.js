var $=Object.defineProperty,P=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var k=(t,n,e)=>n in t?$(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,s=(t,n)=>{for(var e in n||(n={}))_.call(n,e)&&k(t,e,n[e]);if(l)for(var e of l(n))N.call(n,e)&&k(t,e,n[e]);return t},T=(t,n)=>P(t,L(n));var i=(t,n)=>{var e={};for(var o in t)_.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&l)for(var o of l(t))n.indexOf(o)<0&&N.call(t,o)&&(e[o]=t[o]);return e};import{r as a}from"./vendor.edaa74ed.js";import{a as r,c as g,j as p}from"./index.0b0e15db.js";const M=a.exports.forwardRef((y,o)=>{var c=y,{children:t,className:n=""}=c,e=i(c,["children","className"]);return r("div",T(s({ref:o,className:`rds-light ${n}`},e),{children:t}))});M.displayName="LightMode";const D=a.exports.forwardRef((t,n)=>r(g,s({buttonStyle:"rds-icon-button",buttonType:"primary",ref:n},t)));D.displayName="PrimaryIconButton";const F=a.exports.forwardRef((t,n)=>r(g,s({buttonStyle:"rds-icon-button",buttonType:"secondary",ref:n},t)));F.displayName="SecondaryIconButton";const O=a.exports.forwardRef((t,n)=>r(g,s({buttonStyle:"rds-icon-button",buttonType:"tertiary",ref:n},t)));O.displayName="TertiaryIconButton";const U=t=>t||`${new Date().valueOf()}`;const q=a.exports.forwardRef((z,j)=>{var f=z,{defaultChecked:t,showLabel:n=!0,icons:e,iconClass:o="",children:y,onChange:c,id:R,className:S=""}=f,v=i(f,["defaultChecked","showLabel","icons","iconClass","children","onChange","id","className"]);const w=a.exports.useRef(null),[b]=a.exports.useState(U(R)),[d,h]=a.exports.useState(!!t),m=e&&"checkedIcon"in e?e.checkedIcon:null,I=e&&"uncheckedIcon"in e?e.uncheckedIcon:null,x=e&&"toggleIcon"in e?e.toggleIcon:null,u=j||w;return p("div",{className:S,children:[r("input",s({id:b,ref:u,type:"checkbox",className:"rds-toggle-button__input",onChange:C=>{var B;typeof c=="function"&&c(C),h(typeof u!="function"?!!((B=u.current)==null?void 0:B.checked):!d)},defaultChecked:t},v)),r("label",{"data-testid":"toggle-button__label",className:`rds-toggle-button ${n?"":"rds-toggle-button--round"}`,htmlFor:b,children:p("span",{className:"rds-toggle-button__content",children:[e&&p("span",{className:`rds-toggle-button__rounded ${o}`,children:[x&&r(x,{checked:d}),m&&d&&r(m,{}),I&&!d&&r(I,{})]}),r("span",{"data-testid":"toggle-button__label__text",className:n?"":"sr-only",children:y})]})})]})});q.displayName="ToggleButton";export{M as L,D as P,F as S,O as T,q as a};
