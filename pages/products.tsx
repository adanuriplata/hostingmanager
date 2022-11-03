import { Box, Paper } from '@mui/material';
import { DashboardLayout } from '../components/layouts';
import MUIDataTable from 'mui-datatables';

import { useGetProducts } from '../hooks';
import { currency } from '../utils';
// import { products } from '../fakeData/products';
import { useMemo } from 'react';

const Products = (): JSX.Element => {
  const { products } = useGetProducts();

  const formatProducts = useMemo(
    () =>
      products?.map((e) => ({
        ...e,
        price: currency(e.price),
      })),
    [products]
  );

  const columns = [
    {
      name: 'id',
      label: 'ID',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'name',
      label: 'Nombre',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'price',
      label: 'Precio',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'category',
      label: 'Categoria',
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const options = {
    filterType: 'checkbox',
  };
  return (
    <DashboardLayout title={'Productos'}>
      <Box
        sx={{
          display: 'flex',
          p: 1,
          borderRadius: 1,
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Paper elevation={3}>
            {/* {error && <p>Algo fallo</p>} */}
            {products != null && (
              <MUIDataTable
                title={'Productos'}
                data={formatProducts as IProducts[]}
                columns={columns}
                options={options}
              />
            )}
          </Paper>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default Products;
