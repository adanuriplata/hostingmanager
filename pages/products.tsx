import { Box, Paper } from '@mui/material';
import { DashboardLayout } from '../components/layouts';
import MUIDataTable from 'mui-datatables';

import { useGetProducts } from '../hooks';
import { AddBox } from '@mui/icons-material';

const Products = (): JSX.Element => {
  const { products, error } = useGetProducts();
  // const error = false;
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
  ];
  // const data = [
  //   { id: 1, name: 'host esencial', price: '1350' },
  //   { id: 1, name: 'host esencial', price: '1350' },
  //   { id: 1, name: 'host esencial', price: '1350' },
  //   { id: 1, name: 'host esencial', price: '1350' },
  // ];
  const options = {
    filterType: 'checkbox',
  };
  return (
    <DashboardLayout title={'Products'}>
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
            {/* {error ? (
            <p>Algo fallo</p>
          ) : (
            products?.map((e) => (
              <div key={e.id}>
                <p>{e.name}</p>
                <p>{e.price}</p>
              </div>
            ))
          )} */}
            <MUIDataTable
              title={'Productos'}
              data={products}
              columns={columns}
              options={options}
            />
          </Paper>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default Products;
