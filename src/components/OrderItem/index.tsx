import React from 'react';
import { Tag, List } from 'antd';

import './styles.less';
import { IOrder } from '../../store/order/models/order.model';

interface IOrderItemProps {
  todo: IOrder;
}

export const OrderItem: React.FC<IOrderItemProps> = ({
  todo,
}) => {
  return (
    <List.Item
      actions={[]}
      className="list-item"
      key={todo.id}
    >
      <div className="todo-item">
        <Tag color={todo.completed ? 'cyan' : 'red'} className="todo-tag">
          {todo.name}
        </Tag>
      </div>
    </List.Item>
  );
};
