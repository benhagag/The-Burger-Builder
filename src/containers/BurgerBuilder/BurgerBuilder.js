import React, {Component} from 'react';
import Auxiliary from '../../HOC/Auxiliary';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


class BurgerBuilder extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {};
    // }

    state = {
        ingredients: {
            salad: 2,
            bacon: 2,
            cheese: 1,
            meat: 2
        }

    }

    render(){
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Auxiliary>
        );
    }

}

export default BurgerBuilder;