import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Chats from "../Pages/Chats/Chats";

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
]);

export default router;
