// ### **Challenge 1: Basic User Profile Card**

import { cardStyle } from "./Utils";

//   * **Objective:** Display a user's basic information.
//   * **Props:**
//       * `name` (string)
//       * `email` (string)
//       * `avatarUrl` (string)
//   * **Example Data:**
//     ```javascript
//     const userData = {
//       name: "Alice Wonderland",
//       email: "alice@example.com",
//       avatarUrl: "https://placehold.co/100x100/A020F0/ffffff?text=AW"
//     };
//     ```
//   * **Hints:** Use `<img>`, `<h2>`, and `<p>` tags. Remember the `alt` attribute for images.
//   * **Expected Output (Conceptual):** An image, followed by the user's name and email.

export default function UserProfileCard(props) {
  const { userData } = props;
  const { name, email, avatarUrl } = userData;
  return (
    <div style={cardStyle}>
      <img src={avatarUrl} alt="image"></img>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
}
