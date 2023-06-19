import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Chats from "../Pages/Chats/Chats";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/chat",
    element: <Chats></Chats>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);

export default router;
