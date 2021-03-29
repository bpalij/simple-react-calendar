/* eslint-disable import/no-anonymous-default-export */
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

export default withRouter(function({ history, timeIndex, date, title }) {
  return (
    <div 
      className="divTableCell active"
      onClick={
        () => {
          history.push('/form', {timeIndex, date});
        }
      }
    >
      {title}
    </div>
  )
})