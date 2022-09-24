import React from 'react'
import "./HeaderOption.css"
import {AccountCircleIcon} from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption({AccountCircleIcon,Icon ,title,onClick}) {
  const user=useSelector(selectUser)
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption__icon'/>}
      {AccountCircleIcon &&(
        <AccountCircleIcon className='headerOption__icon' src={AccountCircleIcon}/>
      )}      
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
