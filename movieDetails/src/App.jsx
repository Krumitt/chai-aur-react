
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/AppLayout'
import ErrPage from './pages/ErrPage'
import Home from './pages/Home'
import MovieCard from './pages/movieCard'
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrPage />,
      children: [
        { index: true, element: <Home /> },
        { path: 'movie/:movieId', element: <MovieCard /> }
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
