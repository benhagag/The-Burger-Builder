import React, {Component} from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../HOC/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {

   /**
    * Preventing The update of the component.
    * We don't want this component will be re-renderd when there is no need
    * Now everytime we add or less burger ingiridients the BurgerBuilder is re-renderd
    * The Modal is a child of the burgerbuilder and the OrderSummary is a child of the Modal
    * So, Once we will stop re-rendering the The modal we will also stop re-rendering the OrderSummary
    * By shouldComponentUpdate here we stop re-rendering the Modal and the OrderSummary and improving performance
    */

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show; // TRUE OR FALSE
    }

    render(){
        return(

            <Auxiliary>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0' 
                    }}
                >
                    {this.props.children}
                </div>
            </Auxiliary>

        );
    };
}
    

export default Modal;