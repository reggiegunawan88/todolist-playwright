import Header from "@/components/Header";
import { ReactNode } from "react";

type IDashboardLayout = {
  children: ReactNode;
};

const DashboardLayout = (props: IDashboardLayout) => {
<div className="px-1 w-full antialiased text-gray-700">
    <div className="mx-auto max-w-screen-md">
      <Header />
      <div className="py-5 text-xl content">{props.children}</div>
    </div>
  </div>
}

export default DashboardLayout