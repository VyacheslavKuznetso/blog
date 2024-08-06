import {Link} from 'react-router-dom';

import styles from './styles.module.css';

function Item() {

    return (
        <div className={styles.text}>
            <Link to="/post" className={styles.text__title}>Первый день знакомства</Link>
            <p className={styles.text__subtitle}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe molestiae nobis necessitatibus laboriosam officia, reprehenderit, earum fugiat? </p>
        </div>
    )
}

export default Item;