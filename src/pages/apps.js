import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import AppEntry from "../components/appEntry";
import { getApps } from "../loaders/Apps";

export async function loader({params}) {
  return getApps(params.owner);
}

function AppsPage() {
  const { appList } = useLoaderData();
  let { owner, id } = useParams();

  console.log(owner);
  console.log(id);

  return (
    <>
      <h1>Applications</h1>
      {owner && <Link to="/">Go back</Link>}
      <div>{appList && appList.map((app) => <AppEntry key={app.id} app={app} />)}</div>
    </>
  );
}

export default AppsPage;
