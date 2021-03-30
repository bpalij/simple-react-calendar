import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import '../App.css';
import { TITLE_LOCALSTORAGE_KEY } from '../constants';

export default withRouter(function ({ location, setTitles, titles }) {
  const { timeIndex, date } = location.state
  const [title, setTitle] = useState('');
  function numberToWeekDay(num) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[num];
  }
  const timeIndexToTimeStr = (timeIndex) => timeIndex%2 ? `${(timeIndex-1)/2}:30` : `${timeIndex/2}:00`;
  return (
    <div>
      <div>
        Title
        <input type="text" value={title} onChange={(e) => { 
          setTitle(e.target.value);
          const newTitles = {...titles};
          newTitles[`${date.getDate()}-${timeIndex}`] = e.target.value;
          setTitles(newTitles);
          localStorage.setItem(TITLE_LOCALSTORAGE_KEY, JSON.stringify(newTitles));
        }} />
      </div>
      <div>
        Time {date.getDate()}.{date.getMonth()+1}.{date.getFullYear()} {numberToWeekDay(date.getDay())} {timeIndexToTimeStr(timeIndex)}
      </div>
      <div>
        <Link to="/">Save and back</Link>
      </div>
    </div>
  )
})
