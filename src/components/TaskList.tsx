import { List, Typography } from 'antd';
import type { Task } from '../types';
import TaskItem from './TaskItem';

interface Props {
  title: string;
  tasks: Task[];
  onToggle(id: string): void;
}

const TaskList = ({ title, tasks, onToggle }: Props) => {
  if (!tasks.length) return null;

  return (
    <>
      <Typography.Title level={4} style={{ marginTop: 24 }}>
        {title}
      </Typography.Title>
      <List
        dataSource={tasks}
        renderItem={(task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggle}></TaskItem>
        )}
      ></List>
    </>
  );
};

export default TaskList;
