import { ReactNode } from 'react'

type IMainLayoutProps = {
  children: ReactNode
}

const MainLayout = (props: IMainLayoutProps) => <div className="w-full flex p-3 justify-center">{props.children}</div>

export default MainLayout
