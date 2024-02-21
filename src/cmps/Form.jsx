import { useState } from 'react'
export function Form({ onAddItem }) {

  const [product, setProduct] = useState('')

  function handleAddItem(ev) {
    ev.preventDefault()
    if (product) {
      onAddItem(product)
      setProduct('')
    } else alert('pls enter value')
  }

  return (
    <form onSubmit={handleAddItem}>
      <h4>Shopping List</h4>
      <div className="form-control">
        <input className='form-input'
          type="text"
          value={product}
          placeholder='Enter a product name'
          onChange={(ev) => setProduct(ev.target.value)} />
        <button className='btn'>Add Item</button>
      </div>
    </form>
  )
}