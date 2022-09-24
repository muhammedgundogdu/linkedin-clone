import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch,  useSelector } from 'react-redux'
import { login, logout } from './features/userSlice';
import {selectUser} from './features/userSlice'
import Login from './Login';
import { auth } from './firebase';
import  Widgets  from './Widgets';

function App() {

  const user = useSelector(selectUser)//database den kullanıcı verilerini çekip user değişkenine atıyoruz
  const dispatch=useDispatch();


  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
     
      if(userAuth){
          //user is logged in
          dispatch(login({//Dispatch bir redux method'udur ve redux state'ini güncellemek için kullanılır.
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl:userAuth.photoURL,
          }))
      }
      else{
        //user is logged out
        dispatch(logout())
      }
    })
  },[]);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ): (
                  
        < div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />

        </div>
      )}
    </div>
  );
}  
    
export default App;
