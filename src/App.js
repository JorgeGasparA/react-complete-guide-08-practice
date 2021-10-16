import React, { useState } from 'react';
import UserForm from './Components/UserForm';
import UsersList from './Components/UsersList';

function App() {
	const [usersList, setUsersList] = useState([]);
	const [errorState, setErrorState] = useState(false);

	const userAddedHandler = user => {
		setUsersList(previousList => {
			return [
				...previousList,
				{
					key: Math.random().toString() + user.name,
					name: user.name,
					age: user.age,
				},
			];
		});
	};
	const validationErrorHandler = err => {
		setErrorState(true);
	};
	return (
		<div>
			<UserForm
				onUserAdded={userAddedHandler}
				onValidationError={validationErrorHandler}
			/>
			<UsersList users={usersList} />
		</div>
	);
}

export default App;
