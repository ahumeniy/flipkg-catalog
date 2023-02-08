import { useEffect, useState } from "react";
import AppEntry from "../components/appEntry";

function AppsPage() {
  const [apps, setApps] = useState("");

  useEffect(() => {
    (async function () {
      const { apps } = await (await fetch(`/api/GetApps`)).json();
      setApps(apps);
    })();
  });

  return (
    <>
      <h1>Applications</h1>
      <div>{ apps & apps.map((app) => (<AppEntry app={app} />))}</div>
    </>
  );
}

export default AppsPage;
