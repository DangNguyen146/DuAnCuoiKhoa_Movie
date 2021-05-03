import AccUser from "../container/HomeTemplate/AccUser";
import BookingTicket from "../container/HomeTemplate/BookingTicket";
import CinemaDetail from "../container/HomeTemplate/CinemaDetail";
import CinemaItem from "../container/HomeTemplate/CinemaItem";
import MobileCumRap from "../container/HomeTemplate/CinemaListMovie/MobileCumRap";
import DetailPage from "../container/HomeTemplate/DetailPage";
import User from "../container/HomeTemplate/User";
import HomePage from "./../container/HomeTemplate/HomePage";

import Dashboard from "./../container/AdminTemplate/Dashboard";
import AddUser from "./../container/AdminTemplate/AddUserPage";
import ListUserPage from "../container/AdminTemplate/ListUserPage";
import AddTicketPage from "../container/AdminTemplate/TicketPage/AddTicketPage";
import AddMoviePage from "../container/AdminTemplate/MoviePage/AddMoviePage";
import SearchUser from "../container/AdminTemplate/SearchUserPage";
import ListMoviePage from "../container/AdminTemplate/MoviePage/ListMoviePage";
import UserProfilePage from "../container/AdminTemplate/UserProfile";
import UpdateMoviePage from "../container/AdminTemplate/MoviePage/UpdateMoviePage";
import ListCinemaPage from "../container/AdminTemplate/CinemaPage/ListCinemaPage";

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
  {
    path: "/user",
    component: User,
    exact: false,
  },
];

const routesAdmin = [
  {
    path: "/dashboard",
    component: Dashboard,
    exact: false,
  },
  {
    path: "/add-user",
    component: AddUser,
    exact: false,
  },
  {
    path: "/list-user",
    component: ListUserPage,
    exact: false,
  },

  {
    path: "/add-movie",
    component: AddMoviePage,
    exact: false,
  },

  {
    path: "/add-ticket",
    component: AddTicketPage,
    exact: false,
  },

  {
    path: "/search-user",
    component: SearchUser,
    exact: false,
  },

  {
    path: "/user-profile",
    component: UserProfilePage,
    exact: false,
  },
  {
    path: "/movie-update",
    component: UpdateMoviePage,
    exact: false,
  },

  {
    path: "/list-movie",
    component: ListMoviePage,
    exact: false,
  },

  {
    path: "/list-cinema",
    component: ListCinemaPage,
    exact: false,
  },
];

export { routeHome, routesAdmin };
