import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { QUERY_PRODUCT } from '../utils/queries'
import Post from '../components/Post/index'
import Edit from '../components/Edit/index'
import Auth from '../utils/auth'
import { ADD_PRODUCT } from '../utils/mutations'
import { useMutation } from '@apollo/client'

function Profile(props) {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
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
  const handleChange = (event) => {
    const { data, value } = event.target
    setFormState({
      ...formState,
      [data]: value,
    })
  }
  //  const profile = data?.me || data?.profile || {};

  // // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
  //   return <Redirect to="/me" />;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!profile?.name) {
  //   return (
  //     <h4>
  //       You need to be logged in to see your profile page. Use the navigation
  //       links above to sign up or log in!
  //     </h4>
  //   );
  // }

  // const { data } = useQuery(QUERY_USER);
  // let user;

  // if (data) {
  //   user = data.user;
  // }

  return (
    <div className="container">
      <Link to="/profile">← Go to profile</Link>
      <h2>P</h2>
      <form className="loginSignup" onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <h2>Profile</h2>
          {/* <div className="container">
        {user ? (
          <h3>Hello {user.firstName}, what would you like to do?</h3>
        ) : null} */}
        </div>

        <div className="addProduct">
          <button>Add Post</button>
          <Post />
        </div>
        <div className="updateProduct">
          <button>Edit Post</button>
          <Edit />
        </div>
      </form>
    </div>
  )
}

export default Profile
