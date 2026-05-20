import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import AppLayout from './components/AppLayout';
import AurelianCanvas from './components/AurelianCanvas';

function App() {
  const Allroute = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/ventures/aurelian-canvas', element: <AurelianCanvas /> },
      ]
    },
  ]);

  return <RouterProvider router={Allroute} />;
}

export default App;