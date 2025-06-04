import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import FetchOld from './pages/FetchOld';
import FetchRq from './pages/FetchRq';
import MainLayout from './components/Layout/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
   
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/trad',
        element: <FetchOld />
      },
      {
        path: '/rq',
        element: <FetchRq />
      }

    ]
  }
])

function App() {
  

  return (
   <RouterProvider router={router} >
    <App />
   </RouterProvider>
  )
}

export default App
