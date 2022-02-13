import Conversation from "../components/Conversation/index";
import Message from "../components/Message/index";
import React, { useState, useEffect, useQuery, useContext, createContext, useReducer } from 'react';
import Auth from "../utils/auth";
import { QUERY_USER } from '../utils/queries';
import axios from "axios";

function Messenger() {

  const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
  };

  const AuthContext = createContext(INITIAL_STATE);

  const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Auth, INITIAL_STATE);
    
    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])
    
    return (
      <AuthContext.Provider
        value={{
          user: state.user,
          isFetching: state.isFetching,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

  const [conversations, setConversations] = useState([]);
const { user } = useContext(AuthContext);

console.log(user);

useEffect(()=>{

})

  return (
    <>
      <div className="messengerContainer">
        <div className="messenger">
          <div className="chatMenu">
            <div className="chatMenuWrapper">
              <input
                placeholder="Search for friends"
                className="chatMenuInput"
              />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
            </div>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="Write your message here..."
              ></textarea>
              <button className="chatSubmitButton">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger
