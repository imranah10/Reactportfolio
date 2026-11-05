import { useEffect, lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import AppLayout from './components/AppLayout';
import Home from './components/Home';
import AurelianCanvas from './components/AurelianCanvas';

const CreatorMode = lazy(() => import('./components/CreatorMode'));

const Work = lazy(() => import('./components/Work'));
const Automation = lazy(() => import('./components/Automation'));
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

/* Router lives at module scope — creating it inside the component body
   would rebuild the router (and remount the whole tree) on every render. */
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
              <Automation />
              <Experience />
              <Skills />
              <About />
              <Contact />
            </Suspense>
          </Home>
        ),
      },
      { path: '/ventures/aurelian-canvas', element: <AurelianCanvas /> },
      /* Suspense boundary is REQUIRED here: without it, clicking the mode
         switch suspends during a synchronous input update and React throws
         "Minified React error #426" (component suspended while responding
         to synchronous input). */
      {
        path: '/creator',
        element: (
          <Suspense fallback={<Loader />}>
            <CreatorMode />
          </Suspense>
        ),
      },
    ],
  },
]);

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

  /* Preload the creator chunk shortly after first paint so the DEV -> CREATOR
     switch is instant (and never suspends visibly) even on first tap. */
  useEffect(() => {
    const t = setTimeout(() => import('./components/CreatorMode'), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <RouterProvider router={router} />
    </>
  );
}

export { Navbar, Footer };
export default App;
