
import React, { useState } from "react";
import "./style.css";
import { QUERY_CATEGORIES, QUERY_USER } from "../../utils/queries";
import { ADD_PRODUCT } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { Cloudinary } from "@cloudinary/url-gen";
import { image } from "@cloudinary/url-gen/qualifiers/source";

function CreateProduct({ trigger, setTrigger }) {
  const [formState, setFormState] = useState({});
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const [addProduct] = useMutation(ADD_PRODUCT);
  const data2 = useQuery(QUERY_USER);
  const [imageUrl, setImageUrl] = useState({
    imageUrl: "",
  });

  const showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dzjvfg4wt",
        uploadPreset: "ml_default",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("RESULT.INFO.URL", result.info.url);
          setImageUrl(result.info.secure_url);
        }
      }
    );
    widget.open();
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProduct({
        variables: {
          name: formState.name,
          description: formState.description,
          image: imageUrl,
          quantity: formState.quantity,
          price: formState.price,
          category: formState.category,
          user: data2.data.user._id,
        },
      });
      setTrigger(false);
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

  return trigger ? (
    <div className="popupMessage">
      <p>Hello</p>
      <form id="postform" className="popup-inner" onSubmit={handleFormSubmit}>
        <button className="close-btn" onClick={() => setTrigger(false)}>
          close x
        </button>
        <div className="flex-row space-between my-2">
          <label htmlFor="name">Product Name :</label>
          <input
            value={formState.name || ""}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="Description">Description :</label>
          <input
            value={formState.description || ""}
            name="description"
            onChange={handleInputChange}
            type="text"
            placeholder="description"
          />
         
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="Image">Image :</label>
          <button
            id="uploadbtn"
            onClick={showWidget}
            type="button"
            id="upload_widget"
            className=""
          >
            Upload files
          </button>
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="Price">Price :</label>
          <input
            value={formState.price || ""}
            name="price"
            onChange={handleInputChange}
            type="String"
            placeholder="price"

          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="Category">Category:</label>
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
        <div id="postbutton" className="flex-row flex-end">
          <button id="btn2" type="submit" className="submit-msg">
            {' '}
            Add Product{' '}
          <button type="submit" className="submit-msg">
            {" "}
            Add Product{" "}
          </button>
        </div>
      </form>
    </div>
  ) : (
    ""
  );
}

export default CreateProduct;
