import { Space, Typography, Button } from 'antd';

interface Props {
  remainingCount: number;
  completedCount: number;
  onClearCompleted(): void;
}

const Footer = ({
  remainingCount,
  completedCount,
  onClearCompleted,
}: Props) => {
  return (
    <Space
      style={{
        marginTop: 24,
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Typography.Text>{remainingCount} items left</Typography.Text>
        <Button type="default" disabled={completedCount === 0} onClick={onClearCompleted}>
          Clear completed
        </Button>
    </Space>
  );
};

export default Footer;
