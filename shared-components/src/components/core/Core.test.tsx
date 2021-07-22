import { StrimProvider } from "./Strim";
import { RiksTVProvider } from "./RiksTV";
import { mount } from "@cypress/react";

// @ts-ignore never mind this
const isStyleRule = (rule) => rule.type === 1;

// @ts-ignore never mind this
const isSameDomain = (styleSheet) => {
  if (!styleSheet.href) {
    return true;
  }

  return styleSheet.href.indexOf(window.location.origin) === 0;
};

const getCSSCustomPropIndex = () =>
  [...document.styleSheets].filter(isSameDomain).reduce(
    (finalArr, sheet) =>
      finalArr.concat(
        // @ts-ignore never mind this
        [...sheet.cssRules].filter(isStyleRule).reduce((propValArr, rule) => {
          // @ts-ignore never mind this
          const props = [...rule.style].filter((propName) => {
            if (propName.trim().startsWith("--rds")) {
              return [
                propName.trim(),
                // @ts-ignore never mind this
                rule.style.getPropertyValue(propName).trim(),
              ];
            }
            return undefined;
          });
          // @ts-ignore never mind this
          if (rule.selectorText !== ":root") {
            // @ts-ignore never mind this
            return { [rule.selectorText.replace(".", "")]: props };
          }
          return undefined;
        }, [])
      ),
    []
  );

it(`RiksTV should have all custom properties as Strim`, () => {
  mount(
    <div>
      <StrimProvider />
      <RiksTVProvider />
    </div>
  );
  cy.get(".strm").then(() => {
    const [{ strm }, { rtv }] = getCSSCustomPropIndex();
    // @ts-ignore never mind this
    expect(strm.length).to.equal(rtv.length);
    // @ts-ignore never mind this
    strm.forEach((prop) => expect(rtv.includes(prop)).to.equal(true, `Strim: ${prop}, missing in RiksTV`));
  });
});

it(`RiksTV should have all custom properties as Strim`, () => {
  mount(
    <div>
      <StrimProvider />
      <RiksTVProvider />
    </div>
  );
  cy.get(".strm").then(() => {
    const [{ strm }, { rtv }] = getCSSCustomPropIndex();
    // @ts-ignore never mind this
    expect(strm.length).to.equal(rtv.length);
    // @ts-ignore never mind this
    rtv.forEach((prop) => expect(strm.includes(prop)).to.equal(true, `RiksTV: ${prop}, missing in Strim`));
  });
});
