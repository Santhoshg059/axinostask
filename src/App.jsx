import React from 'react'
// import AppRoutes from './utils/AppRoutes'
import AppRoutes from './utils/AppRoutes'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
export const API_URL = 'https://jsonplaceholder.typicode.com/users'
function App() {
  const router = createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router} />
  </>
}

export default App