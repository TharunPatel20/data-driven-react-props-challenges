// ### **Challenge 7: User List with Active Status**

//   * **Objective:** Display a list of users, showing their online status.
//   * **Props:**
//       * `users` (array of objects, each with `id`, `name`, `isOnline` boolean)
//   * **Example Data:**
//     ```javascript
//     const usersData = [
//       { id: 1, name: "Charlie", isOnline: true },
//       { id: 2, name: "Diana", isOnline: false },
//       { id: 3, name: "Eve", isOnline: true }
//     ];
//     ```
//   * **Hints:** Use `map()` to render each user. For each user, display their name. Conditionally display a small circle (e.g., using a `span` with `backgroundColor` and `borderRadius: '50%'`) or text ("Online"/"Offline") next to their name based on `isOnline`.
//   * **Expected Output (Conceptual):** A list of names, each with a visual indicator (e.g., green/red dot) for online/offline status.

// -----

export default function RenderUserDetails({ usersDetails }) {
  return (
    <div>
      <h2>User List</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {usersDetails.map((user) => (
          <li key={user.id} style={{ margin: "10px 0" }}>
            {user.isOnline ? " Online" : " Offline"}{" "}
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: user.isOnline ? "green" : "red",
              }}
            ></span>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
