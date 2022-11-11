import "./Card.css";

const Card = (props) => {
  return (
    <article className="mycard">
      <img src={props.image} alt={props.title} />
      <div className="body">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </article>
  );
};

export default Card;
