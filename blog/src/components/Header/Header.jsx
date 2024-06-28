import HeaderLog from "../../images/cards-competence.png";
import './Header.css';

function Header() {
    return (
        <header className="header">
            <section className='header__logo'>
                <img className='logo logo_plase_header' src={HeaderLog} alt="Логотип 'Блог'" />
                <h3 className='logo-text logo-text_plase_header'>Блог !</h3>
            </section>
        </header>
    )
}

export default Header;