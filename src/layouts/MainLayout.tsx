import { ReactNode } from 'react';

type IMainLayoutProps = {
  children: ReactNode;
};

const MainLayout = (props: IMainLayoutProps) => (
  <div className="w-full flex">
    <div className="p-3">
      <div className="text-xl content">{props.children}</div>
    </div>
  </div>
);

export default MainLayout;
