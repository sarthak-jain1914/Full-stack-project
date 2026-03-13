import { useState } from "react";
import { deleteProduct } from "../services/productService";

function DeleteProductForm() {
    const [deleteId, setDeleteId] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await deleteProduct(deleteId);
    };
    return(
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="ID to Delete"
            value={deleteId}
            onChange={(e) => setDeleteId(parseInt(e.target.value))}
          />
          <button type="submit">Delete</button>
        </form>
    );
}

export default DeleteProductForm;