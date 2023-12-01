import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

function Layout({ children }) {
  const location = useLocation();
  const showHeader = !location.pathname.toLowerCase().includes("/login");

  return (
    <div>
      {showHeader && <Header />}
      <main>{children}</main>
      {/* You might include a footer or other common elements here */}
    </div>
  );
}

export default Layout;
