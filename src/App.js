import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Display from './Display'
import ErrorPage from './components/ErrorPage'
import AddQuestion from './components/AddQuestion'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { SHOW_QUESTIONS } from './redux/actions'
import Question from './components/Question'
import Leaderboard from './components/Leaderboard'

function App () {
  const questions = useSelector(state => state.questions)
  const currentQuestion = useSelector(state => state.currentQuestion)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({type: SHOW_QUESTIONS})
  }, [questions])
  
  return (
    <main>
      <Routes>
        <Route exact path='/' element={<Display />} />
        <Route path='*' element={<ErrorPage />} />
        <Route exact path={`question/${currentQuestion.id}`} element={<Question/>}/>
        <Route exact path='/add' element={<AddQuestion/>} />
        <Route exact path='/leaderboard' element={<Leaderboard/>}/>
      </Routes>
    </main>
  )
}

export default App
