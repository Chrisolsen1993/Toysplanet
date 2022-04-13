import CreateProduct from "../components/CreateProduct";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import ProductByUserList from "../components/ProductByUserList";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_CURRENT_USER } from "../utils/actions";
function Profile() {
  const { data } = useQuery(QUERY_USER);
  const [state, dispatch] = useStoreContext();
  
  useEffect(() => {
    console.log("yes",data)
    if (data) {
      dispatch({
        type: UPDATE_CURRENT_USER,
        currentUser: data,
      });
    }
    console.log("yes",dispatch)
  }, [data, dispatch]);


  const [buttonPopup, setButtonPopup] = useState(false);
  const { currentUser } = state;
  const { user } = currentUser;
  return (
    <> 
    <div className="procontainer">
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
        
    </div>
    </>
  );
}
export default Profile;
