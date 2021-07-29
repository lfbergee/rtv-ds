var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(r,t,n)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,o=(e,r)=>{for(var t in r||(r={}))a.call(r,t)&&s(e,t,r[t]);if(n)for(var t of n(r))l.call(r,t)&&s(e,t,r[t]);return e};import{c as i}from"./vendor.029ff854.js";const u={};function p(e){var s,p=e,{components:d}=p,g=((e,r)=>{var t={};for(var s in e)a.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&n)for(var s of n(e))r.indexOf(s)<0&&l.call(e,s)&&(t[s]=e[s]);return t})(p,["components"]);return i("wrapper",(s=o(o({},u),g),r(s,t({components:d,mdxType:"MDXLayout"}))),i("h1",null,"Typografi"),i("h2",null,"Overskrifter"),i("p",null,"Komponentene kommer med låst semantikk og fri stil.\nDet betyr at du MÅ bruke riktig semantisk React-komponent og heller overstyre stilen om den skal se ut som noe annet.\nHusk at semantikk er viktig for mange brukere, så sørg for at sidene dine følger hierakriet med bare en h1."),i("pre",null,i("code",o({parentName:"pre"},{className:"language-tsx",metastring:"live=true",live:"true"}),"<DisplayTitle>display-title</DisplayTitle>\n")),i("pre",null,i("code",o({parentName:"pre"},{className:"language-tsx",metastring:"live=true",live:"true"}),"<H1>title-1</H1>\n")),i("pre",null,i("code",o({parentName:"pre"},{className:"language-tsx",metastring:"live=true",live:"true"}),"<H2>title-2</H2>\n")),i("pre",null,i("code",o({parentName:"pre"},{className:"language-tsx",metastring:"live=true",live:"true"}),"<H3>title-3</H3>\n")),i("pre",null,i("code",o({parentName:"pre"},{className:"language-tsx",metastring:"live=true",live:"true"}),"<H4>title-4</H4>\n")),i("pre",null,i("code",o({parentName:"pre"},{className:"language-tsx",metastring:"live=true",live:"true"}),"<Body>body</Body>\n")),i("pre",null,i("code",o({parentName:"pre"},{className:"language-tsx",metastring:"live=true",live:"true"}),"<SubBody>sub-body</SubBody>\n")),i("pre",null,i("code",o({parentName:"pre"},{className:"language-tsx",metastring:"live=true",live:"true"}),"<Tag>tag</Tag>\n")),i("pre",null,i("code",o({parentName:"pre"},{className:"language-tsx",metastring:"live=true",live:"true"}),"<Bold>Bold</Bold>\n")),i("pre",null,i("code",o({parentName:"pre"},{className:"language-tsx",metastring:"live=true",live:"true"}),"<Meta>Meta</Meta>\n")),i("h2",null,"Overstyr"),i("pre",null,i("code",o({parentName:"pre"},{className:"language-tsx",metastring:"render=true",render:"true"}),'<DisplayTitle lookLike="body">\n    h1 som ser ut som body\n</DisplayTitle>\n')),i("h2",null,"Lys bakgrunn"),i("p",null,"Denne er kun implementert for Strim per nå."),i("pre",null,i("code",o({parentName:"pre"},{className:"language-tsx",metastring:"render=true",render:"true"}),'<LightMode style={{\n    backgroundColor: "var(--surface-background)",\n    padding: "var(--rds-spacing--32)",\n    borderRadius: "var(--rds-roundness--default)"\n}}>\n    <DisplayTitle>display-title</DisplayTitle>\n    <H1>title-1</H1>\n    <H2>title-2</H2>\n    <H3>title-3</H3>\n    <H4>title-4</H4>\n    <Body>body</Body>\n    <SubBody>sub-body</SubBody>\n    <Tag>tag</Tag><br />\n    <Bold>Bold</Bold><br />\n    <Meta>Meta</Meta>\n</LightMode>\n')),i("p",null,"Man kan også bruke ",i("inlineCode",{parentName:"p"},"lightBackground")," prop om det kun er en enkelt typografi komponent som skal mot lys bakgrunn."),i("pre",null,i("code",o({parentName:"pre"},{className:"language-tsx",metastring:"render=true",render:"true"}),'<div style={{\n    backgroundColor: "var(--surface-background)",\n    padding: "var(--rds-spacing--32)",\n    borderRadius: "var(--rds-roundness--default)"\n}}>\n    <H1 lightBackground={true}>title-1</H1>\n</div>\n')))}p.isMDXComponent=!0;export default p;
