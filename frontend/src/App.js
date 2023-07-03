import './App.css';
import Card from './components/Card';
import CommentCard from './components/CommentCard';
import data from './data.json';
import { useDispatch } from 'react-redux';
import { UserActions } from './store/user-slice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const setCurrLoggedinUser = () => {
      dispatch(UserActions.updateLoggedInUser({
        imgPng: data.currentUser.image.png, 
        imgWebp: data.currentUser.image.webp,
        username: data.currentUser.username
      }))
    }
    setCurrLoggedinUser()
  }, [])

   return (
    <div className="App">
      {data.comments.map(a => <Card data={a}/>)}
      <CommentCard pos={"mainBox"}/>
    </div>
  );
}

export default App;
