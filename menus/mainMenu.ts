import InventoryIcon from '@mui/icons-material/Inventory';
import BusinessIcon from '@mui/icons-material/Business';
import DescriptionIcon from '@mui/icons-material/Description';
import { itemMenu } from '../types';

export const mainMenu: itemMenu[] = [
  {
    label: 'Productos',
    icon: InventoryIcon,
    link: '/products',
  },
  {
    label: 'Empresas',
    icon: BusinessIcon,
    link: '/companies',
  },
  {
    label: 'Contratos',
    icon: DescriptionIcon,
    link: '/companies',
  },
];
