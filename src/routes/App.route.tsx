import { memo } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import AppProvider from '../provider/App.context';
import Home from '../screens/Home/Home.screen';
import RenderGrout from '../screens/RenderGrout/RenderGrout.screen';
import TileSelection from '../screens/TileSelection/TileSelection.screen';
import CropPhoto from '../screens/CropPhoto/CropPhoto.screen';
import ConfigureTile from '../screens/ConfigureTile/ConfigureTile.screen';
import ConfigureTileStep2 from '../screens/ConfigureTileStep2/ConfigureTileStep2.screen';
import ConfigureTileStep3 from '../screens/ConfigureTileStep3/ConfigureTileStep3.screen';



// const ConfigureTileStep3 = [{ path: 'abc', element: <div>Child</div> }];

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
    path: 'render-grout',
    element: (
      <AppProvider>
        <RenderGrout />
      </AppProvider>
    ),
  },
  {
    path: 'tile-selection',
    element: <TileSelection />
  },
  {
    path: 'crop-photo',
    element: <CropPhoto />,
  },
  {
    path: 'configure-tile',
    element: <ConfigureTile />,
  },
  {
    path: 'configure-tile-step-2',
    element: <ConfigureTileStep2 />,
  },
  {
    path: 'configure-tile-step-3',
    element: <ConfigureTileStep3 />,
    // children: [...ConfigureTileStep3],
  },


];

const Route = () => useRoutes([...MainRoutes]);

export default memo(Route);
