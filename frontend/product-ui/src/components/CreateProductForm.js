import { useState } from "react";
import { createProduct } from "../services/productService";

function CreateProductForm() {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(description, price);
  };

  return (
    <div className="form-panel">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
        />
        <button type="submit" className="btn btn-green">
          💾 Save Product
        </button>
      </form>
    </div>
  );
}

export default CreateProductForm;
