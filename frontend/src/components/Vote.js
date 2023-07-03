import '../index.css'
import React, { useState } from 'react';
import {ReactComponent as PlusIcon} from "../images/icon-plus.svg";
import {ReactComponent as MinusIcon} from "../images/icon-minus.svg";
function Vote(props) {
  const {count} = props;
  const [voteCount, setVoteCount] = useState(count);

  return (
    <div className="Vote">
        <div className="VoteContent">
          <button className="voteButtons" onClick={() => {setVoteCount(voteCount+1)}}><PlusIcon /></button>
        </div>
        <div className="VoteContent">{voteCount}</div>
        <div className="VoteContent">
          <button className="voteButtons" onClick={() => {setVoteCount(voteCount-1)}}><MinusIcon /></button>
        </div>
    </div>
  );
}

export default Vote;
