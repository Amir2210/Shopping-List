import { useState } from 'react'
import { Form } from './cmps/Form'
import { ToastContainer, toast } from 'react-toastify'
import { nanoid } from 'nanoid';
import { ShoppingListItems } from './cmps/ShoppingListItems';
const App = () => {
  const [items, setItems] = useState([])
  console.log(items)
  function onAddItem(product) {
    const newProduct = {
      name: product,
      completed: false,
      id: nanoid()
    }
    const newItems = [...items, newProduct]
    setItems(newItems)
    toast.success('item added to the list')
  }

  function onChangeStatus(productId) {
    const newItems = items.map(item => {
      if (item.id === productId) {
        const newProduct = { ...item, completed: !item.completed }
        return newProduct
      }
      return item
    })
    setItems(newItems)
  }

  return (
    <section className='section-center'>
      <Form onAddItem={onAddItem} />
      <ShoppingListItems items={items} onChangeStatus={onChangeStatus} />
      <ToastContainer position='top-center' />
    </section>
  )
}

export default App
