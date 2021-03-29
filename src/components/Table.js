/* eslint-disable import/no-anonymous-default-export */

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App.css';
import TableDate from './TableDate';
import TableRow from './TableRow';

export default function({ titles }) {
  const dates = [];
  for (let i=0; i<7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date);
  }
  const timeIndexes = [];
  for (let i=0; i<48; i++) {
    timeIndexes.push(i);
  }
  return (
    <div className="divTable" style={{border: '1px solid #000'}} >
      <div className="divTableHeading">
        <div className="divTableHead"></div>
        {dates.map((x) => <TableDate date={x} key={x.toDateString()} />)}
      </div>
      <div className="divTableBody">
        {timeIndexes.map((x) => <TableRow timeIndex={x} key={x} dates={dates} titles={titles} />)}
      </div>
    </div>
  )
}