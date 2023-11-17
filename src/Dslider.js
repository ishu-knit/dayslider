import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

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




export default function Dslider() {
  
//   const [x, setX] = useState(10);
const [days, setDays] = useState(30);
// const [slider, setSlider] = useState(0);



// function set(e) {
  
//   let mx = 100
//   let mn = 0
  
//   let ad = 0
  

//   if (e.target.value === 30) {
//     setSlider(0)
//     return 
//   }

//   if (e.target.value === 60) {
// setSlider(60)
// return 
//   }

//   // 30-60

//     else if (e.target.value > 30 && e.target.value<60) {
//        ad = 0
//        mx = 60
//        mn = 30
  

    
//     }
//   // 60-120
//     else if (e.target.value > 60 && e.target.value<=120) {
      
//        ad = 25
//        mn = 60
//        mx = 120
    
//     }
//     // 120-1
//     else if (e.target.value > 120 && e.target.value<=365) {
//        ad = 50
//        mn = 120
//        mx = 365
    
//     }

//     // 1-3
//     else if (e.target.value > 365 && e.target.value<=365*3) {
//        ad = 75
//        mn = 365
//        mx = 365*3
    
//     }


  
  
//    const sol =ad+ (25*(e.target.value - mn)) / (mx - mn)
//    let num = parseInt(sol)
  
//    console.log(e.target.value)


// setSlider(num)
//    return (e.target.value)

//   }



// function setinput(e) {

// //  console.log(sol)
//     setX(e.target.value)
// }


function valuetext(value) {
setDays(value)
  return `${value}°C`;
}



const changeslider = (e) => {

  setDays(e.target.value)
  console.log(e.target.value)
}

    return (

 <div style={{margin:"50px"}}>
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        // step={10}
        // value={90}
        marks={marks}
        
        min={20}

      />
    </Box>
<input type="number"  value={days} onChange={changeslider}/>
<div>days :- {days}</div>
</div>
  );
}