import React from 'react';

import classes from './Burger.css';
import BurgerIngredinet from './Burger/BurgerIngredient/BurgerIngredient';
import BurgerIngredient from './Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    // Object.keys(object) - will extract all the keys of the object and will return an array with those keys 
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // return array with the length of the the props.ingredients[igKey(cheese\meat\salad..)]) : amount
            return [...Array(props.ingredients[igKey])]
            //map the array we returned before (_ = undefind, i = the index place in the array of the _)
            .map((_, i) => {
                return <BurgerIngredinet key={igKey + i} type={igKey} />
            });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;