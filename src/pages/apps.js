import { useEffect, useState } from "react";
import AppEntry from "../components/appEntry";

function AppsPage() {
  const [appList, setAppList] = useState([]);

  useEffect(() => {
    (async function () {
      const { apps } = await (await fetch(`/api/GetApps`)).json();
      setAppList(apps);
    })();
  }, []);

  return (
    <>
      <h1>Applications</h1>
      <div>{appList & appList.map((app) => <AppEntry key={app.id} app={app} />)}</div>
    </>
  );
}

export default AppsPage;
