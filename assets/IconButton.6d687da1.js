var r=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(r,e)=>{for(var t in e||(e={}))a.call(e,t)&&s(r,t,e[t]);if(o)for(var t of o(e))n.call(e,t)&&s(r,t,e[t]);return r};import{r as i}from"./vendor.80a0cc82.js";import{a as l,c as f}from"./index.4e773b4c.js";const p=i.exports.forwardRef(((r,s)=>{var i,f=r,{children:p,className:d=""}=f,y=((r,e)=>{var t={};for(var s in r)a.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(null!=r&&o)for(var s of o(r))e.indexOf(s)<0&&n.call(r,s)&&(t[s]=r[s]);return t})(f,["children","className"]);return l("div",(i=c({ref:s,className:`rds-light ${d}`},y),e(i,t({children:p}))))}));p.displayName="LightMode";const d=i.exports.forwardRef(((r,e)=>l(f,c({buttonStyle:"rds-icon-button",buttonType:"primary",ref:e},r))));d.displayName="PrimaryIconButton";const y=i.exports.forwardRef(((r,e)=>l(f,c({buttonStyle:"rds-icon-button",buttonType:"secondary",ref:e},r))));y.displayName="SecondaryIconButton";const b=i.exports.forwardRef(((r,e)=>l(f,c({buttonStyle:"rds-icon-button",buttonType:"tertiary",ref:e},r))));b.displayName="TertiaryIconButton";export{p as L,d as P,y as S,b as T};
