import React from 'react';

import { List } from 'antd';

import { IOrder } from '../../store/order/models/order.model';
import { OrderItem } from '../OrderItem';

interface IOrderListProps {
  orders: IOrder[];
}

export const OrdersList: React.FC<IOrderListProps> = ({
  orders,
}) => (
  <List
    locale={{
      emptyText: "There's nothing to do :(",
    }}
    dataSource={orders}
    renderItem={(todo) => (
      <OrderItem
        todo={todo}
      />
    )}
    pagination={{
      position: 'bottom',
      pageSize: 10,
    }}
  />
);
