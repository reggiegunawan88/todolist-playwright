import React from 'react';
import useInputSection from './hooks/useInputSection';

const InputSection = () => {
  const { taskTitle, taskTime, isEmptyValue, handleInput, handleNumericInput, onSubmit } = useInputSection();

  return (
    <div className="flex flex-row gap-x-8 items-center">
      <div className="flex flex-col gap-y-1">
        <span className="text-xs font-bold">Task title</span>
        <div className="flex flex-col relative">
          <input
            aria-label="task-title-input"
            type="text"
            className={`input-style ${isEmptyValue.title ? 'border-red-500' : ''}`}
            placeholder="Fill task title"
            maxLength={128}
            value={taskTitle}
            onChange={handleInput}
          />
          {isEmptyValue.title && (
            <span aria-label="title-input-error-text" className="absolute -bottom-6 text-sm text-red-500">
              Task title cannot be empty.
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-y-1">
        <span className="text-xs font-bold">Time required (in Hrs)</span>
        <div className="flex flex-col relative">
          <input
            aria-label="task-hours-input"
            type="text"
            className={`input-style ${isEmptyValue.time ? 'border-red-500' : ''}`}
            placeholder="Fill time required"
            value={taskTime}
            onChange={handleNumericInput}
          />
          {isEmptyValue.time && (
            <span aria-label="hours-input-error-text" className="absolute -bottom-6 text-sm text-red-500">
              Time required cannot be empty.
            </span>
          )}
        </div>
      </div>

      <button
        aria-label="add-input-button"
        className="bg-blue-400 rounded-md py-1 px-4 self-end hover:bg-blue-500 text-white"
        onClick={onSubmit}
      >
        Add
      </button>
    </div>
  );
};

export default InputSection;
