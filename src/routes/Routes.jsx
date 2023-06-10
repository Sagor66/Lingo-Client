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
    element: <Dashboard></Dashboard>,
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
      }
    ],
  }
])