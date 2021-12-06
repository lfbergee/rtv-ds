var m=Object.defineProperty,g=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;var u=(a,t,r)=>t in a?m(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,s=(a,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(a,r,t[r]);if(n)for(var r of n(t))o.call(t,r)&&u(a,r,t[r]);return a},p=(a,t)=>g(a,k(t));var d=(a,t)=>{var r={};for(var l in a)i.call(a,l)&&t.indexOf(l)<0&&(r[l]=a[l]);if(a!=null&&n)for(var l of n(a))t.indexOf(l)<0&&o.call(a,l)&&(r[l]=a[l]);return r};import{c as e}from"./vendor.ba92daf6.js";const c={},v="wrapper";function N(r){var l=r,{components:a}=l,t=d(l,["components"]);return e(v,p(s(s({},c),t),{components:a,mdxType:"MDXLayout"}),e("h1",null,"Typografi"),e("h2",null,"Overskrifter"),e("p",null,`Komponentene kommer med l\xE5st semantikk og fri stil.
Det betyr at du M\xC5 bruke riktig semantisk React-komponent og heller overstyre stilen om den skal se ut som noe annet.
Husk at semantikk er viktig for mange brukere, s\xE5 s\xF8rg for at sidene dine f\xF8lger hierakriet med bare en h1.`),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<DisplayTitle>display-title</DisplayTitle>
`)),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<H1>title-1</H1>
`)),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<H2>title-2</H2>
`)),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<H3>title-3</H3>
`)),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<H4>title-4</H4>
`)),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<Body>body</Body>
`)),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<SubBody>sub-body</SubBody>
`)),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<Tag>tag</Tag>
`)),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<Bold>Bold</Bold>
`)),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<Meta>Meta</Meta>
`)),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<a
  className="rds-link"
  href="#"
  onClick={(e) => {
    e.preventDefault();
    e.stopProagation();
  }}
>
  Link
</a>
`)),e("h2",null,"Overstyr"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"render=true",render:"true"},`<DisplayTitle lookLike="body">h1 som ser ut som body</DisplayTitle>
`)),e("h2",null,"Lenker"),e("p",null,`Ut av boksen tilbys det bare stil for lenker.
Det er fordi alle prosjekt kan ha ulike routere med ulike behov til lenkekomponentene.
Anbefalingen er \xE5 lage en wrapper link komponent i ditt prosjekt, som legger til `,e("inlineCode",{parentName:"p"},"rds-link"),`
som klassenavn p\xE5 din React Router, Reach Router, Wouter eller din egen lenke komponent.`),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<a
  className="rds-title-2 rds-link"
  href="#"
  onClick={(e) => {
      e.preventDefault();
      e.stopProagation();
  }}
>
  Link as title-2
</a>
`)),e("h3",null,"Aktiv lenke"),e("p",null,`Hvis man st\xE5r p\xE5 samme side som en lenke peker til, som kan skje i forskjellige menyer,
s\xE5 skal det markeres at lenken er aktiv via `,e("inlineCode",{parentName:"p"},'aria-current="page"'),`.
Det er ogs\xE5 mulig \xE5 sette stilen direkte med `,e("inlineCode",{parentName:"p"},"rds-link--active"),`. Den er gjort med text-shadow
for \xE5 unng\xE5 reflow av siden.`),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<a
  className="rds-link"
  href="#"
  aria-current="page"
  onClick={(e) => {
      e.preventDefault();
      e.stopProagation();
  }}
>
  Active link
</a>
`)),e("h2",null,"Lys bakgrunn"),e("p",null,"Denne er kun implementert for Strim per n\xE5."),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"render=true",render:"true"},`<LightMode
  style={{
    backgroundColor: "var(--surface-background)",
    padding: "var(--rds-spacing--32)",
    borderRadius: "var(--rds-roundness--default)",
  }}
>
  <DisplayTitle>display-title</DisplayTitle>
  <H1>title-1</H1>
  <H2>title-2</H2>
  <H3>title-3</H3>
  <H4>title-4</H4>
  <Body>body</Body>
  <SubBody>sub-body</SubBody>
  <Tag>tag</Tag>
  <br />
  <Bold>Bold</Bold>
  <br />
  <Meta>Meta</Meta>
  <br />
  <a
    className="rds-link"
    href="#"
    onClick={(e) => {
      e.preventDefault();
      e.stopProagation();
    }}
  >
    Link
  </a>
</LightMode>
`)),e("p",null,"Man kan ogs\xE5 bruke ",e("inlineCode",{parentName:"p"},"lightBackground")," prop om det kun er en enkelt typografi komponent som skal mot lys bakgrunn."),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"render=true",render:"true"},`<div
  style={{
    backgroundColor: "var(--surface-background)",
    padding: "var(--rds-spacing--32)",
    borderRadius: "var(--rds-roundness--default)",
  }}
>
  <H1 lightBackground={true}>title-1</H1>
</div>
`)))}N.isMDXComponent=!0;export{N as default};
