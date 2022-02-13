import React, {  useState } from "react";
import { QUERY_CATEGORIES, QUERY_USER } from "../utils/queries";
import { ADD_PRODUCT } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";


function Profile(props) {
  const [formState, setFormState] = useState({});
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const [addProduct] = useMutation(ADD_PRODUCT);
  const   data2  = useQuery(QUERY_USER);


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addProduct({
        variables: {
          name: formState.name,
          description: formState.description,
          image: formState.image,
          quantity: formState.quantity,
          price: formState.price,
          category: formState.category,
          user: data2.data.user._id
        },
      });
    } catch (error) {
      console.error(error);
    }
    setFormState({})
  };
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormState((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <p>Hello</p>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={formState.name || ""}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={formState.description || ""}
          name="description"
          onChange={handleInputChange}
          type="text"
          placeholder="description"
        />
        <input
          value={formState.image || ""}
          name="image"
          onChange={handleInputChange}
          type="file"
          placeholder="image"
        />
        <input
          value={formState.price || ""}
          name="price"
          onChange={handleInputChange}
          type="String"
          placeholder="price"
        />
        <select
          value={formState.category || ""}
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
        <input type="submit" />
      </form>
    </div>
  );
}

export default Profile;
