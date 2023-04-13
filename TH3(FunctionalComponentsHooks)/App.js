import React from 'react'
import { useState, useMemo } from 'react'

function App() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [product, setProduct] = useState([]);

  const onAddProduct = () => setProduct([...product, {name, price: Number(price)}]);
  const total = useMemo(() => {
    const result = product.reduce((acc, ele) => {
      console.log('Tinh toan lai...')
      return acc + ele.price
    }, 0)
    return result
  }, [product]) 
  
  return (
    <div className='container'>
      <input
        placeholder='Enter name...'
        value={name}
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <input
        placeholder='Enter price...'
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <div onClick={onAddProduct}>Add product</div>
      <div>Total: {total}</div>
      <ul>
        {product.map((e, i) => <li key={i}>{e.name} - {e.price}</li>)}
      </ul>
    </div>
  )
}

export default App