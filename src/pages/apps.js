import { useEffect, useState } from "react";

function AppsPage() {
  const [data, setData] = useState("");

  useEffect(() => {
    (async function () {
      const { text } = await (await fetch(`/api/GetApps`)).json();
      setData(text);
    })();
  });

  return (
    <>
      <h1>Applications</h1>
      <div>{data}</div>
    </>
  );
}

export default AppsPage;
