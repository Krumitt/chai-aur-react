import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import AppLayout from "./layout/AppLayout"
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />
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
