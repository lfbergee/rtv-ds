var Y=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var O=(e,n,o)=>n in e?Y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,l=(e,n)=>{for(var o in n||(n={}))I.call(n,o)&&O(e,o,n[o]);if(C)for(var o of C(n))$.call(n,o)&&O(e,o,n[o]);return e},y=(e,n)=>ee(e,te(n));var _=(e,n)=>{var o={};for(var a in e)I.call(e,a)&&n.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&C)for(var a of C(e))n.indexOf(a)<0&&$.call(e,a)&&(o[a]=e[a]);return o};import{j as V,r as s,L as ne,c as t,N as S,H as re,M as oe,R as ae,a as z,b as se,d as ie}from"./vendor.54e71f68.js";const le=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const p of i)if(p.type==="childList")for(const d of p.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(i){const p={};return i.integrity&&(p.integrity=i.integrity),i.referrerpolicy&&(p.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?p.credentials="include":i.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(i){if(i.ep)return;i.ep=!0;const p=o(i);fetch(i.href,p)}};le();let j=!1,L=!1,M=!1;const R={mousedown:pe,keydown:de,touchstart:me};function F(){Object.keys(R).forEach(e=>{document.removeEventListener(e,R[e])})}function h(e){document.addEventListener(e,R[e])}function pe(){if(!j&&!M){j=!0,L=!1;const e=document.querySelector("html");e==null||e.setAttribute("data-mousenavigation","true"),e==null||e.removeAttribute("data-touchnavigation"),F(),h("touchstart"),h("keydown")}}function de(e){if(e.key==="Tab"){const n=document.querySelector("html");F(),n==null||n.removeAttribute("data-mousenavigation"),n==null||n.removeAttribute("data-touchnavigation"),j=!1,L=!1,h("touchstart"),h("mousedown")}}function me(){if(!L){j=!1,L=!0;const e=document.querySelector("html");e==null||e.setAttribute("data-touchnavigation","true"),e==null||e.removeAttribute("data-mousenavigation"),F(),h("touchstart"),h("keydown"),h("mousedown")}M=!0,setTimeout(()=>{M=!1},150)}function ce(){typeof document!="undefined"&&(h("touchstart"),h("mousedown"))}const r=V.exports.jsx,k=V.exports.jsxs,X=V.exports.Fragment;ce();const ue=({brand:e,children:n})=>r("div",{"data-testid":"core-entry",className:e,children:n}),A=s.exports.createContext({theme:"rtv"});function ke(){return s.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 334.22 90.83"},s.exports.createElement("defs",null,s.exports.createElement("style",null,".cls-1{fill:#ef4642}")),s.exports.createElement("g",{id:"Layer_2","data-name":"Layer 2"},s.exports.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},s.exports.createElement("path",{className:"cls-1",d:"M62.66 85.94C59 79 53.45 68.46 50 61.85c-1.68-3.09-3.45-6.18-5-9.21a1.91 1.91 0 0 1 .83-2.53c8-4.28 10.6-11.67 10.6-21.6 0-15.5-6.92-25.2-29-25.2H1.91A1.9 1.9 0 0 0 0 5.22v81.6a1.9 1.9 0 0 0 1.91 1.91h11.57a1.9 1.9 0 0 0 1.91-1.91v-31a1.9 1.9 0 0 1 1.91-1.91h9.83A1.9 1.9 0 0 1 28.84 55L45 87.67a1.9 1.9 0 0 0 1.71 1.06H61a1.91 1.91 0 0 0 1.66-2.79zM28.87 39.11H17.3a1.91 1.91 0 0 1-1.91-1.91V20.05a1.9 1.9 0 0 1 1.91-1.91h11.57c9.82 0 11.26 4.57 11.26 10.37s-1.44 10.6-11.26 10.6zM83.13 0a9.1 9.1 0 0 0-6.69 2.73 9.11 9.11 0 0 0-2.74 6.7 9.09 9.09 0 0 0 2.74 6.7 9.56 9.56 0 0 0 13.38 0 9.09 9.09 0 0 0 2.74-6.7 9.11 9.11 0 0 0-2.74-6.7A9.1 9.1 0 0 0 83.13 0zM89 28.76H70.86a1.91 1.91 0 0 0-1.86 1.9V42.5a1.92 1.92 0 0 0 1.91 1.91h4.47v42.41a1.9 1.9 0 0 0 1.91 1.91H89a1.9 1.9 0 0 0 1.91-1.91V30.66a1.9 1.9 0 0 0-1.91-1.9zM332.31 3.42H321a2.6 2.6 0 0 0-2.47 1.78l-20.18 61a1.91 1.91 0 0 1-3.62 0l-20.21-61a2.6 2.6 0 0 0-2.47-1.78H204a1.9 1.9 0 0 0-1.9 1.9v9.5a1.9 1.9 0 0 0 1.9 1.9h21.14a1.91 1.91 0 0 1 1.9 1.91V86.8a1.91 1.91 0 0 0 1.96 1.91h12.5a1.91 1.91 0 0 0 1.91-1.91V18.63a1.92 1.92 0 0 1 1.88-1.91h14.87A1.92 1.92 0 0 1 262 18l23.85 69a2.6 2.6 0 0 0 2.46 1.75h16.85a1.92 1.92 0 0 0 1.81-1.3l27.15-81.52a1.91 1.91 0 0 0-1.81-2.51zM138.58 51.55a1.9 1.9 0 0 1 .26-2.3L155.36 32a1.9 1.9 0 0 0-1.36-3.24h-13.3a1.9 1.9 0 0 0-1.44.66l-13.1 15.14a1.9 1.9 0 0 1-3.35-1.24v-38a1.91 1.91 0 0 0-1.91-1.9h-11.79a1.91 1.91 0 0 0-1.91 1.9v81.5a1.91 1.91 0 0 0 1.91 1.91h11.79a1.91 1.91 0 0 0 1.91-1.91v-21a1.89 1.89 0 0 1 .52-1.31l1.58-1.68a1.92 1.92 0 0 1 3.09.44l12.56 24.4a1.9 1.9 0 0 0 1.69 1h15.16a1.91 1.91 0 0 0 1.64-2.88zM191.48 52l-1.26-.49c-6.93-2.74-10-4.28-9.88-7.56s2.6-5.42 6.64-5.42c3 0 6.44 1.34 11.44 4.49a2.76 2.76 0 0 0 3.5-.46l4.38-6.11a2.72 2.72 0 0 0 .7-2.15 2.67 2.67 0 0 0-1-1.91A32 32 0 0 0 186.7 26c-11.75.18-20.6 8.11-20.6 18.44 0 12.23 9.88 16.76 19.15 20.06 7.71 2.59 10.28 4.11 10.28 8 0 3.61-3 5.77-8.12 5.77-4.39 0-9.41-2.16-13.43-5.76a2.75 2.75 0 0 0-3.81.15l-4.41 6a2.79 2.79 0 0 0-.77 2 2.68 2.68 0 0 0 .88 1.89 31.9 31.9 0 0 0 21.37 8.3c10.89 0 22.62-6.18 22.62-19.74 0-12-8.11-15.11-18.38-19.11z"}))))}const ge=()=>k("svg",{viewBox:"0 0 141 66",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img",children:[r("title",{children:"Strim hjem"}),r("rect",{width:"140.25",height:"66",rx:"16.5",fill:"#FAED6F"}),r("path",{d:"M82.9687 27.9346H76.3885V54.6844H82.9687V27.9346ZM116.193 27.4C112.715 27.4 109.078 29.1127 107.204 32.482C105.277 29.1127 102.442 27.4 98.3236 27.4C91.5817 27.4 87.7834 31.1983 87.7834 39.1711V54.6844H94.4692V39.3823C94.4692 35.4223 96.3964 33.0694 99.4984 33.0694C102.442 33.0694 104.099 35.2639 104.099 39.1678V54.6811H110.573V39.1711C110.573 35.2672 112.444 33.0727 115.655 33.0727C118.49 33.0727 120.308 35.1583 120.308 38.9038V54.6844H126.674V39.1711C126.677 31.1983 122.664 27.4 116.193 27.4ZM79.8667 17.665C77.4049 17.665 75.6394 19.3249 75.6394 21.7306C75.6394 24.0307 77.4049 25.5817 79.8667 25.5817C82.2757 25.5817 84.0412 24.0307 84.0412 21.7306C84.0379 19.3216 82.2724 17.665 79.8667 17.665ZM24.2815 27.4C17.9686 27.4 14.2231 30.6637 14.2231 35.7985C14.2231 39.4912 16.6849 42.3787 21.658 43.3951L27.8092 44.6788C29.6275 45.0517 30.271 45.9097 30.271 46.9789C30.271 48.5299 28.6672 49.4935 26.311 49.4935C22.5127 49.4935 19.1434 48.3715 16.6816 46.606L13.4707 51.4207C15.2362 52.7044 19.5163 54.9517 24.9184 54.9517C31.5514 54.9517 36.3133 51.7408 36.3133 46.2298C36.3133 43.1278 34.1749 40.2898 29.8948 39.3823L22.8856 37.9369C21.1729 37.564 20.1565 36.6532 20.1565 35.4751C20.1565 33.9241 21.1201 32.9605 24.2749 32.9605C26.8423 32.9605 29.4658 33.604 31.7659 35.4223L34.5478 30.6076C32.1982 28.6837 28.1326 27.4 24.2815 27.4ZM48.0349 21.7834H41.722V28.6837H37.069V33.8185H41.6692V43.6096C41.6692 49.8697 44.0221 53.8825 50.2822 55.1134L52.1533 49.2295C49.2658 48.6421 48.0877 46.8766 48.0877 43.504V33.8218H53.4898V28.6837H48.0316V21.7834H48.0349ZM67.8283 27.4C60.4462 27.4 56.8063 31.5184 56.8063 39.2767V54.6844H63.2248V39.3823C63.2248 35.4223 65.0431 33.0694 68.0923 33.0694C69.2143 33.0694 70.3396 33.3895 71.356 34.033L73.4416 28.6837C71.9467 27.8818 69.8611 27.4 67.8283 27.4Z",fill:"#004B50"})]}),ve=()=>{const{theme:e}=s.exports.useContext(A);return r("header",{className:"portal-header",children:r(ne,{to:"/",title:"Hjem",children:e==="rtv"?r(ke,{}):r(ge,{})})})},T=s.exports.forwardRef((c,P)=>{var B=c,{children:e,buttonType:n,buttonStyle:o,type:a="button",isLoading:i=!1,postfix:p,icon:d,iconClass:x="",lightBackground:u=!1,disabled:b,className:D="","aria-busy":N}=B,f=_(B,["children","buttonType","buttonStyle","type","isLoading","postfix","icon","iconClass","lightBackground","disabled","className","aria-busy"]);return k("button",y(l({type:a},f),{ref:P,disabled:i||b,"aria-busy":i||N,className:`${o} rds-button__shared rds-button__shared--${n} rds-button--${n} ${i?"rds-button--loading":""} ${u?"rds-light":""} ${D}`,children:[d&&r("span",{"data-testid":"rds-button__icon",className:`rds-button__icon ${x}`,children:r(d,{})}),e,!!p&&o!=="rds-icon-button"&&r("span",{className:"rds-button__postfix",children:p})]}))});T.displayName="BaseButton";const H=s.exports.forwardRef((e,n)=>r(T,l({buttonStyle:"rds-button",buttonType:"primary",ref:n},e)));H.displayName="PrimaryButton";const he=s.exports.forwardRef((e,n)=>r(T,l({buttonStyle:"rds-button",buttonType:"secondary",ref:n},e)));he.displayName="SecondaryButton";const xe=s.exports.forwardRef((e,n)=>r(T,l({buttonStyle:"rds-button",buttonType:"tertiary",ref:n},e)));xe.displayName="TertiaryButton";const fe="modulepreload",K={},ye="/rtv-ds/",m=function(n,o){return!o||o.length===0?n():Promise.all(o.map(a=>{if(a=`${ye}${a}`,a in K)return;K[a]=!0;const i=a.endsWith(".css"),p=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${p}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":fe,i||(d.as="script",d.crossOrigin=""),d.href=a,document.head.appendChild(d),i)return new Promise((x,u)=>{d.addEventListener("load",x),d.addEventListener("error",u)})})).then(()=>n())};const _e="@rikstv/shared-components-root",be="0.0.1",Ee={dev:"npm run dev --workspace=portal","dev:clean":"npm run dev:clean --workspace=portal",build:"npm run build --workspace=shared-components --workspace=portal",serve:"npm run serve --workspace=portal",test:"npm run test --workspace=shared-components","test:open":"npm run test:open --workspace=shared-components",lint:"eslint --ext .ts,.tsx,.js .","lint:fix":"eslint --fix --ext .ts,.tsx,.js .",prepare:"husky install",precommit:"lint-staged",release:"npm publish --access public --workspace shared-components"},Ne=["./portal","./shared-components"],Ce={react:"^17.0.2","react-dom":"^17.0.2",sass:"^1.43.4","vite-react-jsx":"^1.1.2"},je={"@mdx-js/mdx":"^1.6.22","@testing-library/react":"^12.1.2","@types/babel__core":"^7.1.16","@types/mdx-js__react":"^1.5.5","@types/node":"^16.11.7","@types/react":"^17.0.35","@types/react-dom":"^17.0.11","@typescript-eslint/eslint-plugin":"^5.4.0","@typescript-eslint/parser":"^5.4.0","@vitejs/plugin-react-refresh":"^1.3.6",eslint:"^8.2.0","eslint-config-prettier":"^8.3.0","eslint-config-standard":"^16.0.3","eslint-plugin-import":"^2.25.3","eslint-plugin-jsx-a11y":"^6.5.1","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^5.1.1","eslint-plugin-react":"^7.27.1",husky:"^7.0.4","lint-staged":"^12.1.2",prettier:"^2.4.1",typescript:"^4.5.2",vite:"^2.6.14"},Le={node:">=14",npm:">=7"},Te={type:"git",url:"git+https://github.com/lfbergee/rtv-ds.git"},we="https://lfbergee.github.io/rtv-ds/#/";var De={name:_e,version:be,private:"true",scripts:Ee,"lint-staged":{"{portal,shared-components}/src/**/*.{js,ts,tsx,json}":["eslint --fix"],"{portal,shared-components}/src/**/*.{js,ts,tsx,json,scss,css}":["prettier --write"]},workspaces:Ne,dependencies:Ce,devDependencies:je,engines:Le,repository:Te,homepage:we};const Pe=()=>r("a",{target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub repository",href:De.repository.url.replace("git+","").replace(".git",""),className:"portal-external-link portal-external-link--github"}),Ve=()=>r("a",{target:"_blank",rel:"noopener noreferrer","aria-label":"npm package",href:"https://www.npmjs.com/package/@rikstv/shared-components",className:"portal-external-link portal-external-link--npm"}),Se=({children:e})=>r("div",{className:"portal-external-link__container",children:e}),Z=[new Promise(e=>setTimeout(()=>e({default:[]})))],Me=s.exports.createContext({types:Z}),g=(e,n,...o)=>({Page:()=>k(Me.Provider,{value:{types:o||Z},children:[k(Se,{children:[r(Pe,{}),r(Ve,{})]}),r(n,{})]}),displayName:e}),Re=s.exports.lazy(()=>m(()=>import("./accordion.f9d02d34.js"),["assets/accordion.f9d02d34.js","assets/vendor.54e71f68.js"])),Fe=s.exports.lazy(()=>m(()=>import("./core.4f36eaae.js"),["assets/core.4f36eaae.js","assets/vendor.54e71f68.js"])),Ae=s.exports.lazy(()=>m(()=>import("./spacing.871b3236.js"),["assets/spacing.871b3236.js","assets/vendor.54e71f68.js","assets/Example.685f93b5.js","assets/TextField.7308202c.js","assets/TextField.39024166.css","assets/FieldSet.5951a705.js","assets/FieldSet.1de8d0f4.css"])),He=s.exports.lazy(()=>m(()=>import("./colors.7a5ff037.js"),["assets/colors.7a5ff037.js","assets/vendor.54e71f68.js","assets/Example.685f93b5.js","assets/TextField.7308202c.js","assets/TextField.39024166.css","assets/FieldSet.5951a705.js","assets/FieldSet.1de8d0f4.css"])),Be=s.exports.lazy(()=>m(()=>import("./button.8f62c83d.js"),["assets/button.8f62c83d.js","assets/vendor.54e71f68.js"])),Ie=s.exports.lazy(()=>m(()=>import("./iconButton.2951eea5.js"),["assets/iconButton.2951eea5.js","assets/vendor.54e71f68.js"])),$e=s.exports.lazy(()=>m(()=>import("./textfield.9c3f0c2b.js"),["assets/textfield.9c3f0c2b.js","assets/vendor.54e71f68.js"])),Oe=s.exports.lazy(()=>m(()=>import("./radioToggle.8e24b752.js"),["assets/radioToggle.8e24b752.js","assets/vendor.54e71f68.js","assets/FieldSet.5951a705.js","assets/FieldSet.1de8d0f4.css"])),ze=s.exports.lazy(()=>m(()=>import("./typography.6b1104a8.js"),["assets/typography.6b1104a8.js","assets/vendor.54e71f68.js"])),Xe=s.exports.lazy(()=>m(()=>import("./toggleButton.dc5b56fb.js"),["assets/toggleButton.dc5b56fb.js","assets/vendor.54e71f68.js"])),Ke=m(()=>import("./Button_type.68134c0d.js"),[]),Ze=m(()=>import("./IconButton_type.a53565fb.js"),[]),qe=m(()=>import("./TextField_type.7b4dc31b.js"),[]),Ue=m(()=>import("./ToggleButton_type.2402be99.js"),[]),We=m(()=>import("./RadioToggle_type.a26cb524.js"),[]),Ge=m(()=>import("./FieldSet_type.dcade952.js"),[]),Je=m(()=>import("./Typography_type.6f01f711.js"),[]),Qe=m(()=>import("./Accordion_type.6e340abb.js"),[]),E=[g("button",Be,Ke),g("icon button",Ie,Ze),g("toggle button",Xe,Ue),g("radio toggle",Oe,We,Ge),g("core",Fe),g("spacing",Ae),g("colors",He),g("typografi",ze,Je),g("accordion",Re,Qe),g("textfield",$e,qe)].sort((e,n)=>e.displayName.localeCompare(n.displayName)),Ye=()=>r(X,{children:E.map(({Page:e,displayName:n})=>r(e,{},n))}),et={},tt="wrapper";function q(o){var a=o,{components:e}=a,n=_(a,["components"]);return t(tt,y(l(l({},et),n),{components:e,mdxType:"MDXLayout"}),t("h1",null,"Velkommen til RiksTV Shared Components"),t("p",null,`Her er det et fint sted \xE5 v\xE6re,
og bedre skal det bli!`))}q.isMDXComponent=!0;const nt={},rt="wrapper";function U(o){var a=o,{components:e}=a,n=_(a,["components"]);return t(rt,y(l(l({},nt),n),{components:e,mdxType:"MDXLayout"}),t("h1",null,"Kom i gang"),t("ol",null,t("li",{parentName:"ol"},t("inlineCode",{parentName:"li"},"$")," ",t("inlineCode",{parentName:"li"},"npm install @rikstv/shared-components")),t("li",{parentName:"ol"},"Pakk inn appen din i \xF8nsket merkevare, ",t("inlineCode",{parentName:"li"},"<StrimProvider> <App /> <StrimProvider>")," eller ",t("inlineCode",{parentName:"li"},"<RiksTVProvider> <App /> <RiksTVProvider>")),t("li",{parentName:"ol"},"Importer rot stilen ",t("inlineCode",{parentName:"li"},'import "@rikstv/shared-components/dist/core/strim.css"')," eller ",t("inlineCode",{parentName:"li"},'import "@rikstv/shared-components/dist/core/rikstv.css"')),t("li",{parentName:"ol"},"Importer stilen til komponentene du trenger feks ",t("inlineCode",{parentName:"li"},'import "@rikstv/shared-components/dist/button/Button.css"')),t("li",{parentName:"ol"},"Legg til fontene du trenger, kan hentes fra portalen")),t("pre",null,t("code",{parentName:"pre",className:"language-tsx"},`import {
    StrimProvider,
    PrimaryButton,
    DisplayTitle,
} from '@rikstv/shared-components";

import '@rikstv/shared-components/dist/core/Strim.css";
import '@rikstv/shared-components/dist/button/Button.css";
import '@rikstv/shared-components/dist/typography/Typography.css";

const Root = () => (
    <StrimProvider>
        <main>
            <DisplayTitle>
                MyApp
            </DisplayTitle>

            <PrimaryButton>
                Hello world
            </PrimaryButton>
        </main>
    </StrimProvider>
)
`)))}U.isMDXComponent=!0;const ot={},at="wrapper";function W(o){var a=o,{components:e}=a,n=_(a,["components"]);return t(at,y(l(l({},ot),n),{components:e,mdxType:"MDXLayout"}),t("h1",null,"Utvikle til komponent biblioteket"),t("p",null,"Det er litt forskjell p\xE5 \xE5 utvikle bibliotekskode og klient kode. Vi pr\xF8ver \xE5 ikke gj\xF8re for mye ut av det her, men noen ting er viktige \xE5 tenke p\xE5."),t("h2",null,"Milj\xF8 og oppsett"),t("p",null,"Krav:"),t("ul",null,t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"npm 7")," eller nyere"),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"node 14")," eller nyere")),t("p",null,"Hvordan:"),t("ul",null,t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"npm install")),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"npm run dev"))),t("h2",null,"Registrere ny komponent"),t("p",null,"N\xE5r du lager en ny komponent er det noen ting som er viktige \xE5 gj\xF8re for at den skal bli med i pakken og dokumentert i portalen."),t("ol",null,t("li",{parentName:"ol"},"Lag ny mappe inne i ",t("inlineCode",{parentName:"li"},"shared-components")),t("li",{parentName:"ol"},"Lag komponenten din, bruk named export"),t("li",{parentName:"ol"},"Legg til komponenten i ",t("inlineCode",{parentName:"li"},"shared-components/src/index.ts")," ogs\xE5 som named export"),t("li",{parentName:"ol"},"Lag en ",t("inlineCode",{parentName:"li"},".mdx")," fil med dokumentasjonen sammen med komponenten din"),t("li",{parentName:"ol"},"Registerer komponenten og eventuelt typen i ",t("inlineCode",{parentName:"li"},"portal/src/config.ts"))),t("h2",null,"Krav til komponentene"),t("p",null,"Vi skal v\xE6re pragmatiske her, men det er viktig \xE5 holde et h\xF8yt nok kvalitetsniv\xE5 p\xE5 komponentene siden de taes i bruk i mange forskjellige prosjekt."),t("ol",null,t("li",{parentName:"ol"},"Snakk med de andre teamene f\xF8r man lager ny komponent"),t("li",{parentName:"ol"},"Alle komponenter tilbyr referanse til det viktige underliggende komponenten. Feks i ",t("inlineCode",{parentName:"li"},"<Input />")," skal det v\xE6re en ",t("inlineCode",{parentName:"li"},"forwardRef")," som gir referansen til ",t("inlineCode",{parentName:"li"},"<input>")," elementet"),t("li",{parentName:"ol"},"Universell utforming er ivaretatt"),t("li",{parentName:"ol"},"Ytelse er ivaretatt"),t("li",{parentName:"ol"},"N\xF8dvendig funksjonalitet er testet"),t("li",{parentName:"ol"},"Dekker teamenes behov, men b\xF8r ikke l\xF8se problemer ingen har behov for at l\xF8ses"),t("li",{parentName:"ol"},"Foretrekk HTML/CSS over Javascript"),t("li",{parentName:"ol"},"Skriv ut typene i interface definisjonen isteden for \xE5 definere typene utenfor, gir bedre dokumentasjon i portalen")),t("h2",null,"Krav til stil"),t("ol",null,t("li",{parentName:"ol"},"Hold det ryddig"),t("li",{parentName:"ol"},"Husk p\xE5 universell utforming"),t("li",{parentName:"ol"},"Kjerneverdier som farger og spacing er ALLTID definert i ",t("inlineCode",{parentName:"li"},"core"),", aldri i komponent stil"),t("li",{parentName:"ol"},"Kjerneverdier prefixes med ",t("inlineCode",{parentName:"li"},"--rds")," skal alltid finnes i begge brands"),t("li",{parentName:"ol"},"LightMode skal kunne settes direkte p\xE5 komponenten, eller ved \xE5 v\xE6re et child av klassen ",t("inlineCode",{parentName:"li"},"rds-light"))),t("h2",null,"Dokumentasjon"),t("p",null,"Vi dokumenterer komponentene med mdx. Komponentene tilgjengeliggj\xF8res for markdown parseren automatisk n\xE5r du eksporterer den fra ",t("inlineCode",{parentName:"p"},"index.ts"),` i shared-components.
Les mer om `,t("a",{parentName:"p",href:"https://mdxjs.com/"},"mdx her"),`. Tldr; er at mdx er et superset av markdown som st\xF8tter React. Vi oversetter markdown til \xE5 bruke v\xE5re typografi komponenter.
Hvis du benytter deg av markdown som ikke er mappet opp til en av v\xE5re komponenter, kan det gj\xF8res i `,t("inlineCode",{parentName:"p"},"/portal/src/mdxComponents/index.tsx"),`, er oversetter vi fra default HTML elementer til v\xE5re utganger av de elementene.
Man kan vise frem kode p\xE5 fire m\xE5ter i v\xE5rt oppsett.`),t("p",null,"En linje lager en inline ",t("inlineCode",{parentName:"p"},"<code>")," blokk. Praktisk for sm\xE5 forklaringer og utheve enkelt verdier."),t("pre",null,t("code",{parentName:"pre"},"`en linje kode`\n")),t("p",null,"Flere linjers kode kan brukes hvis man skal beskrive flere p\xE5f\xF8lgende steg eller korte kodesnutter"),t("pre",null,t("code",{parentName:"pre"},`    \`\`\`tsx
    flere
    linjer
    kode
`)),t("p",null,`Flere linjers live-kodeblokk tar inn en React komponent og gir den tilbake i en fungerende versjon med en kode editor, s\xE5 man kan gj\xF8re endringer i koden og se resultatet direkte.
Brukes til \xE5 vise frem komponentene i all sin prakt. Den vil ogs\xE5 lage en accordion med generert stil og en accordion med typene til komponeten hvis det er importert for den komponenten i `,t("inlineCode",{parentName:"p"},"config.ts"),"."),t("pre",null,t("code",{parentName:"pre"},"    ```tsx live=true\n    <SomeComponent />\n")),t("p",null,"Tilsvarende som over, men denne vil ikke ha live editering og vil vise kodeblokken under. Brukes til \xE5 vise varianter eller hvis man vil vise samme komponent flere ganger p\xE5 en side."),t("pre",null,t("code",{parentName:"pre"},"    ```tsx render=true\n    <SomeComponent />\n")),t("h2",null,"Tester"),t("p",null,`Vi \xF8nsker kvalitet i komponentene og at det stabilt for de som tar de i bruk. Derfor er det smart \xE5 skrive noen gode tester for komponenten. Vi \xF8nsker ikke \xE5 overdrive her og skrive tester for testenes del.
S\xE5 finn et fornuftig niv\xE5 hvor n\xF8kkelfunksjonaliteten til komponenten er ivaretatt. Imotsetning til Jest eller Mocha de fleste er vant med fra klient-prosjekt bruker Cypress som testverkt\xF8y her.
Det gj\xF8r vi for \xE5 ha et testmilj\xF8 som er s\xE5 tett som mulig til produksjon. Det gj\xF8r ogs\xE5 at man kan teste komponeter som bruker browser API som feks IntersectionObserver.
Det muliggj\xF8r visuell regresjons testing p\xE5 sikt. Ulempen er at testene blir noe tregere enn via en mer tradisjonell testrunner. Du kan bruke @testing/libary-stil for \xE5 finne elementer.
Det er ogs\xE5 lagt opp en customMount funksjon for \xE5 kunne rendere komponenten i begge brands.`),t("h2",null,"Release"),t("p",null,"Ny release lages ved \xE5 oppdatere versjonsnummeret i ",t("inlineCode",{parentName:"p"},"shared-components/package.json")," og merge den til master med commit meldingen ",t("inlineCode",{parentName:"p"},"chore: {descripe changes} [release]"),", release til npm skjer automatisk."),t("h2",null,"Troubleshooting"),t("p",null,"Hvis ",t("inlineCode",{parentName:"p"},"npm install")," feiler, sjekk at du har minst ",t("inlineCode",{parentName:"p"},"npm 7.0.0")," installert. ",t("inlineCode",{parentName:"p"},"npm i -g npm")," for \xE5 oppdatere. Vi bruker ",t("inlineCode",{parentName:"p"},"npm workspaces"),", derfor trenger vi minst denne versjonen."))}W.isMDXComponent=!0;const w=(e,n,o)=>({path:e,element:n,name:o}),G=[w("/",r(q,{}),"Hjem"),w("/kom-i-gang",r(U,{}),"Kom i gang"),w("/lage-komponenter",r(W,{}),"Lage komponenter")],J=[w("/alle",r(Ye,{}),"alle")],st=[...G,...J],it=e=>{const[n,o]=s.exports.useState(!1);return s.exports.useEffect(()=>{const a=window.matchMedia(e);a.matches!==n&&o(a.matches);const i=()=>{o(a.matches)};return a.addEventListener("change",i),()=>a.removeEventListener("change",i)},[n,e]),n};const lt=()=>{const[e,n]=s.exports.useState(""),[o,a]=s.exports.useState(!1),[i,p]=s.exports.useState(E),{theme:d,setTheme:x}=s.exports.useContext(A),u=it("(max-width: 768px)");s.exports.useEffect(()=>{p(e===""?E:E.filter(({displayName:c})=>c.includes(e)))},[e,p]);const b=()=>n(""),D=c=>n(c.target.value),N=()=>a(!o),f=()=>a(!o),P=()=>{x&&(x(d==="rtv"?"strm":"rtv"),f())};return k(X,{children:[r("button",{onClick:N,className:`portal-menu-btn ${o?"portal-menu-btn--close":"portal-menu-btn--open"}`,title:o?"Lukk meny":"\xC5pne meny"}),k("nav",{className:`portal-navigation ${o?"portal-navigation--show-mobile":""}`,children:[r("ul",{className:"portal-navigation__list",children:G.map(c=>r("li",{className:"portal-navigation__list__item",children:r(S,{className:"rds-link rds-link--light",tabIndex:u&&!o?-1:0,onClick:f,exact:!0,to:c.path.replace(" ","-"),children:c.name})},c.path))}),k("label",{className:"portal-navigation__search",children:["Filter komponenter",r("input",{tabIndex:u&&!o?-1:0,className:"portal-navigation__search__input",type:"text",onChange:D,value:e})]}),k("ul",{className:"portal-navigation__list",children:[J.map(c=>r("li",{className:"portal-navigation__list__item",children:r(S,{className:"rds-link rds-link--light",tabIndex:u&&!o?-1:0,onClick:f,exact:!0,to:c.path.replace(" ","-"),children:c.name})},c.path)),i.map(({displayName:c})=>r("li",{className:"portal-navigation__list__item",children:r(S,{className:"rds-link rds-link--light",tabIndex:u&&!o?-1:0,onClick:f,exact:!0,to:`/${c.replace(" ","-")}`,children:c})},c)),i.length===0&&k("li",{className:"portal-navigation__list__item",children:["Ingen komponenter matcher ",e," \u{1F92C}",r(H,{tabIndex:u&&!o?-1:0,type:"button",onClick:b,children:"T\xF8m filter"})]})]}),r("div",{className:"portal-navigation__toggle",children:r(H,{tabIndex:u&&!o?-1:0,onClick:P,children:`Bytt til ${d==="rtv"?"Strim":"RiksTV"}`})})]}),o&&r("button",{onClick:N,className:"portal-menu-bottom-btn",title:"Lukk meny"})]})};const v=e=>s.exports.forwardRef((x,d)=>{var u=x,{children:n,lookLike:o=e.lookLike,className:a="",lightBackground:i=!1}=u,p=_(u,["children","lookLike","className","lightBackground"]);const b=e.semanticElement;return r(b,y(l({className:`rds-${o} ${i?`rds-${o}--light`:""} ${a}`},p),{ref:d,children:n}))}),ft=v({semanticElement:"h1",lookLike:"display-title"}),pt=v({semanticElement:"h1",lookLike:"title-1"}),dt=v({semanticElement:"h2",lookLike:"title-2"}),mt=v({semanticElement:"h3",lookLike:"title-3"}),ct=v({semanticElement:"h4",lookLike:"title-4"}),ut=v({semanticElement:"p",lookLike:"body"}),yt=v({semanticElement:"p",lookLike:"sub-body"}),_t=v({semanticElement:"span",lookLike:"tag"}),Q=v({semanticElement:"strong",lookLike:"bold"}),bt=v({semanticElement:"span",lookLike:"meta"});const kt=s.exports.lazy(()=>m(()=>import("./CodeBlock.73e57d69.js"),["assets/CodeBlock.73e57d69.js","assets/CodeBlock.1c6feb63.css","assets/vendor.54e71f68.js","assets/TextField.7308202c.js","assets/TextField.39024166.css","assets/FieldSet.5951a705.js","assets/FieldSet.1de8d0f4.css"])),gt={h1:e=>r(pt,l({},e)),h2:e=>r(dt,l({},e)),h3:e=>r(mt,l({},e)),h4:e=>r(ct,l({},e)),p:e=>r(ut,l({className:"portal-max-width"},e)),b:e=>r(Q,l({},e)),strong:e=>r(Q,l({},e)),pre:e=>r("div",l({},e)),a:e=>r("a",l({style:e.className?{}:{color:"currentColor"}},e)),ul:e=>r("ul",l({className:"portal-max-width"},e)),li:e=>r("li",l({className:"portal-max-width portal-li rds-body"},e)),code:kt};const vt=()=>{const[e,n]=s.exports.useState("strm");return r(A.Provider,{value:{theme:e,setTheme:n},children:r(ue,{brand:e,children:r(re,{children:k("div",{className:"portal-layout",children:[r(ve,{}),r(lt,{}),r("main",{children:r(s.exports.Suspense,{fallback:"Laster innhold",children:r(oe,{components:gt,children:k(ae,{children:[st.map(o=>r(z,l({},o),o.path)),E.map(({displayName:o,Page:a})=>r(z,{path:`/${o.replace(" ","-")}`,element:r(a,{})},o))]})})})})]})})})})};se.render(r(ie.StrictMode,{children:r(vt,{})}),document.getElementById("root"));export{Q as B,ue as C,ft as D,X as F,mt as H,bt as M,H as P,yt as S,xe as T,r as a,ut as b,T as c,he as d,pt as e,dt as f,ct as g,_t as h,Me as i,k as j};