import { useState } from 'react'
import { Form } from './cmps/Form'

const App = () => {
  const [items, setItems] = useState([])
  function onAddItem(product) {

  }
  return (
    <section className='section-center'>
      <Form onAddItem={onAddItem} />
    </section>
  )
}

export default App
