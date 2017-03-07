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

        // const ItemList = ({ items }) =>
  
//   <div id='items-list' className='col-md-6'>
//     <h1>Items</h1>
//     <ul>

//       {items.map(item =>
//         <li key={item.label} >
//           {item.label}
//         </li>
//       )}
//      ItemList();
//     </ul>
//   </div>;
