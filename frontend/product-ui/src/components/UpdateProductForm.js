// Component for updating a product

import { useState } from "react";
import { updateProduct } from "../services/productService";

function UpdateProductForm() {
  const [updateId, setUpdateId] = useState(0);
  const [updateDescription, setUpdateDescription] = useState("");
  const [updatePrice, setUpdatePrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(updateId, updateDescription, updatePrice);
  };

  return (
    <div className="form-panel">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Product ID to update"
          value={updateId}
          onChange={(e) => setUpdateId(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="New Description"
          value={updateDescription}
          onChange={(e) => setUpdateDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="New Price"
          value={updatePrice}
          onChange={(e) => setUpdatePrice(Number(e.target.value))}
        />
        <button type="submit" className="btn btn-yellow">
          ✏️ Update Product
        </button>
      </form>
    </div>
  );
}

export default UpdateProductForm;
