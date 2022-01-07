import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";

import { Header } from "../header/Header";
import { mdxComponents } from "../mdxComponents";
import { Navigation } from "../navigation/Navigation";

export const Layout = () => (
  <div className="portal-layout">
    <Header />
    <Navigation />
    <main>
      <Suspense fallback="Laster innhold">
        <MDXProvider components={mdxComponents}>
          <Outlet />
        </MDXProvider>
      </Suspense>
    </main>
  </div>
);
