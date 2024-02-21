import { SingleItem } from './SingleItem';
export function ShoppingListItems({ items, onChangeStatus }) {
  return (
    <div className='items'>
      {items.map(item => <SingleItem item={item} key={item.id} onChangeStatus={onChangeStatus} />)}
    </div>
  )
}