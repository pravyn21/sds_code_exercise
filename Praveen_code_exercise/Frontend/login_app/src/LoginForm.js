import React, { useState } from "react";
import './LoginForm.css';
import users from './usersdata.json';
const LoginForm = (props) => {
	const[loginInfo, setLoginInfo]=useState({});
	const handleSubmit = (event) =>{
		const {username, password}= loginInfo;
		event.preventDefault();
		const found=users.data.find(u=>u.username.toLocaleLowerCase() === username && u.password === password);
		if(found){
			return props.onSubmit({
				login: username,
				password: password,
			});
		}
		return props.loginFailed();
	}

	return (
		<form className="form">
			<h1>Login</h1>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" onChange={e=> setLoginInfo({...loginInfo,username:e.target.value})}/>
			<label htmlFor="password">Password</label>
			<input type="password" id="password"  onChange={e=>setLoginInfo({...loginInfo,password:e.target.value})}/>
			<button type="submit" onClick={handleSubmit}>Continue</button>
		</form>
	)
}

export default LoginForm;