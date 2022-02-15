import CreateProduct from '../components/CreateProduct'
import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_USER } from '../utils/queries'

function Profile() {
  const [buttonPopup, setButtonPopup] = useState(false)
  const { data } = useQuery(QUERY_USER)
  let user

  if (data) {
    user = data.user
  }

  return (
    <>
      {/* <div>
          < h3>DASHBOARD</h3>
       </div> */}

      <div className="profilecontainer">
        {user ? <h3>Welcome {user.firstName}</h3> : null}
      </div>
      <div className="stylebtn">
        <button id="btnprofile" onClick={() => setButtonPopup(true)}>
          Create Post{' '}
        </button>
        <CreateProduct
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
        ></CreateProduct>
      </div>
    </>
  )
}
export default Profile
