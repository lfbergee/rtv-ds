var e=Object.defineProperty,r=Object.defineProperties,n=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,i=(r,n,s)=>n in r?e(r,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[n]=s,l=(e,r)=>{for(var n in r||(r={}))o.call(r,n)&&i(e,n,r[n]);if(s)for(var n of s(r))t.call(r,n)&&i(e,n,r[n]);return e};import{c as a}from"./vendor.029ff854.js";const p={};function d(e){var i,d=e,{components:m}=d,f=((e,r)=>{var n={};for(var i in e)o.call(e,i)&&r.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&s)for(var i of s(e))r.indexOf(i)<0&&t.call(e,i)&&(n[i]=e[i]);return n})(d,["components"]);return a("wrapper",(i=l(l({},p),f),r(i,n({components:m,mdxType:"MDXLayout"}))),a("h1",null,"Core"),a("h2",null,"Custom properties"),a("p",null,"Vi baserer oss i stor grad på custom properties for å kunne toggle mellom brands feks."),a("p",null,"Alle properties som er scopet til ",a("inlineCode",{parentName:"p"},"--rds")," er felles verdier som forventes å finnes for begge brands.\nHvis de er ekte felles, som spacing-skalaen, så skal de defineres i ",a("inlineCode",{parentName:"p"},"core.scss")," fila så de blir tilgjengelige for begge.\nHvis det er verdier som skal finnes i begge brands, men er forskjellige, så skal de scopes med prefixen ",a("inlineCode",{parentName:"p"},"--rds")," feks ",a("inlineCode",{parentName:"p"},"--rds-focus-color"),".\nDe legges da inn i henholdsvis ",a("inlineCode",{parentName:"p"},"strm.scss")," og ",a("inlineCode",{parentName:"p"},"rtv.scss"),". Det er tester som sjekker at verdiene finnes i begge drakter."),a("h2",null,"Provider"),a("p",null,"Det forventes at alle som skal bruke komponent biblioteket setter opp Provider komponenten høyt nok opp i sin app.\nDenne setter opp et scoping punkt for cssen og event-listners for å få riktig fokus stil feks."),a("h2",null,"Mixins"),a("p",null,"Hvis du vil lage egne fokus stiler feks, så kan man bruke ",a("inlineCode",{parentName:"p"},"mixin/focus.scss")," som vil basere seg på data attributter satt opp av Provider komponenten.\n",a("inlineCode",{parentName:"p"},"mixin/navigation")," er også tilgjengelig for å plukke opp data-attributtene. ",a("inlineCode",{parentName:"p"},"mixin/rem.scss")," kan brukes til å konvertere pixel verdier til rem."),a("h2",null,"Screenreader only"),a("p",null,"Hvis du ønsker at noe bare skal være der for skjermlesere kan man legge til klassen ",a("inlineCode",{parentName:"p"},"sr-only"),".\nFeks"),a("pre",null,a("code",l({parentName:"pre"},{className:"language-html"}),'<h2 class="sr-only" aria-live="polite">Viser sesong 12</h2>\n')))}d.isMDXComponent=!0;export default d;