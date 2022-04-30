import React from 'react'

export const PollResult = (props) => {
    console.log("Props ", props)
//   const question = props.question
   let userVote = props.userVote
   switch(userVote) {
       case 'optionOne': {
           userVote = 'Option One'
           break
       }
       case 'optionTwo': {
           userVote = 'Option Two'
           break
       }
       default: {
           userVote = 'Option One'
           break
       }
   }
//   const optionOneVotes = question.optionOne.votes.length
//   const optionTwoVotes = question.optionTwo.votes.length
const optionOneVotes = props.optionOneVotes
const optionTwoVotes = props.optionTwoVotes
  return (
    <div className='container-poll-results'>
      <div className='container-results-details'>Results:</div>
        <div>
        <h4>You voted for: {userVote}</h4>
            <div className='container-option-one-results'>Option One # of Votes: {optionOneVotes} out of {optionOneVotes+optionTwoVotes} total votes - {Math.round((optionOneVotes/(optionOneVotes+optionTwoVotes))*100)}%</div>
            <div className='container-option-two-results'>Option Two # of Votes: {optionTwoVotes} out of {optionOneVotes+optionTwoVotes} total votes - {Math.round((optionTwoVotes/(optionOneVotes+optionTwoVotes))*100)}%</div>
        </div>
    </div>
  )
}

export default PollResult;
