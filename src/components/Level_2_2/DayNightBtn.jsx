import { useState } from "react";
import './DayNightBtn.scss'

const DayNightBtn = () => {
  
  const [day, setDay] = useState(true);

  const changeMode = () => {
    setDay(prevDay => !prevDay);
  }

  return (
    <>
      <section className="day_night_section">
        <div className={day ? 'light' : 'dark'}>
          <h1>{day ? 'Day' : 'Night'}</h1>
          <button onClick={changeMode}>Change to {day ? 'Night' : 'Day'}</button>
        </div>
      </section>
    </>
  );
}

export default DayNightBtn;