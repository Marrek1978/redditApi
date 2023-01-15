const popularRedditsURL = "r/popular.json";
const subredditBaseURL = "https://www.reddit.com/";

export async function getPopularSubRedditsListFromAPI() {
  try {

    console.log('in api and returning data')
    const resp = await fetch(subredditBaseURL + popularRedditsURL);
    const data = await resp.json();
    
    return data;
  } catch (e) {
    console.log('in api and returning error')
    console.log("error is ", e);
    return ['error', e.toString()];
  }
}

export async function getSubredditPostsAPI(subreddit) {
  try {
    const resp = await fetch(subredditBaseURL + "r/" + subreddit + ".json");
    const data = await resp.json();

    return data;
  } catch (e) {
    console.log("error is ", e);
    return ['error', e.toString()];
  }
}

export async function getSearchedPostsAPI(searchString) {
  try {
    const resp = await fetch(subredditBaseURL + 'search.json?q=' + searchString );
    const data = await resp.json();

    return data;
  } catch (e) {
    console.log("error is ", e);
    return ['error', e.toString()];
  }
}
