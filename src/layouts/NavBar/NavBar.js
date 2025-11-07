import styles from './NavBar.module.css'
import { AiOutlineMenu } from "react-icons/ai";
import imgLogo from '../../img/LogoCCA.png'


export default function NavBar(){
    return(
        <>
            <header className={styles.header}>
                <div className={styles.containerHeader}>
                    <AiOutlineMenu className={styles.iconMenuBar}/>
                    <div className={styles.containerLogo}>
                        <img src={imgLogo} alt="logo do CCA" />
                        <h1>CCA</h1>
                    </div>
                    <div></div>
                </div>
            </header>
        </>
    )
}