import React from 'react';
class App extends React.Component {
   constructor() {
      super();
      
                 

                   

                  this.state = {
                        label: 'Node Label 1',
                        items: [
                            {
                                label: 'Child Node Label 1-1',
                                items: [
                                    {
                                        label: 'Child Node Label 1-1-1',
                                        items: [
                                            {
                                                label: 'Child Node Label 1-1-1-1',
                                                items: [

                                                ]
                                            },
                                            {
                                                label: 'Child Node Label 1-1-1-2',
                                            },
                                            {
                                                label: 'Leaf Node Label 1-1-1-3'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                label: 'Leaf Node Label 1-2'
                            }
                        ]
                     }

   }
   
   render() {
    
      return (
         <ul>
            <li>Preants , {this.state.label}</li>
            
            {
               this.state.items.map(function(item,i){
                  return(
                     <Data items={item} key={i}/>
                     )
               })
            }
            
         </ul>
      );
   }
}


class Data extends React.Component {
showChildren:true;
   handleClick() {
     this.showChildren = !this.showChildren;
     this.setState({

     })
   }
render() {
   
var item = this.props.items;
      return (
         <ul>
         <li onClick={this.handleClick.bind(this)}>Child , {item.label}</li>
        
          <br/>
            { Array.isArray(item.items) && this.showChildren ? 
               item.items.map(function(item,i){
                  return(
                     <Data items={item} key={i}/>
                     )
               })
   : <div></div>
            }
            
         </ul>

       ); 
      }
}






export default App;




 

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Tree Structure</h1>
         </div>
      );
   }
}


