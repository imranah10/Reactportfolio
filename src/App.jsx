import { useEffect, lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import SoundToggle from './components/SoundToggle';
import AppLayout from './components/AppLayout';
import Home from './components/Home';
import AurelianCanvas from './components/AurelianCanvas';

const Work = lazy(() => import('./components/Work'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function Loader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center font-mono text-xs tracking-[0.3em] text-mute">
      LOADING…
    </div>
  );
}

function App() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: { offset: -90 },
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: (
            <Home>
              <Suspense fallback={<Loader />}>
                <Work />
                <Experience />
                <Skills />
                <About />
                <Contact />
              </Suspense>
            </Home>
          ),
        },
        { path: '/ventures/aurelian-canvas', element: <AurelianCanvas /> },
      ],
    },
  ]);

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <SoundToggle />
      <RouterProvider router={router} />
    </>
  );
}

export { Navbar, Footer };
export default App;
