import styles from './Interacao.module.css'
import Button from '../../components/Button/Button'
import imgInteracao from '../../img/imgInteracao.jpg'
import { Link } from 'react-router-dom'


export default function Interacao() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Interação Social</h2>
                        <p>Estudos em fonoaudiologia e desenvolvimento infantil, como os de Paul e Norbury (2012), indicam que atividades lúdicas e estruturadas ajudam a melhorar linguagem expressiva e receptiva, habilidades sociais e compreensão de sinais sociais. Essas práticas permitem que a criança se expresse, compreenda melhor o mundo ao redor e participe de forma mais ativa das relações sociais.</p>
                        <div><img src={imgInteracao} alt="Mãe ensinando sua filha a interagir com os dedos" /></div>
                        <Link to='/interacao-social/jogo-imitacao'><Button size='large' version='blueBck'>Jogo da Imitação</Button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}