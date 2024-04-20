import { createBrowserRouter } from "react-router-dom";
import Home from "@/views/home";
import Notifications from "@/views/notifications";
import Explore from "@/views/explore";
import HomeLayout from "@/layout/main";
import Messages from "@/views/messages";
import Lists from "@/views/lists";
import Bookmarks from "@/views/bookmarks";
import Communities from "@/views/communities";
import Premium from "@/views/premium";
import Profile from "@/views/profile";


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
            },
            {
                path : 'messages',
                element : <Messages />
            },
            {
                path : 'lists',
                element : <Lists />
            },
            {
                path : 'bookmarks',
                element : <Bookmarks />
            },
            {
                path : 'communities',
                element : <Communities />
            },
            {
                path : 'premium',
                element : <Premium />
            },
            {
                path : 'profile',
                element : <Profile />
            },
            
        ]
    },
    
])

export default router