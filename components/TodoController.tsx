import React, { useState } from 'react'
import { Button } from './ui/button'
import { deleteTodoAction } from '@/serverActions/todoActions'
import { Pen, Trash } from 'lucide-react'
import Spinner from './Spinner'
import UpdateTodoForm from './UpdateTodo'
import { ITodo } from '@/interfaces'

const TodoController = ({todo} : {todo : ITodo}) => {
    const [isLoading , setIsloading] = useState(false);
  return (
    <>
        <UpdateTodoForm todo={todo}/>
        <Button
          size={'icon'}
          variant={'destructive'}
          onClick={async () => {
            if (todo?.id) {
              setIsloading(true);
              await deleteTodoAction({ id: todo.id });
              setIsloading(false);
            } else {
              console.error("Todo ID is undefined");
            }
          }}
        >
  {isLoading ? <Spinner /> : <Trash />}
</Button>

    </>
  )
}

export default TodoController;
