import { useState } from "react";
import { getPopularSubRedditsListFromAPI } from "./RedditApi";

export default async function ApiDataSubredditList () {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const { isOk, apiData, apiError } = await getPopularSubRedditsListFromAPI();
  if (isOk) setData(apiData);
  console.log("apiData is ", apiData);
  if (apiError) setError(apiError);

  return {
    reddit: data,
    error,
    loading: !data && !error,
  };
}


