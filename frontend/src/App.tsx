import React, { useEffect, useState } from 'react';
import './App.css';
import data from './data.json';
import Card from "./components/dashboard/Card";
import CommentCard from "./components/dashboard/CommentCard";
import LoadingSpinner from './components/dashboard/Loader';

type Data = {
  "currentUser": {
    "image": {
      "png": string;
      "webp": string;
    }
  };
  "comments": CommentType[];
};

type CommentType = {
  "id": 1,
  "content": string;
  "createdAt": string,
  "score": number,
  "user": {
    "image": { 
      "png": string,
      "webp": string
    },
    "username": string
  }
}
const dataJSON = data as Data;

function App() {
  const [data1, setData1] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showReply, setShowReply] = useState({
    type: null,
    id: null
  });
  
  useEffect(() => {
    // Storage.getItem(key: string): string | null
    var localStorageData = JSON.parse(window.localStorage.getItem('commentData',dataJSON)  || "") || localStorage.setItem('commentData',JSON.stringify(dataJSON));
    setData1(localStorageData); setUpdatedData(localStorageData);
    setLoading(false);
  }, [])
  

  useEffect(() => {
    setData1(JSON.parse(window.localStorage.getItem('commentData',dataJSON) || ""));
  }, [updatedData])

  return (
    <div className="root-container">
      {loading ? <div><LoadingSpinner /></div> :
      <>{data1?.comments?.map(comment => 
      <>
          <Card 
          children={comment} 
          showReply={showReply} 
          setShowReply={setShowReply} 
          setUpdatedData={setUpdatedData} 
          type="comment" />
          {(showReply.id === comment.id && showReply.type === "comment") 
          ? <ul><li><CommentCard buttonText="REPLY"/></li></ul> : ""}

          {/* <ul> */}
            {comment.replies.length > 0
            ? 
            comment.replies?.map((reply) => <ul><li>
              <Card 
              children={reply} 
              showReply={showReply} 
              setShowReply={setShowReply} 
              setUpdatedData={setUpdatedData} 
              type="reply"/></li></ul>) : 
            ""}
          {/* </ul> */}
          {(showReply.id === comment.replies.id && showReply.type === "reply") 
          ? <ul><li><CommentCard buttonText="REPLY"/></li></ul> : ""}
      </>
      )}
      <CommentCard data={data1} updatedData={updatedData} setUpdatedData={setUpdatedData} buttonText="SEND" />
      </>}
    </div>
  );
}

export default App;
