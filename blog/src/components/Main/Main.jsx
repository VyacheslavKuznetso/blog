import {Routes, Route} from 'react-router-dom';


import {CardList} from '../CardList/CardList';
import {CardBlog} from '../CardBlog/CardBlog';

import styles from './styles.module.css';


export function Main() {
    return (
        <div className={styles.main}>
            <Routes>
                <Route index element={<CardList />} /> 
                <Route path="/post" element={<CardBlog />} />                
            </Routes>
        </div>
    )
}