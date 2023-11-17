import React, { useState , useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



const marks = [
  {
    value: 20,
    label: '30days',
  },
  {
    value: 40,
    label: '60days',
  },
  {
    value: 60,
    label: '120days',
  },

  {
    value:80,
    label:"1year",
  },


  {
    value: 100,
    label: '3year',
  },


];
  



function YourComponent() {
  
  const [rangeValue, setRangeValue] = useState(0); // Set the initial value for the range
  const [textValue, setTextValue] = useState('');
const [num, setNum] = useState(0)
 

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };



useEffect(() => {
console.log("TextValue:- ",textValue,"RangeValue:-",rangeValue,"num:- ",num)
}, [textValue,rangeValue]);
  const handleTextChange = (e) => {




    // start 

  let mx = 100
  let mn = 0
  
  let ad = 0
  

  // 30-60

    if (e.target.value > 30 && e.target.value<60) {
       ad = 0
       mx = 60
       mn = 30
  

    
    }
  // 60-120
    else if (e.target.value > 60 && e.target.value<=120) {
      
       ad = 25
       mn = 60
       mx = 120
    
    }
    // 120-1
    else if (e.target.value > 120 && e.target.value<=365) {
       ad = 50
       mn = 120
       mx = 365
    
    }

    // 1-3
    else if (e.target.value > 365 && e.target.value<=365*3) {
       ad = 75
       mn = 365
       mx = 365*3
    
    }


  
  
   const sol =ad+ (25*(e.target.value - mn)) / (mx - mn)
   setNum(parseInt(sol))
  // console.log("e:- ",e.target.value)

    // end 


setTextValue(num)
// console.log("num:- ",num)
// console.log("range:- ",rangeValue)


    const parsedValue = parseInt(e.target.value, 10);
    if (!isNaN(parsedValue)) {
        // console.log(parsedValue)
      setRangeValue(parsedValue);
    }
    else{
      // console.log("asdad",parsedValue)
        setRangeValue(0)
    }
  };




  return (
    <div>



<Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        value={rangeValue}
        onChange={handleRangeChange}
        valueLabelDisplay="auto"
        // step={10}
        // value={90}
        marks={marks}
        
        min={20}
        max={100}

      />
    </Box>

      <br />

      <input
        type="text"
        value={rangeValue}
        onChange={handleTextChange}
        placeholder="Enter a value"
      />

      <p>Current value: {rangeValue}</p>
    </div>
  );
}


export default YourComponent;
