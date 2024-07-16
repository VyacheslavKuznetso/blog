import {Routes, Route, Link} from 'react-router-dom';

import {CardList} from '../CardList/CardList';
import {CardBlog} from '../CardBlog/CardBlog';

import styles from './styles.module.css';


export function Main() {
    return (
        <div className={styles.main}>
            <Link to="/post">Ссылка для примера</Link>
            <Routes>
                <Route index element={<CardList />} /> 
                <Route path="/post" element={<CardBlog />} />                
            </Routes>
        </div>
    )
}

export default Main;