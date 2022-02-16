import CreateProduct from "../components/CreateProduct";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import ProductByUserList from "../components/ProductByUserList";
import { useStoreContext } from "../utils/GlobalState";
function Profile() {
  const [state, dispatch] = useStoreContext();
  const [buttonPopup, setButtonPopup] = useState(false);
  const { currentUser } = state;
  const { user } = currentUser;
  return (
    <>
      <div className="profilecontainer">
        {user ? <h3>Welcome {user.firstName}</h3> : null}
      </div>
      <article>
        <button id="btnprofile" onClick={() => setButtonPopup(true)}>
          Create Post{" "}
        </button>
        <CreateProduct
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
        ></CreateProduct>
        
      </article>
      <section>
          <ProductByUserList />
        </section>
    </>
  );
}
export default Profile;
