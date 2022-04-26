import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PICKED_QUESTION, LOG_OUT } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function Home () {
  const [toggle, setToggle] = useState(false)
  const answeredQuestions = useSelector(state => state.answeredQuestions)
  const unansweredQuestions = useSelector(state => state.unansweredQuestions)
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()

  return (
    <>
      <nav>
        <ul className='nav-left'>
          <li>Home</li>
          <li>
            <Link to='add'>Add Poll</Link>
          </li>
          <Link to='leaderboard'>
            <li>Leaderboard</li>
          </Link>
        </ul>
        <div className='container-signed-in-user'>
          <div className='container-image-name'>
            <img src={currentUser[0].avatarURL} alt='Current user avatar' />
            <h3>{currentUser[0].name}</h3>
            {
              <button onClick={() => dispatch({ type: LOG_OUT })}>
                Sign out
              </button>
            }
          </div>
        </div>
      </nav>
      <div className='container-questions'>
        <div className='container-toggle-buttons'>
          <button onClick={() => setToggle(true)}>Answered Questions</button>
          <button onClick={() => setToggle(false)}>Unanswered Questions</button>
        </div>
        <div className='container-questions'>
          {toggle
            ? answeredQuestions.map(question => {
                return (
                  <div className='individual-question' key={question.id}>
                    <img src={question.authorURL} alt='User avatar' />
                    <div className='container-question'>
                      <h2>Would You Rather</h2>
                      <div className='question-options'>
                        <h3>{question.optionOne.text}</h3>
                        <h3>{`${question.optionTwo.text.substr(0, 3)}`}...</h3>
                      </div>
                      <Link
                        to={`question/${question.id}`}
                        onClick={() => {
                          dispatch({ type: PICKED_QUESTION, payload: question })
                        }}
                      >
                        Answer
                      </Link>
                    </div>
                  </div>
                )
              })
            : unansweredQuestions.map(question => {
                return (
                  <div className='individual-question' key={question.timestamp}>
                    <img src={question.authorURL} alt='User avatar' />
                    <div className='container-question'>
                      <h2>Would You Rather</h2>
                      <div className='question-options'>
                        <h3>{question.optionOne.text}</h3>
                        <h3>{`${question.optionTwo.text.substr(0, 3)}`}...</h3>
                      </div>
                      <Link
                        to={`question/${question.id}`}
                        onClick={() => {
                          dispatch({ type: PICKED_QUESTION, payload: question })
                        }}
                      >
                        Answer
                      </Link>
                    </div>
                  </div>
                )
              })}
        </div>
      </div>
    </>
  )
}
