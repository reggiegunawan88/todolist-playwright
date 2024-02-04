import InputSection from './components/InputSection'
import ToDoList from './components/ToDoList'
import TaskDashboard from './components/TaskDashboard'

const Home = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col">
        <span className="text-2xl font-bold">Task Management App</span>
        <span className="text-xs">By Reggie Gunawan</span>
      </div>
      <div className="flex flex-col gap-y-20">
        <TaskDashboard />
        <InputSection />
        <ToDoList />
      </div>
    </div>
  )
}

export default Home
