export function SingleItem({ item, onChangeStatus }) {
  return (
    <div className="single-item">
      <input type="checkBox"
        checked={item.completed}
        onChange={() => onChangeStatus(item.id)}
      />
      <p style={{ textTransform: 'capitalize', textDecoration: item.completed && 'line-through' }} >{item.name}</p>
      <button className='btn remove-btn'>delete</button>
    </div>
  )
}
