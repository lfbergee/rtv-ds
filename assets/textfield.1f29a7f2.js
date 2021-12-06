var m=Object.defineProperty,g=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var i=(t,n,r)=>n in t?m(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,o=(t,n)=>{for(var r in n||(n={}))s.call(n,r)&&i(t,r,n[r]);if(l)for(var r of l(n))u.call(n,r)&&i(t,r,n[r]);return t},d=(t,n)=>g(t,c(n));var p=(t,n)=>{var r={};for(var a in t)s.call(t,a)&&n.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&l)for(var a of l(t))n.indexOf(a)<0&&u.call(t,a)&&(r[a]=t[a]);return r};import{c as e}from"./vendor.ba92daf6.js";const b={},k="wrapper";function x(r){var a=r,{components:t}=a,n=p(a,["components"]);return e(k,d(o(o({},b),n),{components:t,mdxType:"MDXLayout"}),e("h1",null,"Input med label"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<TextField type="email" name="epost" label="E-post" />
`)),e("h1",null,"Med error message"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<TextField type="email" name="epost" label="E-post" error="Feil e-post!" />
`)),e("h1",null,"Lys bakgrunn"),e("p",null,"Denne er kun implementert for Strim per n\xE5."),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<LightMode
  style={{
    backgroundColor: "var(--surface-background)",
    padding: "var(--rds-spacing--32)",
    borderRadius: "var(--rds-roundness--default)",
  }}
>
  <TextField name="epost" type="email" label="E-post" />
</LightMode>
`)),e("p",null,"Med lightBackground attribut"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx",metastring:"live=true",live:"true"},`<div
  style={{
    backgroundColor: "var(--surface-background)",
    padding: "var(--rds-spacing--32)",
    borderRadius: "var(--rds-roundness--default)",
  }}
>
  <TextField name="epost" label="E-post" lightBackground />
</div>
`)),e("h2",null,"Controlled component"),e("p",null,`Hvis du \xF8nsker \xE5 bruke komponenten direkte som en kontrollert komponent kan det gj\xF8res
ved \xE5 gi hver `,e("inlineCode",{parentName:"p"},"Textfield")," en ",e("inlineCode",{parentName:"p"},"onChange")," handler."),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`const [value, setValue] = useState("");

const changeValue = (e) => {
  setValue(e.target.value);
};

return <TextField name="controlled-textfield" label="Brukernavn" onChange={changeValue}></TextField>;
`)),e("h2",null,"Uncontrolled component"),e("p",null,"Den kan ogs\xE5 brukes som en ukontrollert komponent. Du kan gi referanse til TextField."),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`const targetRef = useRef(null);

return <TextField type="email" label="E-post" error="Feil epost!" ref={targetRef} />;
`)),e("h2",null,"Uncontrolled with react-hook-form"),e("p",null,"Den kan brukes sammen med et form-bibliotek som ",e("inlineCode",{parentName:"p"},"react-hook-form"),`.
Da register du hvert enkelt TextField med register funksjonen.`),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`const { register, handleSubmit } = useForm();
const onSubmit = (data) => console.log(data);

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <TextField {...register(email-input)} type="email" label="E-post" />
    <PrimaryButton type="submit">Send inn</PrimaryButton>
  </form>
);
`)))}x.isMDXComponent=!0;export{x as default};
