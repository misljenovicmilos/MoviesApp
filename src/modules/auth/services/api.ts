export const getRequestToken = async () => {
  return await fetch(
    process.env.REACT_APP_API_URL +
      "/authentication/token/new?api_key=" +
      process.env.REACT_APP_API_KEY,
    {
      method: "GET",
    }
  ).then((res) => res.json());
};

export const getSessionId = async (token: string) => {
  return await fetch(
    process.env.REACT_APP_API_URL +
      "/authentication/session/new?api_key=" +
      process.env.REACT_APP_API_KEY,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ request_token: token }),
    }
  ).then((res) => res.json());
};
export const getUserData = async (sessionId: string) => {
  return await fetch(
    process.env.REACT_APP_API_URL +
      "/account?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&session_id=" +
      sessionId,
    {
      method: "GET",
    }
  ).then((res) => res.json());
};
export const deleteSessionId = async (sessionId: string) => {
  return await fetch(
    process.env.REACT_APP_API_URL +
      "/authentication/session?api_key=" +
      process.env.REACT_APP_API_KEY,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ session_id: sessionId }),
    }
  ).then((res) => res.json());
};
