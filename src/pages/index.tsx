import { ReactNode } from 'react';

import MainLayout from '@/layouts/MainLayout';
import Home from './Home';
import dynamic from 'next/dynamic';

const Snackbar = dynamic(() => import('@/components/Snackbar'));

const Index = () => {
  return (
    <>
      <Home />
      <Snackbar />
    </>
  );
};

Index.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Index;
