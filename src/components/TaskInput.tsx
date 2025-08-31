import { Input } from 'antd';

interface Props {
    onAdd(title: string): void;
}

const TaskInput = ({ onAdd }: Props) => {
    return <Input.Search
        placeholder='Введите новую задачу'
        enterButton='Добавить'
        onSearch={onAdd}
    />
};

export default TaskInput;
