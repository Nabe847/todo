import { Task } from '@/domain/task/entities';
import { prisma } from '@/infra/prisma';

const TaskRepository = {
  async findAll(): Promise<Task[]> {
    const records = await prisma.task.findMany();
    return records.map((r) => Task.create(r.title, r.description));
  },

  async findById(id: string): Promise<Task | null> {
    const record = await prisma.task.findFirst({
      where: { id },
    });
    if (!record) {
      return null;
    }
    return Task.fromDbModel(record);
  },

  async create(task: Task): Promise<void> {
    await prisma.task.create({ data: { ...task } });
  },
} as const;

export default TaskRepository;
