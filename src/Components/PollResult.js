import React from 'react'

export const PollResult = props => {
  console.log('Props ', props)
  //   const question = props.question
  let userVote = props.userVote
  
  switch (userVote) {
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
  const optionOneVotes = props.optionOneVotes
  const optionTwoVotes = props.optionTwoVotes

  return (
    <>
      <div className='container-results-details'>
        <div className='container-results-options'>
          <h4>You voted for: {userVote}</h4>
          <h4>Total votes for Option One: {optionOneVotes}</h4>
          <div className='container-option-one-results'>
            <h2 className='container-percentage-one-text'>
              {`${Math.round(
                (optionOneVotes / (optionOneVotes + optionTwoVotes)) * 100
              )}`}
              %
            </h2>
            <div
              className='container-option-one-percentage'
              style={ userVote === 'Option One' ? {
                width: `${Math.round(
                  optionOneVotes / (optionOneVotes + optionTwoVotes) * 100
                )}%`, border: '2px dashed yellow'
                
              } : {width: `${Math.round(
                  optionOneVotes / (optionOneVotes + optionTwoVotes) * 100
                )}%`}}
            ></div>
          </div>
          <h4>Total votes for Option Two: {optionTwoVotes}</h4>
          <div className='container-option-one-results'>
            <h2 className='container-percentage-one-text'>
              {`${Math.round(
                (optionTwoVotes / (optionOneVotes + optionTwoVotes)) * 100
              )}`}
              %
            </h2>
            <div
              className='container-option-one-percentage'
              style={ userVote === 'Option Two' ? {
                width: `${Math.round(
                  optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100
                )}%`, border: '2px dashed yellow'
                
              } : {width: `${Math.round(
                  optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100
                )}%`}}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PollResult
