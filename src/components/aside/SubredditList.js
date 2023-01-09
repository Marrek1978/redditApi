import React from "react";
import SubredditLink from "./SubredditLink.js";
import {  useSelector} from "react-redux";


export default function SubredditList({ subredditList }) {
  
  const Obj_From_useSelctor = useSelector((state) => state);
  const list = (Obj_From_useSelctor.subredditList.apiData);
  const listArr = list.apiData;
  
  let listItems = <div>Loading...</div>

  if(listArr !== undefined){
    listItems = listArr.map((sub, index) => {
      return (
        <div key={index}>
        <SubredditLink item={sub} />
      </div>
      );
    });
  }

  return (
    <>
      <div id="subRedditlistStyles" className="mt-9">
        {listItems}
      </div>
    </>
  );
}
