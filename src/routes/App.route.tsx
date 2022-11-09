import { memo } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Home from '../screens/Home/Home.screen';

const RoomSceneRoutes = [{ path: 'abc', element: <div>Child</div> }];

export const MainRoutes: RouteObject[] = [
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'room-scene',
    element: <Home />,
    children: [...RoomSceneRoutes],
  },
];

const Route = () => useRoutes([...MainRoutes]);

export default memo(Route);