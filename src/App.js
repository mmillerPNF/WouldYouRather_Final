import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Display from './Display'
import ErrorPage from './Components/ErrorPage'
import AddQuestion from './Components/AddQuestion'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { SHOW_QUESTIONS } from './redux/actions'
import Question from './Components/Question'
import Leaderboard from './Components/Leaderboard'

function App () {
  const questions = useSelector(state => state.questions)
  const currentQuestion = useSelector(state => state.currentQuestion)
  const currentUser = useSelector(state => state.currentUser[0])
  console.log(currentUser)
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
        <Route exact path='/add' element={currentUser === undefined ? <ErrorPage/> : <AddQuestion/>} />
        <Route exact path='/leaderboard' element={currentUser === undefined ? <ErrorPage/> : <Leaderboard/>}/>
      </Routes>
    </main>
  )
}

export default App
