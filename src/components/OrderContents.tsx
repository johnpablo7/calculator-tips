import type { TOrderItem } from '../types';

type orderContentsProps = {
  order: TOrderItem[];
};

export default function OrderContents({ order }: orderContentsProps) {
  return (
    <div>
      <h2 className='font-black text-4xl'>Consumo</h2>

      <div>
        {order.length === 0 ? (
          <p className='text-center'>La orden esta vacia</p>
        ) : (
          order.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
