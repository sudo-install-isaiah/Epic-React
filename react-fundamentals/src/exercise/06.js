// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = React.useRef()
  const [error, setError] = React.useState(null)

  const handleChange = event => {
    const value = event.target.value
    const isValid = value === value.toLowerCase()

    setError(isValid ? null : 'Username must be lower case')
  }
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(usernameRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          ref={usernameRef}
          onChange={handleChange}
        />
      </div>
      <button disabled={error} type="submit">
        Submit
      </button>
      {error && (
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      )}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
