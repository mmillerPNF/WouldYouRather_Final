import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


export default function Nav () {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
     dispatch({type: 'LOG_OUT'});
  }
  return (
    <div className='container-navigation-bar'>
      <div className='container-links'>
        <div className='navigation'>
          <Link to='' style={{ color: 'black' }}>
            Home
          </Link>
        </div>
        <div className='navigation'>
          <Link to='/add'>New Question</Link>
        </div>
        <div className='navigation'>
          <Link to='/leaderboard'>Leaderboard</Link>
        </div>
      </div>
      <div className='container-logout'>
        <div className='container-logout-profile'>
          <img className="logout-img"src={currentUser[0].avatarURL}  alt="avatar" />
          <h1>{currentUser[0].name}</h1>
        </div>
        <button className='logout-buttom' onClick={handleLogout}>
        Logout
        </button>
      </div>
    </div>
  )
}
