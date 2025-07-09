## Data Drive React Applications using props

Focusing on data-driven components using props is essential for building scalable React applications. Here are 10 coding challenges, ranging from fundamental to slightly more complex, all centered around passing data via props and rendering it.

For each challenge, create a new functional component and then use it in your `App.js` (or a similar parent component) by passing the specified props.

-----

### **Challenge 1: Basic User Profile Card**

  * **Objective:** Display a user's basic information.
  * **Props:**
      * `name` (string)
      * `email` (string)
      * `avatarUrl` (string)
  * **Example Data:**
    ```javascript
    const userData = {
      name: "Alice Wonderland",
      email: "alice@example.com",
      avatarUrl: "https://placehold.co/100x100/A020F0/ffffff?text=AW"
    };
    ```
  * **Hints:** Use `<img>`, `<h2>`, and `<p>` tags. Remember the `alt` attribute for images.
  * **Expected Output (Conceptual):** An image, followed by the user's name and email.

-----

### **Challenge 2: Product Listing Item**

  * **Objective:** Display a single product's details.
  * **Props:**
      * `product` (object with `id`, `name`, `price`, `inStock` properties)
  * **Example Data:**
    ```javascript
    const productData = {
      id: 1,
      name: "Wireless Mouse",
      price: 25.99,
      inStock: true
    };
    ```
  * **Hints:** Use `<h3>` for name, `<p>` for price. Conditionally display a "In Stock" or "Out of Stock" message using the `inStock` boolean prop and a ternary operator or logical `&&`. Format the price (e.g., "$25.99").
  * **Expected Output (Conceptual):** Product name, price, and its stock status.

-----

### **Challenge 3: Dynamic Button**

  * **Objective:** Create a reusable button component with dynamic text and an optional disabled state.
  * **Props:**
      * `label` (string)
      * `isDisabled` (boolean, optional, default `false`)
      * `onClick` (function, optional)
  * **Example Usage in Parent:**
    ```jsx
    <DynamicButton label="Submit Form" onClick={() => alert('Form Submitted!')} />
    <DynamicButton label="Disabled Button" isDisabled={true} />
    ```
  * **Hints:** Use the `disabled` attribute on the `<button>` tag. Pass the `onClick` prop directly to the button's `onClick` event handler.
  * **Expected Output (Conceptual):** A button that can be enabled/disabled and has dynamic text.

-----

### **Challenge 4: List of Features**

  * **Objective:** Render an unordered list of features.
  * **Props:**
      * `features` (array of strings)
  * **Example Data:**
    ```javascript
    const appFeatures = [
      "Real-time updates",
      "User authentication",
      "Data export",
      "Customizable themes"
    ];
    ```
  * **Hints:** Use `<ul>` and `<li>` tags. Remember to use `map()` to iterate over the `features` array and provide a unique `key` for each `<li>`.
  * **Expected Output (Conceptual):** A bulleted list of features.

-----

### **Challenge 5: Alert Message Box**

  * **Objective:** Display an alert message with different styles based on its type.
  * **Props:**
      * `message` (string)
      * `type` (string: "success", "warning", "error")
  * **Example Usage in Parent:**
    ```jsx
    <AlertBox message="Operation successful!" type="success" />
    <AlertBox message="Something went wrong." type="error" />
    ```
  * **Hints:** Use inline styles (`style={{...}}`) or `className` with conditional logic. For example, if `type` is "success", apply a green background; if "error", apply red.
  * **Expected Output (Conceptual):** A box with a message, colored based on its type.

-----

### **Challenge 6: Simple Progress Bar**

  * **Objective:** Display a progress bar based on a percentage value.
  * **Props:**
      * `percentage` (number, 0-100)
  * **Example Usage in Parent:**
    ```jsx
    <ProgressBar percentage={75} />
    <ProgressBar percentage={20} />
    ```
  * **Hints:** Create an outer `div` for the bar's track and an inner `div` for the filled portion. Use inline styles to set the `width` of the inner `div` dynamically (e.g., ` width:  `${percentage}%\`\`). Display the `percentage` value as text inside or next to the bar.
  * **Expected Output (Conceptual):** A horizontal bar, partially filled based on the percentage, with the percentage text displayed.

-----

### **Challenge 7: User List with Active Status**

  * **Objective:** Display a list of users, showing their online status.
  * **Props:**
      * `users` (array of objects, each with `id`, `name`, `isOnline` boolean)
  * **Example Data:**
    ```javascript
    const usersData = [
      { id: 1, name: "Charlie", isOnline: true },
      { id: 2, name: "Diana", isOnline: false },
      { id: 3, name: "Eve", isOnline: true }
    ];
    ```
  * **Hints:** Use `map()` to render each user. For each user, display their name. Conditionally display a small circle (e.g., using a `span` with `backgroundColor` and `borderRadius: '50%'`) or text ("Online"/"Offline") next to their name based on `isOnline`.
  * **Expected Output (Conceptual):** A list of names, each with a visual indicator (e.g., green/red dot) for online/offline status.

-----

### **Challenge 8: Recipe Card**

  * **Objective:** Display a recipe with its ingredients and instructions.
  * **Props:**
      * `recipe` (object with `name` string, `ingredients` array of strings, `instructions` string)
  * **Example Data:**
    ```javascript
    const pizzaRecipe = {
      name: "Homemade Pizza",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Mozzarella cheese",
        "Pepperoni",
        "Oregano"
      ],
      instructions: "Roll out dough. Spread sauce. Add cheese and toppings. Bake at 450°F for 12-15 minutes."
    };
    ```
  * **Hints:** Use `<h2>` for the recipe name. Use an `<ul>` and `map()` for ingredients. Use `<p>` for instructions.
  * **Expected Output (Conceptual):** Recipe name, a list of ingredients, and a paragraph of instructions.

-----

### **Challenge 9: Dynamic Content Section (Using `children` prop)**

  * **Objective:** Create a generic section component that can wrap any content.
  * **Props:**
      * `title` (string)
      * `children` (special prop for nested JSX)
  * **Example Usage in Parent:**
    ```jsx
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
    ```
  * **Hints:** The `children` prop will automatically contain whatever JSX is placed between the component's opening and closing tags. Simply render `{children}` inside your component's JSX.
  * **Expected Output (Conceptual):** A section with a title, containing whatever diverse content was passed into it.

-----

### **Challenge 10: Filterable Item List (Advanced Logic with Props)**

  * **Objective:** Display a list of items, with an option to filter them based on a property.
  * **Props:**
      * `items` (array of objects, each with `id`, `name`, `category` string)
      * `filterCategory` (string, optional. If provided, only show items matching this category. If empty or `null`, show all items.)
  * **Example Data:**
    ```javascript
    const inventoryItems = [
      { id: 1, name: "Laptop", category: "Electronics" },
      { id: 2, name: "Desk Chair", category: "Furniture" },
      { id: 3, name: "Monitor", category: "Electronics" },
      { id: 4, name: "Bookshelf", category: "Furniture" }
    ];
    ```
  * **Example Usage in Parent:**
    ```jsx
    <FilterableList items={inventoryItems} /> {/* Shows all */}
    <FilterableList items={inventoryItems} filterCategory="Electronics" /> {/* Shows only electronics */}
    ```
  * **Hints:** Before mapping, use `filter()` on the `items` array based on the `filterCategory` prop. If `filterCategory` is empty or not provided, return the original `items` array from the filter.
  * **Expected Output (Conceptual):** A list of items, which can be dynamically filtered by a category specified via props.

-----

**General Advice for Solving:**

  * **Start Simple:** Get the basic rendering working first, then add the conditional logic or mapping.
  * **Inspect Props:** Use `console.log(props)` inside your component to see exactly what data it's receiving.
  * **Break Down:** For more complex challenges, break them into smaller, manageable parts.
  * **Refer to Previous Lessons:** Use the concepts of embedding expressions, conditional rendering operators, and `map()` that we've covered.

Good luck, and happy coding\!
