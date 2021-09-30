var m=Object.defineProperty,g=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var s=(r,t,n)=>t in r?m(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,i=(r,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(r,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&s(r,n,t[n]);return r},p=(r,t)=>g(r,c(t));var d=(r,t)=>{var n={};for(var a in r)o.call(r,a)&&t.indexOf(a)<0&&(n[a]=r[a]);if(r!=null&&l)for(var a of l(r))t.indexOf(a)<0&&u.call(r,a)&&(n[a]=r[a]);return n};import{c as e}from"./vendor.edaa74ed.js";const y={},x="wrapper";function f(n){var a=n,{components:r}=a,t=d(a,["components"]);return e(x,p(i(i({},y),t),{components:r,mdxType:"MDXLayout"}),e("h1",null,"Knapper"),e("p",null,"Vi har mange knapper"),e("h2",null,"PrimaryButton"),e("p",null,"Hovedknappen brukes for \xE5 markere den viktigste/\xF8nskede operasjonen for brukeren"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<PrimaryButton postfix="" isLoading={false} disabled={false}>
  Hello world
</PrimaryButton>
`)),e("h2",null,"SecondaryButton"),e("p",null,"Sekund\xE6rknappen brukes til andre operasjoner enn den viktigste"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<SecondaryButton postfix="" isLoading={false} disabled={false}>
  Hello world
</SecondaryButton>
`)),e("h2",null,"TertiaryButton"),e("p",null,"Terti\xE6rknappen brukes til destruktive eller mindre viktige handliger"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<TertiaryButton postfix="" isLoading={false} disabled={false}>
  Hello world
</TertiaryButton>
`)),e("h2",null,"Button options"),e("h3",null,"With postfix"),e("p",null,"Kan brukes til \xE5 vise pris eller annen viktig info"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"render=true",render:"true"},`<PrimaryButton postfix="249 kr">
  Film og Serier
</PrimaryButton>
`)),e("h3",null,"With icon"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"render=true",render:"true"},`<PrimaryButton icon={Play}>
  Spill av
</PrimaryButton>
`)),e("h3",null,"With postfix and icon"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"render=true",render:"true"},`<PrimaryButton icon={Play} postfix="249 kr">
  Spill av
</PrimaryButton>
`)))}f.isMDXComponent=!0;export{f as default};
