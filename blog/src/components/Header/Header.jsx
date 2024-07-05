import HeaderLog from "../../../public/images/cards-competence.png";
import styles from './styles.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <section className={styles.header__logo}>
                <img className={styles.logo} src={HeaderLog} alt="Логотип 'Блог'" />
                <h3 className={styles.logo__text}>Блог !</h3>
            </section>
        </header>
    )
}

export default Header;