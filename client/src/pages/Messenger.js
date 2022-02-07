import Nav from "../components/Nav/index";
import Conversation from "../components/Conversation/index";
import Message from "../components/Message/index";
import ChatOnline from "../components/ChatOnline";

export default function Messenger() {
  return (
    <>
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
      <div className="chatOnline">
          <div className="chatOnlineWrapper">
              <ChatOnline />
          </div>
      </div>
      </>
  )
}
