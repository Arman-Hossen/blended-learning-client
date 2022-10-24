import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import FAQ from "../FAQ/FAQ";
import Home from "../Home/Home";
import LogIn from "../LogIn/LogIn";
import Registration from "../Registration/Registration";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
              path:'/',
              element:<Registration></Registration>

            },
            {
                path:'/home',
                element:<Home></Home>
  
            },
            {
                path:'/courses',
                element:<Courses></Courses>
  
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
  
            },
            {
                path:'/blog',
                element:<Blog></Blog>
  
            },
            {
                path:'/registration',
                element:<Registration></Registration>
  
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
  
            },
        ]
    }
])