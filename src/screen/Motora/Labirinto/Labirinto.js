import { useState } from 'react'
import ViewImg from '../../../layouts/ViewImg/ViewImg'
import styles from './Labirinto.module.css'

import imgJogoLabirinto from '../../../img/imgJogoLabirinto.jpg'
import imgMenino from '../../../img/imgMeninoLabirinto.jpg'

export default function Labirinto() {

    const [view, setView] = useState(false)

    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Jogo do Labirinto</h2>
                        <p>O jogo do labirinto é uma atividade divertida que estimula o raciocínio lógico, a percepção espacial e a concentração. Para crianças com autismo, ele também ajuda a desenvolver pacote de habilidades cognitivas e motoras, como planejamento de movimentos e coordenação olho-mão. Além disso, o desafio de encontrar a saída do labirinto promove persistência, atenção e sensação de conquista, tornando o aprendizado lúdico e motivador.</p>
                        <div title='Clique ver melhor' className={styles.cardImg} >
                            <img className={styles.img} src={imgMenino} alt="Criança brincando sozinha do jogo do labirinto" />
                            <div className={styles.imgImprimirCard} >
                                <div className={styles.after} onClick={() => { setView(true) }}>
                                    <img className={styles.imgImprimir} src={imgJogoLabirinto} alt="Jogo do labirinto para impressão" />
                                </div>

                                <span>Imagem para imprimir</span>
                            </div>

                        </div>

                    </div>
                </div>
                <ViewImg nomeImg='jogo-do-labirinto' imgFather={imgJogoLabirinto} setView={setView} view={view} />
            </section>
        </>
    )
}