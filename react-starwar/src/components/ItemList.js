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