import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_QUESTIONS } from '../redux/actions'
import { useNavigate } from 'react-router-dom'

export default function AddQuestion () {
  const currentUser = useSelector(state => state.currentUser)
  const [optionOneValue, setOptionOneValue] = useState('')
  const [optionTwoValue, setOptionTwoValue] = useState('')
  const [question, setQuestion] = useState([])
  const currentQuestion = useSelector(state => state.currentQuestion)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setQuestion(currentQuestion)
  }, [])
  
  const handleSubmit = event => {
    event.preventDefault()
    dispatch({type: ADD_QUESTIONS, optionOneText: optionOneValue, optionTwoText: optionTwoValue,})
    navigate('/', {replace: true})
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Would You Rather...</h2>
      <div>
        <input type='text' value={optionOneValue} onChange={e => setOptionOneValue(e.target.value)}/>
        <input type='text' value={optionTwoValue} onChange={e => setOptionTwoValue(e.target.value)}/>
      </div>
      <button>+ Add</button>
    </form>
  )
}
