import ModalDialogWrapper from "./../index"
import DeleteDialog from "./index"
import { useAppDispatch } from "@/hooks/useRTK"
import { openModalDialog } from "@/store/slices/ModalDialog"
import { TodoItem } from "@/types/ui-type"

export const DeleteDialogStory = () => {
  const dispatch = useAppDispatch()

  function deleteItem() {
    const mockTodo : TodoItem = {
      id: 0,
      todo: {
        title: 'Mock Task-1',
        hours: 20
      }
    }

    dispatch(openModalDialog(mockTodo))
  }

  return (
    <div>
      <button aria-label="delete-todo-button" onClick={deleteItem}>Delete</button>
      <ModalDialogWrapper>
        <DeleteDialog />
      </ModalDialogWrapper>
    </div>
  )
}