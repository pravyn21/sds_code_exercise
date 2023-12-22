import React, { useState } from "react";
import './App.css';
import LoginForm from './LoginForm';
import LoginAttemptList from './LoginAttemptList';

const App = () => {
  const [loginAttempts, setLoginAttempts] = useState([]);
  const [loginNotFound, SetUserNotFound] = useState(false);

  const setUserInfo= (info) =>{
    SetUserNotFound(false);
    setLoginAttempts([...loginAttempts, info])
  }
  return (
    <div className="App">
      <LoginForm onSubmit={setUserInfo} loginFailed={()=>SetUserNotFound(true)}/>
      {loginNotFound && <p className="notfound">User not found...! login failed.</p>}
      <LoginAttemptList attempts={loginAttempts} />
    </div>
  );
};

export default App;
