import Logo from "../stickers-logo-pokemon.jpg";

function Header (){
    return (<><figure>
        <img src={Logo} alt="logoPokemon" />
        </figure>
        <ul>
            <li>Acceuil</li>
            <li>Login</li>
            <li>A propos</li>
            <li>Contact</li>
        </ul></>
        
    );
}


export default Header;