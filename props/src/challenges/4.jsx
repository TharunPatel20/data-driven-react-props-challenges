// ### **Challenge 4: List of Features**

import { cardStyle } from "./Utils";

//   * **Objective:** Render an unordered list of features.
//   * **Props:**
//       * `features` (array of strings)
//   * **Example Data:**
//     ```javascript
//     const appFeatures = [
//       "Real-time updates",
//       "User authentication",
//       "Data export",
//       "Customizable themes"
//     ];
//     ```
//   * **Hints:** Use `<ul>` and `<li>` tags. Remember to use `map()` to iterate over the `features` array and provide a unique `key` for each `<li>`.
//   * **Expected Output (Conceptual):** A bulleted list of features.

export default function ListOfFeatures({ appFeatures }) {
  return (
    <div style={cardStyle}>
      <h2>App Features</h2>
      <ul>
        {appFeatures.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
