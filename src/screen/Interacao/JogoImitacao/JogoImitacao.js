import styles from './JogoImitacao.module.css'
import imgJogoImitacao from '../../../img/imgJogoImitacao.jpg'


export default function JogoImitacao() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Jogos de imitação</h2>
                        <p>O jogo de imitação é uma atividade lúdica em que a criança copia gestos, movimentos ou sons do parceiro de brincadeira. Para crianças com autismo, esse tipo de jogo é muito importante, pois ajuda a desenvolver atenção compartilhada, habilidades sociais e percepção emocional. Além disso, incentiva a criança a observar, reproduzir e compreender comportamentos, fortalecendo a interação e a comunicação de forma divertida e natural.</p>
                        <div><img src={imgJogoImitacao} alt="Mãe ensinando sua filha a interagir com os dedos" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}