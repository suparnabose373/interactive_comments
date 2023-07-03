import '../index.css';

function User(props) {
  const { data, currentUser } = props;

  return (
    <div className="User">
        <img src={require(`../images/avatars/image-${data?.user?.username}.png`)}
        />
        {data?.user.username}
        {currentUser === data?.user.username ? <div className="you">YOU</div> : null}
        {data?.createdAt}
    </div>
  );
}

export default User;
