import { memo } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import AppProvider from '../provider/App.context';
import Home from '../screens/Home/Home.screen';
import RoomScene from '../screens/RoomScene/RoomScene.screen';

const RoomSceneRoutes = [{ path: 'abc', element: <div>Child</div> }];

export const MainRoutes: RouteObject[] = [
  {
    path: 'home',
    element: (
      <AppProvider>
        <Home />
      </AppProvider>
    ),
  },
  {
    path: 'room-scene',
    element: <RoomScene />,
    children: [...RoomSceneRoutes],
  },
];

const Route = () => useRoutes([...MainRoutes]);

export default memo(Route);
