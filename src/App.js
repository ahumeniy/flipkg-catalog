import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminPage from './pages/admin';
import AppsPage from './pages/apps';

const router = createBrowserRouter([
  { path: '/', element: <AppsPage /> },
  { path: '/admin', element: <AdminPage /> }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;