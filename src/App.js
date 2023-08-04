import './App.css';
import plusSquareIcon from './images/plus-square.svg';
import maximize2 from './images/maximize-2.svg';
import calendar from './images/calendar.svg';
import calendar1 from './images/calendar1.svg';
import unlock from './images/unlock.svg';
import unlock1 from './images/unlock1.svg';
import sun from './images/sun.svg';
import sun1 from './images/sun1.svg';
import pieChart from './images/pie-chart.svg';
import pieChart1 from './images/pie-chart1.svg';
import imgLogin from './images/curriculum.jpeg';
import {useState} from 'react';

function Buttons({handleOkClick}) {

  return (
    <div className="footer-container">
      <button className="custom-button-disabled" id="button1">
        <img src={maximize2} alt="maximize" className="imageButton"/>
        <span className="button-text">Open</span>
      </button>
      <button className="custom-button-disabled">
        <img src={calendar1} alt="calendar" className="imageButton"/>
        <span className="button-text">Today</span>
      </button>
      <button className="custom-button-disabled">
        <img src={unlock1} alt="unlock" className="imageButton"/>
        Public
      </button>
      <button className="custom-button-disabled">
        <img src={sun1} alt="sun" className="imageButton"/>
        Highlight
      </button>
      <button className="custom-button-disabled">
        <img src={pieChart1} alt="pieChart" className="imageButton"/>
        Estimation
      </button>
      <button className="button-Cancel" onClick={handleOkClick}>
        Cancel
      </button>
      <button className="button-Ok" onClick={handleOkClick}>
        Ok
      </button>
    </div>
  )
}

function App() {

  const [botonesHabilitados, setBotonesHabilitados] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleLinkClick  = () => {
    setBotonesHabilitados(!botonesHabilitados);
  };

  const handleOkClick = () => {
    if (inputValue.trim() === '') {
      setBotonesHabilitados(false);
      setInputValue('');
    } else {
      // Lógica para manejar la acción normal del botón "Ok"
      // ...
    }
  };

  return (
    <div className={`${botonesHabilitados ? 'form-container' : ''}`}>

        <div className={`${botonesHabilitados ? 'input-container' : 'input-container-without-border'}`}>
          <label>
            <img src={plusSquareIcon} alt="Plus Square Icon" className="icon"/>
          </label>
          <div onClick={handleLinkClick} className={`${botonesHabilitados ? 'handleClick' : 'handleClick-without-style'}`}>
            <input
              type="text"
              placeholder="Type to add new task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div>
            <img src={imgLogin} alt="imagen logo" className={`${botonesHabilitados  ? 'imagen-logo' : 'img-null'}`}/>
          </div>
        </div>
      {botonesHabilitados && <Buttons handleOkClick={handleOkClick}/>}
    </div>
  );
}

export default App;
