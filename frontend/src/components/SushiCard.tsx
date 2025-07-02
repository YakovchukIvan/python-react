import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const SushiCard: React.FC = () => (
  <Card
    className=""
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        alt="example"
        src="https://osama.com.ua/_next/image?url=https%3A%2F%2Fe-admin.com.ua%2Fphoto%2Fphoto%2Fuploads%2Fosama-sushi%2F1732529104365.jpeg&w=1080&q=75"
      />
    }
  >
    <Meta title="Item1" description="caption" />
  </Card>
);

export default SushiCard;
