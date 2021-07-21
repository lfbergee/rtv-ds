import { FC, useEffect, useRef, useState } from "react";
import { Bold, Body, Meta } from "../..";

const getColor = (divElement: HTMLDivElement): string => {
  const rgbString = window.getComputedStyle(divElement).getPropertyValue("background-color");
  const toHex = rgbString.split(",");
  let alphaChannel = "";
  if (toHex.length === 4) {
    alphaChannel = `, ${toHex.pop()?.replace(/[^\d.-]/g, "")}`;
  }
  const toIndividualHex = toHex.reduce((acc, curr) => {
    const temp = curr.replace(/[^\d.-]/g, "");
    const tempNum = parseFloat(temp);
    return `${acc}${tempNum.toString(16).padStart(2, "0")}`;
  }, "");
  return `#${toIndividualHex.toUpperCase()}${alphaChannel}`;
};

export const ColorSwatch: FC<{ color: string; usage?: string[] }> = ({ children, usage, color }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hex, setHex] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (ref?.current && !hex) {
      setHex(getColor(ref.current));
      setTitle(ref.current.style.backgroundColor.replace("var(", "").replace(")", ""));
    }
  }, [setHex, hex]);

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", maxWidth: "200px" }}>
      <div
        ref={ref}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: `var(${color})`,
          marginBottom: "var(--rds-spacing--16)",
          border: color === "--rds-background-primary" ? "2px solid var(--rds-background-secondary)" : "",
        }}
      ></div>
      <div style={{ textAlign: "center" }}>
        {!!hex && <Bold>{hex}</Bold>}
        <Body>{title}</Body>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {usage?.map((use) => (
            <Meta key={use}>{use}</Meta>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};
