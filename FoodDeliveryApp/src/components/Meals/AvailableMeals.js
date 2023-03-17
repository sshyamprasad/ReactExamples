import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [errorText, setErrorText] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://fooddelivery-f4d69-default-rtdb.firebaseio.com/meals.json"
        );
        const responseData = await response.json();
        const loadedMeals = [];
        console.log(responseData);
        if (!response.ok) {
          console.log("Error occured");
          throw new Error("Something went wrong");
        }
        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }
        console.log(loadedMeals);
        setMeals(loadedMeals);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setErrorText(error);
        console.log(errorText)
      }
    };
    fetchData();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {errorText ? (
          <ul style={{ textAlign: "center", color: "red" }}>{errorText.toString()}</ul>
        ) : (
          ""
        )}
        {isLoading ? (
          <ul style={{ textAlign: "center", color: "black" }}>Loading...</ul>
        ) : (
          <ul>{mealsList}</ul>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
