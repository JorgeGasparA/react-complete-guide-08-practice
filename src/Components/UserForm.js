import { useState } from 'react';
import styles from './UserForm.module.css';

function UserForm(props) {
	const [userName, setUsername] = useState('');
	const [userAge, setUserAge] = useState('');

	const changeNameHandler = event => {
		setUsername(event.target.value);
	};
	const changeAgeHandler = event => {
		setUserAge(event.target.value);
	};
	const submitHandler = event => {
		event.preventDefault();        

		const newUser = {
			name: userName,
			age: +userAge,
		};
		props.onUserAdded(newUser);

		setUsername('');
		setUserAge('');
	};

	return (
		<form onSubmit={submitHandler}  className={styles.container} >
			<div className={styles.form}>
                <div className={styles['form-field']}>
                    <label>Username</label>
                    <input
                        type='text'
                        value={userName}
                        onChange={changeNameHandler}
                    ></input>
                </div>
                <div className={styles['form-field']}>
                    <label>Age (Years)</label>
                    <input
                        type='number'
                        value={userAge}
                        onChange={changeAgeHandler}
                    ></input>
                </div>
			    <button type='submit' onClick={submitHandler} >Add User</button>
            </div>
		</form>
	);
}

export default UserForm;
