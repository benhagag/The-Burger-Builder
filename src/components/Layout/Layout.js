import React, {Component} from 'react';

import Auxiliary from '../../HOC/Auxiliary';
import Classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state ={
        showSidedrawer : true
    };
    sideDrawerClosedHandler = () => this.setState({showSidedrawer: false});
    

    render (){

        return (
            // using Auxiliary HOC and get the props.childern from it
            <Auxiliary>
            <Toolbar />
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