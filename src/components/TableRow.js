/* eslint-disable import/no-anonymous-default-export */
import '../App.css';
import TableActiveCell from './TableActiveCell';

export default function({ timeIndex, dates, titles }) {
  return (
    <div className="divTableRow">
      <div className="divTableCell height-time">{!(timeIndex % 2) && <span>{timeIndex/2}:00</span>}</div>
      {dates.map((x) => <TableActiveCell timeIndex={timeIndex} date={x} key={x.toDateString()} title={titles[`${x.getDate()}-${timeIndex}`]} />)}
      </div>
  )
}