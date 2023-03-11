import React from "react";
import { DUMMY_MEALS } from "./dummy-meals";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const AvailableMeals = () => {
  const default_meals = DUMMY_MEALS.map((meals) => {
    return <MealItem key={meals.id} name={meals.name} description={meals.description} price={meals.price}/>;
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{default_meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
