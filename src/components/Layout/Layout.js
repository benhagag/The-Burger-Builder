import React from 'react';

import Auxiliary from '../../HOC/Auxiliary';
import Classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => (

            // using Auxiliary HOC and get the props.childern from it
            <Auxiliary>
               <Toolbar />
               <SideDrawer />
                <main className={Classes.Content}>
                    {props.children}
                </main>
            </Auxiliary>

);

export default layout;