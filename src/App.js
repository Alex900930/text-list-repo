import {useState, useEffect} from 'react';
import './App.css';
import {getWordStyleDiv, isValidUrl, isValidEmail, getWordStyle} from './helpers';
import Buttons from "./components/Buttons";
import close from "./images/x.svg";
import save from "./images/save.svg";
import user from "./images/user.svg";
import emailIcon from './images/mail.svg';
import linkIcon from './images/link.svg';
import plusSquareIcon from './images/plus-square.svg';
import imgLogin from './images/curriculum.jpeg';
import imgLogin1 from './images/curriculum1.jpeg';

function App() {
  const [botonesHabilitados, setBotonesHabilitados] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [buttonOk, setButtonOk] = useState("Ok");
  const [tasks, setTasks] = useState([]);

  const handleLinkClick = () => {
    setBotonesHabilitados(true);
    setIsAdding(false);
    setInputValue('');
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    const handleButtonOk = () => {
      if (inputValue.trim() === '') {
        setButtonOk(<img src={close} alt="Close Icon" className="icon-button"/>);
      } else {
        setButtonOk(<img src={save} alt="Save Icon" className="icon-button"/>);
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
      } else if (inputValue !== '') {
        setButtonOk("Add");
      } else {
        setButtonOk("Ok");
      }
    }

    const handleButtonOk = () => {
      if (inputValue.trim() === '') {
        setButtonOk(<img
          src={close}
          alt="Close Icon"
          className="icon-button"
          style={{maxWidth: '100%', height: 'auto'}}/>);
      } else {
        setButtonOk(<img
          src={save}
          alt="Save Icon"
          className="icon-button"
          style={{maxWidth: '100%', height: 'auto'}}/>);
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
          <img src={plusSquareIcon} alt="Plus Square Icon" className="icon"/>
        </label>
        <div data-testid="link-clickable" onClick={handleLinkClick}
             className={`${botonesHabilitados ? 'handleClick' : 'handleClick-without-style'}`}>
          <input
            type="text"
            placeholder="Type to add new task"
            value={inputValue}
            onChange={(e) => handleInput(e)}
            id="input-styles"
            style={{width: 1300}}
            data-testid="input-styles"
          />
          {isAdding ? <input placeholder="Type to add new task" id="input-styles"/> : <div className="highlighted-text">
            {inputValue.split(' ').map((word, index) => (
              <span key={index} className={getWordStyle(word)}>
                {word}{" "}
              </span>
            ))}
          </div>}
        </div>
        <div className={`${botonesHabilitados ? nameClass : 'img-null'}`}>
          <img src={`${inputValue ? imgLogin : imgLogin1}`} alt="imagen logo" className="imagen-logo"/>
        </div>
      </div>

      {/* <div className="div-list">
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
      </div>*/}

      <div className="div-list">
        {tasks.map((task, index) => (
          <div className="list-item" key={index}>
            <input type="checkbox" id={`checkbox-${index}`}/>
            {task.split(' ').map((word, wordIndex) => {
              const isEmail = isValidEmail(word);
              const isUrl = isValidUrl(word);
              let isTag = '';
              if (word.startsWith('@')) {
                isTag = word;
              }

              return (
                <span key={wordIndex} className={getWordStyleDiv(word).className}>
                      <span className="icon-text">
                        {isEmail ? <img src={emailIcon} alt="Email Icon" className="icon-div"/> : null}
                        {isUrl ? <img src={linkIcon} alt="Link Icon" className="icon-div"/> : null}
                        {isTag ? <img src={user} alt="User Icon" className="icon-div"/> : null}
                        {isEmail || isUrl || isTag ? getWordStyleDiv(word).text : word}
                      </span>
                   </span>
              );
            })}
          </div>
        ))}
      </div>
      <Buttons setBotonesHabilitados={setBotonesHabilitados} setInputValue={setInputValue}
               setIsAdding={setIsAdding} inputValue={inputValue} buttonOk={buttonOk} setButtonOk={setButtonOk}
               tasks={tasks} setTasks={setTasks} botonesHabilitados={botonesHabilitados}/>

    </div>
  );
}

export default App;

