import TaskIndicators from './components/TaskDashboard';
import CTASection from './components/InputSection';
import ToDoList from './components/ToDoList';

const Home = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <span className="text-2xl font-bold">Task Management App</span>
      <div className="flex flex-col gap-y-20">
        <TaskIndicators />
        <CTASection />
        <ToDoList />
      </div>
    </div>
  );
};

export default Home;
