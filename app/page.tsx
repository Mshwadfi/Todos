import AddTodoForm from "@/components/AddTodoForm";
import { TodoFormValues,todoFormSchema } from "@/schema";

export default async function Home() {

  
  const defaultValues : Partial<TodoFormValues> = {
    title: "Todo",
    body : "Todo Body"
  }
  
  
  return (
    <main>
      <AddTodoForm />
    </main>
  );
}
