import React, { useState, useEffect } from 'react'

const LoginForm = ({ onSubmit }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const onSubmitButton = () => {
    onSubmit(username, password);
  }

  const handleUserKeyIn = (e) => {
    setUserName(e.target.value);
  }

  const handlePasswordKeyIn = (e) => {
    setPassword(e.target.value);
  }

  useEffect(()=> {
    if(username.length>0 && password.length>0) setDisableButton(false) 
    else  setDisableButton(true) 
  })
  return (
    <div>
        <label > User Name</label>
        <input type='text' onChange={handleUserKeyIn} id='username-input' value={username} />
        <label > Password</label>
        <input type='password' onChange={handlePasswordKeyIn} id='password-input' value={password} />
        <button id='login-button' disabled={disableButton} onClick={onSubmitButton}> Submit </button>
    </div>
  )
}

export default LoginForm