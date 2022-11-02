import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { LoaderContext } from '../common/Loader/LoaderContext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const Navbar = (): JSX.Element => {
  const { handleDrawerToggle, open } = useContext(LoaderContext);
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          // sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          MKP - Hosting
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
