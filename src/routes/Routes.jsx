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
import AdminRoute from "./AdminRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import InstructorRoute from "./InstructorRoute";
import EnrolledClasses from "../pages/Dashboard/RightSide/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/RightSide/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'selected-classes',
        element: <SelectedClasses></SelectedClasses>
      },
      {
        path: 'enrolled-classes',
        element: <EnrolledClasses></EnrolledClasses>
      },
      {
        path: 'payment-history',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'add-class',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: 'my-classes',
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },
      {
        path: 'manage-classes',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: 'manage-users',
        element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
      },
      {
        path: 'payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(`https://b7a12-summer-camp-server-side-sagor66.vercel.app/cart/${params.id}`)
      }
    ],
  }
])