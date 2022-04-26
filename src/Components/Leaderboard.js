import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Leaderboard () {
  let users = useSelector(state => state.users)
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users.length - i - 1; j++) {
      if (
        users[j].createdQuestions + users[j].answeredQuestions <
        users[j + 1].answeredQuestions + users[j + 1].createdQuestions
      ) {
        var temp = users[j]
        users[j] = users[j + 1]
        users[j + 1] = temp
      }
    }
  }
  return (
      <div>
        <Link className='link' to='/'>Home</Link>
     {users.map(user => {return (
        <div key={user.id}>
          <img src={user.avatarURL} alt='user avatar' />
          <div>
            <h3>{user.name}</h3>
            {user.createdQuestions + user.answeredQuestions}
          </div>
        </div>
     )})}
      </div>
    )
}
