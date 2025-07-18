import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Contact, {contactData} from "./Router/Contact/Contact"
import Layout from "./Router/Layout"
import ErrorPage from "./Router/ErrorComponent/ErrorPage"
import Movies from "./Router/Movies/Movies"
import MovieDetail from "./Router/Movies/MovieDetail/MovieDetail"
import Home from "./Router/Home/Home"
import {getAxios, movieDetail} from "./Router/Movies/API/getAxios"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      errorElement: <ErrorPage/> ,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/movies',
          element: <Movies/>,
          loader: getAxios ,
        },
        {
          path: '/movies/:movieID',
          element: <MovieDetail/>,
          loader: movieDetail,
        },
        {
          path: '/contact',
          element: <Contact/>,
          action: contactData,
        },
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App