import { FC, PropsWithChildren, useContext } from 'react';
import Head from 'next/head';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Navbar, Sidebar } from '../ui';
import { LoaderContext } from '../common/Loader/LoaderContext';

interface DashboardLayoutProps {
  title: string;
}

export const DashboardLayout: FC<PropsWithChildren<DashboardLayoutProps>> = ({
  title,
  children,
}) => {
  const { drawerWidth } = useContext(LoaderContext);
  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Offset />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          marginLeft: `${drawerWidth}px`,
          // marginTop: `${{ ...theme.mixins.toolbar.minHeight }}px`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
