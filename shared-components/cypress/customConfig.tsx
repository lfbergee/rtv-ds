import { ReactNode } from "react";
import { mount } from "@cypress/react";

import "./style.scss";
import "../src/components/core/core.scss";

import "../src/components/core/rtv.scss";
import "../src/components/core/strm.scss";

export const customMount =
  (brand: "strm" | "rtv") =>
  (children: ReactNode): ReturnType<typeof mount> =>
    mount(
      <div
        className={brand}
        style={{
          backgroundColor: "var(--background-primary)",
          width: "100%",
          minHeight: "100vh",
          padding: "24px",
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>
    );

export const brands: Array<"strm" | "rtv"> = ["strm", "rtv"];
