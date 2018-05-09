import React from 'react';
import styles from './Categories.css';

const Categories = ({ categories, filterCategory }) =>
    <div>
        <ul>
            <li key="-1" onClick={() => filterCategory(-1)} className={styles.categoryItem}>Todos</li>
            {
                categories.map((cat) =>
                    <li key={cat.id} onClick={() => filterCategory(cat.id)} className={styles.categoryItem} >{cat.name}</li>
                )
            }
        </ul>
    </div>

export default Categories;
