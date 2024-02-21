import { useState } from 'react'
import { Form } from './cmps/Form'
import { ToastContainer, toast } from 'react-toastify'
import { nanoid } from 'nanoid';
const App = () => {
  const [items, setItems] = useState([])

  function onAddItem(product) {
  const newProduct ={
  name: product,
  completed: false,
  id: nanoid()
}
console.log(newProduct)
  }
  return (
    <section className='section-center'>
      <Form onAddItem={onAddItem} />
      <ToastContainer position='top-center' />
    </section>
  )
}

export default App
