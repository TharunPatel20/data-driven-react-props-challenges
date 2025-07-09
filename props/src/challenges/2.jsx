// ### **Challenge 2: Product Listing Item**

import { cardStyle } from "./Utils";

//   * **Objective:** Display a single product's details.
//   * **Props:**
//       * `product` (object with `id`, `name`, `price`, `inStock` properties)
//   * **Example Data:**
//     ```javascript
//     const productData = {
//       id: 1,
//       name: "Wireless Mouse",
//       price: 25.99,
//       inStock: true
//     };
//     ```
//   * **Hints:** Use `<h3>` for name, `<p>` for price. Conditionally display a "In Stock" or "Out of Stock" message using the `inStock` boolean prop and a ternary operator or logical `&&`. Format the price (e.g., "$25.99").
//   * **Expected Output (Conceptual):** Product name, price, and its stock status.

export default function ProductDetails({ productData }) {
  const { name, price, inStock } = productData;
  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <p>{inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}
