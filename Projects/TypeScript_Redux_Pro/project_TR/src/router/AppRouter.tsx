import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from '../Pages/HomeScreen'
import CalendarPage from '../Pages/CalendarPage'
import FavoritesPage from '../Pages/FavoritesPage'
import ProfilePage from '../Pages/ProfilePage'
import AppLayout from '../Layouts/AppLayout'
import ChatsPage from '../Pages/ChatPage'


const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'calendar',
                element: <CalendarPage />,
            },
            {
                path: 'favorites',
                element: <FavoritesPage />,
            },
            {
                path: 'profile',
                element: <ProfilePage />,
            },
            {
                path: 'chats',
                element: <ChatsPage />,
            },
        ],
    },
])

export default function AppRouter() {
    return <RouterProvider router={router} />
}