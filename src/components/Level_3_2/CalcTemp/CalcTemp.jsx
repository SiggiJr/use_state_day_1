import { useState } from "react";

const CalcTemp = () => {

  const [tempInCelsius, setTempInCelsius] = useState("");
  const [tempInFahrenheit, setTempInFahrenheit] = useState("");

const inputCelsius = (event) => {
setTempInCelsius(event.target.value);
const tempC = Number(event.target.value);
const tempF = (tempC * 9/5) + 32;
setTempInFahrenheit(tempF);
}

const inputFahrenheit = (event) => {
  setTempInFahrenheit(event.target.value);
  const tempF = Number(event.target.value);
  const tempC = (tempF - 32) * 5 / 9;
  setTempInCelsius(tempC);
}

  return ( 
    <section className="temp_section">
      <div className="temp_in_celsius">
        <fieldset>
          <legend>
          Schreibe Temperatur in Celsius
            </legend>
          <div>
            <input type="number" onChange={inputCelsius} value={tempInCelsius} name="celsius_input"/>
          </div>
        </fieldset>
        <fieldset>
          <legend>
          Schreibe Temperatur in Fahrenheit
          </legend>
          <div>
            <input type="number" onChange={inputFahrenheit} value={tempInFahrenheit} name="celsius_input"/>
          </div>
        </fieldset>
      </div>
      <p style={{color: tempInCelsius < 100 ? "black" : "red"}}>{tempInCelsius < 100 ? "The water is not boiling" : "The water is boiling!!!"}</p>
    </section>
  );
}

export default CalcTemp;