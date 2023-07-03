import '../App.css';

function CommentCard(props) {
  const {pos} = props;
  return (
    <div className="User">
        <textarea></textarea>
        {pos === "" 
        ? <button></button>
        : <button></button>}
    </div>
  );
}

export default CommentCard;
