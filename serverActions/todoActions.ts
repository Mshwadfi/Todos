'use server'
import { ITodo, IdObject } from '@/interfaces';
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';

 const prisma = new PrismaClient();

export const getTodoAction = async (userId : string | null) =>{
    return userId && await prisma.todo.findMany({
        where: {
            user_id: userId as string,
        },
        orderBy: {
            createdAt: 'desc',
        }
    });
};

export const createTodoAction = async (data : {title : string , body?: string,compleeted: boolean , user_id: string}) =>{
    await prisma.todo.create({data});
    revalidatePath('/');
};

export const deleteTodoAction = async ({id}: IdObject) =>{
    await prisma.todo.delete({
        where: {
            id,
        },
    })
    revalidatePath('/');
};

export const updateTodoAction = async ({id,title , body , compleeted} : ITodo) =>{
    await prisma.todo.update({
        where:{id,},
        data: {
            title,
            body,
            compleeted,
        }
    }),
    revalidatePath('/');
};