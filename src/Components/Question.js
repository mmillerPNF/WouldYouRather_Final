import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_VOTE, INCREASE_SCORE } from '../redux/actions'
import Nav from './Nav'
import PollResult from './PollResult'

export default function Question () {
  const [voteValue, setVoteValue] = useState('')
  const [displayResults, setDisplayResults] = useState(false)
  const question = useSelector(state => state.currentQuestion)
  const currentUserID = useSelector(state => state.currentUser[0].id)
  const currentUserScore = useSelector(
    state => state.currentUser[0].currentScore
  )
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    if (voteValue) {
      dispatch({
        type: ADD_VOTE,
        payload: currentUserID, // first payload
        questionTimestamp: question.timestamp, // second payload
        voteValue: voteValue, // third payload
        currentQuestionID: question.id,
        currentScore: currentUserScore, // question payload
        currentUserID: currentUserID
      })
      dispatch({ type: INCREASE_SCORE, payload: currentUserID })
      setDisplayResults(true)
    }
    //navigate('/', { replace: true })
  }

  question.optionOne.votes.indexOf('')
  return (
    <>
      <Nav />
      <div>
        <div></div>
        <form onSubmit={handleSubmit}>
          <label>{question.optionOne.text}</label>
          <input
            type='radio'
            name='option'
            value='optionOne'
            onChange={event => setVoteValue(event.target.value)}
          ></input>
          <label>{question.optionTwo.text}</label>
          <input
            type='radio'
            name='option'
            value='optionTwo'
            onChange={event => setVoteValue(event.target.value)}
          ></input>
          {displayResults === false && (
            <div>
              <button>Submit Answer</button>
            </div>
          )}
          {displayResults && (
            <div>
              <PollResult optionOneVotes={question.optionOne.votes.length} optionTwoVotes={question.optionTwo.votes.length} />
            </div>
          )}
        </form>
      </div>
    </>
  )
}
