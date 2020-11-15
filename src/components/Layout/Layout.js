import React from 'react';

import Auxiliary from '../../HOC/Auxiliary';
import Classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (

            // using Auxiliary HOC and get the props.childern from it
            <Auxiliary>
               <Toolbar />
                <main className={Classes.Content}>
                    {props.children}
                </main>
            </Auxiliary>

);

export default layout;