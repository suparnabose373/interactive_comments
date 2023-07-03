import React, { useState } from 'react';
import Vote from './Vote';
import User from './User';
import '../index.css';
import { useSelector } from 'react-redux';
import {ReactComponent as EditIcon} from "../images/icon-edit.svg";
import {ReactComponent as DeleteIcon} from "../images/icon-delete.svg";
import {ReactComponent as ReplyIcon} from "../images/icon-reply.svg";

function Card(props) {
  const {data} = props
  const userDetails = useSelector(state => state.user)
  const replyMode = useSelector(state => state.val)
  const [editMode, setEditMode] = useState(false);

  return (
    <ul className="Card">
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <Vote count={data.score} />
            <div style={{width: "100%"}}>
                <div className="UserSection">
                    <User data={data} currentUser={userDetails.username}/>
                    {userDetails.username === data?.user.username ? 
                    <>
                      <button className="customizedBtn Delete">
                        <DeleteIcon/>Delete
                      </button>
                      <button className="customizedBtn Edit" onClick={() => {setEditMode(!editMode)}}>
                        <EditIcon/>Edit
                      </button>
                    </> :
                    <button className="customizedBtn Reply">
                      <ReplyIcon/>Reply
                    </button>}
                </div>
                <div className="CardContent">
                  {editMode ? <textarea>{data.content}</textarea> : <>{data.content}</>}
                </div>
                {editMode && <button className="customizedBtn1">UPDATE</button>}
            </div>
        </div>
        {data?.replies?.length > 0 ? data.replies.map(b => <Card data={b} />) : null}
    </ul>
  );
}

export default Card;
