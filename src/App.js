import { useState, useEffect } from 'react';
import './App.css';
import Buttons from "./components/Buttons";
import close from "./images/x.svg";
import save from "./images/save.svg";
import user from "./images/user.svg";
import emailIcon from './images/mail.svg';
import linkIcon from './images/link.svg';
import plusSquareIcon from './images/plus-square.svg';
import imgLogin from './images/curriculum.jpeg';
import imgLogin1 from './images/curriculum1.jpeg';

const isValidEmail = (text) => {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  return emailRegex.test(text);
};

const isValidUrl = (text) => {
  const urlRegex = /^(http[s]?:\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/;
  return urlRegex.test(text);
};

const getWordStyleDiv = (word) => {
  if (word.startsWith('@')) {
    return { className: 'green-tag-div', text: word };
  } else if (word.startsWith('#')) {
    return { className: 'purple-tag-div', text: word };
  } else if (isValidEmail(word)) {
    return { className: 'orange-email-div', text: 'Email 1' };
  } else if (isValidUrl(word)) {
    return { className: 'blue-url-div', text: 'Link 1' };
  } else {
    return { className: 'normal-div', text: word };
  }
};

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
};

function App() {
  const [botonesHabilitados, setBotonesHabilitados] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [buttonOk, setButtonOk] = useState("Ok");

  const handleLinkClick = () => {
    setBotonesHabilitados(!botonesHabilitados);
    setIsAdding(false);
    setInputValue('');
  };

  const handleOkClick = (e) => {
    if (inputValue.trim() === '') {
      setBotonesHabilitados(false);
      setInputValue('');
      setIsAdding(false);
    } else {
      setIsAdding(true);
      setBotonesHabilitados(false);
    }
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    const handleButtonOk = () => {
      if (inputValue.trim() === '') {
        setButtonOk(<img src={close} alt="Close Icon" className="icon-button" />);
      } else {
        setButtonOk(<img src={save} alt="Save Icon" className="icon-button" />);
      }
    };

    if (e.target.value.trim() !== '') {
      setBotonesHabilitados(true);
      if (window.innerWidth < 1230) {
        handleButtonOk();
      } else {
        setButtonOk("Add");
      }
    } else {
      setBotonesHabilitados(false);
      if (window.innerWidth < 1230) {
        handleButtonOk();
      }
    }
    return inputValue;
  };

  const nameClass = inputValue ? 'imagen-logo' : 'imagen-logo-opacity';

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1230) {
        handleButtonOk();
      } else {
        setButtonOk("Ok");
      }
    }

    const handleButtonOk = () => {
      if (inputValue.trim() === '') {
        setButtonOk(<img src={close} alt="Close Icon" className="icon-button" />);
      } else {
        setButtonOk(<img src={save} alt="Save Icon" className="icon-button" />);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [inputValue]);

  return (
    <div className={`${botonesHabilitados ? 'form-container' : ''}`}>
      <div className={`${botonesHabilitados ? 'input-container' : 'input-container-without-border'}`}>
        <label>
          <img src={plusSquareIcon} alt="Plus Square Icon" className="icon" />
        </label>
        <div onClick={handleLinkClick}
             className={`${botonesHabilitados ? 'handleClick' : 'handleClick-without-style'}`}>
          <input
            type="text"
            placeholder="Type to add new task"
            value={inputValue}
            onChange={(e) => handleInput(e)}
            id="input-styles"
            style={{ width: 1300 }}
          />
          {isAdding ? <input placeholder="Type to add new task" id="input-styles" /> : <div className="highlighted-text">
            {inputValue.split(' ').map((word, index) => (
              <span key={index} className={getWordStyle(word)}>
                {word}{" "}
              </span>
            ))}
          </div>}
        </div>
        <div className={`${botonesHabilitados ? nameClass : 'img-null'}`}>
          <img src={`${inputValue ? imgLogin : imgLogin1}`} alt="imagen logo" className="imagen-logo" />
        </div>
      </div>

      {isAdding ? (<div className="div-list">
        <div className="check">
          <input type="checkbox" id="check" />
          {inputValue.split(' ').map((word, index) => {
            const isEmail = isValidEmail(word);
            const isUrl = isValidUrl(word);
            let isTag = '';
            if (word.startsWith('@')) {
              isTag = word;
            }

            return (
              <span key={index} className={getWordStyleDiv(word).className}>
                <span className="icon-text">
                  {isEmail ? <img src={emailIcon} alt="Email Icon" className="icon-div" /> : null}
                  {isUrl ? <img src={linkIcon} alt="Link Icon" className="icon-div" /> : null}
                  {isTag ? <img src={user} alt="User Icon" className="icon-div" /> : null}
                  {isEmail || isUrl || isTag ? getWordStyleDiv(word).text : word}
                </span>
              </span>
            );
          })}
        </div>
      </div>) : botonesHabilitados && <Buttons handleOkClick={handleOkClick}
                                               inputValue={inputValue} buttonOk={buttonOk} setButtonOk={setButtonOk} />}
    </div>
  );
}

export default App;

