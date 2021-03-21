import React from "react";
import { Route } from "react-router-dom";
import NavbarHome from "./../../components/Navbar";

function HomeLayout(props) {
  return (
    <div>
      <NavbarHome />
      {props.children}
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
