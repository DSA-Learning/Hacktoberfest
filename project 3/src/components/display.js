import React,{useEffect} from 'react';


function Display({data,setData,randomNum,setRandomNum}) {
   
  useEffect(() => {
    setRandomNum( (Math.floor(Math.random() * (9 - 1 + 1) ) + 1).toString() );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


 
  
  return (
      <div >
         <div className="input-feild">{randomNum}</div>
      </div>
    );
  }
  
  export default Display;