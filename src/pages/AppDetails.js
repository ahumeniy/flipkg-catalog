import { Link, useLoaderData } from "react-router-dom";
import { getApp } from "../loaders/Apps";

export async function loader({params}) {
  var id = `${params.owner}|${params.id}`;
  return getApp(id);
}

function AppDetailsPage() {
  const { app } = useLoaderData();

  return (
    <>
      <h1>{app.Name}</h1>
      <div><Link to="/">All Apps</Link> &gt; <Link to={`/${app.Owner}`}>{app.Owner}</Link></div>
      <div>{app.Description}</div>
      <div>Created: {new Date(app.DateAdded).toLocaleDateString()}</div>
      <div>Website: <a href={app.Url}>{app.Url}</a></div>
      <div>Category: {app.Category}</div>
    </>
  );
}

export default AppDetailsPage;
