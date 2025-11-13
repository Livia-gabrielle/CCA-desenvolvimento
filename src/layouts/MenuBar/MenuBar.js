import clsx from 'clsx'
import styles from './MenuBar.module.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { IoMdClose } from "react-icons/io"
import { useState } from 'react'

export default function MenuBar({ menu, setMenu }) {

    const [none, setNone] = useState(false)
    const classSection = clsx(styles.containerMenu, menu ? styles.true : styles.false, none ? styles.none : '')

    // function noneMenu() {
    //     setTimeout(() => setMenu(false), 1000)
    // }

    return (
        <>
            <div className={classSection}>
                <div className={styles.cardMenu}>
                    <div className={styles.titleMenu}>
                        <span>Atividades</span>
                        <IoMdClose onClick={() => setMenu(false)} className={styles.menuIcon} />
                    </div>
                    <ul>
                        <li>
                            <Link
                                className={styles.link}
                                to='/comunicacao'>
                                <Button size='large' version='letterTrp'>Comunicação</Button>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.link}
                                to='/sensoriais'>
                                <Button size='large' version='letterTrp'>Sensoriais</Button>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.link}
                                to='/cognitivo'>
                                <Button size='large' version='letterTrp'>Cognitivo</Button>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.link}
                                to='/interacao-social'>
                                <Button size='large' version='letterTrp'>Interação Social</Button>
                            </Link>
                        </li>
                        <li className={styles.noneBorder}>
                            <Link
                                className={styles.link}
                                to='/motora'>
                                <Button size='large' version='letterTrp'>Motora</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}