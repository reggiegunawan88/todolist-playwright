import { ReactNode } from 'react';

import MainLayout from '@/layouts/MainLayout';
import IndicatorSection from '@/components/IndicatorSection';
import CTASection from '@/components/CTASection';
import ToDoList from '@/components/ToDoList';

const Index = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <span className="text-2xl font-bold">Task Management App</span>
      <div className="flex flex-col gap-y-20">
        <IndicatorSection />
        <CTASection />
        <ToDoList />
      </div>
    </div>
  );
};

Index.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Index;
