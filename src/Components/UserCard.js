import styles from './UserCard.module.css'

function UserCard(props){
    const clickHandler = () => {
        props.onCardClicked(props.id)
    }
    return (
        <div className={styles.UserCard} onClick={clickHandler} >
            {props.name + ' ' + props.age}
        </div>
    )
}
export default UserCard