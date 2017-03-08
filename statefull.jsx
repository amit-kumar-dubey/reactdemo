import React from 'react';
//import data from './tree.json';
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
                                label: 'Leaf Node Label 1-2',
                                items:[
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
                                label: 'Leaf Node Label 1-2',
                                items:[
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
                            
                        ]
                            }

                        ]
                     }
 // this.state = data;
   }
   
   render() {
    
      return (
         <ul>
            <li>{this.state.label}</li>
            
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
   showChildren:false;

   handleClick() {
     this.showChildren = !this.showChildren;
     this.setState({

     })
   }
render() {
   
var item = this.props.items;
var count = false;
if(item.length>0){
  count = true;
}
else{
  count = false;
}
      return (
         <ul>
         <li onClick={this.handleClick.bind(this)}><i className={count?'fa fa-minus':'fa fa-plus'} aria-hidden="true" ></i>Child , {item.label}</li>
        
          <br/>
            { Array.isArray(item.items) && !this.showChildren ? 
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


