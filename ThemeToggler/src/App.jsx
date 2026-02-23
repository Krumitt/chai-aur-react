import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import Home from "./pages/Home"
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3"

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'p2', element: <Page2 /> },
        { path: 'p3', element: <Page3 /> }
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
