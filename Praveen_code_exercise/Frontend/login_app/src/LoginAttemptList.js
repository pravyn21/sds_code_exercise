import React, { useEffect, useState } from "react";
import "./LoginAttemptList.css";

const LoginAttempt = (props) => <li {...props}>{props.children}</li>;

const LoginAttemptList = (props) => {
	const [filteredInfo, setFilteredInfo] = useState([]);

	useEffect(() => {
		setFilteredInfo(props.attempts);
	}, [props.attempts]);

	const filterOut = (event) => {
		const { value } = event.target;
		const filteredItems = props.attempts.filter(item => item.login.includes(value));
		setFilteredInfo(filteredItems);
	}

	return (
		<div className="Attempt-List-Main">
			<p>Recent activity</p>
			<input type="input" placeholder="Filter..." onChange={(e) => filterOut(e)} />
			<ul className="Attempt-List">
				{filteredInfo.map((item, index) =>
					<LoginAttempt key={index}>{item.login}</LoginAttempt>
				)}
			</ul>
		</div>
	)
};

export default LoginAttemptList;