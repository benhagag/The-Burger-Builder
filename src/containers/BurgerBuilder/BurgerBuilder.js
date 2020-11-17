import React, {Component} from 'react';
import Auxiliary from '../../HOC/Auxiliary/Auxiliary';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    foieGras: 0.7
};

class BurgerBuilder extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {};
    // }

    state = {
        ingredients: {
            salad: 0,
            foieGras: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    /**
     *  updatePurchaseState function -
     *  Get updatedIngredients after adding or removing ingredients (after addIngredientHander function and after removeIngredientHander)
     *  Updating this.state.purchasable according the sum of all the ingredients (true/false)
     *  And by that we will update the ORDER button which in BuildControls component
     */
    updatePurchaseState(updatedIngredients){

        const sum = Object.keys(updatedIngredients)
            .map(igKey => {
                return updatedIngredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            } ,0);

        this.setState({
            purchasable: sum > 0
        });

    }

    /**
     * addIngredientHander function - Adding the ingredient and adding thr price of the ingredient
     * On adding ingredient it will add it to the Burger sandwitch
     * It will add to the oldCount of the ingredient +1
     * And it will add the price of the specifiec ingredient to to the old price which is the Burger price + all the ingredients that already include in it
     * Excute updatePurchaseState (updatedIngredients) for updating this.state.purchasable
     */
    addIngredientHander = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    /**
     * removeIngredientHander function - Removing the ingredient and Deduct the price of the ingredient
     * On removing ingredient it will remove from the Burger sandwitch
     * It will deduct to the oldCount of the ingredient -1
     * And it will deduct the price of the specifiec ingredient from the old price which is the Burger price + all the ingredients that already include in it
     * Excute updatePurchaseState (updatedIngredients) for updating this.state.purchasable
     */
    removeIngredientHander = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount -1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => this.setState({purchasing: true});

    purchaseCancelHandler = () => this.setState({purchasing: false});

    purchaseContinueHandler = () => {
        
        this.setState({loading: true});

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer : {
                name: 'Ben Hagag',
                address: {
                    street: 'Harishonim',
                    zipCode: '45820',
                    country: 'Israel'

                },
                email: 'benbenhagag@gmail.com',
                deliveryMethod: 'fastest'
            }
        }

        /**
         * FireBase - 
         * /orders.json - In firebae it will create orders node and store all our orders beneath that node 
         */
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({loading:false, purchasing: false});
            })
            .catch(error => {
                console.log(error);
                this.setState({loading:false, purchasing: false});
            });
    } 

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            // disabledInfo[key]<=0 will return true/false
            disabledInfo[key] = disabledInfo[key]<=0
        }

        let orderSummary = 
            <OrderSummary
                ingredients={this.state.ingredients}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.state.totalPrice}
            />;
        if(this.state.loading){
            orderSummary = <Spinner />;
        }

        return(
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                 {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientsAdded={this.addIngredientHander}
                    ingredientsRemoved={this.removeIngredientHander} 
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </Auxiliary>
        );
    }

}

export default withErrorHandler(BurgerBuilder, axios);