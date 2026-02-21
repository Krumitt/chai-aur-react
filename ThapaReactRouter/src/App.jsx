import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import AuthLayout from './components/Layout/AuthLayout';
import Home from '../../07ReactRouter/src/components/Home/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          // { path: '/', element: < Home /> },
          // { path: '/about', element: <About /> }
        ]
      },
      {
        element: <AuthLayout />,
        children:
          [
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> }

          ]
      }
    ]
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
