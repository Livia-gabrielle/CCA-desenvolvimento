import styles from './Cognitivo.module.css'
import CardImg from '../../components/CardImg/CardImg'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import menino from '../../img/meninoCog.jpg'
import menina from '../../img/meninaCog.jpg'

export default function Cognitivo() {
    const classLink = clsx(styles.link, styles.center)

    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Cognitivo</h2>
                        <p>Pesquisas em educação inclusiva, como as de Lev Vygotsky (1978), mostram que a aprendizagem se fortalece quando a criança recebe estímulos adequados ao seu ritmo. Além disso, atividades lúdicas ajudam a estimular atenção, memória, raciocínio e resolução de problemas. Para crianças com autismo, essas brincadeiras também favorecem a linguagem, a socialização e a autonomia, permitindo que aprendam de forma ativa e prazerosa e se adaptem melhor às situações do dia a dia.</p>
                        <div className={styles.containerImg}>
                            <CardImg>
                                <img className={styles.imgCard} src={menina} alt="Menina jogando jogo da memória" />
                                <Link className={classLink} to='/cognitivo/jogo-memoria'><Button size='large' version='blueBck'>Jogo da Memória</Button></Link>
                            </CardImg>
                            <CardImg>
                                <img className={styles.imgCard} src={menino} alt="Menino montando quebra cabeça" />
                                <Link className={classLink} to='/cognitivo/quebra-cabeca'><Button size='large' version='blueBck'>Quebra Cabeça</Button></Link>
                            </CardImg>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}