import styles from './ContarHistorias.module.css'
import imgContarHistorias from '../../../img/imgContarHistorias.jpg'


export default function ContarHistorias() {

    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Contar histórias</h2>
                        <p>O jogo de contar histórias é uma atividade lúdica em que a criança cria ou reconta narrativas a partir de figuras, cartões ilustrados ou objetos do dia a dia. Para pessoas com autismo, essa prática é importante porque estimula a imaginação, a linguagem, a comunicação e a expressão emocional. A história pode ser construída em conjunto: o adulto inicia uma parte e a criança continua, ou a criança escolhe imagens e cria sua própria versão. Esse jogo também fortalece o vínculo social e dá à criança a oportunidade de compartilhar suas ideias de forma divertida e criativa.</p>
                        <div><img src={imgContarHistorias} alt="Mãe contando histórias pra sua filha" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}