'use server'
import { PrismaClient } from '@prisma/client'

 const prisma = new PrismaClient();

export const getTodoAction = async () =>{
    return await prisma.todo.findMany();
};

export const createTodoAction = async (data : {title : string , body?: string,compleeted: boolean}) =>{
    await prisma.todo.create({data});
};

export const deleteTodoAction = async () =>{

};

export const updateTodoAction = async () =>{

};