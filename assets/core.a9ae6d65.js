var e=Object.defineProperty,n=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,l=(n,r,s)=>r in n?e(n,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[r]=s,i=(e,n)=>{for(var r in n||(n={}))o.call(n,r)&&l(e,r,n[r]);if(s)for(var r of s(n))t.call(n,r)&&l(e,r,n[r]);return e};import{c as a}from"./vendor.80a0cc82.js";const p={};function m(e){var l,m=e,{components:d}=m,k=((e,n)=>{var r={};for(var l in e)o.call(e,l)&&n.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&s)for(var l of s(e))n.indexOf(l)<0&&t.call(e,l)&&(r[l]=e[l]);return r})(m,["components"]);return a("wrapper",(l=i(i({},p),k),n(l,r({components:d,mdxType:"MDXLayout"}))),a("h1",null,"Core"),a("h2",null,"Custom properties"),a("p",null,"Vi baserer oss i stor grad på custom properties for å kunne toggle mellom brands feks."),a("p",null,"Alle properties som er scopet til ",a("inlineCode",{parentName:"p"},"--rds")," er felles verdier som forventes å finnes for begge brands.\nHvis de er ekte felles, som spacing-skalaen, så skal de defineres i ",a("inlineCode",{parentName:"p"},"core.scss")," fila så de blir tilgjengelige for begge.\nHvis det er verdier som skal finnes i begge brands, men er forskjellige, så skal de scopes med prefixen ",a("inlineCode",{parentName:"p"},"--rds")," feks ",a("inlineCode",{parentName:"p"},"--rds-focus-color"),".\nDe legges da inn i henholdsvis ",a("inlineCode",{parentName:"p"},"strm.scss")," og ",a("inlineCode",{parentName:"p"},"rtv.scss"),". Det er tester som sjekker at verdiene finnes i begge drakter."),a("h2",null,"Provider"),a("p",null,"Det forventes at alle som skal bruke komponent biblioteket setter opp Provider komponenten høyt nok opp i sin app.\nDenne setter opp et scoping punkt for cssen og event-listners for å få riktig fokus stil feks."),a("h2",null,"LightMode"),a("p",null,"Default på alle komponent vår er at de forventer mørk bakgrunn. Der man ikke har mørk bakgrunn, kan man legge til ",a("inlineCode",{parentName:"p"},'class="rds-ligth"'),"\neller ved å sette opp ",a("inlineCode",{parentName:"p"},"<LightMode>{children}</LightMode>"),". Anbefalt implementasjon er å lage en layoutkomponent som setter inn denne,\nhvis man har behov for lyse komponenter."),a("h2",null,"Mixins"),a("p",null,"Hvis du vil lage egne fokus stiler feks, så kan man bruke ",a("inlineCode",{parentName:"p"},"mixin/focus.scss")," som vil basere seg på data attributter satt opp av Provider komponenten.\n",a("inlineCode",{parentName:"p"},"mixin/navigation")," er også tilgjengelig for å plukke opp data-attributtene. ",a("inlineCode",{parentName:"p"},"mixin/rem.scss")," kan brukes til å konvertere pixel verdier til rem."),a("h2",null,"Screenreader only"),a("p",null,"Hvis du ønsker at noe bare skal være der for skjermlesere kan man legge til klassen ",a("inlineCode",{parentName:"p"},"sr-only"),".\nFeks"),a("pre",null,a("code",i({parentName:"pre"},{className:"language-html"}),'<h2 class="sr-only" aria-live="polite">Viser sesong 12</h2>\n')))}m.isMDXComponent=!0;export default m;