import React from 'react';

import { render } from "react-dom";

import App from "./statefull.jsx";


class TopComponent extends React.Component {
  render() {
    return (
      <div className="top-component" data-myattribute="react-demo">
        <h1>This is Top Most Component {this.props.name}</h1>
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>

        <h1>Statefull Component</h1>
        <div>
                <App/>
        </div>
         
      </div>
      
           
       
    );
  }
}


render(<TopComponent />, document.getElementById('root-app'));






