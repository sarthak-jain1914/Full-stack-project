import { useState } from "react";
import { getProducts } from "../services/productService";
import ProductTable from "../components/ProductTable";
import DeleteProductForm from "../components/DeleteProductForm";
import CreateProductForm from "../components/CreateProductForm";
import UpdateProductForm from "../components/UpdateProductForm";
import "./ProductDashboard.css";

function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [deleteFormVisible, setDeleteFormVisible] = useState(false);
  const [createFormVisible, setCreateFormVisible] = useState(false);
  const [updateFormVisible, setUpdateFormVisible] = useState(false);

  const loadProducts = async () => {
    setProducts([]);
    const data = await getProducts();
    setProducts(data);
  };

  return (
    <div className="dashboard-page">
      {/* ── Header ── */}
      <header className="dashboard-header">
        <div className="header-icon">📦</div>
        <div>
          <h1 className="dashboard-title">Product Dashboard</h1>
          <p className="dashboard-subtitle">Manage your product inventory</p>
        </div>
      </header>

      {/* ── Action Buttons ── */}
      <div className="action-bar">
        <button className="btn btn-blue" onClick={loadProducts}>
          <span>🔄</span> Load Products
        </button>
        <button
          className="btn btn-green"
          onClick={() => { setCreateFormVisible(!createFormVisible); setUpdateFormVisible(false); setDeleteFormVisible(false); }}
        >
          <span>➕</span> Create Product
        </button>
        <button
          className="btn btn-yellow"
          onClick={() => { setUpdateFormVisible(!updateFormVisible); setCreateFormVisible(false); setDeleteFormVisible(false); }}
        >
          <span>✏️</span> Update Product
        </button>
        <button
          className="btn btn-red"
          onClick={() => { setDeleteFormVisible(!deleteFormVisible); setCreateFormVisible(false); setUpdateFormVisible(false); }}
        >
          <span>🗑️</span> Delete Product
        </button>
      </div>

      {/* ── Expandable Panels ── */}
      {createFormVisible && (
        <section className="panel-section">
          <h2 className="panel-title panel-title--green">Create New Product</h2>
          <CreateProductForm />
        </section>
      )}

      {updateFormVisible && (
        <section className="panel-section">
          <h2 className="panel-title panel-title--yellow">Update Product</h2>
          <UpdateProductForm />
        </section>
      )}

      {deleteFormVisible && (
        <section className="panel-section">
          <h2 className="panel-title panel-title--red">Delete Product</h2>
          <DeleteProductForm />
        </section>
      )}

      {/* ── Product Table ── */}
      {products.length > 0 && (
        <section className="panel-section">
          <h2 className="panel-title panel-title--blue">
            Product List <span className="badge">{products.length}</span>
          </h2>
          <ProductTable products={products} />
        </section>
      )}

      {products.length === 0 && !createFormVisible && !updateFormVisible && !deleteFormVisible && (
        <div className="empty-state">
          <div className="empty-icon">🛒</div>
          <p>Click <strong>Load Products</strong> to view your inventory.</p>
        </div>
      )}
    </div>
  );
}

export default ProductDashboard;

