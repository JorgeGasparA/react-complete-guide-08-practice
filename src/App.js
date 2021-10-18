import React, { useState } from 'react';
import UserForm from './Components/UserForm';
import UsersList from './Components/UsersList';
import ErrorModal from './Components/ErrorModal';

function App() {
	const [usersList, setUsersList] = useState([]);
	const [errorState, setErrorState] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

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
	const userRemovedHandler = key => {
		setUsersList(previousList => {
			return previousList.filter(current => current.key !== key);
		});
	};
	const validationErrorHandler = err => {
		setErrorState(err.state);
		setErrorMessage(err.message);
	};
	const closeModalHandler = () => setErrorState(false)
	return (
		<div>
			{errorState && <ErrorModal message={errorMessage} onCloseModal={closeModalHandler} />}
			<UserForm
				onUserAdded={userAddedHandler}
				onValidationError={validationErrorHandler}
			/>
			<UsersList users={usersList} onUserRemoved={userRemovedHandler} />
		</div>
	);
}

export default App;
