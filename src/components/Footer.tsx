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
      <Typography.Text>Active: {remainingCount}</Typography.Text>
      {completedCount > 0 && (
        <Button type="link" onClick={onClearCompleted}>
          Clear completed
        </Button>
      )}
    </Space>
  );
};

export default Footer;
