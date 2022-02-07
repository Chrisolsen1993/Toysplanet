import "./style.css";

export default function Message({own}) {
  return (
    <div className={own ? "message own": "message"}>
        <div className="messageTop">
            <img className="messageImg" src="https://gtatlvirtfsfp-ijr4639.slack.com/files/U02AEQ1V338/F032JRBGF24/img_0496.jpg" alt="message" />
            <p className="messageText">Hello world</p>
        </div>
        <div className="messageBottom">
            1 hour ago
        </div>
    </div>
  )
}
