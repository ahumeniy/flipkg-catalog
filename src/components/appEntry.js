import { Link } from "react-router-dom";

function AppEntry() {
  return (
    <div>
      <Link to={`${props.app.Owner}/${props.app.Name}`}>{props.app.id}</Link>
    </div>
  )
}

export default AppEntry;