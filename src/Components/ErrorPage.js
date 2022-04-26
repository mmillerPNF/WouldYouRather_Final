import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage () {
  if(performance.navigation.type === 1) {
    <Link to='/' />
  }
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to='/'>Back To Sign In</Link>
    </div>
  )
}
