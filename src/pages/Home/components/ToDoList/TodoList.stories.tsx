import { useState } from 'react';
import ToDoList from './index';
import { useAppDispatch } from '@/hooks/useRTK';
import { TodoItem } from '@/types/ui-type';
import { addTodoItem } from '@/store/slices/TodoList';

export const BasicTodoList = () => {
  return <ToDoList />
}

export const TodoListWithInput = () => {
  const dispatch = useAppDispatch()
  const [taskTitle, setTaskTitle] = useState('');
  const [taskHours, setTaskHours] = useState('');

  // Produce minimal input handler for story needs
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (name === 'title-input') {
      return setTaskTitle(value);
    }
    setTaskHours(value);
  }

  // Produce logic for story needs without input validation because we already created it on InputSection.tsx
  function onSubmit(){
    const todoItem: TodoItem = {
      id: 0, // ID will be incremented through Redux reducer
      todo: {
        title: taskTitle,
        hours: Number(taskHours)
      }
    };

    dispatch(addTodoItem(todoItem));
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-x-2">
        <input
          aria-label="task-title-input"
          name="title-input"
          type="text"
          className="input-style"
          placeholder="Input task title"
          value={taskTitle}
          onChange={handleInput}
        />
        <input
          aria-label="task-hours-input"
          name="hours-input"
          type="text"
          className="input-style"
          placeholder="Input task hours"
          value={taskHours}
          onChange={handleInput}
        />
        <button aria-label="add-todo-button" onClick={onSubmit}>Add</button>
      </div>
      <ToDoList />
    </div>
  );
};
