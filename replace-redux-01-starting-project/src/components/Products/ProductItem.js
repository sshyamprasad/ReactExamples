import React, { useContext } from 'react';
// import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import './ProductItem.css';
import { ProductsContext } from '../../context/ProductContext';
// import { toggleFav } from '../../store/actions/products';

const ProductItem = props => {
  const ProductContext = useContext(ProductsContext);
  // const dispatch = useDispatch();

  const toggleFavHandler = () => {
    // dispatch(toggleFav(props.id));
    ProductContext.toggle(props.id)

  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
