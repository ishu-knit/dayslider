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

    let mn =0 
    let mx =100
    let ad = 0

    // console.log( event.target.value)
    
    if (event.target.value >= 0 && event.target.value < 25) {

      mn = 30
      mx = 60
      ad = 0

      
    } 
    else if (event.target.value >= 25 && event.target.value <= 50) {

      mn = 60
      mx = 120
      ad = 25
 
    } else if (event.target.value >= 50 && event.target.value <= 75) {

      mn = 120
      mx = 365
      ad = 50
    } else if (event.target.value >= 75 && event.target.value <= 100) {
      // setRangeValue(75);


      // console.log("in 75-100")
      mn = 365
      mx = 365*3
      ad = 75

    } 

    
    
    const ans = ((rangeValue-ad)*(mx-mn))/25 + mn
    let x = Math.round(ans)
    console.log("ans: ",ans ,x)

    // to chnage value of input text field

    setTextValue(x)
    
    console.log("others",mn,mx,ad)
    setRangeValue(event.target.value);

  };






  const handleTextChange = (e) => {
    // start



    let mx = 100;
    let mn = 0;
    let ad = 0;

    // 30-60

    if (e.target.value >= 30 && e.target.value < 60) {
      ad = 0;
      mx = 60;
      mn = 30;
    }
    // 60-120
    else if (e.target.value >= 60 && e.target.value <= 120) {
      ad = 25;
      mn = 60;
      mx = 120;
    }
    // 120-1
    else if (e.target.value >= 120 && e.target.value <= 365) {
      ad = 50;
      mn = 120;
      mx = 365;
    }

    // 1-3
    else if (e.target.value >= 365 && e.target.value <= 365 * 3) {
      ad = 75;
      mn = 365;
      mx = 365 * 3;
    }

    const sol = ad + (25 * (e.target.value - mn)) / (mx - mn);
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
