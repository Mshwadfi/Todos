'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Badge } from "./badge"
import { ITodo } from "@/interfaces"
import TodoController from "../TodoController"
 

  export default function TodosTable({todos} : {todos: ITodo[]}) {
  
    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>compleeted</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos?.map((todo) => (
            <TableRow key={todo?.id}>
              <TableCell className="font-medium">{todo?.id}</TableCell>
              <TableCell>{todo?.title.length < 30? todo?.title : todo?.title?.slice(0,30) + ' . . .'}</TableCell>
              <TableCell>{todo?.compleeted? <Badge>compleeted</Badge>: <Badge variant='secondary'>uncompleeted</Badge>}</TableCell>
              <TableCell className="flex items-center justify-end gap-2">
                <TodoController todo={todo}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{todos?.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  