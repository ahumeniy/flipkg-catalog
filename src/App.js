import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AdminPage from "./pages/admin";
import AppDetailsPage, { loader as appLoader } from "./pages/AppDetails";
import AppsPage, { loader as appsLoader } from "./pages/apps";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        path: "/:owner?",
        element: <AppsPage />,
        loader: appsLoader,
      },
      {
        path: "/:owner/:id",
        loader: appLoader,
        element: <AppDetailsPage />,
      },
    ],
  },
  { path: "/admin", element: <AdminPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
