import{RouterProvider,createBrowserRouter} from "react-router-dom"
import Home from "./home" 
import About from "./components/About"
import Contact from "./components/Contact"
import Layout from "./Layout"
const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {path: "/",element: <Home/>},
      {path: "/About",element: <About/>},
      {path: "/Contact",element: <Contact/>}
          ]
  },

])
  return (
    <RouterProvider router = {router}/>
  )
}

export default App