import styles from './Motora.module.css'
import CardImg from '../../components/CardImg/CardImg'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import imgAcerte from '../../img/imgAcerte.jpg'
import imgPincar from '../../img/imgPincar.jpg'
import imgLabirinto from '../../img/imgLabirinto.jpg'


export default function Motora() {
    const classLink = clsx(styles.link, styles.center)

    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Motor (Grossa e Fina)</h2>
                        <p>Estudos em terapia ocupacional e desenvolvimento infantil, como os de Case-Smith e O’Brien (2015), mostram que brincadeiras e exercícios que envolvem movimentos grandes (como correr, pular e lançar objetos) e pequenos (como pegar objetos, desenhar e manipular peças) ajudam a melhorar equilíbrio, força, destreza e controle motor. Essas práticas favorecem a autonomia, a participação em atividades diárias e a confiança da criança ao explorar e interagir com o mundo.</p>
                        <div className={styles.containerImg}>
                            <CardImg>
                                <img className={styles.imgCard} src={imgPincar} alt="Imagem de uma piça de brinquedo pegando massinha" />
                                <Link className={classLink} to='/motora/pincar-objetos-pequenos'><Button size='large' version='blueBck'>Pinçar Objetos Pequenos</Button></Link>
                            </CardImg>
                            <CardImg>
                                <img className={styles.imgCard} src={imgAcerte} alt="Crianças brincando de acerta o alvo" />
                                <Link className={classLink} to='/motora/acerte-alvo'><Button size='large' version='blueBck'>Acerte o Alvo</Button></Link>
                            </CardImg>
                            <CardImg>
                                <img className={styles.imgCard} src={imgLabirinto} alt="Labirinto de desenho" />
                                <Link className={classLink} to='/motora/labirinto'><Button size='large' version='blueBck'>Labirinto</Button></Link>
                            </CardImg>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}