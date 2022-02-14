import React, { useState } from "react";
import './style.css';
import { QUERY_CATEGORIES } from "../../utils/queries";
import { Link } from "react-router-dom";
// import { QUERY_PRODUCT } from '../utils/queries'
// import Post from "../components/Post";
// import Edit from '../components/Edit'
// import Auth from "../utils/auth";
import { ADD_PRODUCT } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";

function CreateProduct({trigger, setTrigger}) {
  const [formState, setFormState] = useState({});
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const [addProduct] = useMutation(ADD_PRODUCT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
  

       const { data }= await addProduct({
          variables: {
            name: formState.name,
            description: formState.description,
            image: formState.image,
            quantity: formState.quantity,
            price: formState.price,
            category: formState.category,
          }
        })
    } catch (error) {
      console.error(error);
    }
  };
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log([name]);
    console.log(value);
    setFormState((values) => ({ ...values, [name]: value }));
  };

  return (trigger) ? (
    <div className="popupMessage">
      <p>Hello</p>
      <form  className="popup-inner" onSubmit={handleFormSubmit}>
      <button className="close-btn" onClick={() => setTrigger(false)} >close ⨲</button> 
      <div className="flex-row space-between my-2">
          <label htmlFor="name">Product Name:</label>
        <input
          value={formState.name || ""}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="Description">Description:</label>
        <input
          value={formState.description || ""}
          name="description"
          onChange={handleInputChange}
          type="text"
          placeholder="description"
        />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="Image">Image:</label>
        <input
          value={formState.image || ""}
          name="image"
          onChange={handleInputChange}
          type="file"
          placeholder="image"
        />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="Price">Price:</label>
        <input
          value={formState.price || ""}
          name="price"
          onChange={handleInputChange}
          type="String"
          placeholder="price"
        />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="Category">category:</label>
        <select
          value={formState.category}
          onChange={handleInputChange}
          name="category"
        >
          {loading ? (
            <option> still loading</option>
          ) : (
            data.categories.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))
          )}
        </select>
        </div>
        <div className="flex-row flex-end">
        <button type="submit" className="submit-msg"> Add Product </button>
        </div>
      </form>
    </div>
  ): "";
}

export default CreateProduct;
