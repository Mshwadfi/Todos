'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { TodoFormValues , todoFormSchema } from '@/schema';
import { createTodoAction } from '@/serverActions/todoActions'
import { Checkbox } from '@/components/ui/checkbox'


const AddTodoForm = () => {

    const onSubmit = async (data: TodoFormValues)=>{
        await createTodoAction(data)
    };
    const defaultValues : Partial<TodoFormValues> = {
        title: " ",
        body : " ",
        compleeted: false,
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
      <Dialog>
      <DialogTrigger asChild>
      <Button> <Plus />New Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
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
                <Checkbox checked={field.value} onCheckedChange={field.onChange} {...field} />
              </FormControl>
              <FormLabel>compleeted</FormLabel>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save changes</Button>
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

export default AddTodoForm
