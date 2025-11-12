import styles from './CardImg.module.css'

export default function CardImg({children}){
    return(
        <>
        <div className={styles.card}>
            {children}
        </div>
        </>
    )
}