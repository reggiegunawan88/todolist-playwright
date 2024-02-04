import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRTK';
import ModalDialogWrapper from '@/components/ModalDialog'
import DeleteDialog from '@/components/ModalDialog/DeleteDialog';
import { openModalDialog } from '@/store/slices/ModalDialog';

const ToDoList = () => {
  const todoList = useAppSelector(state => state.todoList);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm font-bold">Todo List</span>
      <table className="border-collapse">
        <thead className="font-bold text-lg bg-gray-100">
          <tr>
            <th className="border px-8 py-4">Task Title</th>
            <th className="border px-8 py-4">Time Required (in Hrs)</th>
            <th className="border px-8 py-4">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {todoList.length ? (
            todoList.map(item => (
              <tr className="hover:bg-gray-50" key={item.id}>
                <td className="table-td-style">{item.todo.title}</td>
                <td className="table-td-style">{item.todo.hours}</td>
                <td className="table-td-style">
                  <button
                    aria-label="delete-todo-button"
                    className="bg-red-400 rounded-md text-white py-1 px-4 self-end hover:bg-red-500"
                    onClick={() => dispatch(openModalDialog(item))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="table-td-style" colSpan={3}>
                You don't have any to-do item.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <ModalDialogWrapper>
        <DeleteDialog />
      </ModalDialogWrapper>
    </div>
  );
};

export default ToDoList;
