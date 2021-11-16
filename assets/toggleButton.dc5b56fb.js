var i=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var g=(t,n,o)=>n in t?i(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,a=(t,n)=>{for(var o in n||(n={}))s.call(n,o)&&g(t,o,n[o]);if(l)for(var o of l(n))u.call(n,o)&&g(t,o,n[o]);return t},c=(t,n)=>m(t,p(n));var d=(t,n)=>{var o={};for(var r in t)s.call(t,r)&&n.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&l)for(var r of l(t))n.indexOf(r)<0&&u.call(t,r)&&(o[r]=t[r]);return o};import{c as e}from"./vendor.54e71f68.js";const k={},h="wrapper";function f(o){var r=o,{components:t}=r,n=d(r,["components"]);return e(h,c(a(a({},k),n),{components:t,mdxType:"MDXLayout"}),e("h1",null,"ToggleButton"),e("p",null,`ToggleButton er en fancy checkbox. Den kan brukes til feks \xE5 markere og endre om et element er i en gitt status.
Hvis du har mer enn en toggle i samme view anbefales det \xE5 spesifikt sette id p\xE5 komponenten.`),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<ToggleButton>Direkte</ToggleButton>
`)),e("p",null,"Hvis du \xF8nsker \xE5 bruke komponenten ukontrollert, men ha en start state, bruk defaultChecked-propen."),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"render=true",render:"true"},`<ToggleButton
  id="toggle-default"
  defaultChecked
>
  Direkte
</ToggleButton>
`)),e("p",null,"Det er to m\xE5ter \xE5 sette ikon, du kan enten la en toggleIcon, som tar inn ",e("inlineCode",{parentName:"p"},"checked"),` som prop og render riktig basert p\xE5 det.
Denne m\xE5ten er \xE5 foretrekke hvis man kan animere mellom to states i samme ikon.`),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"render=true",render:"true"},`<ToggleButton
  id="togge-icon"
  icons={{ toggleIcon: HeartToggle }}
>
  Min liste
</ToggleButton>
`)),e("p",null,"Eller du kan gi et checked-ikon og et unchecked."),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"render=true",render:"true"},`<ToggleButton
  id="direct-icon"
  showLabel={false}
  icons={{ checkedIcon: Heart, uncheckedIcon: HeartUnfilled }}
>
  Favoritt
</ToggleButton>
`)),e("h2",null,"Som uncontrolled component"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`const MyComponent = () => {
  const ref = useRef<HTMLInputElement>(null);

  <ToggleButton ref={ref} defaultValue={false}>
    Favoritt
  </ToggleButton>;
};
`)),e("h2",null,"Som controlled component"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`const MyComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => setIsChecked(e.target.value);

  <ToggleButton value={isChecked} onChange={handleChange}>
    Favoritt
  </ToggleButton>;
};
`)))}f.isMDXComponent=!0;export{f as default};
