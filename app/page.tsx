import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/ui/todoTable";
import { TodoFormValues,todoFormSchema } from "@/schema";
import { getTodoAction } from "@/serverActions/todoActions";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {

  const { userId } : { userId: string | null } = auth();
  const todos = await getTodoAction(userId);
  const defaultValues : Partial<TodoFormValues> = {
    title: "Todo",
    body : "Todo Body",
    compleeted: false,
  }
  
  return todos && (
    <main className="container">
      <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-y-4 mt-10">
        <AddTodoForm  userId={userId ?? ''}/>
        <TodoTable todos={todos} />
      </div>
    </main>
  );
}

