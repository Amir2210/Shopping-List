export function SingleItem({ item, onChangeStatus, onRemoveItem }) {
  return (
    <div className="single-item">
      <input type="checkBox"
        checked={item.completed}
        onChange={() => onChangeStatus(item.id)}
      />
      <p style={{ textTransform: 'capitalize', textDecoration: item.completed && 'line-through' }} >{item.name}</p>
      <button onClick={() => onRemoveItem(item.id)} className='btn remove-btn'>delete</button>
    </div>
  )
}
