import "./style.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <p className="messageText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis laoreet libero, eget vestibulum nisl. Vivamus non auctor purus. Donec sodales, mi id sagittis gravida, neque libero mollis magna, eu fringilla dui risus non arcu. Morbi at nisl a neque fringilla facilisis. Praesent id vestibulum ipsum. In eu augue et elit eleifend lobortis sed sed urna.</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
