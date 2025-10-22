import { useState } from "react";
import "./SearchProduct.css";

function SearchProduct({ receivedCategories, filterCategory, searchProduct }) {
  const [value, setValue] = useState("");

  function changeCategory(category) {
    console.log("Selected category:", category);
    filterCategory(category);
  }

  function handleChange(e){
    setValue(e.target.value);
    searchProduct(e.target.value);
  }

  function clearFilter(){
    console.log("Filter cleared")
    setValue("");
    searchProduct("");
  }

  return (
    <div>
      <input
        type="text"
        className="search"
        value={value}
        onChange={handleChange}
      />
      <div>
        {receivedCategories.length > 0
          ? receivedCategories.map((category) => (
              <button key={category} onClick={() => category !== "clear" ? changeCategory(category) : clearFilter()}>
                {category}
              </button>
            ))
          : console.log("Loading categories...")}
      </div>
    </div>
  );
}

export default SearchProduct;
