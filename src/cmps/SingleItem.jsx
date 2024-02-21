export function SingleItem({ item }) {
  return (
    <div className="single-item">
      <input type="checkBox" name="" id="" />
      <p style={{ textTransform: 'capitalize' }}>{item.name}</p>
      <button className='btn remove-btn'>delete</button>
    </div>
  )
}
