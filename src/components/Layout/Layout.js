import React from 'react';

import Auxiliary from '../../HOC/Auxiliary';
import Classes from './Layout.css';

const layout = (props) => (

            // using Auxiliary HOC and get the props.childern from it
            <Auxiliary>
                <div> Toolbar, SideDrawer, Backdrop</div>
                <main className={Classes.Content}>
                    {props.children}
                </main>
            </Auxiliary>

);

export default layout;