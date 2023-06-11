import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Dashboard from "../layout/Dashboard";
import SelectedClasses from "../pages/Dashboard/RightSide/SelectedClasses";
import AddClass from "../pages/Dashboard/RightSide/AddClass";
import MyClasses from "../pages/Dashboard/RightSide/MyClasses";
import ManageClasses from "../pages/Dashboard/RightSide/ManageClasses";
import ManageUser from "../pages/Dashboard/RightSide/ManageUser";
import Payment from "../pages/Dashboard/Payment/Payment";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'selected-classes',
        element: <SelectedClasses></SelectedClasses>
      },
      {
        path: 'add-class',
        element: <AddClass></AddClass>
      },
      {
        path: 'my-classes',
        element: <MyClasses></MyClasses>
      },
      {
        path: 'manage-classes',
        element: <ManageClasses></ManageClasses>
      },
      {
        path: 'manage-users',
        element: <ManageUser></ManageUser>
      },
      {
        path: 'payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(`https://b7a12-summer-camp-server-side-sagor66.vercel.app/cart/${params.id}`)
      }
    ],
  }
])