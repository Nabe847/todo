'use client';

import { List, ListItem } from '@chakra-ui/react';
import { client } from 'api';
import { Task } from 'api/build/types/domain/task/entities';
import { useEffect, useState } from 'react';

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    client.api.task
      .$get()
      .then(async (response) => {
        if (response.ok) {
          const tasks = await response.json();
          setTasks(tasks);
        }
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <List>
      {tasks.map((t, i) => (
        <ListItem key={i}>{t.title}</ListItem>
      ))}
    </List>
  );
}
