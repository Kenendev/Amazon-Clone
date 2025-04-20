import { Rating } from '@mui/material';
import React from 'react'
import CurrencyFormats from '../CurrencyFormats/CurrencyFormats';
import classes from './product.module.css'

const ProductCard = ({ product }) => {
  const {image, title, id, rating, price} = product;
  return (
    <div className= {classes.card_container}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />
          {/* rating counter */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormats amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
};
export default ProductCard;

