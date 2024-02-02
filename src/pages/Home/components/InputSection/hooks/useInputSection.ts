import { useAppDispatch } from '@/hooks/useRTK';
import { openSnackbar, setSnackbarDescription, setSnackbarType } from '@/store/slices/Snackbar';
import { addTodoItem } from '@/store/slices/TodoList';
import { TodoItem } from '@/types/ui-type';
import React, { useState } from 'react';
import { batch } from 'react-redux';

const useInputSection = () => {
  const dispatch = useAppDispatch();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskTime, setTaskTime] = useState<string | number>('');
  const [isEmptyValue, setIsEmptyValue] = useState({
    title: false,
    time: false,
  });

  const incrementalId = 0

  function onSubmit() {
    if(!validateInputValues()){
      return batch(() => {
        dispatch(openSnackbar());
        dispatch(setSnackbarDescription('Please fill the input value'));
        dispatch(setSnackbarType('error'));
      });
    }

    // Process data here after validation
    const todoItem: TodoItem = {
      id: incrementalId + 1,
      todo: {
        title: taskTitle,
        hours: Number(taskTime)
      }
    };

    dispatch(addTodoItem(todoItem));

    batch(() => {
      dispatch(openSnackbar());
      dispatch(setSnackbarDescription('Successfully added new to-do'));
      dispatch(setSnackbarType('success'));
    });

    resetStates()
  }

  function validateInputValues() {
    if (!taskTitle) {
      setIsEmptyValue(prev => ({
        ...prev,
        title: true,
      }));
    }
    if (!taskTime) {
      setIsEmptyValue(prev => ({
        ...prev,
        time: true,
      }));
    }
    
    if(!taskTitle || !taskTime) {
      return false
    }
    return true
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    // Remove warning text and border after re-input value
    setIsEmptyValue(prev => ({
      ...prev,
      title: false,
    }));
    setTaskTitle(value);
  }

  // Allow numeric input only and maximum allowed value <=24
  function handleNumericInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    const regex = /^[0-9\b]+$/; // Regex to match only numeric characters and backspace
    const maxValue = 24;

    // Remove warning text and border after re-input value
    setIsEmptyValue(prev => ({
      ...prev,
      time: false,
    }));

    if (value === '') {
      return setTaskTime('');
    }

    if (regex.test(value) && parseInt(value) <= maxValue) {
      setTaskTime(value);
    }
  }

  function resetStates(){
    setTaskTitle('')
    setTaskTime('')
  }

  return {
    taskTitle,
    taskTime,
    isEmptyValue,
    setTaskTitle,
    setTaskTime,
    handleInput,
    handleNumericInput,
    onSubmit,
  };
};

export default useInputSection;
