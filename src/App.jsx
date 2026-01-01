import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import AppLayout from './components/AppLayout';
import Experience from './components/Experience';

function App() {
  const Allroute = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/projects', element: <Projects /> },
        { path: '/experience', element: <Experience /> },
        { path: '/contact', element: <Contact /> },
        { path: '/about', element: <About /> }
      ]
    },
  ]);

  return <RouterProvider router={Allroute} />;
}

export default App;
