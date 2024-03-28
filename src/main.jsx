import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './pages/Home/Home';
import ListedBooks from './pages/ListedBooks/ListedBooks';
import PagesToRead from './pages/PagesToRead/PagesToRead';
import BookDetails from './components/BookDetaisl/BookDetails';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AllBookPublisher from './pages/AllPublisher/AllBookPublisher';
import Contact from './pages/Contact/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('data.json')
      },
      {
        path: "/publisher",
        element: <AllBookPublisher></AllBookPublisher>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
   <ToastContainer />
  </React.StrictMode>,
)
