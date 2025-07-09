// ### **Challenge 6: Simple Progress Bar**

//   * **Objective:** Display a progress bar based on a percentage value.
//   * **Props:**
//       * `percentage` (number, 0-100)
//   * **Example Usage in Parent:**
//     ```jsx
//     <ProgressBar percentage={75} />
//     <ProgressBar percentage={20} />
//     ```
//   * **Hints:** Create an outer `div` for the bar's track and an inner `div` for the filled portion. Use inline styles to set the `width` of the inner `div` dynamically (e.g., ` width:  `${percentage}%\`\`). Display the `percentage` value as text inside or next to the bar.
//   * **Expected Output (Conceptual):** A horizontal bar, partially filled based on the percentage, with the percentage text displayed.


export default function ProgressBar({percentage})   {
  const barStyle = {
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    overflow: "hidden",
    margin:"10px 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const fillStyle = {
    width: `${percentage}%`,
    height: "25px",
    backgroundColor: percentage >= 50 ? "green" : "red",
    transition: "width 0.3s ease-in-out",
    
  };

  return (
    <div style={barStyle}>
      <div style={fillStyle}>
        <span style={{color: "white", paddingLeft: "5px"}}>
          {percentage}%
        </span>
      </div>
    </div>
  );

}
