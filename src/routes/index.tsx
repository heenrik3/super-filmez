import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Movie from '../pages/Movie'
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home />} />,
    <Route path="/:id" element={<Movie />} />,
    <Route path="*" element={<NotFound />} />,
  ])
)

function RoutesApp() {
  return <RouterProvider router={router} />
}

export default RoutesApp
