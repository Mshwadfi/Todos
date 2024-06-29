import { z } from "zod"




export const todoFormSchema = z.object({
    title: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(200, {
        message: "title must not be longer than 200 characters.",
      }),
      body: z
      .string()
      .max(400, {
        message: "body must not be longer than 400 characters.",
      }).optional(),
      compleeted : z.boolean()
  });

  export type TodoFormValues = z.infer<typeof todoFormSchema>