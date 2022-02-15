import Conversation from "../components/Conversation/index";
import Message from "../components/Message/index";
import React, { useState, useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { QUERY_USER, QUERY_USER_CONVERSATION } from "../utils/queries";
import { idbPromise } from "../utils/helpers";

function Messenger() {
  const [formState, setFormState] = useState({});
  const [conversations, setConversations] = useState([]);
  const { data } = useQuery(QUERY_USER);

  let user;

  if (data) {
    user = data.user;
  }

  console.log(user);

  // useEffect(() => {
  //   async function getConversations() {
  //     try {
  //       const conversation = await idbPromise("Conversation", "get");
  //       dispatchEvent({ type: QUERY_USER_CONVERSATION, members: [...conversation]})
  //     } catch (err) {
  //       console.log(err);
  //     }

  //     if (!formState.conversation.length) {
  //       getConversations();
  //     }
  //   }
  // }, [formState.conversation.length.dispatch]);

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

export default Messenger;
