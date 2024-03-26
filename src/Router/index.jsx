import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import MainLayouts from '../layouts/MainLayouts'
import SecondLayouts from '../layouts/SecondLayouts'
import NotFound from '../components/NotFound'


export const router = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayouts />,
        errorElement: <NotFound/>,
        children:[
            {
                path:'',
                element: <Home />
            },
            {
                path:'about',
                element: <About />
            }
        ]
    },
    {
        path: '/aside',
        element: <SecondLayouts />,
        children:[
            {
                path:'aside',
                element: <Home />
            },
            {
                path:'about/:id',
                element: <About />
            }
        ]
        }
])