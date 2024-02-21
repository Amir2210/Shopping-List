import { useState } from 'react'
import { Form } from './cmps/Form'
import { ToastContainer, toast } from 'react-toastify'
import { nanoid } from 'nanoid';
import { ShoppingListItems } from './cmps/ShoppingListItems';
const App = () => {
  const [items, setItems] = useState([])

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

  return (
    <section className='section-center'>
      <Form onAddItem={onAddItem} />
      <ShoppingListItems items={items} />
      <ToastContainer position='top-center' />
    </section>
  )
}

export default App
