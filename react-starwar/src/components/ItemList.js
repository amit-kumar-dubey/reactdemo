import React from 'react';
import { connect } from 'react-redux';

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




function processData(items){
  if (!data) { return; }

  for (var i = 0; i< items.length; i++){
    var val = items[i];
   if (val.children.items) {
       processData(val.children.items);
    }
  }
}


var it = processData(data);
var res = it.next();

while(!res.done){
  console.log(res.value);
  res = it.next();
}