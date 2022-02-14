// import React, { useState } from "react";
// import { QUERY_CATEGORIES } from "../utils/queries";
// import { Link } from "react-router-dom";
// // import { QUERY_PRODUCT } from '../utils/queries'
// import Post from "../components/Post";
// // import Edit from '../components/Edit'
// import Auth from "../utils/auth";
// import { ADD_PRODUCT } from "../utils/mutations";
// import { useMutation } from "@apollo/client";
// import { useQuery } from "@apollo/client";

// function Profile(props) {
//   const [formState, setFormState] = useState({});
//   const { loading, data } = useQuery(QUERY_CATEGORIES);
//   const [addProduct] = useMutation(ADD_PRODUCT);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
  

//        const { data }= await addProduct({
//           variables: {
//             name: formState.name,
//             description: formState.description,
//             image: formState.image,
//             quantity: formState.quantity,
//             price: formState.price,
//             category: formState.category,
//           }
//         })
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const handleInputChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     console.log([name]);
//     console.log(value);
//     setFormState((values) => ({ ...values, [name]: value }));
//   };

//   return (
//     <div>
//       <p>Hello</p>
//       <form className="form" onSubmit={handleFormSubmit}>
//         <input
//           value={formState.name || ""}
//           name="name"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="name"
//         />
//         <input
//           value={formState.description || ""}
//           name="description"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="description"
//         />
//         <input
//           value={formState.image || ""}
//           name="image"
//           onChange={handleInputChange}
//           type="file"
//           placeholder="image"
//         />
//         <input
//           value={formState.price || ""}
//           name="price"
//           onChange={handleInputChange}
//           type="String"
//           placeholder="price"
//         />
//         <select
//           value={formState.category}
//           onChange={handleInputChange}
//           name="category"
//         >
//           {loading ? (
//             <option> still loading</option>
//           ) : (
//             data.categories.map((item) => (
//               <option key={item._id} value={item._id}>
//                 {item.name}
//               </option>
//             ))
//           )}
//         </select>
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default Profile;
import CreateProduct from '../components/CreateProduct';
import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../utils/queries";

function Profile(){
  const [buttonPopup, setButtonPopup]= useState(false)
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

return(
     <>
        <div>
          < h3>DASHBOARD</h3>
       </div>

  <div className='container'>
      {user ? (
        <h3>
          Welcome {user.firstName}
        </h3>
      ) : null}
    </div>

     <button  onClick= {()=> setButtonPopup(true)}>+ New Post </button>
            <CreateProduct trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h2>Yesggggg</h2>
            </CreateProduct>
     
     
     
     
     
     </>
)

}
export default Profile;