export const setStarsVote = async (id: string, sid: string, vote: number) => {
  return await fetch(
    process.env.REACT_APP_API_URL +
      "/movie/" +
      id +
      "/rating?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&session_id=" +
      sid,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ value: vote }),
    }
  ).then((res) => res.json());
};
export const getVote = async (id: string, sid: string) => {
  return await fetch(
    process.env.REACT_APP_API_URL +
      "/movie/" +
      id +
      "/account_states?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&session_id=" +
      sid,
    { method: "GET" }
  ).then((res) => res.json());
};
