import styles from './JogoMemoria.module.css'
import imgJogoMemoria from '../../../img/imgJogodaMemoria.jpg'
import imgImprimirJogo from '../../../img/imgImprimirJogo.jpg'
import { useState } from 'react'
import ViewImg from '../../../layouts/ViewImg/ViewImg'

export default function JogoMemoria() {

    const [view, setView] = useState(false)



    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Jogo da Memória</h2>
                        <p>O jogo da memória é uma atividade divertida e educativa. Para jogar, espalhe as cartas viradas para baixo e, a cada rodada, a criança vira duas cartas para tentar formar pares iguais. Esse jogo é muito útil para crianças autistas, pois ajuda a estimular a atenção, a concentração, a memória visual e a paciência. Além disso, pode ser adaptado com imagens de objetos, animais ou personagens que a criança goste, tornando a brincadeira ainda mais envolvente e significativa.  A seguir tem um modelo de jogo caso queira imprimir!</p>
                        <div title='Clique ver melhor' className={styles.cardImg} >
                            <img className={styles.img} src={imgJogoMemoria} alt="Criança brincando com sua mãe de jogo da memória" />
                            <div className={styles.imgImprimirCard} >
                                <div className={styles.after} onClick={() => { setView(true) }}>
                                    <img className={styles.imgImprimir} src={imgImprimirJogo} alt="Jogo da memória para impressão" />
                                </div>

                                <span>Imagem para imprimir</span>
                            </div>

                        </div>

                    </div>
                </div>
                <ViewImg nomeImg='jogo-da-memoria' imgFather={imgImprimirJogo} setView={setView} view={view} />
            </section>
        </>
    )
}