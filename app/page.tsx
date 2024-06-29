import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/ui/todoTable";
import { TodoFormValues,todoFormSchema } from "@/schema";
import { getTodoAction } from "@/serverActions/todoActions";

export default async function Home() {

  const todos = await getTodoAction();
  const defaultValues : Partial<TodoFormValues> = {
    title: "Todo",
    body : "Todo Body",
    compleeted: false,
  }
  
  
  return (
    <main className="container">
      <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-y-4 mt-10">
        <AddTodoForm  />
        <TodoTable todos={todos} />
      </div>
    </main>
  );
}
