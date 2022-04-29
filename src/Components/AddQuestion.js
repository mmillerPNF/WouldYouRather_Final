import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_QUESTIONS } from '../redux/actions'
import { useNavigate, Link } from 'react-router-dom'
import { generateUID } from '../Data'

export default function AddQuestion () {
  const [optionOneValue, setOptionOneValue] = useState('')
  const [optionTwoValue, setOptionTwoValue] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = event => {
    event.preventDefault()
    dispatch({type: ADD_QUESTIONS, optionOneText: optionOneValue, optionTwoText: optionTwoValue, randomId: generateUID()})
    navigate('/', {replace: true})
  }

  return (
  <div className='container-add-question'>
    <Link className='link-add' to='/'>Home</Link>
    <form onSubmit={handleSubmit}>
      <h2>Would You Rather...</h2>
      <div>
        <input type='text' value={optionOneValue} onChange={e => setOptionOneValue(e.target.value)}/>
        <input type='text' value={optionTwoValue} onChange={e => setOptionTwoValue(e.target.value)}/>
      </div>
      <button>+ Add</button>
    </form>
  </div>
  )
}
