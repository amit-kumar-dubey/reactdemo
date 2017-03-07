import React from 'react';

class App extends React.Component {
   constructor() {
      super();
		
      // this.state = {}

      this.state = {
            label: 'Node Label',
            items: [
                {
                    label: 'Child Node Label',
                    items: [
                        {
                            label: 'Child Node Label',
                            items: [
                                {
                                    label: 'Child Node Label',
                                    items: [

                                    ]
                                },
                                {
                                    label: 'Child Node Label',
                                },
                                {
                                    label: 'Leaf Node Label'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Leaf Node Label'
                }
            ]
        };





   }
	
   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.items.map((item, i) => <TableRow key = {i} data = {item} />)}
               </tbody>
            </table>
         </div>
      );
   }
}







class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Tree Structure</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.label}</td>
            <td>{this.props.data.items}</td>
            
         </tr>
      );
   }
}

export default App;