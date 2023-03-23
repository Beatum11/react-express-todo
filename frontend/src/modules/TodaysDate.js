import React from 'react';
import "../cssFiles/todaysDate.css";

const TodaysDate = () => {

    var date = new Date();
    const months = ["January",
                    "February","March","April",
                    "May","June","July",
                    "August","September","October",
                    "November","December"];

    const weekday = ["Sunday","Monday","Tuesday",
                    "Wednesday","Thursday","Friday",
                    "Saturday"];

  return (
    <div className='date-container'>
        <h1>{weekday[date.getDay()]}, {date.getDate()} {months[date.getMonth()]}</h1>
    </div>
  );
}

export default TodaysDate;