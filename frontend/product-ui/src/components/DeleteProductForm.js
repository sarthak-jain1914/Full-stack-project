import { useState } from "react";
import { deleteProduct } from "../services/productService";

function DeleteProductForm() {
  const [deleteId, setDeleteId] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await deleteProduct(deleteId);
  };

  return (
    <div className="form-panel">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Product ID to delete"
          value={deleteId}
          onChange={(e) => setDeleteId(parseInt(e.target.value))}
        />
        <button type="submit" className="btn btn-red">
          🗑️ Confirm Delete
        </button>
      </form>
    </div>
  );
}

export default DeleteProductForm;
