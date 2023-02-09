export async function getApps(owner) {
  console.log("Loading apps", owner);
  const response = await fetch(`/api/GetApps${owner ? '?owner=' + owner : ''}`);
  if (!response) throw new Error("No response received");
  if (!response.ok) 
  {
    console.log("Request failed.", response);
    throw new Error("Request failed: " + response.statusText);
  }

  const { apps } = await response.json();

  console.log("Apps", apps);

  return { appList: apps };
}

export async function getApp(id) {
  if (!id) throw new Error("No app to load");

  console.log("Loading app", id);
  
  const response = await fetch(`/api/GetApp?id=${id}`);
  if (!response) throw new Error("No response received");
  if (!response.ok) 
  {
    console.log("Request failed.", response);
    throw new Error("Request failed: " + response.statusText);
  }

  const { app } = await response.json();

  console.log("App", app);

  return { app };
}