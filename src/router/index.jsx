import { createBrowserRouter, redirect } from "react-router-dom"

import App from '../App'
import HomePage from "../pages/HomePage/HomePage"
import AdminPage from "../pages/AdminPage/AdminPage"

const accessControl = () => {
  if (!localStorage.getItem('token')) {
    return redirect('/')
  } else {
    return null
  }
}

const accessAdmin = () => {
  if (!localStorage.getItem("token") || localStorage.getItem('role') !== 'admin') {
    return redirect("/");
  } else {
    return null;
  }
};

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <HomePage />, loader: accessControl },
  { path: "/admin", element: <AdminPage />, loader: accessAdmin },
]);