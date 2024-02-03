import { ReactNode } from 'react';

import MainLayout from '@/layouts/MainLayout';
import Home from './Home';
import Snackbar from '@/components/Snackbar'

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
