import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

function App() {

  const [age, setAge]=useState(0);
  const [rate, setRate]=useState(0);
  const [rate2, setRate2]=useState(0);

  function laske(){
    setRate((220-age)*0.65);
    setRate2((220-age)*0.85);
  }

  return (
    <div>
      <h3>Heart rate limits calculater</h3>
      <form>
        <div>
          <label>Age:</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div>
          <label>Heart rate limits:</label>
          <output id="rate">{rate.toFixed(0)}-{rate2.toFixed(0)}</output>
        </div>
        <button type="button" onClick={laske}>Calculate</button>
      </form>
    </div>
  );
}

export default App;