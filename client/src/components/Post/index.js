import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { ADD_PRODUCT} from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
// import Auth from "../../utils/auth";

export default function Post() {
    const { data } = useQuery(QUERY_USER);
    let user;
  
    if (data) {
      user = data.user;
    }
    
    const [formState, setFormState] = useState({
      name: '',
      description: '',
      image: '',
      price: '',
      category: ''
    });
    const [addProduct, { error }] = useMutation(ADD_PRODUCT);
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      // const token = Auth.loggedIn() ? Auth.getToken() : null;

      // if (!token) {
      //   return false;
      // }
      
      try {
        const { data } = addProduct({
          variables: { 
            name: formState.email,
            description: formState.description,
            image: formState.image,
            price: formState.price ,
            category: formState.category },
        });
  
       
      } catch (err) {
        console.error(err);
      }
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };


  return (
    <div>
      <form className='Post-Name' onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="name">Product Name:</label>
          <input
            placeholder="Product Name"
            name="name"
            type="name"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="Description">Description:</label>
          <input
            placeholder="Description"
            name="description"
            type="description"
            id="description"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="Image">Image:</label>
          <input
            placeholder="Image-Upload"
            name="image"
            type="file"
            id="image"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="Price">Price:</label>
          <input
            placeholder="$$$"
            name="price"
            type="price"
            id="price"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="Category">category:</label>
          <input
            placeholder="Category"
            name="category"
            type="category"
            id="category"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>




    </div>
  )
}
