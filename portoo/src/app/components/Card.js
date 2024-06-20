import styles from "./Card.module.css"


export const Card = (props) => {
    return (
        <div className={styles.container}>Hard
            <h1>{props.title}RE</h1>
            <h2>{props.desc}ZERO</h2>
        </div>)
}