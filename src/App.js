import {useState} from 'react';
import './App.css';
import Buttons from "./components/Buttons";
import plusSquareIcon from './images/plus-square.svg';
import imgLogin from './images/curriculum.jpeg';
import imgLogin1 from './images/curriculum1.jpeg';

const getWordStyle = (word) => {
  if (word.startsWith('@')) {
    return 'green-tag';
  } else if (word.startsWith('#')) {
    return 'purple-tag';
  } else if (isValidEmail(word)) {
    return 'orange-email';
  } else if (isValidUrl(word)) {
    return 'blue-url';
  } else {
    return 'normal';
  }
}

const isValidEmail = (text) => {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  return emailRegex.test(text);
}

const isValidUrl = (text) => {
  const urlRegex = /^(http[s]?:\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/
  return urlRegex.test(text);
}

function App() {

  const [botonesHabilitados, setBotonesHabilitados] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleLinkClick = () => {
    setBotonesHabilitados(!botonesHabilitados);
  };

  const handleOkClick = (e) => {
    if (inputValue.trim() === '') {
      setBotonesHabilitados(false);
      setInputValue('');
    } else {
      e.target.innerHTML = "Add";
    }
  };

  function handleInput(e) {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    if (e.target.value.trim() !== '') {
      setBotonesHabilitados(true);
    } else {
      setBotonesHabilitados(false);
    }

    return inputValue;
  }

  const nameClass = inputValue ? 'imagen-logo' : 'imagen-logo-opacity';

  return (
    <div className={`${botonesHabilitados ? 'form-container' : ''}`}>
      <div className={`${botonesHabilitados ? 'input-container' : 'input-container-without-border'}`}>
        <label>
          <img src={plusSquareIcon} alt="Plus Square Icon" className="icon"/>
        </label>
        <div onClick={handleLinkClick}
             className={`${botonesHabilitados ? 'handleClick' : 'handleClick-without-style'}`}>
          <input
            type="text"
            placeholder="Type to add new task"
            value={inputValue}
            onChange={(e) => handleInput(e)}
            id="input-styles"
            style={{width: 1300}}
          />
          <div className="highlighted-text">
            {inputValue.split(' ').map((word, index) => (
              <span key={index} className={getWordStyle(word)}>
            {word}{" "}
          </span>
            ))}
          </div>
        </div>
        <div className={`${botonesHabilitados ? nameClass : 'img-null'}`}>
          <img src={`${inputValue ? imgLogin : imgLogin1}`} alt="imagen logo" className="imagen-logo"/>
        </div>
      </div>
      {botonesHabilitados && <Buttons handleOkClick={handleOkClick} inputValue={inputValue}/>}
    </div>
  );
}

export default App;
