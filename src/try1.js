import React, { useEffect, useState } from "react";
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

  const HandleRangeChange = (event) => {
    let minValue = 0;
    let maxValue = 100;
    let additionValue = 0;

    const newValue = event.target.value;

    if (newValue >= 0 && newValue < 25) {
      minValue = 30;
      maxValue = 60;
      additionValue = 0;
    } else if (newValue >= 25 && newValue <= 50) {
      minValue = 60;
      maxValue = 120;
      additionValue = 25;
    } else if (newValue >= 50 && newValue <= 75) {
      minValue = 120;
      maxValue = 365;
      additionValue = 50;
    } else if (newValue >= 75 && newValue <= 100) {
      minValue = 365;
      maxValue = 365 * 3;
      additionValue = 75;
    }

    const ans = ((newValue - additionValue) * (maxValue - minValue)) / 25 + minValue;

    let x = Math.round(ans);

    setTextValue(x);
    setRangeValue(newValue);
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

    const sol =
      additionValue +
      (25 * (e.target.value - minValue)) / (maxValue - minValue);
    const intsol = parseInt(sol);

    // end

    setTextValue(e.target.value);

    const parsedValue = intsol;

    if (!isNaN(parsedValue)) {
      
      // setRangeValue(parsedValue);
    
      setRangeValue((pre)=>{
        if (pre!==parsedValue) 
        {return parsedValue}
        return pre
      })
    }
    
    else {
      setRangeValue(0);
    }
  };


  return (
    <div className="mx-5 my-5 border border-4 border-primary">
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Custom marks"
          value={rangeValue}
          onChange={HandleRangeChange}
      
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
      <br />
      {textValue}
    </div>
  );
}

export default YourComponent;
