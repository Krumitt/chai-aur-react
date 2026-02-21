
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NormalLayout from './Layout/NormalLayout';
import ErrLayout from './Layout/ErrLayout';
import Home from '../../07ReactRouter/src/components/Home/Home';
import PhotoPage from './Pages/PhotoPage';
import GitLogsPage from './Pages/GitLogsPage';
import ErrPage from './Pages/ErrPage';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NormalLayout />,
      errorElement: <ErrPage />,
      children: [
        { index: true, element: <Home /> },
        { path: 'photo', element: <PhotoPage /> },
        { path: 'github', element: <GitLogsPage /> },

      ]
    }
  ]


  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
