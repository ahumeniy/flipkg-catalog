import { Link } from "react-router-dom";

function AppEntry(props) {
  return (
    <div>
      <Link to={`/${props.app.Owner}/${props.app.Name}`}>{props.app.Name}</Link> <small>by <Link to={`/${props.app.Owner}`}>{props.app.Owner}</Link></small>
      <p>{props.app.Description}</p>
      <p>{`Created: ${new Date(props.app.DateAdded).toLocaleDateString()}`}</p>
    </div>
  )
}

export default AppEntry;