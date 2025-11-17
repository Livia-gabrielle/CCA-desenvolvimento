import styles from './PintarPes.module.css'
import imgPintarPes from '../../../img/imgPintarPes.jpg'


export default function PintarPes() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Pintura com os pés</h2>
                        <p>A pintura com os pés é uma atividade sensorial divertida, que pode ser feita com tinta caseira de maizena, água e corante. Para pessoas com autismo, ajuda a estimular a percepção tátil, a coordenação motora e a expressão emocional, além de proporcionar diversão e relaxamento. Pintar com os pés permite explorar cores, texturas e movimentos de forma única.</p>
                        <div><img className={styles.img} src={imgPintarPes} alt="Criança com os pés todos pintados" /></div>
                    </div>                           
                </div>
            </section>
        </>
    )
}