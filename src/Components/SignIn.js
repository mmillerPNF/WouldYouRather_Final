import React, { useState } from 'react'
import { users } from '../Data'
import { useDispatch } from 'react-redux'

export default function Sign_in () {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    console.log(inputValue)
    if (inputValue) {
      dispatch({ type: 'LOG_IN', payload: inputValue })
    }
  }

  const availableUsers = users.map(user => {
    const { id, name } = user
    return { value: id, display: name }
  })

  return (
    <div className='container-signin'>
      <div className='header'>
        <h2 style={{color: 'white', fontSize: 32}}>Would You Rather Game!</h2>
        <p style={{color: 'white'}}>Please Sign In</p>
      </div>
      <div className='container-image'>
        {users.map(user => {
          return <img key={user.id} src={user.avatarURL} alt='User Avatar' />
        })}
      </div>
      <div className='container-select-submit'>
        <form className='form-sign-in' onSubmit={handleSubmit}>
          <select
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
          >
            <option key={new Date().getTime()} hidden={true}>
              Select User
            </option>
            {availableUsers.map(user => {
              return (
                <option key={user.value} value={user.name}>
                  {user.display}
                </option>
              )
            })}
          </select>
          <button className='button-sign-in'>Submit</button>
        </form>
      </div>
    </div>
  )
}
