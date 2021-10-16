import styles from './UsersList.module.css';
import UserCard from './UserCard';

function UsersList(props) {
	return (
		<div className={styles.list} >
			{props.users.map(user => {
				return (<UserCard key={user.key} name={user.name} age={user.age} />);
			})}
		</div>
	);
}

export default UsersList;
