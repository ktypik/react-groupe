import React, { useState } from "react";

/* create props for avatar image, avatar first name, avatar lastname, a counter with a button for a click for add a value */
function Avatar(props) {
  const [count, setCount] = useState(0);
  return (
    <figure>
      <img src={props.avatar.image} alt="" />
      <figcaption>
        {props.avatar.firstName} {props.avatar.lastName.toUpperCase()}
      </figcaption>
      <button onClick={() => setCount(count + 1)}>🍩 {count}</button>
    </figure>
  );
}

export default Avatar;
