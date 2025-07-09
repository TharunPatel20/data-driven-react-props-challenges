import React from "react";
import UserProfileCard from "./challenges/1";
import {
  userData,
  productData,
  appFeatures,
  cardStyle,
  usersDetails,
  pizzaRecipe,
} from "./challenges/Utils";
import ProductDetails from "./challenges/2";
import ListOfFeatures from "./challenges/4";
import AlertBox from "./challenges/5";
import ProgressBar from "./challenges/6";
import RenderUserDetails from "./challenges/7";
import ContextExample from "./context/example";
import Recipe from "./challenges/8";
import ContentSection from "./challenges/9";

export default function App() {
  return (
    <div>
      <UserProfileCard userData={userData} />
      <ProductDetails productData={productData} />
      <ListOfFeatures appFeatures={appFeatures} />
      <div style={cardStyle}>
        <AlertBox message="Operation successful!" type="success" />
        <AlertBox message="Something went wrong." type="error" />
      </div>
      <div style={cardStyle}>
        <ProgressBar percentage={48} />
        <ProgressBar percentage={54} />
      </div>

      <div style={cardStyle}>
        <RenderUserDetails usersDetails={usersDetails} />
      </div>

      <Recipe pizzaRecipe={pizzaRecipe} />

      <ContentSection title="About Us">
        <p>We are a company dedicated to...</p>
        <img src="https://placehold.co/150x100" alt="About Us" />
      </ContentSection>

      <ContentSection title="Contact Info">
        <ul>
          <li>Email: info@example.com</li>
          <li>Phone: 123-456-7890</li>
        </ul>
      </ContentSection>
    </div>
    // <ContextExample/>
  );
}
