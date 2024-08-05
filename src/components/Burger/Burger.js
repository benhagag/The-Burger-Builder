import React from 'react';

import classes from './Burger.css';
import BurgerIngredinet from './Burger/BurgerIngredient/BurgerIngredient';
import BurgerIngredient from './Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    // Object.keys(object) - will extract all the keys of the object and will return an array with those keys 
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // return array with the length of the the props.ingredients[igKey(cheese\meat\salad..)]) : amount
            return [...Array(props.ingredients[igKey])]
            //map the array we returned before (_ = undefind, i = the index place in the array of the _)
            .map((_, i) => {
                return <BurgerIngredinet key={igKey + i} type={igKey} />
            });
        })
        /**
         * The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
         * reduce() is a built in array function which allows us to transform an array to into something else
         * It takse a function as an input and this function receives two arguments passed in automatically by JS
         * The first is the previous value (arr) and the second is the current value (el)
         * The reduce method does not only accept these callback here which is executed on every element in the array it also accepts an initial value - []
         * It will loop through all the elements and simply add them to the initial value step by step
         * We will use this here for flatt the array
         */
        .reduce((arr, el) => {
            return arr.concat(el); // concat between the 2 arrays
        },[]);

    /**
     * More readible code for calculating the ingredient sum dynamically
     */
    // let transformedIngredients = [];
    // for (let attr in props.ingredients) {
    //     console.log(attr);
    //     for (let i =0; i < props.ingredients[attr];i++) {
    //         transformedIngredients.push(
    //             <BurgerIngredient key={attr + i} type={attr}></BurgerIngredient>
    //         )
    //     }
    // }

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please Start adding ingredients</p>
    }


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;