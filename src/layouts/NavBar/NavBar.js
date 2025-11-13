import styles from './NavBar.module.css'
import { AiOutlineMenu } from "react-icons/ai";
import imgLogo from '../../img/LogoCCA.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuBar from '../MenuBar/MenuBar';


export default function NavBar() {
    const [menu, setMenu] = useState(false)
    const [none, setNone] = useState(false)

    function addMenu(){
        setMenu(true)
        setTimeout(() => setNone(false), 100)
    
    }
    return (
        <>
            <header className={styles.header}>
                <div className={styles.containerHeader}>
                    <AiOutlineMenu onClick={addMenu} className={styles.iconMenuBar} />
                    <div className={styles.cardHeader}>
                        <Link className='link' to='/'>
                            <div className={styles.containerLogo}>
                                <img src={imgLogo} alt="logo do CCA" />
                                <h1>CCA</h1>
                            </div>
                        </Link>
                    </div>
                </div>
                <MenuBar setNone={setNone} none={none} setMenu={setMenu} menu={menu}/>
            </header>
        </>
    )
}