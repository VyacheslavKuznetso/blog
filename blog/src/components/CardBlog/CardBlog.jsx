import Item from '../Item/Item';
import Card from "../../../public/images/Image-7.png";
import cn from 'classnames';


import styles from './styles.module.css';

export function CardBlog() {
    return (
        <>
            <div className={styles.card}>
               <div className={ cn(styles.container, styles.show)}>
                   <img className={styles.img} src={Card} alt="Картинка под пост" />
               </div>
               <Item />
           </div>
        </>
    )
}

