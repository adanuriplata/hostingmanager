import React, { useEffect } from 'react';
import { DashboardLayout } from '../components/layouts';

const Companies = () => {
  useEffect(() => {
    const getToken = async () => {
      const data = await fetch('/api/auth/login');
      const respuesta = await data.json();
      console.log(respuesta);
    };
    void getToken();
  }, []);
  return (
    <DashboardLayout title={'Products'}>
      <div>companies</div>
    </DashboardLayout>
  );
};

export default Companies;
