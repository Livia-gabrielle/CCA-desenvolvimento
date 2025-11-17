import styles from './MassinhaMaizena.module.css'
import imgMassinhaMaizena from '../../../img/imgMassinhaMaizena.jpg'


export default function MassinhaMaizena() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Massinha de maizena</h2>
                        <div>
                            <h3>Ingredientes</h3>
                            <ul>
                                <li>- 2 xícaras de amido de milho</li>
                                <li>- 1 xícara de condionador de cabelo</li>
                                <li>- Corante alimentício (opcional)</li>
                                <li>- Glitter (opcional)</li>
                            </ul>
                        </div>
                        <div><img className={styles.img} src={imgMassinhaMaizena} alt="Criança pegando um item escondido dentro da caixa" /></div>
                        <div>
                            <h3>Como fazer</h3>
                            <ol>
                                <li>1. Coloque o amido de milho em uma tigela.</li>
                                <li>2. Vá adicionando o condicionador aos poucos e mexa com uma colher</li>
                                <li>3. Quando começar a desgrudar, amasse com as mãos até ficar bem macia</li>
                                <li>4. Se quiser, pingue algumas gotas de corante e misture até a cor ficar uniforme.</li>
                                <li>5. Pode adicionar glitter para deixar mais divertida.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}