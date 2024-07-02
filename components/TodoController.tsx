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
        {/* <Button size={'icon'}> <Pen /> </Button> */}
        <UpdateTodoForm todo={todo}/>
        <Button size={'icon'} variant={'destructive'} onClick={async ()=> {
            setIsloading(true);
           todo.id && await deleteTodoAction({id : todo?.id})
            setIsloading(false);
        }}> {isLoading? <Spinner /> : <Trash />} </Button>
    </>
  )
}

export default TodoController;
