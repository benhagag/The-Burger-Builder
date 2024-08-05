import React, { Component } from 'react';

import Layout from './HOC/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';



class App extends Component {
  render() {
    return (
      <div>
        {/* Layout Component is used for wrapping - HOC */}
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
