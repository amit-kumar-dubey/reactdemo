import React from 'react';
import { connect } from 'react-redux';

var RepeatModule = React.createClass({
  getInitialState: function() {
    return { items: [] }
  },
  render: function() {

    var listItems = this.props.items.map(function(item) {
      return (
        <li key={item.name}>
          <a href={item.link}>{item.name}</a>
        </li>
      );
    });
    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
});


 const ItemList = ({ items }) =>
  
  <div id='items-list' className='col-md-6'>
    <h1>Items</h1>
    <ul>

      {items.map(item =>
        <li key={item.label} >
          {item.label}
        </li>
      )}
     {ItemList}
    </ul>
  </div>;


const mapStateToProps = ({ items }) => ({
  items,
});

export default connect(mapStateToProps)(ItemList);




