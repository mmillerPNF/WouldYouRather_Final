import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PICKED_QUESTION, LOG_OUT } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Nav from './Nav'
import { users } from '../Data'

export default function Home () {
  const [toggle, setToggle] = useState(false)
  const answeredQuestions = useSelector(state => state.answeredQuestions)
  const unansweredQuestions = useSelector(state => state.unansweredQuestions)
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()

  answeredQuestions.sort((a,b) => {
    return b.timestamp - a.timestamp
  })
  unansweredQuestions.sort((a,b) => {
    return b.timestamp - a.timestamp
  })

  return (
   
    <>
      <Nav/>
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
                      className='link'
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
                      className='link'
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
