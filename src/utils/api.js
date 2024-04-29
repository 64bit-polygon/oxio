const urlBase = "https://662d4704a7dda1fa378a4515.mockapi.io/api/v1";

const headers = {
  "content-type": "application/json"
}

const apiCall = async (url, options) => {
  let response = await fetch(url, options);
  response = await response.json();

  return response;
}

export const getPosts = async () => {
  const options = {
    method: "GET",
    headers
  }
  const response = await apiCall(`${urlBase}/posts`, options);
  return response;
};

export const makePost = async data => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers
  }
  const response = await apiCall(`${urlBase}/posts`, options);
  return response;
}
