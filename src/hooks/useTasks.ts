import { useState, useMemo } from "react";
import type { Task } from "../types";
import { v4 as uuid } from 'uuid';

const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    if (!title.trim()) return;
    setTasks((prev) => [...prev, { id: uuid(), title, done: false }]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const clearCompleted = () => setTasks(tasks.filter((task) => !task.done));

  const remaining = useMemo(() => tasks.filter((task) => !task.done), [tasks]);
  const completed = useMemo(() => tasks.filter((task) => task.done), [tasks]);

  return { tasks, remaining, completed, addTask, toggleTask, clearCompleted }

}

export default useTasks;
