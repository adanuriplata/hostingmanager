import { useContext } from 'react';
import { Box, Divider, Drawer, Toolbar } from '@mui/material';

import { LoaderContext } from '../common/Loader/LoaderContext';
import { mainMenu } from '../../menus/mainMenu';
import Menu from './Menu';

export const Sidebar = (): JSX.Element => {
  const { drawerWidth } = useContext(LoaderContext);
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <Menu itemsMenu={mainMenu} />
        <Divider />
        <Menu itemsMenu={mainMenu} />
      </Box>
    </Drawer>
  );
};
