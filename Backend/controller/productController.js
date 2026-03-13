const pool = require("../db");
// -----------------------------function for creating a product------------------------------------
exports.createProduct = async (req, res) => {
  try {
    const {description, price } = req.body;
    const result = await pool.query(
      "INSERT INTO product (description, price) VALUES ($1, $2) RETURNING *",
      [description, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// -----------------------------function for fetching all products------------------------------------
exports.getProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM product ORDER BY id ASC");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// -----------------------------function for deleting a product------------------------------------
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM product WHERE id = $1", [id]);
    // res.status(204).send();
    res.status(204).json({message : "product deleted successfully"});
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// -----------------------------function for updating a product------------------------------------
exports.updateProduct = async (req, res) => {
  const {updateDescription, updatePrice, updateId } = req.body;
  // console.log(req.body);
  try{
    const result = await pool.query(
      "UPDATE product SET description = $1, price = $2 WHERE id = $3 RETURNING *",
      [updateDescription, updatePrice, updateId]
    );
    res.json(result[0]);
    }catch(error){
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};