const addItemToTheList = async (data) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let body = JSON.stringify(data);
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: body,
    redirect: "follow",
  };

  const result = await fetch("http://localhost:3000/api/apps", requestOptions);
};
const getData = async () => {
  const result = await fetch("http://localhost:3000/api/apps");
  const json = await result.json();
  return json;
};

const remove = async (id) => {
  const requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  const result = await fetch(`http://localhost:3000/api/apps/${id}`, requestOptions)
  const json = await result.json();
  return json;
}

export { addItemToTheList, getData, remove};
