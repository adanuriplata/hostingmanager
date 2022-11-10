import { useRouter } from 'next/router';
import React, { FC, PropsWithChildren, useEffect } from 'react';
import { supabase } from '../../supabase';

interface MiddlewareProps {
  children: JSX.Element;
}

export const Middleware: FC<PropsWithChildren<MiddlewareProps>> = ({
  children,
}) => {
  const router = useRouter();
  useEffect(() => {
    // if () {
    //   void router.replace('/login');
    // }
    const getSession = async () => {
      const session = await supabase.auth.getSession();
      console.log(session);
    };
    getSession();
  }, [router]);
  return <div>{children}</div>;
};
