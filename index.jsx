import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetails from "./components/CountryDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:'/country',
        element: <CountryDetails />
      }
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

// Here i am providing router function as props to <RouterProvider> so that it will be available globally ..
root.render(<RouterProvider router={router} />);
