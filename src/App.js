import React, { useState } from 'react';

const App = () => {

  const [tempVal, setTempVal] = useState(18);
  const [tempColor, setTempColor] = useState("cold")

  const addTemp = () => {
    if(tempVal === 35) return;

    const newTemp = tempVal + 1;

    if(newTemp >= 24) {
      setTempColor('hot');
    }

    setTempVal(newTemp);
  };

  const minusTemp = () => {
    if(tempVal === 5) return;

    const newTemp = tempVal - 1;

    if(newTemp < 18) {
      setTempColor('cold');
    }

    setTempVal(newTemp);
  };


  return (
    <div className="container">
      <div className="temp-display-container">
        <div className={`temp-display ${tempColor}`}>{tempVal}°C
        </div>
        </div>
        <div className="button-container">
      </div>
          <button onClick={() => addTemp()}>+</button>
          <button onClick={() => minusTemp()}>-</button>
    </div>
  )
}

export default App