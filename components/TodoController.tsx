import React, { useState } from 'react'
import { Button } from './ui/button'
import { deleteTodoAction } from '@/serverActions/todoActions'
import { Pen, Trash } from 'lucide-react'
import Spinner from './Spinner'

const TodoController = ({id} : {id:string}) => {
    const [isLoading , setIsloading] = useState(false);
  return (
    <>
        <Button size={'icon'}> <Pen /> </Button>
        <Button size={'icon'} variant={'destructive'} onClick={async ()=> {
            setIsloading(true);
            await deleteTodoAction(id)
            setIsloading(false);
        }}> {isLoading? <Spinner /> : <Trash />} </Button>
    </>
  )
}

export default TodoController;
