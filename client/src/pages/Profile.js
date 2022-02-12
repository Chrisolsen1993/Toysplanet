import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { QUERY_PRODUCT } from '../utils/queries'
import Post from '../components/Post'
// import Edit from '../components/Edit'
import Auth from '../utils/auth'
import { ADD_PRODUCT } from '../utils/mutations'
import { useMutation } from '@apollo/client'

function Profile(props) {
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    image: '',
    quantity: '',
    price: '',
    category: '',
  })

  const [addProduct] = useMutation(ADD_PRODUCT)

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const mutationResponse = await addProduct({
      variables: {
        name: formState.name,
        description: formState.description,
        image: formState.image,
        quantity: formState.quantity,
        price: formState.price,
        category: formState.category,
      },
    })
    const token = mutationResponse.data.addProduct.token
    Auth.login(token)
  }
  const handleInputChange = (event) => {
    const { data, value } = event.target
    setFormState({
      ...formState,
      [data]: value,
    })
  }
   


  return (
    <div>
      <p>Hello</p>
      <form className="form">
        <input
          value={window.name}
          name="product"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={window.description}
          name="description"
          onChange={handleInputChange}
          type="text"
          placeholder="description"
        />
        <input
          value={window.image}
          name="image"
          onChange={handleInputChange}
          type="file"
          placeholder="image"
        />
        <input
          value={window.quantity}
          name=" quantity"
          onChange={handleInputChange}
          type="text"
          placeholder=" quantity"
        />
        <input
          value={window.price}
          name="price"
          onChange={handleInputChange}
          type="text"
          placeholder="price"
        />
        <input
          value={window.category}
          name="category"
          onChange={handleInputChange}
          type="text"
          placeholder="category"
        />

        <button type="button" onClick={handleFormSubmit}>
        Add Post
        </button>
      </form>
    </div>
  )
}

export default Profile
