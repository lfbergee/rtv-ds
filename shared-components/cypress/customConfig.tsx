import { ReactNode } from "react";
import { mount } from "@cypress/react";

import "./style.scss";
import "../src/components/core/core.scss";

import "../src/components/core/rtv.scss";
import "../src/components/core/strm.scss";
import { RiksTVProvider, StrimProvider } from "../src/components";

export const customMount =
  (brand: "strm" | "rtv") =>
  (children: ReactNode): ReturnType<typeof mount> => {
    const C = brand === "rtv" ? RiksTVProvider : StrimProvider;
    return mount(
      <C>
        <div
          style={{
            backgroundColor: "var(--rds-background-primary)",
            width: "100%",
            minHeight: "100vh",
            padding: "24px",
            boxSizing: "border-box",
          }}
        >
          {children}
        </div>
      </C>
    );
  };
export const brands: Array<"strm" | "rtv"> = ["strm", "rtv"];
