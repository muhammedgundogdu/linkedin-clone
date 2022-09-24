import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
//import { Home } from '@mui/icons-material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';



function Header() {
  const dispatch=useDispatch();
  const logoutOfApp=()=>{
    dispatch(logout())
    auth.signOut();
  };

  return (
    
    <div className='header'>
      
      
      <div className='header__left'>
       <img 
      src='https://cdn-icons-png.flaticon.com/512/174/174857.png' 
      alt=''>

    </img>
      <div className='header__search'>
          < SearchIcon />
          <input placeholder='Search' type="text"></input>
          
      </div>

      

      </div>

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home'></HeaderOption>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'></HeaderOption>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'></HeaderOption>
        <HeaderOption Icon={ChatIcon} title='Messaging'></HeaderOption>
        <HeaderOption Icon={NotificationsIcon} title='Notifications '></HeaderOption>
        <HeaderOption 
        AccountCircleIcon={AccountCircleIcon} 
        title='me' 
        onClick={logoutOfApp}>
          
        </HeaderOption>
     
        {/* <HeaderOption 
        avatar={user.photoUrl}
        title='me'
        onClick={logoutOfApp}
        /> */}
    
      </div>

    </div>
  )
}

export default Header
