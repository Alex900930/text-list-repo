import './App.css';
import plusSquareIcon from './images/plus-square.svg';
import maximize from './images/maximize-2.svg';
import calendar from './images/calendar.svg';
import unlock from './images/unlock.svg';
import sun from './images/sun.svg';
import pieChart from './images/pie-chart.svg';


function App() {

  const disable = true;
  console.log(disable);
  return (
      <div className="form-container">
        <div className="input-container">
          <label>
            <img src={plusSquareIcon} alt="Plus Square Icon" className="icon" />
          </label>
          <input
            type="search"
            placeholder="Type to add new task"
          />
        </div>
        <div className="footer-container">
          <button className="blog-tab-link w-tab-link w-inline-block open" disabled={disable}>
            <img src={maximize} alt="maximize"/>
              Open
          </button>
          <button className="blog-tab-link w-tab-link w-inline-block">
            <img src={calendar} alt="calendar"/>
            Today
          </button>
          <button className="blog-tab-link w-tab-link w-inline-block">
            <img  src={unlock} alt={unlock}/>
            Public
          </button>
          <button className="blog-tab-link w-tab-link w-inline-block">
            <img src={sun} alt={sun}/>
            Highlight
          </button>
          <button className="blog-tab-link w-tab-link w-inline-block">
            <img src={pieChart} alt={pieChart}/>
            Estimation
          </button>
          <button className="button-Cancel">
            Cancel
          </button>
          <button className="button-Ok">
            Ok
          </button>
        </div>
      </div>
  );
}

export default App;
