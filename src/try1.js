import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "30days",
  },
  {
    value: 25,
    label: "60days",
  },
  {
    value: 50,
    label: "120days",
  },

  {
    value: 75,
    label: "1year",
  },

  {
    value: 100,
    label: "3year",
  },
];




function YourComponent() {
  const [rangeValue, setRangeValue] = useState(0); // Set the initial value for the range
  const [textValue, setTextValue] = useState("");




  const handleRangeChange = (event) => {

    let minValue =0 
    let mx =100
    let additionValue = 0

    // console.log( event.target.value)
    
    if (event.target.value >= 0 && event.target.value < 25) {

      minValue = 30
      mx = 60
      additionValue = 0

      
    } 
    else if (event.target.value >= 25 && event.target.value <= 50) {

      minValue = 60
      mx = 120
      additionValue = 25
 
    } else if (event.target.value >= 50 && event.target.value <= 75) {

      minValue = 120
      mx = 365
      additionValue = 50
    } else if (event.target.value >= 75 && event.target.value <= 100) {
     

      minValue = 365
      mx = 365*3
      additionValue = 75

    } 

    
    
    const ans = ((rangeValue-additionValue)*(mx-minValue))/25 + minValue

    let x = Math.round(ans)
    console.log("ans: ",ans ,x)

    // to change value of input text field

    setTextValue(x)
    setRangeValue(event.target.value);

  };






  const handleTextChange = (e) => {
    // start



    let maxValue = 100;
    let minValue = 0;
    let additionValue = 0;

    // 30-60

    if (e.target.value >= 30 && e.target.value < 60) {
      additionValue = 0;
      maxValue = 60;
      minValue = 30;
    }
    // 60-120
    else if (e.target.value >= 60 && e.target.value <= 120) {
      additionValue = 25;
      minValue = 60;
      maxValue = 120;
    }
    // 120-1
    else if (e.target.value >= 120 && e.target.value <= 365) {
      additionValue = 50;
      minValue = 120;
      maxValue = 365;
    }

    // 1-3
    else if (e.target.value >= 365 && e.target.value <= 365 * 3) {
      additionValue = 75;
      minValue = 365;
      maxValue = 365 * 3;
    }

    const sol = additionValue + (25 * (e.target.value - minValue)) / (maxValue - minValue);
    const intsol = parseInt(sol)


    // end
  

    setTextValue(e.target.value);

const parsedValue = intsol
    console.log("parsedValue ",parsedValue)
    if (!isNaN(parsedValue)) {
      setRangeValue(parsedValue);
    } else {
      setRangeValue(0);
    }
  };

  return (
    <div className="mx-5 my-5 border border-4 border-primary">
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Custom marks"
          value={rangeValue}
          onChange={handleRangeChange}
          // valueLabelDisplay="auto"
          // step={10}
          // value={90}
          marks={marks}
          min={0}
          max={100}
        />
      </Box>

      <br />

      <input
        type="text"
        value={textValue}
        onChange={handleTextChange}
        placeholder="Enter a value"
      />
    </div>
  );
}

export default YourComponent;
