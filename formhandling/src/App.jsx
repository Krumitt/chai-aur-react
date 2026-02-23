import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MyForm from './pages/MyForm';
import contactAction from './utils/contactAction';
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,

    },
    {
      path: '/contact',
      element: <MyForm />,
      action: contactAction

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
