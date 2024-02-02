import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/useRTK';

const useTaskIndicators = () => {
  const todoList = useAppSelector(state => state.todoList);

  const HOURS_PER_DAY = 8
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalHours, setTotalHours] = useState(0);
  const [totalDays, setTotalDays] = useState(0);


  function calculateTotalTasks() {
    setTotalTasks(todoList.length);
  }

  function calculateTimes() {
    let totalHours = 0;
    let totalDays = 0

    todoList.forEach(item => {
      totalHours += item.todo.hours;
    });

    totalDays = (totalHours/HOURS_PER_DAY)

    setTotalHours(totalHours);
    setTotalDays(totalDays)
  }

  function calculateAll(){
    calculateTotalTasks()
    calculateTimes()
  }

  useEffect(() => {
    calculateAll()
  }, [todoList]);

  return {
    totalTasks,
    totalHours,
    totalDays,
  };
};

export default useTaskIndicators;
