import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './Pages/Home';
import Deposit from './Pages/Deposit';
import Reset from './Pages/Reset';
import Withdraw from './Pages/Withdraw';
import Err from './Pages/Err';
import fakeDelay from './utils/fakeDelay';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <Err />,
      children: [
        { index: true, element: <Home />, loader: fakeDelay },
        { path: 'dep', element: <Deposit />, loader: fakeDelay },
        { path: 'res', element: <Reset />, loader: fakeDelay },
        { path: 'with', element: <Withdraw />, loader: fakeDelay }
      ]
    }
  ]
)

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
