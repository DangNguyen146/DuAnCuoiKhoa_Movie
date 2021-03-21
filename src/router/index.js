import AccUser from "../container/HomeTemplate/AccUser";
import MobileCumRap from "../container/HomeTemplate/CinemaListMovie/MobileCumRap";
import HomePage from "./../container/HomeTemplate/HomePage";

const routeHome = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/cumrap",
    component: MobileCumRap,
    exact: false,
  },
  {
    path: "/login",
    component: AccUser,
    exact: false,
  },
];

const routesAdmin = [];

export { routeHome, routesAdmin };
