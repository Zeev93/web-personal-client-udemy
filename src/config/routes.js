//Layouts
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

// AdminPages
import AdminHome from '../pages/Admin'
import AdminSignIn from '../pages/Admin/SignIn'


// ClientPages
import Home from '../pages/Home'
import Contact from '../pages/Contact'

//Otros
import Error404 from "../pages/Error404";
import LayoutSignIn from "../layouts/LayoutSignIn";

const routesAdmin = [
    {
        path: "/admin",
        layout: LayoutAdmin,
        component: AdminHome
    },
    {
        path: "*",
        component: Error404,
        layout:LayoutBasic
    }
 ]


 const routesClient = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Home
    },
    {
        path: '/login',
        layout: LayoutSignIn,
        component: AdminSignIn ,
    },
    {
        path: "/contact",
        layout: LayoutBasic,
        component: Contact
    },
    {
        path: "*",
        component: Error404,
        layout:LayoutBasic
    }
 ]

 const routes = [...routesAdmin, ...routesClient]


 export default routes