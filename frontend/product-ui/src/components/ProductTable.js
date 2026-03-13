
function ProductTable({products}){
    return(
        <table border="2" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.description}</td>
                <td>₹{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
    )
}

export default ProductTable;