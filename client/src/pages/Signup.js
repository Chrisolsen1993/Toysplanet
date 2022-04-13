import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="loginBackground">
      <div className="loginContainer">
       

        
        <asside>
        <form  id="postform" className="popup-inner" className="signup" onSubmit={handleFormSubmit}>
          <div className="signupInfo">
          <div className="flex-row space-between my-2"> 
            <figure className="inputField">
              <label htmlFor="firstName">First Name:</label>
              <input
                placeholder="First"
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange}
              />
              </figure>
            
           
            <figure className="inputField">
              <label htmlFor="lastName">Last Name:</label>
              <input
                placeholder="Last"
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
              />
              </figure>
            
            
          </div>
         
            <div className="flex-row space-between my-2">
            <figure className="inputField">
              <label htmlFor="email">Email:</label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
              </figure>
            </div>
            <div className="flex-row space-between my-2">
            <figure className="inputField">
              <label htmlFor="pwd">Password:</label>
              <input
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
              </figure>
              
            </div>

       
          
          </div>
          <figure id="postbutton">
              <button className="signBtn" type="submit">Signup</button>
               <Link to="/login"><button className="signBtn">Login Instead</button></Link>
            </figure>
          
        </form>
        </asside>
      </div>
    </div>
  );
}

export default Signup;
