import styles from './UsersList.module.css';
import UserCard from './UserCard';

function UsersList(props) {
	const removeCard = userKey => {
		props.onUserRemoved(userKey)
	}
	return (
		<div className={styles.container} >
			{props.users.map(user => {
				return (<UserCard key={user.key} id={user.key} name={user.name} age={user.age} onCardClicked={removeCard} />);
			})}
		</div>
	);
}

export default UsersList;
