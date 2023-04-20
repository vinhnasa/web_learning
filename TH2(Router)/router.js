import { createBrowserRouter, Link } from "react-router-dom";
import PrivateGroup from "./privateGroup";
import ProtectedGroup from "./protectedGroup";
import UserProfile from "./useProfile";

const router = createBrowserRouter([
    {
        path:'/',
        element: (
            <div>
                <h1>Hello World</h1>
                <Link to="about">About us</Link>
            </div>
        ),
    },
    {
        path: 'about',
        element: <div>About</div>,
    },
    {
        path: '/private-group',
        element: <ProtectedGroup isMember={false}><PrivateGroup /></ProtectedGroup>
    },
    {
        path: '/user/userId',
        element: <UserProfile/>
    }
])
export default router;