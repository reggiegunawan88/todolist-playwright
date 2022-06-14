import { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

type IMainProps = {
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="px-1 w-full antialiased text-gray-700">
    <div className="mx-auto max-w-screen-md">
      <Header />
      <div className="py-5 text-xl content">{props.children}</div>
      <Footer />
    </div>
  </div>
);

export { Main };
