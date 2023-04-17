import "./Card.scss";
import { RxBookmarkFilled } from "react-icons/rx";
export default function Card(props) {
  return (
    <div className="card">
      <div className="card-bookmark">
        <RxBookmarkFilled />
      </div>
      <div className="card-card">
        <div className="card-top">
          <img src={props.post} />
        </div>
        <div className="card-bottom">
          <p className="card-title">{props.title}</p>
          <p className="card-subtitle">{props.subtitle}</p>
          {props.day ? (
            <p className="card-date">{props.day}</p>
          ) : (
            <p className="card-date">{props.date}</p>
          )}
        </div>
      </div>
    </div>
  );
}
