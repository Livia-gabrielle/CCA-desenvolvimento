import styles from './Sensoriais.module.css'
import CardImg from '../../components/CardImg/CardImg'
import Button from '../../components/Button/Button'
import caixaSensoriais from '../../img/imgCaixaSensorial.png'
import massinhaSensoriais from '../../img/masinhaSensoriais.jpg'
import tintaSensoriais from '../../img/tintaSensoriais.jpg'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

export default function Sensoriais() {
    const classLink = clsx(styles.center, styles.link)

    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Atividades Sensoriais</h2>
                        <p>A psicóloga e terapeuta ocupacional Jean Ayres (1920–1989) criou a Teoria da Integração Sensorial, base das atividades sensoriais usadas até hoje. Ela mostrou que muitas crianças com autismo têm dificuldades para organizar as informações dos sentidos (visão, audição, tato, olfato e paladar). Por isso, as atividades sensoriais são essenciais: ajudam no desenvolvimento, na aprendizagem e na forma como a criança interage com o mundo</p>
                        <div className={styles.containerImg}>
                            <CardImg>
                                <img className={styles.imgCard} src={caixaSensoriais} alt="criança com uma caixa" />
                                <Link className={classLink} to='/sensoriais/caixa-sensorial'><Button size='large' version='blueBck'>Caixa Sensorial</Button></Link>
                            </CardImg>
                            <CardImg>
                                <img className={styles.imgCard} src={massinhaSensoriais} alt="Criança com massinha" />
                                <Link className={classLink} to='/sensoriais/massinha-maizena'><Button size='large' version='blueBck'>Massinha de Maizena</Button></Link>
                            </CardImg>
                            <CardImg>
                                <img className={styles.imgCard} src={tintaSensoriais} alt="Pés sujos de tintas" />
                                <Link className={classLink} to='/sensoriais/pintar-pes'><Button size='large' version='blueBck'>Pintar os Pés</Button></Link>
                            </CardImg>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}