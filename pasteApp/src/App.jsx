import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './pages/Home';
import Paste from './pages/Paste';
import ViewPaste from './pages/ViewPaste';
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'pastes', element: <Paste /> },
        { path: 'pastes/:pasteId', element: <ViewPaste /> }
      ]
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
