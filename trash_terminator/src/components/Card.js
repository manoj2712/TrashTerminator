import classes from "./Card.module.css";
import { Image } from "react-bootstrap";
const Card = (props) => {
  const title = props.items.id + ". " + props.items.title;
  return (
    <div className={classes.card}>
      <Image src={props.items.img} className={classes.images}></Image>
      <h3>{title}</h3>
      <p>{props.items.textMsg}</p>
    </div>
  );
};

export default Card;
