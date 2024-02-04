import { TodoItem } from '@/types/ui-type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/* Reducers for todo list */

// Define the initial state
const initialState: TodoItem[] = []

export const TodoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodoItem: (state, action: PayloadAction<TodoItem>) => {
      state.push({
        id: state.length,
        todo: action.payload.todo
      })
    },
    deleteTodoItem: (state, targetIndex: PayloadAction<number>) => {
      const itemIdx = state.findIndex(item => item.id === targetIndex.payload)
      // Remove element from array if itemIdx is found
      if (itemIdx !== -1) {
        state = state.splice(itemIdx, 1)
      }
    }
  }
})

export const { addTodoItem, deleteTodoItem } = TodoListSlice.actions

export default TodoListSlice.reducer
