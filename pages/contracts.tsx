import { Box } from '@mui/material';
import React from 'react';
import { DashboardLayout } from '../components/layouts';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { custom, decrement, increment } from '../store/slices/ui';

const Contracts = (): JSX.Element => {
  const { value } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();
  return (
    <DashboardLayout title={'Contratos'}>
      <div>contracts</div>
      <Box>El valor es: {value}</Box>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
      <br />
      <button onClick={() => dispatch(custom(40))}>Custom</button>
    </DashboardLayout>
  );
};

export default Contracts;
