const popularRedditsURL = "https://www.reddit.com/r/popular.json";
const subredditBaseURL = "https://www.reddit.com/r/";

export async function getPopularSubRedditsListFromAPI() {
  try {
    const resp = await fetch(popularRedditsURL);
    const data = await resp.json();

    return data;
  } catch (e) {
    console.log("error is ", e);
  }
}

export async function getSubredditPostsAPI(subreddit) {
  try {
    const resp = await fetch(subredditBaseURL + subreddit + ".json");
    const data = await resp.json();

    return data;
  } catch (e) {
    console.log("error is ", e);
  }
}
