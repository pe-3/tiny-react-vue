// import Button from '@opentiny/react/button/pc'
import InputNumber from '@opentiny/react/input-number/pc'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState(2)
  return (
    <>
      <div>
        {/* <Button /> */}
        <InputNumber />
        <InputNumber value={value} onChange={setValue} />
      </div>
    </>
  )
}

export default App
