import { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="px-1 w-full antialiased text-gray-700">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <Header {...AppConfig} />
      <div className="py-5 text-xl content">{props.children}</div>
      <Footer {...AppConfig} />
    </div>
  </div>
);

export { Main };
