import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_QUESTIONS } from '../redux/actions'
import { useNavigate, Link } from 'react-router-dom'
import { NonceProvider } from 'react-select'

export default function AddQuestion () {
  //const currentUser = useSelector(state => state.currentUser)
  const [optionOneValue, setOptionOneValue] = useState('')
  const [optionTwoValue, setOptionTwoValue] = useState('')
  //const [question, setQuestion] = useState([])
  //const currentQuestion = useSelector(state => state.currentQuestion)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   setQuestion(currentQuestion)
  // }, [])
  
  const handleSubmit = event => {
    event.preventDefault()
    dispatch({type: ADD_QUESTIONS, optionOneText: optionOneValue, optionTwoText: optionTwoValue,})
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
