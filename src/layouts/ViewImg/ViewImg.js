import styles from './ViewImg.module.css'
import imgImprimirJogo from '../../img/imgImprimirJogo.jpg'
import { IoMdClose } from "react-icons/io"
import { LuDownload } from "react-icons/lu";
import clsx from 'clsx'
import { createElement } from 'react';

export default function ViewImg({ setView, view }) {

    const classSection = clsx(view ? styles.section : styles.sectionNone)

    function downloadImg(){
        const img = document.createElement('a')
        img.href = imgImprimirJogo
        img.download = 'jogo-da-memoria.jpg'
        img.click()
    }

    return (
        <>
            <section className={classSection}>
                <div>
                    <div className={styles.optionImprimir}>
                        <IoMdClose className={styles.iconImprimir} onClick={() => { setView(false) }} />
                        <LuDownload onClick={downloadImg} className={styles.iconImprimir} />
                    </div>

                    <img src={imgImprimirJogo} alt="Jogo da memória pra ser impresso" />
                </div>
            </section>
        </>
    )
}