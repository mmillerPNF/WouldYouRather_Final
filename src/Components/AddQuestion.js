import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_QUESTIONS, INCREASE_SCORE } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
import { generateUID } from '../Data'
import Nav from './Nav'
import '../index.css'

export default function AddQuestion () {
  const [optionOneValue, setOptionOneValue] = useState('')
  const [optionTwoValue, setOptionTwoValue] = useState('')
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()

    if (optionOneValue === '' || optionTwoValue === '') {
      return
    }

    dispatch({
      type: ADD_QUESTIONS,
      optionOneText: optionOneValue,
      optionTwoText: optionTwoValue,
      randomId: generateUID()
    })
    dispatch({ type: INCREASE_SCORE, payload: currentUser[0].id })
    navigate('/', { replace: true })
  }

  const inputStyle = {
    margin: '0 55px 0 0',
    height: '23px',
    width: '200px',
    fontSize: '18',
    FontFace: 'Poppins'
  }
  return (
    <>
      <Nav />
      <div className='container-add-question'>
        <form onSubmit={handleSubmit}>
          <h2 style={{ margin: '0 0 15px 0' }}>Would You Rather...</h2>
          <div>
            <input
              type='text'
              value={optionOneValue}
              onChange={e => setOptionOneValue(e.target.value)}
              style={inputStyle}
            />
            <input
              type='text'
              value={optionTwoValue}
              onChange={e => setOptionTwoValue(e.target.value)}
              style={inputStyle}
            />
          </div>
          <button style={{ margin: '25px 0 0 50%', border: '3px solid black' }}>
            + Add
          </button>
        </form>
      </div>
    </>
  )
}
