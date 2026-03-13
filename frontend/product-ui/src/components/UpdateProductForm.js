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
      }
      return(
        <form onSubmit={handleSubmit}>
          <br></br>
          <input
            type="number"
            placeholder="Product id for update"
            value={updateId}
            onChange={(e) => setUpdateId(Number(e.target.value))}
          />
          <input
            type="text"
            placeholder="Description"
            value={updateDescription}
            onChange={(e) => setUpdateDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price to be update"
            value={updatePrice}
            onChange={(e) => setUpdatePrice(Number(e.target.value))}
          />
          <br></br>
          <button type="submit">Update</button>
        </form>
      );
}

export default UpdateProductForm;