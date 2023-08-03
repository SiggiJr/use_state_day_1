import { useState } from 'react'
import './App.scss'
import Counter from './components/Level_1_3/Counter/Counter'
import DayNightBtn from './components/Level_2_2/DayNightBtn'
import CalcTemp from './components/Level_3_2/CalcTemp/CalcTemp'
import FaqLogic from './components/FaqLogic/FaqLogic'

function App() {

  return (
    <>
      <FaqLogic/>
      <Counter/>
      <DayNightBtn/>
      <CalcTemp/>
    </>
  )
}

export default App
