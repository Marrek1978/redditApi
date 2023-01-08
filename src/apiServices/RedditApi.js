const popularRedditsURL = "https://www.reddit.com/r/popular.json";

export async function getPopularSubRedditsListFromAPI() {
  try {
    const resp = await fetch(popularRedditsURL);
    const data = await resp.json();

    return data;
  } catch (e) {
    console.log("error is ", e);
  }
}
