import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ROUTES } from './config/route/routeConfig';


const PageFallback = () => <div style={{ minHeight: '100vh' }} />;

function App() {
  return (
    <Layout>
      <Suspense fallback={<PageFallback />}>
        <Routes>
         {ROUTES.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
