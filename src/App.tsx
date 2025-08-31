import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Tabs } from 'antd';
import type { Task } from './types';
import { useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Footer from './components/Footer';

const { TabPane } = Tabs;

function App() {
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

  return (
    <>
      <h1>To-Do List</h1>
      <TaskInput onAdd={addTask} />

      <Tabs defaultActiveKey="all">
        <TabPane tab={`All (${tasks.length})`} key="all">
          <TaskList tasks={tasks} onToggle={toggleTask}></TaskList>
        </TabPane>
        <TabPane tab={`Active (${remaining.length})`} key="remaining">
          <TaskList
            tasks={remaining}
            onToggle={toggleTask}
          ></TaskList>
        </TabPane>
        <TabPane tab={`Completed (${completed.length})`} key="completed">
          <TaskList
            tasks={completed}
            onToggle={toggleTask}
          ></TaskList>
        </TabPane>
      </Tabs>

      <Footer
        remainingCount={remaining.length}
        completedCount={completed.length}
        onClearCompleted={clearCompleted}
      />
    </>
  );
}

export default App;
