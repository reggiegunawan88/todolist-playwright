import { ReactNode } from 'react';

import MainLayout from '@/layouts/MainLayout';

import FirstParagraph from './components/FirstParagraph';
import SecondParagraph from './components/SecondParagraph/index.';

const About = () => {
  return (
    <div>
      <FirstParagraph />
      <SecondParagraph />
    </div>
  );
};

About.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
