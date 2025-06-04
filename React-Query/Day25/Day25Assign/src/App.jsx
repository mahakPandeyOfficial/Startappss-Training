import {createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
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
   <div className="container">
    <h1>TanStack Query Learning</h1>
   </div>
  )
}

export default App
