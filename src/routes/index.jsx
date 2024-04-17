import { createBrowserRouter } from "react-router-dom";

import Home from "@/views/home";
import Notifications from "@/views/notifications";
import Explore from "@/views/explore";
import HomeLayout from "@/layout/main";

const router = createBrowserRouter([
    {
        path: '/',
        element : <HomeLayout />,
        children : [
            {
                index: true,
                element : <Home />
            },
            {
                path : 'explore',
                element : <Explore />
            },
            {
                path : 'notifications',
                element : <Notifications />
            }
        ]
    },
    
])

export default router