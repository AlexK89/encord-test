import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ component: Component, layout: Layout, path }, index) => (
        <Route
          path={path}
          key={index}
          element={
            Layout ? (
              <Layout>
                <Component />
              </Layout>
            ) : (
              <Component />
            )
          }
        />
      ))}
      <Route path="*" element={<Navigate to={'/404'} />} />
    </Routes>
  </BrowserRouter>
);
