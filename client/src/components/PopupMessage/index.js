import React, { useState }from 'react';
import './style.css';
import { useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom';
 import { QUERY_PRODUCT_ID, QUERY_USER_CONVERSATION  } from "../../utils/queries";
import { CREATE_CONVERSATION, SEND_MESSAGE} from "../../utils/mutations";

import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { useContext} from 'react'
  
function PopupMessage({trigger, setTrigger, children}) {

  const [formState, setFormState] = useState({});
  const {id}= useParams()

     const { loading, data } = useQuery(QUERY_PRODUCT_ID,{
    variables:{productID:id}
   });
  const productData = data?.product || {}
console.log(productData)
  
  const user = Auth.getProfile()
    
    console.log(user)
    

     
    const [createConversation] = useMutation(CREATE_CONVERSATION);

   const { loading2, data2 } = useQuery(QUERY_USER_CONVERSATION,{
    variables:{member:user.data._id,
                 productID:productData._id          
    }
  });
  const conversationData = data2?.userConversation || {}
  console.log(conversationData)
    const [sendMsg] = useMutation(SEND_MESSAGE);

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      let conversation = {...conversationData}
      
      if (!conversation._id) {   
      try {
  
         const { data }= await createConversation({
            variables: {
              id: productData.user._id,
              productID: productData._id
              
            }
          })
          conversation={...data}
          console.log("here we are",conversation)
      } catch (error) {
        console.error(error);
      }}
     
        try {
          const { data }= await sendMsg({
            variables: {
              conversationId: conversation.addConversation._id,
              senderId: user.data._id,
              text:formState.text
            }
          })
          setFormState({
           text:""
          });
          
        } catch (error) {
          console.error(error);
        
}
    };
    const handleInputChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      console.log([name]);
      console.log(value);
      setFormState((values) => ({ ...values, [name]: value }));
    };
  


    return (trigger) ? (
        <div className="popupMessage">
          <form  className="popup-inner" onSubmit={handleFormSubmit}>
        <button className="close-btn" onClick={() => setTrigger(false)} >close ⨲</button>
        
        <h2>{/* pass the prop here from cache the name of the user who list the product so this will be message xander for exemple  */}</h2>
        <h3> {/* the product image will be here */} </h3>
         <input 
         value={formState.text || ""} 
          type="text"
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
