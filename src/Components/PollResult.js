import React, { useState } from 'react'

export const PollResult = (props) => {
//   const question = props.question
//   const userVote = props.voteValue
//   const optionOneVotes = question.optionOne.votes.length
//   const optionTwoVotes = question.optionTwo.votes.length
const optionOneVotes = props.optionOneVotes
const optionTwoVotes = props.optionTwoVotes
  return (
    <div>
      <div>Results:</div>
        <div>
            <div>Option One Votes: {optionOneVotes}</div>
            <div>Option Two Votes: {optionTwoVotes}</div>
        </div>
    </div>
  )
}

export default PollResult;
