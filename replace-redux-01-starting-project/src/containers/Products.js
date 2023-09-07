import React, { Fragment, useContext } from 'react';
import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import { ProductsContext } from '../context/ProductContext';
import { PaymentContext } from '../context/PaymentsProviders';
import PaymentItem from '../components/Payments/PaymentItem';

const Products = props => {
  // const productList = useSelector(state => state.shop.products);
  const productList = useContext(ProductsContext).products;
  const paymentsList = useContext(PaymentContext).payments;
  console.log(paymentsList)
  return (
    <Fragment>
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
    <ul className='products-list'>
      {
        paymentsList.map((item, key) => {
          return <PaymentItem name={item} key={key}></PaymentItem>
        })
      }
    </ul>
    </Fragment>
  );
};

export default Products;
