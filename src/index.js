import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import ErrorPage from './components/ErrorPage'

import Landing from './containers/Landing'
import Products from './containers/Products'

const appElement = document.getElementById('app')
const root = createRoot(appElement)

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Landing />
            },
            {
                path: 'shop',
                element: <Products />
            }
        ]
    }
])

root.render(<RouterProvider router={router} />);