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

     <button  id="btnprofile" onClick= {()=> setButtonPopup(true)}>+ New Post </button>
            <CreateProduct trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h2>Yesggggg</h2>
            </CreateProduct>
     
     </>
)

}
export default Profile;