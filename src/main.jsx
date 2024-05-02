import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import MyDonations from './components/MyDonations.jsx';
import Stats from './components/Stats.jsx';
import DonationDetails from './components/DonationDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donations",
        element: <MyDonations></MyDonations>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/stats",
        element: <Stats></Stats>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
