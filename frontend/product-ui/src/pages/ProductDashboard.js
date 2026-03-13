import { useState } from "react";
import  {getProducts}  from "../services/productService";
import ProductTable from "../components/ProductTable";
import DeleteProductForm from "../components/DeleteProductForm";
import CreateProductForm from "../components/CreateProductForm";
import UpdateProductForm from "../components/UpdateProductForm";

function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [deleteFormVisibility, setDeleteFormVisibility] = useState(false);
  const [createFormVisibility, setcreateFormVisibility] = useState(false);
  const [updateFormVisibility, setupdateFormVisibility] = useState(false);



  const loadProducts = async () => {
    if(products.length > 0){
        setProducts([]);
    }
    const data = await getProducts();
    setProducts(data);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      <div class="box2">
        <button onClick={loadProducts}>Load Products</button>
        {products.length > 0 && <ProductTable products={products} />}
      </div>

      <div>
        <button onClick={() => setDeleteFormVisibility(!deleteFormVisibility)}>Delete product</button>
        {deleteFormVisibility && <DeleteProductForm />}
      </div>

      <div>
        <button onClick={() => setcreateFormVisibility(!createFormVisibility)}>Create product</button>
        {createFormVisibility && <CreateProductForm />}
      </div>
      <div>
        <button onClick={() => setupdateFormVisibility(!updateFormVisibility)}>Update product</button>
        {updateFormVisibility && <UpdateProductForm />}
      </div>
    </div>
  );
}

export default ProductDashboard;
