'use client'
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Pen, Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { TodoFormValues , todoFormSchema } from '@/schema';
import { updateTodoAction } from '@/serverActions/todoActions'
import { Checkbox } from '@/components/ui/checkbox'
import Spinner from './Spinner'
import { ITodo } from '@/interfaces'


const UpdateTodoForm = ({todo} : {todo : ITodo}) => {
  const [isFormOpen , setIsFormOpen] = useState(false);
  const [isLoading , setIsloading] = useState(false);
    const onSubmit = async (data: TodoFormValues)=>{
        setIsloading(true)
        await updateTodoAction({id: todo.id as string, title : data.title, body: data.body, compleeted: data.compleeted})
        setIsFormOpen(false);
        setIsloading(false);
    };
    const defaultValues : Partial<TodoFormValues> = {
        title: todo.title,
        body : todo.body as string,
        compleeted: todo.compleeted,
      }
      
    const form = useForm<TodoFormValues>({
        resolver: zodResolver(todoFormSchema),
        defaultValues,
        mode: "onChange",
      })
  return (
    <div>
      <main className="container">
      {/* <pre>{JSON.stringify(todos , undefined , 2)}</pre> */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
      <DialogTrigger asChild className='ml-auto flex flex-end'>
        <Button size={'icon'}> <Pen /> </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Todo</DialogTitle>
          <DialogDescription>
           
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>title</FormLabel>
              <FormControl>
                <Input placeholder="play football" {...field} />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>body</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
               
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
  control={form.control}
  name="compleeted"
  render={({ field }) => (
    <FormItem>
      <FormControl>
        <Checkbox checked={field.value} onCheckedChange={field.onChange} name={field.name} ref={field.ref} />
      </FormControl>
      <FormLabel className='p-2'>Compleeted</FormLabel>
      <FormDescription>
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>

        <Button type="submit">{isLoading? <Spinner/> : "Save changes"}</Button>
        </form>
        </Form>
        </div>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </main>
    </div>
  )
}

export default UpdateTodoForm;
