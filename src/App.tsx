import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import type { Task } from './types';
import { useMemo, useState } from 'react';
import { v4 as uuid} from 'uuid';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  const addTask = (title: string) => {
    if (!title.trim()) return
    setTasks(prev => [...prev, {id: uuid(), title, done: false }])
  };

  const toggleTask = (id: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id ? { ...task, done: !task.done } : task)
    )
  }

  const remaining = useMemo(() => tasks.filter(task => !task.done), [tasks]);

  return (
    <>
      <h1>To-Do List</h1>
      <TaskInput onAdd={addTask}/>
      <TaskList title='All' tasks={tasks} onToggle={toggleTask}></TaskList>
      <TaskList title='Remaining' tasks={remaining} onToggle={toggleTask}></TaskList>
    </>
  )
}

export default App
