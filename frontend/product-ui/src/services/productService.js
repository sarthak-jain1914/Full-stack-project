// methods to interact with the API

const API_URL = "http://localhost:5000/api";

export const getProducts = async () => {

    const response = await fetch(`${API_URL}/products`);
    return response.json();
  };


export const createProduct = async (description, price) => {
    return await fetch(`${API_URL}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
        price,
      }),
    });
  };
  export const updateProduct = async (id, description, price) => {
    await fetch(`${API_URL}/product`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        updateId : id,
        updateDescription: description,
        updatePrice:price
      }),
    });
  };

export const deleteProduct = async (id,description, price) => {
    
        await fetch(`${API_URL}/product/${id}`, {
          method: "DELETE",
        })
      };