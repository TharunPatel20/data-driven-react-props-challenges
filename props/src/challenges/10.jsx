// ### **Challenge 10: Filterable Item List (Advanced Logic with Props)**

//   * **Objective:** Display a list of items, with an option to filter them based on a property.
//   * **Props:**
//       * `items` (array of objects, each with `id`, `name`, `category` string)
//       * `filterCategory` (string, optional. If provided, only show items matching this category. If empty or `null`, show all items.)
//   * **Example Data:**
//     ```javascript
//     const inventoryItems = [
//       { id: 1, name: "Laptop", category: "Electronics" },
//       { id: 2, name: "Desk Chair", category: "Furniture" },
//       { id: 3, name: "Monitor", category: "Electronics" },
//       { id: 4, name: "Bookshelf", category: "Furniture" }
//     ];
//     ```
//   * **Example Usage in Parent:**
//     ```jsx
//     <FilterableList items={inventoryItems} /> {/* Shows all */}
//     <FilterableList items={inventoryItems} filterCategory="Electronics" /> {/* Shows only electronics */}
//     ```
//   * **Hints:** Before mapping, use `filter()` on the `items` array based on the `filterCategory` prop. If `filterCategory` is empty or not provided, return the original `items` array from the filter.
//   * **Expected Output (Conceptual):** A list of items, which can be dynamically filtered by a category specified via props.

export default function FilterableList(props) {
  const { items, filterCategory } = props;
  const fItems = filterCategory
    ? items.filter((item) => item.category !== filterCategory)
    : items;
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {fItems.map((item) => (
          <li key={item.id}>
            {item.name} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
}
