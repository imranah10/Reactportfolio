
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import AppLayout from './components/AppLayout';
import Experience from './components/Experience';
// import { Children } from 'react';


function App() {
 

  const Allroute=createBrowserRouter([
    
    {
      path:'/',
      element:<AppLayout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
    
        {
          path:'/projects',
          element:<Projects />
        },
        {
          path:'/experience',
          element:<Experience />
        },
        {
          path:'/contact',
          element:<Contact />
        },
        {
          path:'/about',
          element:<About />
        }
      ]
    },
    
   
  //  {
  //   children:[
      
  //    ]
  //  },
  ])
  return(<RouterProvider router={Allroute} />)


  // return (
  //   <div className="App">
  //   <Home />
  //   </div>
  // );
}

export default App;
