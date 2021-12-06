var p=Object.defineProperty,u=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var s=(e,n,a)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,d=(e,n)=>{for(var a in n||(n={}))i.call(n,a)&&s(e,a,n[a]);if(t)for(var a of t(n))l.call(n,a)&&s(e,a,n[a]);return e},c=(e,n)=>u(e,m(n));var g=(e,n)=>{var a={};for(var o in e)i.call(e,o)&&n.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&t)for(var o of t(e))n.indexOf(o)<0&&l.call(e,o)&&(a[o]=e[o]);return a};import{c as r}from"./vendor.ba92daf6.js";const y={},h="wrapper";function f(a){var o=a,{components:e}=o,n=g(o,["components"]);return r(h,c(d(d({},y),n),{components:e,mdxType:"MDXLayout"}),r("h1",null,"Accordion"),r("p",null,"Trekkspill komponent p\xE5 godt norsk brukes til \xE5 la sideinfomasjon v\xE6re tilgjengelig, men ikke ta opp veldig mye plass p\xE5 siden."),r("pre",null,r("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<Accordion heading="Normal accordion">
  <Body>Innholdet her vises by default, i full bredde</Body>
</Accordion>
`)),r("h2",null,"Venstrestilt pil"),r("pre",null,r("code",{parentName:"pre",className:"language-tsx",metastring:"render=true",render:"true"},`<Accordion
  style={{ maxWidth: "500px" }}
  heading="Venstrestilt chevron og lukket"
  alignChevronLeft={true}
  initialOpen={false}
>
  <Body>Innhold her et begrenset til max 500px</Body>
</Accordion>
`)),r("h2",null,"Light mode"),r("pre",null,r("code",{parentName:"pre",className:"language-tsx",metastring:"render=true",render:"true"},`<LightMode
  style={{
    backgroundColor: "var(--surface-background)",
    padding: "var(--rds-spacing--32)",
    borderRadius: "var(--rds-roundness--default)",
  }}
>
  <Accordion style={{ maxWidth: "500px" }} heading="Lys bakgrunn" initialOpen={false}>
    <Body style={{ color: "#fff" }}>Innhold her et begrenset til max 500px</Body>
  </Accordion>
</LightMode>
`)),r("pre",null,r("code",{parentName:"pre",className:"language-tsx",metastring:"render=true",render:"true"},`<div
  style={{
    backgroundColor: "var(--surface-background)",
    padding: "var(--rds-spacing--32)",
    borderRadius: "var(--rds-roundness--default)",
  }}
>
  <Accordion lightBackground={true} style={{ maxWidth: "500px" }} heading="Lys bakgrunn" initialOpen={false}>
    <Body style={{ color: "#fff" }}>Innhold her et begrenset til max 500px</Body>
  </Accordion>
</div>
`)),r("h2",null,"Sammensatt"),r("p",null,"La oss sette noen flere accordions sammen til en FAQ"),r("pre",null,r("code",{parentName:"pre",className:"language-tsx",metastring:"render=true",render:"true"},`<section>
  <H2>FAQ</H2>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
      gap: " var(--rds-spacing--8)",
      maxWidth: "600px",
    }}
  >
    <Accordion heading="Er dette HTML?" initialOpen={false}>
      <Body>JA! Summary og Details er native HTML element</Body>
    </Accordion>
    <Accordion heading="Er det accessible?" initialOpen={false}>
      <Body>
        JA! Det er bare HTML, ikke noe fancy javascript. Eneste javascript gj\xF8r her er \xE5 sette rikig stil og om
        komponenten skal stare lukket eller \xE5pnet.
      </Body>
    </Accordion>
    <Accordion heading="Kan jeg animere?" initialOpen={false}>
      <div>
        <Body style={{ "--toggle-sweep-delay": "100ms" }}>JA!</Body>
        <Body style={{ "--toggle-sweep-delay": "150ms" }}>Det</Body>
        <Body style={{ "--toggle-sweep-delay": "200ms" }}>kan</Body>
        <Body style={{ "--toggle-sweep-delay": "250ms" }}>du!</Body>
      </div>
    </Accordion>
    <Accordion heading="Funker det p\xE5 mobil?" initialOpen={false}>
      <Body>Jepp</Body>
    </Accordion>
    <Accordion heading="Kan jeg ha flere accordions?" initialOpen={false}>
      <Body>Jepp</Body>
    </Accordion>
    <Accordion heading="Er dette magi" initialOpen={false}>
      <Body>Nei, det er HTML og CSS</Body>
    </Accordion>
  </div>
</section>
`)))}f.isMDXComponent=!0;export{f as default};
