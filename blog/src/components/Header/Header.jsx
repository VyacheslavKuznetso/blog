import HeaderLog from "../../../public/images/cards-competence.png";
import styles from './styles.module.css';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <section className={styles.header__logo}>
                <NavLink to="/">
                    <img className={styles.logo} src={HeaderLog} alt="Логотип 'Блог'" />
                </NavLink>
                <h3 className={styles.logo__text}>Блог !</h3>
            </section>
        </header>
    )
}

export default Header;