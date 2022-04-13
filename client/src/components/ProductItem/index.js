import React, { useEffect }from "react";
import { useLocation } from 'react-router-dom';

import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY, DELETE_PRODUCT} from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import "./style.css";
//import { QUERY_PRODUCT_ID, QUERY_USER_CONVERSATION } from "../../utils/queries";
import {REMOVE_PRODUCT} from "../../utils/mutations";

import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

function ProductItem(props) {
  let location = useLocation();
  const [removeProduct, { error }] = useMutation(REMOVE_PRODUCT);

  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, quantity } = props;


  const { cart, products } = state;
  console.log(products)

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...props, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...props, purchaseQuantity: 1 });
    }
  };
//   useEffect(() => {
//     if (removeProduct) {
//      idbPromise("products", "delete").then((products) => {
//        dispatch({
//          type: DELETE_PRODUCT,
//          products: products,
//        });
//      });
//    }
//  }, [removeProduct]);
  const handleDeleteProduct = async (productID, event) => {
// get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeProduct({
        variables: { productID },
      });
      // upon success, remove book's id from localStorage
      //removeBookId(bookId);
     
    } catch (err) {
      console.error(err);
    }
    window.location.reload()
    event.prevent.default()
   
  };

  return (location.pathname==="/profile")?
  <div className="card px-1 py-1 cardBox">
  
    <img alt={name} src={`${image}`} />
    <p className="itemText">{name}</p>
  
  <div>
    <div className="itemText">
      {quantity} {pluralize("item", quantity)} in stock
    </div>
    <span className="itemTextp">${price}</span>
  </div>
  <button className="" >
   edit Product
  </button>
  <button className="" onClick={() => handleDeleteProduct(_id)}  type='submit' variant='success' >
   delete Product
  </button>
</div>:(
    <div className="card px-1 py-1 cardBox">
      <Link to={`/products/${_id}`}>
        <img className="image" alt={name} src={`${image}`} />
        <p className="itemText">{name}</p>
      </Link>
      <div>
        <div className="itemText">
          {quantity} {pluralize("item", quantity)} in stock
        </div>
        <span className="itemTextp">${price}</span>
      </div>
      <button className="" onClick={addToCart}>
        Add to cart
      </button>
      <div> <p>Created by <span  className="itemTextp">{props?.user?.firstName}</span></p></div>
    </div>
  );
}

export default ProductItem;
