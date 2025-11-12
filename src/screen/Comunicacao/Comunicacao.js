import styles from './Comunicacao.module.css'
import Button from '../../components/Button/Button'
import imgComunicacao from '../../img/imgComunicacao.jpg'
import { Link } from 'react-router-dom'


export default function Comunicacao() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Comunicacão</h2>
                        <p>Estudos em fonoaudiologia e desenvolvimento infantil, como os de Paul e Norbury (2012), indicam que atividades lúdicas e estruturadas ajudam a melhorar linguagem expressiva e receptiva, habilidades sociais e compreensão de sinais sociais. Essas práticas permitem que a criança se expresse, compreenda melhor o mundo ao redor e participe de forma mais ativa das relações sociais.</p>
                        <div><img src={imgComunicacao} alt="Pai contando histórias pra sua filha" /></div>
                        <Link to='/comunicacao/contar-historias'><Button size='large' version='blueBck'>Contar Histórias</Button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}