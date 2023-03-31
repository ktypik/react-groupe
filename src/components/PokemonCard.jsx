import PropTypes from "prop-types";

function PokemonCard(props) {
  return (
    <>
      <div className="tableau">
        <figure className={props.pokemon.color}>
          <p>N°{props.pokemon.id}</p>
          {props.pokemon.imgSrc ? (
            <img src={props.pokemon.imgSrc} alt="" />
          ) : (
            <p>???</p>
          )}
          <figcaption>{props.pokemon.name}</figcaption>
        </figure>
        <section>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <td>{props.pokemon.data.type}</td>
                </tr>
                <tr>
                  <th>Catégorie</th>
                  <td>{props.pokemon.data.categorie}</td>
                </tr>
                <tr>
                  <th>Taille</th>
                  <td>{props.pokemon.data.size}</td>
                </tr>
                <tr>
                  <th>Poids</th>
                  <td>{props.pokemon.data.poids}</td>
                </tr>
                <tr>
                  <th>Sexe</th>
                  <td>{props.pokemon.data.sex}</td>
                </tr>
              </thead>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    data: PropTypes.shape({
      type: PropTypes.string,
      categorie: PropTypes.string,
      size: PropTypes.number,
      poids: PropTypes.number,
      sex: PropTypes.string,
    }),
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
