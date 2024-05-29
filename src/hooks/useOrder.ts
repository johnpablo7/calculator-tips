import { useState } from 'react';
import type { TMenuItem, TOrderItem } from '../types';

export default function useOrder() {
  const [order, setOrder] = useState<TOrderItem[]>([]);
  // const [total, setTotal] = useState(0);
  // const [auth, setAuth] = useState(false);

  const addItem = (item: TMenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      // console.log('Ya existe');
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  console.log(order);

  return {
    addItem,
  };
}
