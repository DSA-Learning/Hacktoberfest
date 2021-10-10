import React,{useState} from 'react';
import Display from './display';
import Buttons from './buttons';


function Merge() {

    const [data, setData] = useState("");
    const [randomNum, setRandomNum] = useState("");
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
  
    return (
      <div className="Merge">
  
    
        <Display data={data} setData={setData} randomNum={randomNum} setRandomNum={setRandomNum} />
        <Buttons data={data} setData={setData} randomNum={randomNum} time={time} setTime={setTime} timerOn={timerOn} setTimerOn={setTimerOn} />
       
       
      </div>
    );
  }
  
  export default Merge;
  