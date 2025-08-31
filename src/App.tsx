import './App.css';
import TaskInput from './components/TaskInput';
import type { Task } from './types';
import { useState } from 'react';
import { v4 as uuid} from 'uuid';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  const addTask = (title: string) => {
    if (!title.trim()) return
    setTasks(prev => [...prev, {id: uuid(), title, done: false }])
  };

  return (
    <>
      <h1>To-Do List</h1>
      <TaskInput onAdd={addTask}/>
    </>
  )
}

export default App
