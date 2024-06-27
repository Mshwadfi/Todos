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
    <main>
      <AddTodoForm />
      <TodoTable todos={todos}/>
    </main>
  );
}
