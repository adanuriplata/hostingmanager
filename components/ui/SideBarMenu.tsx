import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Link from 'next/link';
import React, { createElement, FC, useContext } from 'react';
import { itemMenu } from '../../types';
import { LoaderContext } from '../common/Loader/LoaderContext';

interface SideBarMenuProps {
  itemsMenu: itemMenu[];
}

export const SideBarMenu: FC<SideBarMenuProps> = ({ itemsMenu }) => {
  const { open } = useContext(LoaderContext);
  return (
    <List>
      {itemsMenu.map((item) => (
        <ListItem key={item.label} disablePadding sx={{ display: 'block' }}>
          <Link href={item.link}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {createElement(item.icon)}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBarMenu;
