import React from 'react';
import './style.css';

function PopupMessage({trigger, setTrigger, children}) {
    return (trigger) ? (
        <div className="popupMessage">
          <form  className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)} >close ⨲</button>
        
        <h2>{/* pass the prop here from cache the name of the user who list the product so this will be message xander for exemple  */}</h2>
        <h3> {/* the product image will be here */} </h3>
         <input  type="text"
          placeholder=" Please type your Message"
          
          name="text"
          className="textarea"
          >
         </input>
         <button type="submit" className="submit-msg"> 💬 Send Message </button>
          </form>
          {children}
            
        </div>
    ): " ";
}

export default PopupMessage
