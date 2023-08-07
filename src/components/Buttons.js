import maximize1 from "../images/maximize-1.svg";
import maximize2 from "../images/maximize-2.svg";
import calendar from "../images/calendar.svg";
import calendar1 from "../images/calendar1.svg";
import unlock from "../images/unlock.svg";
import unlock1 from "../images/unlock1.svg";
import sun from "../images/sun.svg";
import sun1 from "../images/sun1.svg";
import pieChart from "../images/pie-chart.svg";
import pieChart1 from "../images/pie-chart1.svg";

export default function Buttons({handleOkClick, inputValue}) {

  return (
    <div className="footer-container">
      <button className={`button1 ${inputValue ? 'button1-enabled' : 'custom-button-disabled'}`}>
        <img src={`${inputValue ? maximize1 : maximize2}`} alt="maximize" className="imageButton"/>
        <span className="button-text">Open</span>
      </button>
      <button className={`${inputValue ? 'class-1-buttons' : 'custom-button-disabled'}`}>
        <img src={`${inputValue ? calendar : calendar1}`} alt="calendar" className="imageButton"/>
        <span className="button-text">Today</span>
      </button>
      <button className={`${inputValue ? 'class-1-buttons' : 'custom-button-disabled'}`}>
        <img src={`${inputValue ? unlock : unlock1}`} alt="unlock" className="imageButton"/>
        Public
      </button>
      <button className={`${inputValue ? 'class-1-buttons' : 'custom-button-disabled'}`}>
        <img src={`${inputValue ? sun : sun1}`} alt="sun" className="imageButton"/>
        Highlight
      </button>
      <button className={`${inputValue ? 'class-1-buttons' : 'custom-button-disabled'}`}>
        <img src={`${inputValue ? pieChart : pieChart1}`} alt="pieChart" className="imageButton"/>
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