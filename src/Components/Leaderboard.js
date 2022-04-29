import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export default function Leaderboard () {
  let users = useSelector(state => state.users)
  console.log(users)
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users.length - i - 1; j++) {
      //#region
      // if (
      //   users[j].createdQuestions + users[j].answeredQuestions <
      //   users[j + 1].answeredQuestions + users[j + 1].createdQuestions
      // ) {
      //   var temp = users[j]
      //   users[j] = users[j + 1]
      //   users[j + 1] = temp
      // }
      //#endregion
      if (users[j].currentScore < users[j + 1].currentScore) {
        var temp = users[j]
        users[j] = users[j + 1]
        users[j + 1] = temp
      }
    }
  }

  // users[i].currentScore += (Object.keys(users[i].answers).length + users[i].questions.length)
  return (
    <div>
      <Nav />
      <div className='container-leaderboard'>
        {users.map(user => {
          return (
            <div key={user.id}>
              <img src={user.avatarURL} alt='user avatar' />
              <div>
                <h3>{user.name}</h3>
                {user.currentScore}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
