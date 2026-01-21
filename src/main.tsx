import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { Welcome } from './components/Welcome.tsx'

const router = createBrowserRouter([
        {
                path: "/",
                element: <Welcome/>,
        },{
                path: "/evolution",
                element: <App/>
        }
]);

createRoot(document.getElementById('root')!).render(
        <StrictMode>
                <RouterProvider router={router}/>
        </StrictMode>,
)
