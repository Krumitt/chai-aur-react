import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import AppLayout from './layout/AppLayout';
const router = createBrowserRouter(
  [{
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/addTask',
        element: <AddTask />,
      },]
  }

  ]
)

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
