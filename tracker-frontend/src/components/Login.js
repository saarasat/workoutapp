import React, { useEffect, useState } from 'react'


const Login = ({handleLogin, username, password, setUsername, setPassword}) => {
  return (
    <div>
    <h2>Login</h2>
      <form onSubmit={handleLogin}>
      <div>username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={setUsername}
        />
      </div>
      <div>password
      <input
        type="password"
        value={password}
        name="Password"
        onChange={setPassword}
      />
      </div>
      <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Login