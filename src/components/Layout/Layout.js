import React, {Component} from 'react';

import Auxiliary from '../../HOC/Auxiliary';
import Classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state ={
        showSidedrawer : false
    };

    sideDrawerClosedHandler = () => this.setState({showSidedrawer: false});
    sideDrawerOpendHandler = () => this.setState({showSidedrawer: true});
    

    render (){

        return (
            // using Auxiliary HOC and get the props.childern from it
            <Auxiliary>
            <Toolbar clicked={this.sideDrawerOpendHandler} />
            <SideDrawer 
                closed={this.sideDrawerClosedHandler}
                open={this.state.showSidedrawer}
            />
            <main className={Classes.Content}>
                {this.props.children}
            </main>
            </Auxiliary>
        )

    }

}

export default Layout;