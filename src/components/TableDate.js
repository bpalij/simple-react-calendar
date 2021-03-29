/* eslint-disable import/no-anonymous-default-export */
import '../App.css';

function numberToWeekDay(num) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[num];
}

export default function({ date }) {
  return (
    <div className="divTableHead">
      {`${date.getDate()}, ${numberToWeekDay(date.getDay())}`}
    </div>
  )
}