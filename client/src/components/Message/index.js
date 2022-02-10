import "./style.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <p className="messageText">Hello world</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
