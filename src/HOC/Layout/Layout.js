import React, {Component} from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state ={
        showSidedrawer : false
    };

    sideDrawerClosedHandler = () => this.setState({showSidedrawer: false});

    sideDrawerToggledHandler = () => {
        this.setState((prevState) => {
            return {showSidedrawer: !prevState.showSidedrawer}
        });
    }
    

    render (){

        return (
            // using Auxiliary HOC and get the props.childern from it
            <Auxiliary>
            <Toolbar drawToggleClicked={this.sideDrawerToggledHandler} />
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