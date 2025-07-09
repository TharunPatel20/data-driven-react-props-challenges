// ### **Challenge 5: Alert Message Box**

//   * **Objective:** Display an alert message with different styles based on its type.
//   * **Props:**
//       * `message` (string)
//       * `type` (string: "success", "warning", "error")
//   * **Example Usage in Parent:**
//     ```jsx
//     <AlertBox message="Operation successful!" type="success" />
//     <AlertBox message="Something went wrong." type="error" />
//     ```
//   * **Hints:** Use inline styles (`style={{...}}`) or `className` with conditional logic. For example, if `type` is "success", apply a green background; if "error", apply red.
//   * **Expected Output (Conceptual):** A box with a message, colored based on its type.
export default function AlertBox(props) {
  const { message, type } = props;

  return (
    <>
      {type === "success" && (
        <div
          style={{
            margin: "10px",
            backgroundColor: "lightgreen",
            padding: "2px",
            width: "100%",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h4>{message}</h4>
        </div>
      )}
      {type === "error" && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "10px",
            padding: "2px",
            borderRadius: "5px",

            backgroundColor: "red",
          }}
        >
          <h4>{message}</h4>
        </div>
      )}
    </>
  );
}
