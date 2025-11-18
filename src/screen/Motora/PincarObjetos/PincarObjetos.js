import styles from './PincarObjetos.module.css'
import imgPincarObjetos from '../../../img/imgPincarOjt.jpg'

export default function PincarObjetos() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Pinçar objetos pequenos</h2>
                        <p>Pinçar objetos pequenos é uma atividade que estimula a coordenação motora fina e a força nos dedos, habilidades essenciais para tarefas do dia a dia, como escrever ou se alimentar. Para crianças com autismo, essa prática também ajuda na concentração, atenção e percepção tátil, além de ser uma forma divertida de aprender e explorar diferentes texturas e tamanhos. Brincar de pegar e mover objetos pequenos torna o desenvolvimento motor e sensorial mais lúdico e prazeroso.</p>
                        <div><img src={imgPincarObjetos} alt="Menino brincando de pegar objetos pequenos coloridos" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}