import styles from './ErrorModal.module.css'

function ErrorModal(props){
    const closeContent = () =>{
        props.onCloseModal()
    }
    const backgroundClickedHandler = (event) => {
        if(event.target.id === 'background'){
            closeContent()
        }
    }
    return(
    <div id='background' className={styles.Modal} onClick={backgroundClickedHandler} >
        <div className={styles.modalContent} >
            <h1>Invalid data!</h1>
            <h5>{props.message}</h5>
            <button onClick={closeContent} >Okay</button>
        </div>
    </div>)
}

export default ErrorModal