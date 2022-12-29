import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import PostDetail from './PostDetail';
import { loader as appLoader } from "./App";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      loader: appLoader
    },
    {
      path: "/posts/:postID",
      element: <PostDetail></PostDetail>
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
