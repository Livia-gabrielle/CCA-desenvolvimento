import styles from './QuebraCabeca.module.css'
import imgQuebraCabeça from '../../../img/imgQuebraCabeça.jpg'
import imgMeninaQuebra from '../../../img/imgMeninaQuebra.jpg'
import ViewImg from '../../../layouts/ViewImg/ViewImg'
import { useState } from 'react'

export default function QuebraCabeca() {

    const [view, setView] = useState(false)


    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Quebra-cabeça</h2>
                        <p>O jogo de quebra-cabeça consiste em montar uma figura unindo suas peças corretamente. Para pessoas com autismo, essa atividade é muito importante, pois desenvolve a atenção, a concentração, a coordenação motora fina e o raciocínio lógico. Além disso, ajuda na resolução de problemas e pode ser uma forma tranquila e prazerosa de estimular a paciência. Quando adaptado com imagens de interesse da criança, o quebra-cabeça também favorece o engajamento e a motivação durante a atividade. A seguir um modelo que super divertido que você pode imprimir e recortar para fazer um quebra-cabeça caseiro!</p>
                        <div className={styles.cardImg} >
                            <img className={styles.img} src={imgMeninaQuebra} alt="Menina jogando quebra cabeça" />
                            <img src={imgQuebraCabeça} alt="Quebra cabeça" className={styles.img} />
                        </div>

                    </div>
                </div>
                <ViewImg setView={setView} view={view} />
            </section>
        </>
    )
}