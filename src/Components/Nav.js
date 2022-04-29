import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LOG_OUT } from '../redux/actions'

export default function Nav () {
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <nav>
      <ul className='nav-left'>
        <li style={{ backgroundColor: '#410355', color: 'white' }} onClick={()=> navigate('/', {replace: true})}>
          Home
          {/* <Link className='link-add' to='/'>
            Home
          </Link> */}
        </li>
        <li style={{ backgroundColor: '#410355', color: 'white' }} onClick={()=>navigate('/add', {replace: true})}>
        Add Poll
          {/* <Link className='link' to='add' replace>
            Add Poll
          </Link> */}
        </li>
        <li style={{ backgroundColor: '#410355', color: 'white' }} onClick={()=>navigate('/leaderboard', {replace: true})}>Leaderboard</li>
        {/* <Link className='link' to='leaderboard' replace>
          <li>Leaderboard</li>
        </Link> */}
      </ul>
      <div className='container-signed-in-user'>
        <div className='container-image-name'>
          <img src={currentUser[0].avatarURL} alt='Current user avatar' />
          <h3>{currentUser[0].name}</h3>
          {
            <button onClick={() => { dispatch({ type: LOG_OUT }); navigate('/')}}>
              Sign out
            </button>
          }
        </div>
      </div>
    </nav>
  )
}
