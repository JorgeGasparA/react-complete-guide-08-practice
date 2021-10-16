import styles from './UserCard.module.css'

function UserCard(props){
    return (
        <div className={styles.UserCard} >
            {props.name + props.age}
        </div>
    )
}
export default UserCard