import React from 'react';
import { connect } from 'react-redux';


const items =  {
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

const ItemList = ({ items }) =>
  
  <div id='items-list' className='col-md-6'>
    <h1>Items</h1>
    <ul>
      {items.map(c =>
        <li
          key={c.label}
        >
          {c.label}
        </li>
      )}
    </ul>
  </div>;

const mapStateToProps = ({ items }) => ({
  items,
});

export default connect(mapStateToProps)(ItemList);




// function processData(items){
//   if (!items) { return; }

//   for (var i = 0; i< items.length; i++){
//     var val = items[i];
//    if (val.children.items) {
//        processData(val.children.items);
//     }
//   }
// }



//   let it = processData(items);
//   let res = it.next();

//   while(!res.done){
//     console.log(res.value);
//      res = it.next();
//    }