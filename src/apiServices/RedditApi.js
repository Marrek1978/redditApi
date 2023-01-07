// import React, {useState, useEffect} from 'react'

const popularRedditsURL = "https://www.reddit.com/r/popular.json";

export async function getPopularSubRedditsListFromAPI() {
  try {
    const resp = await fetch(popularRedditsURL);
    const data = await resp.json();

    const subRedditsArray = []; /// [{title: title, iconUrl: iconUrl }]
    const dataARR = data.data.children; /// array of objects with subreddits  25 objects.  need icon, name,

    dataARR.forEach((obj) => {
      let icon_url = "";

      if ("all_awardings" in obj.data) {
        if (obj.data["all_awardings"].length > 0) {
          if ("icon_url" in obj.data["all_awardings"][0]) {
            icon_url = obj.data["all_awardings"][0]["icon_url"];
          }
        }
      }

      const subRedditObj = { subreddit: obj.data.subreddit, iconUrl: icon_url };
      // console.log("subRedditObj is ", subRedditObj);
      subRedditsArray.push(subRedditObj);
    });

    // subRedditsArray.forEach((obj) => {
    //   console.log(" in api and obj is ", obj);
    // });

    return {
      isOk: true,
      apiData: subRedditsArray,
      apiError: null,
    };
  } catch (e) {
    console.log("error is ", e);
    return {
      isOk: false,
      apiData: null,
      apiError: e.message,
    };
  }
}

// export const getPokemonDetails = async (
//   id: number
// ): Promise<GetPokemonDetailsResponse> => {
//   try {
//     const resp = await fetch(`${url}/${id}`);
//     const data: PokemonDetailsDTO = await resp.json();

//     // transform data
//     const transformedData: PokemonDetails = {
//       id: data.id,
//       name: data.name,
//       height: data.height,
//       types: data.types.map((type) => ({
//         id: getIdFromUrl(type.type.url),
//         name: type.type.name,
//       })),
//     };

//     return {
//       isOk: true,
//       data: transformedData,
//       error: null,
//     };
//   } catch (e) {
//     return {
//       isOk: false,
//       data: null,
//       error: (e as Error).message,
//     };
//   }
// };

// Usage:
// const { isOk, data, error } = await getPokemonDetails(id)
// if (isOk) console.log(data) // type: data=PokemonDetails, error=null
// else console.log(error) //  type: data=null, error=string
