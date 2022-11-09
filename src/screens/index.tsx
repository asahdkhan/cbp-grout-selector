import { matchRoutes, useLocation } from 'react-router-dom';
import AppRoute, { MainRoutes } from '../routes/App.route';

const Layout = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(MainRoutes, location) || [];
  console.log(route);

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <img
        src="https://play.tailwindcss.com/img/beams.jpg"
        alt=""
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
      />
      <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <AppRoute />
    </div>
  );
};

export default Layout;
