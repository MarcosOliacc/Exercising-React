import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import Dashboard from './pages/Dashboard'
import RootItens from './pages/RootItens'
import AllItens from './pages/AllItens'
import NewItem from './pages/NewItem'
import AttItem from './pages/AttItem'
import loadAtt from './loaders/loadAtt'
import ShownItem from './pages/ShownItem'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children:[
            {
                index: true,
                element: <Dashboard/>
            },{
                path: 'stockitens',
                element: <RootItens/>,
                children:[
                    {
                        index: true,
                        element:<AllItens/>
                    },{
                        path: 'newitem',
                        element: <NewItem/>
                    },{
                        path: 'attproduct/:idProduct',
                        loader: loadAtt,
                        element: <AttItem/>
                    },{
                        path: 'shownitem/:idProduct',
                        loader: loadAtt,
                        element: <ShownItem/>
                    }

                ]
            }

        ]
    }
])
export default router