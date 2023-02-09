import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getApp } from "../loaders/Apps";

export async function loader({params}) {
  var id = `${params.owner}|${params.id}`;
  return getApp(id);
}

function AppDetailsPage() {
  const navigate = useNavigate();
  const { app } = useLoaderData();

  function goBack(event) {
    event.preventDefault();
    navigate(-1);
  }

  return (
    <>
      <h1>{app.Name} <small>by <Link to={`/${app.Owner}`}>{app.Owner}</Link></small></h1>
      <a href="javascript:history.back()" onClick={goBack}>Go back</a>
      <div>{app.Description}</div>
      <div>Created: {new Date(app.DateAdded).toLocaleDateString()}</div>
      <div>Website: <a href={app.Url}>{app.Url}</a></div>
      <div>Category: {app.Category}</div>
    </>
  );
}

export default AppDetailsPage;
