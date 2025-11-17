import styles from './CaixaSensorial.module.css'
import imgCaixaSensorial from '../../../img/imgCaixaSensorial.png'


export default function CaixaSensorial() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Caixa Sensorial</h2>
                        <p>Para criar uma caixa sensorial, use uma caixa resistente (como de papelão) com um buraco para a mão, e encha-a com materiais de diferentes texturas, formas, cores e cheiros, como arroz, tecidos, pedras, e objetos da natureza, para estimular os sentidos da criança. Certifique-se de que os materiais são adequados para a idade da criança, especialmente se ela costuma colocar objetos na boca, e supervisione a brincadeira para garantir a segurança.</p>
                        <ol>
                            <li>1. Escolha uma caixa</li>
                            <li>2. Selecione os materiais</li>
                            <li>3. Prepare e monte a caixa</li>                           
                        </ol>
                        <div><img className={styles.img} src={imgCaixaSensorial} alt="Criança pegando um item escondido dentro da caixa" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}