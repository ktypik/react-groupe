import PropTypes from "prop-types";

function Mario(props) {
  return (
    <figure>
      {props.mario.image ? <img src={props.mario.image} alt="" /> : <p>???</p>}
      <figcaption>{props.mario.name}</figcaption>
    </figure>
  );
}

Mario.propTypes = {
  mario: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default Mario;
