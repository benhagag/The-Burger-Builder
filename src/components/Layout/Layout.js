import React from 'react';

import Auxiliary from '../../HOC/Auxiliary';;

const layout = (props) => (

            // using Auxiliary HOC and get the props.childern from it
            <Auxiliary>
                <div> Toolbar, SideDrawer, Backdrop</div>
                <main>
                    {props.children}
                </main>
            </Auxiliary>

);

export default layout;