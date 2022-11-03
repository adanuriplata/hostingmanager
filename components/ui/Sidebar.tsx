import { useContext } from 'react';
import { Box, Divider, Drawer, Toolbar } from '@mui/material';

import { LoaderContext } from '../common/Loader/LoaderContext';
import { mainMenu } from '../../menus/mainMenu';
import SideBarMenu from './SideBarMenu';

export const Sidebar = (): JSX.Element => {
  const { drawerWidth } = useContext(LoaderContext);
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <SideBarMenu itemsMenu={mainMenu} />
      <Divider />
      <SideBarMenu itemsMenu={mainMenu} />
    </Drawer>
  );
};
