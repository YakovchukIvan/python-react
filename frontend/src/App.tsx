// import SushiCard from './components/SushiCard';
import './index.css';

import React from 'react';
import { MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Категорія суші1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
        ],
      },
      {
        key: 'g2',
        label: 'Категорія суші2',
        type: 'group',
        children: [
          { key: '3', label: 'Option 3' },
          { key: '4', label: 'Option 4' },
        ],
      },
    ],
  },
];

export type SushiItem = {
  id: string;
  title: string;
  price: number;
  count: number;
  composition: string;
  weight: number;
  imageUrl: string;
  category: string;
  favorite: boolean;
  cart: boolean;
};

const App: React.FC = () => {
  const fetchSushiItems = () => {
    fetch('http://127.0.0.1:8000/items')
      .then((response) => response.json())
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <Menu
      onClick={() => fetchSushiItems()}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default App;
