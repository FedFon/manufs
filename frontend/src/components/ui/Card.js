const Card = (props) => {
  return (
    <div className="w-50 bg-light border border-dark rounded">
      {props.children}
    </div>
  );
};

export default Card;
