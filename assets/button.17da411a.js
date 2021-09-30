var g=Object.defineProperty,m=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var s=(r,a,n)=>a in r?g(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,i=(r,a)=>{for(var n in a||(a={}))o.call(a,n)&&s(r,n,a[n]);if(l)for(var n of l(a))u.call(a,n)&&s(r,n,a[n]);return r},d=(r,a)=>m(r,c(a));var p=(r,a)=>{var n={};for(var t in r)o.call(r,t)&&a.indexOf(t)<0&&(n[t]=r[t]);if(r!=null&&l)for(var t of l(r))a.indexOf(t)<0&&u.call(r,t)&&(n[t]=r[t]);return n};import{c as e}from"./vendor.edaa74ed.js";const f={},y="wrapper";function v(n){var t=n,{components:r}=t,a=p(t,["components"]);return e(y,d(i(i({},f),a),{components:r,mdxType:"MDXLayout"}),e("h1",null,"Knapper"),e("p",null,"Vi har mange knapper"),e("h2",null,"PrimaryButton"),e("p",null,"Hovedknappen brukes for \xE5 markere den viktigste/\xF8nskede operasjonen for brukeren"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<PrimaryButton postfix="" isLoading={false} disabled={false}>
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
`)),e("h2",null,"Lys bakgrunn"),e("p",null,"Denne er kun implementert for Strim per n\xE5."),e("h2",null,"PrimaryButton"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<LightMode style={{
    backgroundColor: "var(--surface-background)",
    padding: "var(--rds-spacing--32)",
    borderRadius: "var(--rds-roundness--default)"
}}>
<PrimaryButton postfix="" isLoading={false} disabled={false}>
  Hello world
</PrimaryButton>
</LightMode>
`)),e("h2",null,"SecondaryButton"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<LightMode style={{
    backgroundColor: "var(--surface-background)",
    padding: "var(--rds-spacing--32)",
    borderRadius: "var(--rds-roundness--default)"
}}>
<SecondaryButton postfix="" isLoading={false} disabled={false}>
  Hello world
</SecondaryButton>
</LightMode>
`)),e("h3",null,"With 'lightBackground' attribute"),e("h2",null,"PrimaryButton"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<div style={{
    backgroundColor: "var(--surface-background)",
    padding: "var(--rds-spacing--32)",
    borderRadius: "var(--rds-roundness--default)"
}}>
<PrimaryButton postfix="" isLoading={false} disabled={false} lightBackground>
  Hello world
</PrimaryButton>
</div>
`)))}v.isMDXComponent=!0;export{v as default};
