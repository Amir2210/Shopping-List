import { SingleItem } from './SingleItem';
export function ShoppingListItems({ items }) {
  return (
    <div className='items'>
      {items.map(item => <SingleItem item={item} key={item.id} />)}
    </div>
  )
}