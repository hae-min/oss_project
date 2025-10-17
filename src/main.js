import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import Viewstory from './Viewstory.jsx'
import Profile from './Profile.jsx'
//main, 스토리, 사용자 프로필로 갈 수 있는 페이지

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/story/:id/:tot',
      element:<Viewstory/>
    },
    {
      path:'/profile',
      element:<Profile/>
    }
  ]
)



createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>

)
