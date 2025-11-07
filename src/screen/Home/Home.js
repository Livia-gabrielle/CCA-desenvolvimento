import styles from './Home.module.css'
import simbuloAutismo from '../../img/simboloAutismo.png'

export default function Home() {
    return (
        <div className={styles.sectionHome}>
            <div className={styles.containerHome}>
                <div className={styles.cardHome}>
                    <h2>Bem vindos ao Cuidar com Amor</h2>
                    <p className={styles.pgMaior}> Cuidar de uma criança autista é uma jornada cheia de descobertas e aprendizados. Cada momento é uma oportunidade de estimular o desenvolvimento, fortalecer vínculos e celebrar conquistas.
                        As brincadeiras, atividades e exercícios — sejam sensoriais, educativos ou lúdicos — são muito mais do que diversão: eles ajudam no desenvolvimento da comunicação, da coordenação motora, da autonomia e na forma como a criança se relaciona com o mundo ao seu redor. Cada descoberta é um tesouro que merece ser valorizado.
                    </p>
                    <div>
                        <img className={styles.imgAutismo} src={simbuloAutismo} alt="Simbulo do Autismo" />
                    </div>
                    <p className={styles.pgMenor}>Aqui, você encontrará ideias, orientações e recursos para transformar o dia a dia em experiências enriquecedoras, sempre com carinho, respeito e amor.</p>
                </div>
            </div>
        </div>
    )
}