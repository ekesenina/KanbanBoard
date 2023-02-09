import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
