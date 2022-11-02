import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Link from 'next/link';
import React, { createElement, FC } from 'react';
import { itemMenu } from '../../types';

interface MenuProps {
  itemsMenu: itemMenu[];
}

export const Menu: FC<MenuProps> = ({ itemsMenu }) => {
  return (
    <List>
      {itemsMenu.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton>
            <Link href={item.link}>
              <ListItemIcon>{createElement(item.icon)}</ListItemIcon>
              <ListItemText primary={item.label} />
            </Link>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Menu;
