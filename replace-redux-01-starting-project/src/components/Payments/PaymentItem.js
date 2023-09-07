import React, { useContext } from 'react';
// import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import '../Products/ProductItem.css';

const PaymentItem = props => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.key}</h2>
        <p>{props.name}</p>
      </div>
    </Card>
  );
};

export default PaymentItem;
