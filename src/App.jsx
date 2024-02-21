import { useState } from 'react'
import { Form } from './cmps/Form'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [items, setItems] = useState([])
  function onAddItem(product) {
    toast.success('Color copied to clipboard');
  }
  return (
    <section className='section-center'>
      <Form onAddItem={onAddItem} />
      <ToastContainer position='top-center' />
    </section>
  )
}

export default App
