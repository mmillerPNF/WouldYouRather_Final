import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_VOTE, INCREASE_SCORE } from '../redux/actions'
import Nav from './Nav'
import PollResult from './PollResult'

export default function Question () {
  const [voteValue, setVoteValue] = useState('')
  const [displayResults, setDisplayResults] = useState(false)
  const question = useSelector(state => state.currentQuestion)
  console.log('state.currentQuestion: ', question)
  const currentUserID = useSelector(state => state.currentUser[0].id)
  const currentUserScore = useSelector(
    state => state.currentUser[0].currentScore
  )
  const currentQuestions = useSelector(state => state.questions)
  const pollableQuestion = currentQuestions.filter(q => {
    return (
      (q.optionOne.votes.includes(currentUserID) &&
        q.optionOne.text === question.optionOne.text) ||
      (q.optionTwo.votes.includes(currentUserID) &&
        q.optionTwo.text === question.optionTwo.text)
    )
  })
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
      <div className='container-answer-question'>
        <form onSubmit={handleSubmit}>
          <h2>Would You Rather... ?</h2>
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
              {console.log('Question for display results: ', currentQuestions)}
              {console.log('Correct Question?', pollableQuestion)}
              <PollResult
                optionOneVotes={pollableQuestion[0].optionOne.votes.length}
                optionTwoVotes={pollableQuestion[0].optionTwo.votes.length}
                userVote={voteValue}
              />
            </div>
          )}
        </form>
      </div>
    </>
  )
}
