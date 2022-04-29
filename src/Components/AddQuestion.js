import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_QUESTIONS, INCREASE_SCORE } from '../redux/actions'
import { useNavigate, Link } from 'react-router-dom'
import { generateUID } from '../Data'
import Nav from './Nav'

export default function AddQuestion () {
  const [optionOneValue, setOptionOneValue] = useState('')
  const [optionTwoValue, setOptionTwoValue] = useState('')
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
    dispatch({
      type: ADD_QUESTIONS,
      optionOneText: optionOneValue,
      optionTwoText: optionTwoValue,
      randomId: generateUID()
    })
    dispatch({ type: INCREASE_SCORE, payload: currentUser[0].id })
    navigate('/', { replace: true })
  }

  return (
    <>
      <Nav />
      <div className='container-add-question'>

        <form onSubmit={handleSubmit}>
          <h2>Would You Rather...</h2>
          <div>
            <input
              type='text'
              value={optionOneValue}
              onChange={e => setOptionOneValue(e.target.value)}
            />
            <input
              type='text'
              value={optionTwoValue}
              onChange={e => setOptionTwoValue(e.target.value)}
            />
          </div>
          <button>+ Add</button>
        </form>
      </div>
    </>
  )
}
