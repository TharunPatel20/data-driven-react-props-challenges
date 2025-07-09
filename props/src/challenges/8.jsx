import { cardStyle } from "./Utils";

export default function Recipe({ pizzaRecipe }) {
  const { name, ingredients, instructions } = pizzaRecipe;
  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{instructions}</p>
    </div>
  );
}
