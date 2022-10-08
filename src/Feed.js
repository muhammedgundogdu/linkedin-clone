import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcone from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
// import firebase from 'firebase';
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
// other services is needed

function Feed() {

  const user=useSelector(selectUser)
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => { //post değiştiğinde update olmasını sağlayan fonksiyon
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => (//order by yapmazsak yeni gelen mesajları rastgele yerlere ekler
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    ))
  }, [])

  const sendPost = e => {
    e.preventDefault();//entera bastığında sayfaya refresh atmayı engelliyor ve verileri görünür şekilde sabit tutmayı sağlıyor.

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      //herkesin time ı farklı olabilir ama server timestamp kullanırsan ortak bir saat kullanılır
    })

    setInput("");
  }




  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" name="" id="" />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          < InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
          < InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
          < InputOption Icon={EventNoteIcone} title='Event' color='#C0CBCD' />
          < InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />

        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}

    </div>
  )
}

export default Feed
