
// ### **Challenge 3: Dynamic Button**

//   * **Objective:** Create a reusable button component with dynamic text and an optional disabled state.
//   * **Props:**
//       * `label` (string)
//       * `isDisabled` (boolean, optional, default `false`)
//       * `onClick` (function, optional)
//   * **Example Usage in Parent:**
//     ```jsx
//     <DynamicButton label="Submit Form" onClick={() => alert('Form Submitted!')} />
//     <DynamicButton label="Disabled Button" isDisabled={true} />
//     ```
//   * **Hints:** Use the `disabled` attribute on the `<button>` tag. Pass the `onClick` prop directly to the button's `onClick` event handler.
//   * **Expected Output (Conceptual):** A button that can be enabled/disabled and has dynamic text.


export default function DynamicButton({ label, isDisabled = false, onClick }) {
  return (
    <button disabled={isDisabled} onClick={onClick}>
      {label}
    </button>
  );
}
