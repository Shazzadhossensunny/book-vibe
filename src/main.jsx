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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        loader: () => fetch('../public/data.json')
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
   <ToastContainer />
  </React.StrictMode>,
)
