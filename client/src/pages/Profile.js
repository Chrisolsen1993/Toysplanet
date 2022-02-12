import React, { useState } from 'react'
import { QUERY_CATEGORIES } from '../utils/queries'
import { Link } from 'react-router-dom'
// import { QUERY_PRODUCT } from '../utils/queries'
import Post from '../components/Post'
// import Edit from '../components/Edit'
import Auth from '../utils/auth'
import { ADD_PRODUCT } from '../utils/mutations'
import { useMutation } from '@apollo/client'
import { useQuery } from '@apollo/client'
import { resultKeyNameFromField } from '@apollo/client/utilities'


function Profile(props) {
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    image: '',
    quantity: '',
    price: '',
    category: '',
  })
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES)

  const categories = categoryData
  console.log(categoryData)
  // const { category } = state
  // const [state, dispatch] = useStoreContext()

  //   const { categories } = state

  //   const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES)

  //   // useEffect(() => {
  //   if (categoryData) {
  //     dispatch({
  //       type: UPDATE_CATEGORIES,
  //       categories: categoryData.categories,
  //     })
  //     categoryData.category.forEach((category) => {
  //       idbPromise("categories", "put", category);
  //     });
  //   } else if (!loading) {
  //     idbPromise("category", "get").then((category) => {
  //       dispatch({
  //         type: UPDATE_CATEGORIES,
  // //         category: category,
  // //       })
  // //     })
  //   }
  // }, [categoryData, loading, dispatch])
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
          value={formState.name}
          name="product"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={formState.description}
          name="description"
          onChange={handleInputChange}
          type="text"
          placeholder="description"
        />
        <input
          value={formState.image}
          name="image"
          onChange={handleInputChange}
          type="file"
          placeholder="image"
        />
        <input
          value={formState.quantity}
          name=" quantity"
          onChange={handleInputChange}
          type="text"
          placeholder=" quantity"
        />
        <input
          value={formState.price}
          name="price"
          onChange={handleInputChange}
          type="text"
          placeholder="price"
        />
        <input
          value={formState.category}
          name="category"
          onChange={handleInputChange}
          type="text"
          placeholder="category"
        />
        <select value={formState.category} onChange={handleInputChange}>

        

          
          {categories.map((item) => (
            <option value={item.name}>{item.name}</option>
          ))}
        </select>

        {/* <button
              onClick={() =>
                // dispatch({
                //   name: ADD_PRODUCT,
                //   payload: {
                //     name: newName,
                //      description: newDescription,
                //    image: newImage,
                //     quantity: newQuantity,
                //     price : newPrice,
                //    category: newCategory,
                //   },
                // })
              }
            >
            
            </button> */}

        <button type="button" onClick={handleFormSubmit}>
          Add Post
        </button>
      </form>
    </div>
  )
}

export default Profile
