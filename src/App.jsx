import { createBrowserRouter, RouteProvider } from 'react-router-dom'
import Home from './Components/Home'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      Element: <Home></Home>
    }
  ])

  return (
    <div>

      <RouteProvider router={router}></RouteProvider>


    </div>
  )
}

export default App
