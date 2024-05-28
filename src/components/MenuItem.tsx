import type { TMenuItem } from '../types';

type menuItemProps = {
  item: TMenuItem;
  addItem: (item: TMenuItem) => void;
};

export default function MenuItem({ item, addItem }: menuItemProps) {
  return (
    <button
      className='border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between'
      type='button'
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className='font-black'>${item.price}</p>
    </button>
  );
}
