import Conversation from "../components/Conversation/index";
import Message from "../components/Message/index";

export default function Messenger() {
  return (
    <>
    <div className="messengerContainer">
      <div className="messenger">
          <div className="chatMenu">
              <div className="chatMenuWrapper">
                  <input placeholder="Search for friends" className="chatMenuInput"/>
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
                  <Message own={true}/>
                  <Message />
                  <Message own={true}/>
              </div>
              <div className="chatBoxBottom">
                <textarea className="chatMessageInput" placeholder="write something..."></textarea>
                <button className="chatSubmitButton">Send</button>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}
