import { useState } from "react";
import { createProduct } from "../services/productService";


function CreateProductForm() {

  const [description, setDesption] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(description, price);
  };
  return(

    <div> 
          <form onSubmit={handleSubmit}>
            <br></br>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDesption(e.target.value)}
            />
            <br></br>
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
            />
            <br></br>
            <button type="createProduct">Save Product</button>
          </form>
        </div>
  );
}

export default CreateProductForm;