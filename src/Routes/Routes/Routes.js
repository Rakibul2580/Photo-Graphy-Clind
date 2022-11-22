import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Details from "../../Pages/Details/Details";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import UpdateReview from "../../Pages/MyReview/UpdateReview/UpdateReview";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/services",
        element: <Services />,
        loader: () =>
          fetch("https://photo-server-rakibul2580.vercel.app/services"),
      },
      {
        path: "/service/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(
            `https://photo-server-rakibul2580.vercel.app/service/${params.id}`
          ),
      },
      {
        path: "/addreview/:id",
        element: (
          <PrivateRoute>
            <Review />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://photo-server-rakibul2580.vercel.app/service/${params.id}`
          ),
      },
      {
        path: "/myreview/:email",
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://photo-server-rakibul2580.vercel.app/myreviews/${params.email}`
          ),
      },
      { path: "/login", element: <Login /> },
      {
        path: "/updateReview/:id",
        element: <UpdateReview />,
        loader: ({ params }) =>
          fetch(
            `https://photo-server-rakibul2580.vercel.app/review/${params.id}`
          ),
      },
      { path: "/blog", element: <Blog /> },
      { path: "/addservice", element: <AddService /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
