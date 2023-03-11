import React, { Fragment } from 'react'
import MealsImage from '../../assets/meals.jpg'
import HeaderCartButton from '../Cart/HeaderCartButton'
import classes from './Header.module.css'
const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton showCartHandler={props.showCartHandler}/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImage} alt="Display of delicious meals items" />
        </div>
    </Fragment>
  )
}

export default Header