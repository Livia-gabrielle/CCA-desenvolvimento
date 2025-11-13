import styles from './NavBar.module.css'
import { AiOutlineMenu } from "react-icons/ai";
import imgLogo from '../../img/LogoCCA.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuBar from '../MenuBar/MenuBar';


export default function NavBar() {
    const [menu, setMenu] = useState(false)


    return (
        <>
            <header className={styles.header}>
                <div className={styles.containerHeader}>
                    <AiOutlineMenu onClick={() => setMenu(true)} className={styles.iconMenuBar} />
                    <div className={styles.cardHeader}>
                        <Link className='link' to='/'>
                            <div className={styles.containerLogo}>
                                <img src={imgLogo} alt="logo do CCA" />
                                <h1>CCA</h1>
                            </div>
                        </Link>
                    </div>
                </div>
                <MenuBar setMenu={setMenu} menu={menu}/>
            </header>
        </>
    )
}