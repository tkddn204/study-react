import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => [...Array(props.ingredients[igKey])].map(
            (_, i) => <BurgerIngredient key={igKey + i} type={igKey}/>
        )).reduce((arr, element) => arr.concat(element), []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;