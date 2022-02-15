import React, { useState }from 'react';
import './style.css';
// import { useQuery } from "@apollo/client";
// import { QUERY_PRODUCT } from "../utils/queries";
import { CREATE_CONVERSATION} from "../../utils/mutations";
import { SEND_MESSAGE} from "../../utils/mutations";
import { useMutation } from "@apollo/client";
// import Auth from "../utils/auth";
import { useContext} from 'react'
// import the two use mutation
//Create a single function create the message
//handle submit function if there is no conversation create one and still post the message

function PopupMessage({trigger, setTrigger, children}) {
    const { user } = useContext
    const [formState, setFormState] = useState({});
    // const { loading, data } = useQuery(QUERY_CATEGORIES);
    const [createConversation] = useMutation(CREATE_CONVERSATION);
    const [sendMsg] = useMutation(SEND_MESSAGE);
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      if (!createConversation) {   
      try {
  
         const { data }= await createConversation({
            variables: {
              productUserId: formState.id,
              productID: formState.productID
              
            }
          })
      } catch (error) {
        console.error(error);
      }}
      else {
        try {
          const { data }= await sendMsg({
            variables: {
              conversationId: formState.conversationId,
              senderId: formState.senderId,
              text:formState.text
            }
          })
          
        } catch (error) {
          console.error(error);
        }


      }
    };
    const handleInputChange = (event) => {
      const { data, value } = event.target
      setFormState({
        ...formState,
        ...value,
      })
      console.log('value', value)
    }


    return (trigger) ? (
        <div className="popupMessage">
          <form  className="popup-inner" onSubmit={handleFormSubmit}>
        <button className="close-btn" onClick={() => setTrigger(false)} >close ⨲</button>
        
        <h2>{/* pass the prop here from cache the name of the user who list the product so this will be message xander for exemple  */}</h2>
        <h3> {/* the product image will be here */} </h3>
         <input  type="text"
          placeholder="Type message here"
          name="text"
          className="textarea"
          onChange={handleInputChange}
          >
         </input>
         <button type="submit" className="submit-msg"> 💬 Send Message </button>
          </form>
          {children}
            
        </div>
    ): " ";
}

export default PopupMessage
