import { Link } from "react-router-dom";

function AppEntry(props) {
  return (
    <div>
      <Link to={`${props.app.Owner}/${props.app.Name}`}>{props.app.id}</Link>
      <p>{props.app.Description}</p>
      <p>{`Creado el ${new Date(props.app.DateAdded).toLocaleDateString()}`}</p>
    </div>
  )
}

export default AppEntry;