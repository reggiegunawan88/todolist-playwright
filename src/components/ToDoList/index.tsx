import React from 'react';

const ToDoList = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <span className='text-sm font-bold'>Todo List</span>
      <table className="border-collapse">
        <thead className="font-bold text-lg bg-gray-100">
          <tr>
            <th className="border px-8 py-4">Task Title</th>
            <th className="border px-8 py-4">Time Required (in Hrs)</th>
            <th className="border px-8 py-4">Action</th>
          </tr>
        </thead>

        <tbody className='text-center'>
          <tr className='hover:bg-gray-50'>
            <td className="table-td-style">Task 1</td>
            <td className="table-td-style">24</td>
            <td className="table-td-style">
              <button className="bg-red-400 rounded-md text-white py-1 px-4 self-end hover:bg-red-500">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
