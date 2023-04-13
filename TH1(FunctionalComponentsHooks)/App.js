import React from 'react'
import { useState } from 'react'

function App() {
  const [age, setAge] = useState(5);

  const onChangeAge = () => {
    setAge(age + 1)
  }

  return (
    <div className='container'>
      <div>Tuổi là: {age}</div>
      <button onClick={onChangeAge}>Tăng tuổi lên 1</button>
    </div>
  )
}

export default App