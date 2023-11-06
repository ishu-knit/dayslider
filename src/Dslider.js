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
  
  const [x, setX] = useState(10);

function set(p) {
  return (
    setX(parseInt(p.target.value))
  )
}



function setinput(e) {

  setX(e.target.value)
}


    return (

 <div style={{margin:"50px"}}>
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        // getAriaValueText={valuetext}
        // valueLabelDisplay="auto"
        // step={10}
        marks={marks}
        min={20}
        
        onChange={(e)=> setinput(e)}
        value={x}
      />
    </Box>
<input type="number" value={x} onChange={(o)=>{set(o)}}/>
{console.log(marks)}
</div>
  );
}