import React from 'react';

import { render } from "react-dom";

import App from "./statefull.jsx";


class Main extends React.Component {
  render() {
    return (
      <div className="top-component" data-myattribute="react-demo">
        
        <div>
                <App/>
        </div>
         
      </div>
     );
  }
}


render(<Main />, document.getElementById('root-app'));






