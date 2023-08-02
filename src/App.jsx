import { useState } from 'react'
import './App.scss'
import FaqHeading from './components/FaqHeading/FaqHeading'
import Counter from './components/Level_1_3/Counter/Counter'
import DayNightBtn from './components/Level_2_2/DayNightBtn'
import CalcTemp from './components/Level_3_2/CalcTemp/CalcTemp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FaqHeading/>
      <Counter/>
      <DayNightBtn/>
      <CalcTemp/>
    </>
  )
}

export default App
