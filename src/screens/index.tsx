import { matchRoutes, useLocation } from 'react-router-dom';
import AppRoute, { MainRoutes } from '../routes/App.route';

const Layout = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(MainRoutes, location) || [];
  console.log(route);

  return (
    <div>
      Layout
      <AppRoute />
    </div>
  );
};

export default Layout;
