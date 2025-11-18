import styles from './AcerteAlvo.module.css'
import imgAcerteAlvo from '../../../img/imgAcerteAlvo.jpg'

export default function AcerteAlvo() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Acerte o Alvo</h2>
                        <p>A brincadeira Acertar o Alvo é divertida e ajuda crianças autistas a desenvolver coordenação motora, atenção e noção espacial, além de estimular a socialização. Basta usar um balde ou caixa como alvo e bolinhas leves para lançar. Comece de perto e aumente a distância aos poucos, sempre comemorando cada tentativa.</p>
                        <div><img src={imgAcerteAlvo} alt="Mãe demostrando como se acerta uma bola no alvo para sua filha" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}