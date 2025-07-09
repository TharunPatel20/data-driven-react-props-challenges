
// ### **Challenge 9: Dynamic Content Section (Using `children` prop)**

//   * **Objective:** Create a generic section component that can wrap any content.
//   * **Props:**
//       * `title` (string)
//       * `children` (special prop for nested JSX)
//   * **Example Usage in Parent:**
//     ```jsx
//     <ContentSection title="About Us">
//       <p>We are a company dedicated to...</p>
//       <img src="https://placehold.co/150x100" alt="About Us" />
//     </ContentSection>

//     <ContentSection title="Contact Info">
//       <ul>
//         <li>Email: info@example.com</li>
//         <li>Phone: 123-456-7890</li>
//       </ul>
//     </ContentSection>
//     ```
//   * **Hints:** The `children` prop will automatically contain whatever JSX is placed between the component's opening and closing tags. Simply render `{children}` inside your component's JSX.
//   * **Expected Output (Conceptual):** A section with a title, containing whatever diverse content was passed into it.


import React from 'react';
import { cardStyle } from './Utils';

const ContentSection = ({ title, children }) => {
  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default ContentSection;
