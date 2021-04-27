import AccUser from "../container/HomeTemplate/AccUser";
import BookingTicket from "../container/HomeTemplate/BookingTicket";
import CinemaDetail from "../container/HomeTemplate/CinemaDetail";
import CinemaItem from "../container/HomeTemplate/CinemaItem";
import MobileCumRap from "../container/HomeTemplate/CinemaListMovie/MobileCumRap";
import DetailPage from "../container/HomeTemplate/DetailPage";
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
    path: "/detail/:id",
    component: DetailPage,
    exact: false,
  },
  {
    path: "/detailCinema/:name/:id",
    component: CinemaItem,
    exact: false,
  },
  {
    path: "/datve/:id",
    component: BookingTicket,
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
