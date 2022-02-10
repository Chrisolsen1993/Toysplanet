import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../utils/queries";
import Post from "../components/Post/index";
import Edit from "../components/Edit/index";

const Profile = () => {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
    <div className='container'>
      {user ? (
        <h3>
          Hello {user.firstName}, what would you like to do?
        </h3>
      ) : null}
    </div>
    <div className='addPost'>
        <button>Add Post</button>
        <Post />
    </div>
    <div className='editPost'>
        <button>Edit Post</button>
        <Edit />
    </div>
    <div className='deletePost'>
        <button>Delete Post</button>
        Delete
    </div>
    </>
  );
};

export default Profile;
