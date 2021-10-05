/**
 * File: Card.js
 * Author: Fedfon
 * Purpose: This file is a container component and holds the Patient component.
 */
const Card = (props) => {
  return (
    <div className="w-50 bg-light border border-dark rounded">
      {props.children}
    </div>
  );
};

export default Card;
