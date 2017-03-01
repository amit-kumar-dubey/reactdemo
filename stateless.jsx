import React from 'react';
import { render } from "react-dom";

class Main extends React.Component {
   render() {
      return (
         <div>
         <h1>Stateless Component</h1>
            <Header/>
            <Left/>
            <Content/>
            <Right/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class Left extends React.Component {
   render() {
      return (
         <div>
            <h2>Left Content</h2>
            <p>The Left content text!!!</p>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The main content text!!!:</p>
         </div>
      );
   }
}
class Right extends React.Component {
   render() {
      return (
         <div>
            <h2>Right Content</h2>
            <p>The Right content text!!!:</p>
         </div>
      );
   }
}

class Footer extends React.Component {
   render() {
      return (
         <div>
            <h2>Footer Content</h2>
            <p>The Footer content text!!!:</p>
         </div>
      );
   }
}

render(<Main />, document.getElementById('root-app-body'));