import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom";

function Buttons({data,setData,randomNum,time,setTime,timerOn,setTimerOn}) {
   
  
  const [gotData,setgotData]=useState(false);
  const [rightAnswer,setRightAnswer]=useState(true);
 
  const btnClickedHandler=(e)=>{
    setData(e.target.value);
    setgotData(true);
 }
  //console.log(data);
  
   useEffect(() => {
    setTimerOn(true);
    if(gotData===true){
    if(randomNum===data){
          // console.log("done");
        setTimerOn(false);
       
      } 
     else{
      setTimerOn(false); 
      setTime(0);
      setRightAnswer(false);
     }
     } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gotData]);

   useEffect(() => {
    let interval=null;

    if(timerOn){
        interval =setInterval(() => {
            setTime(prevTime=>prevTime+10)
        }, 10);
    }
    else{
        clearInterval(interval);
    }
    return () => {
        clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerOn])
 

    
  
   return (
      <div >
          <div className="wrapper">
            <button value='1' className="btn" onClick={btnClickedHandler}>One</button>
            <button value='2' className="btn" onClick={btnClickedHandler} >Two</button>
            <button value='3' className="btn" onClick={btnClickedHandler} >Three</button>
            <button value='4' className="btn" onClick={btnClickedHandler} >Four</button>
            <button value='5' className="btn" onClick={btnClickedHandler} >Five</button>
            <button value='6' className="btn" onClick={btnClickedHandler} >Six</button>
            <button value='7' className="btn" onClick={btnClickedHandler} >Seven</button>
            <button value='8' className="btn" onClick={btnClickedHandler} >Eight</button>
            <button value='9' className="btn" onClick={btnClickedHandler} >Nine</button>
          </div>    
           
      <div className="btns">
          
          <div>
          {rightAnswer?
            <h3 style={{color:"Green"}}> <span>Your Reaction Time is:  {("0"+Math.floor((time/1000)%60)).slice(-2)}.</span>
            <span>{("0"+((time/10)%100)).slice(-2)} seconds !!!</span></h3>
          :
           <h3 style={{color:"red"}}>You clicked wrong button !!!</h3>
          }
            <h3>Reaction time should be less than 00.60 seconds.</h3>
          
          </div>
          
      </div>  
       
       <div className="restart">
          <Link to="./" >
            <button className="restart-btn" >PLAY AGAIN</button>   
          </Link>
       </div>
      </div>
    );
  }
  
  export default Buttons;