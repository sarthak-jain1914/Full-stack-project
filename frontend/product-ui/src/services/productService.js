// methods to interact with the backend API
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const createProduct = async (description, price) => {
  const response = await axios.post(`${API_URL}/product`, {
    description,
    price,
  });
  return response.data;
};

export const updateProduct = async (id, description, price) => {
  const response = await axios.put(`${API_URL}/product`, {
    updateId: id,
    updateDescription: description,
    updatePrice: price,
  });
  return response.data;
};

export const deleteProduct = async (id) => {
  await axios.delete(`${API_URL}/product/${id}`);
};