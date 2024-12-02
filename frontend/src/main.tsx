import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TabletList from './components/TabletList.tsx'
import TabletDetails from './components/TabletDetails.tsx'
import TabletExpensive from './components/TabletExpensive.tsx'
import TabletCheap from './components/TabletCheap.tsx';
import TabletAdd from './components/TabletAdd.tsx';
import TabletRemove from './components/TabletRemove.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <TabletList/>,
  },
  {
    path: '/tablets',
    element: <TabletList/>,
  },
  {
    path: '/tablets/:tabletId',
    element: <TabletDetails/>
  },
  {
    path: '/tablets/expensive',
    element: <TabletExpensive/>
  },
  {
    path: '/tablets/cheap',
    element: <TabletCheap/>
  },
  {
    path: '/tablets/add',
    element: <TabletAdd/>
  },
  {
    path: '/tablets/remove',
    element: <TabletRemove/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
