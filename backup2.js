import React from 'react';
class App extends React.Component {
   constructor() {
      super();
		
                  // this.state = {
                  // items: 
                  // [
                  //    {
                  //       "id":1,
                  //       "name":"Foo",
                  //       "age":"20"
                  //    },
                  	
                  //    {
                  //       "id":2,
                  //       "name":"Bar",
                  //       "age":"30"
                  //    },
                  	
                  //    {
                  //       "id":3,
                  //       "name":"Baz",
                  //       "age":"40"
                  //    }
                  // ]
                  // }


                   

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
                     }

   }
	
   render() {
    //   const  Childitems  = this.state.items
    //   const  listItems = this.state.items.map(function(item) {
    //   return (
    //     <li key={item.label}>
    //       <a href={item.label}>{item.label}</a>
    //     </li>

    //   );
    // });
      return (
         <div>
            <span>Preants , {this.state.label}</span>
            <br/>
            {
               this.state.items.map(function(item,i){
                  return(
                     <Data items={item} key={i}/>
                     )
               })
            }
            
         </div>
      );
   }
}


class Data extends React.Component {
   render() {
      //const { Childitems } = this.props.items
    //   const  listItems = this.props.items.map(function(item) {
    //   return (
    //     <li key={item.label}>
    //       <a href={item.label}>{item.label}</a>
    //     </li>

    //   );
    // });
      return (
         <div>
         <span>Child , {this.props.items.label}</span>
          <br/>
            {
               this.props.items.items.map(function(item,i){
                  return(
                     <Data items={item} key={i}/>
                     )
               })
            }
            
         </div>

       ); 
      }
}


// class UL extends React.Component {
//    render() {
//       const { Childitems } = this.props
//       return (
//          <div>
//          {Childitems.map(items =>
//           <div key={Childitems.label} className="comment">
//             { <UL children={Childitems.items.label}/> }
//           </div>
//           )}
//          </div>

//        ); 
//       }
      
// }

// class Items extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Tree Structure</h1>
//          </div>
//       );
//    }
// }





// var RepeatModule = React.createClass({
//   getInitialState: function() {
//     return { items: [] }
//   },
//   render: function() {

//     var listItems = this.props.items.map(function(item) {
//       return (
//         <li key={item.name}>
//           <a href={item.link}>{item.name}</a>
//         </li>
//       );
//     });

//     return (
//       <div>
//         <ul>
//           {listItems}
//         </ul>
//       </div>
//     );
//   }
// });



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
