import Home from '../pages/site/Home/Home'
import SiteRoot from 'pages/site/root'
import AdminRoot from 'pages/admin/root'
import Dashboard from '../pages/admin/Dashboard/Dashboard'
import Products from 'pages/admin/products'
import Contact from 'pages/site/contact'
import About from 'pages/site/about'

export const ROUTES = [
  {
    path: '/',
    element: <SiteRoot />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminRoot />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'products',
        element: <Products />,
      },
    ],
  },
]
