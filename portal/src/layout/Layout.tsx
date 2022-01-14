import { Outlet } from "react-router-dom";

import { Header } from "../header/Header";

export const Layout = () => (
  <div className="portal-layout">
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);
