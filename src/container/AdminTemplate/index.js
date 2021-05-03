import React from "react";
import { Route } from "react-router-dom";
import NavbarAdmin from "./../../components/NavbarAdmin";
import { Redirect } from "react-router-dom";
import SidebarAmin from "../../components/SidebarAmin";


import "./../../assets/styles/adminAssets/css/sidebar.css";
import "./../../assets/styles/adminAssets/css/movie-style.css";
import "./../../assets/styles/adminAssets/css/modal.css";
import "./../../assets/styles/adminAssets/css/userProfile.css";
import "./../../assets/styles/adminAssets/css/paper-dashboard.css";
import "./../../assets/styles/adminAssets/vendors/css/vendor.bundle.base.css";
import "./../../assets/styles/adminAssets/vendors/mdi/css/materialdesignicons.min.css";


function AdminLayout(props) {
  return (
    <div className="body-admin">
      <NavbarAdmin />

      <div className="d-flex">
        <div>
          <SidebarAmin />
        </div>
        <div className="dashboard-template" style={{ background: '#f5f6f8' }}>
          {props.children}
        </div>
      </div>

    </div>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        }

        //Redirect về trang Auth
        return <Redirect to="/auth" />;
      }}
    />
  );
}
