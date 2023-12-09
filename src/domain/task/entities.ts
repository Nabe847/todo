import { z } from 'zod';

export const taskSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(500),
});

export type Task = z.infer<typeof taskSchema>;

export const Task = {
  create(title: string, description: string) {
    const result = taskSchema.safeParse({ title, description });

    if (result.success) {
      return result.data;
    }

    throw new Error('', { cause: result.error });
  },
};
