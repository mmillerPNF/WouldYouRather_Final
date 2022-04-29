import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_VOTE } from '../redux/actions'
import { useNavigate, Link } from 'react-router-dom'
import { generateUID } from '../Data'

export default function Question () {
  const [voteValue, setVoteValue] = useState('')
  const question = useSelector(state => state.currentQuestion)
  const currentUserID = useSelector(state => state.currentUser[0].id)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
    if (voteValue) {
      dispatch({
        type: ADD_VOTE,
        payload: currentUserID, // first payload
        questionTimestamp: question.timestamp, // second payload
        voteValue: voteValue, // third payload
        currentQuestionID: question.id, // question payload
      })
    }
    navigate('/', { replace: true })
  }

  return (
    <div>
      <div>
        <Link className='link' to='/'>
          Home
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <label>{question.optionOne.text}</label>
        <input
          type='radio'
          name='option'
          value={`optionOne`}
          onChange={event => setVoteValue(event.target.value)}
        ></input>
        <label>{question.optionTwo.text}</label>
        <input
          type='radio'
          name='option'
          value={`{optionTwo}`}
          onChange={event => setVoteValue(event.target.value)}
        ></input>
        <button>Submit Answer</button>
      </form>
    </div>
  )
}
