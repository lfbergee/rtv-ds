var e=Object.defineProperty,n=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(n,t,o)=>t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,s=(e,n)=>{for(var t in n||(n={}))r.call(n,t)&&a(e,t,n[t]);if(o)for(var t of o(n))l.call(n,t)&&a(e,t,n[t]);return e};import{c as u}from"./vendor.80a0cc82.js";const c={};function g(e){var a,g=e,{components:i}=g,p=((e,n)=>{var t={};for(var a in e)r.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))n.indexOf(a)<0&&l.call(e,a)&&(t[a]=e[a]);return t})(g,["components"]);return u("wrapper",(a=s(s({},c),p),n(a,t({components:i,mdxType:"MDXLayout"}))),u("h1",null,"ToggleButton"),u("p",null,"ToggleButton er en fancy checkbox. Den kan brukes til feks å markere og endre om et element er i en gitt status.\nHvis du har mer enn en toggle i samme view anbefales det å spesifikt sette id på komponenten."),u("pre",null,u("code",s({parentName:"pre"},{className:"language-tsx",metastring:"live=true",live:"true"}),"<ToggleButton>Direkte</ToggleButton>\n")),u("p",null,"Hvis du ønsker å bruke komponenten ukontrollert, men ha en start state, bruk defaultChecked-propen."),u("pre",null,u("code",s({parentName:"pre"},{className:"language-tsx",metastring:"render=true",render:"true"}),'<ToggleButton\n  id="toggle-default"\n  defaultChecked\n>\n  Direkte\n</ToggleButton>\n')),u("p",null,"Det er to måter å sette ikon, du kan enten la en toggleIcon, som tar inn ",u("inlineCode",{parentName:"p"},"checked")," som prop og render riktig basert på det.\nDenne måten er å foretrekke hvis man kan animere mellom to states i samme ikon."),u("pre",null,u("code",s({parentName:"pre"},{className:"language-tsx",metastring:"render=true",render:"true"}),'<ToggleButton\n  id="togge-icon"\n  icons={{ toggleIcon: HeartToggle }}\n>\n  Min liste\n</ToggleButton>\n')),u("p",null,"Eller du kan gi et checked-ikon og et unchecked."),u("pre",null,u("code",s({parentName:"pre"},{className:"language-tsx",metastring:"render=true",render:"true"}),'<ToggleButton\n  id="direct-icon"\n  showLabel={false}\n  icons={{ checkedIcon: Heart, uncheckedIcon: HeartUnfilled }}\n>\n  Favoritt\n</ToggleButton>\n')),u("h2",null,"Som uncontrolled component"),u("pre",null,u("code",s({parentName:"pre"},{className:"language-tsx"}),"const MyComponent = () => {\n  const ref = useRef<HTMLInputElement>(null);\n\n  <ToggleButton ref={ref} defaultValue={false}>\n    Favoritt\n  </ToggleButton>;\n};\n")),u("h2",null,"Som controlled component"),u("pre",null,u("code",s({parentName:"pre"},{className:"language-tsx"}),"const MyComponent = () => {\n  const [isChecked, setIsChecked] = useState(false);\n  const handleChange = (e) => setIsChecked(e.target.value);\n\n  <ToggleButton value={isChecked} onChange={handleChange}>\n    Favoritt\n  </ToggleButton>;\n};\n")))}g.isMDXComponent=!0;export default g;
