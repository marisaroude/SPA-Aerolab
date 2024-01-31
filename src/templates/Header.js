import imgEncabezado from '../assets/images/header-x2.png'
import aerolabLogo from '../assets/images/aerolab-logo.svg'
import coin from '../assets/icons/coin.svg'

const Header = () =>{
    const view = `
        <div class = "Header-main">
            <div class = "Header-icons-container">
                <div class = "Icons">
                    <img src = ${aerolabLogo} alt = "logo-encabezado">
                </div>
                <div class = "containerUser">
                <span class = "user">Marisa Roude</span>
                    <div class = "containerCoin">
                        <span class = "coin">2575</span>
                        <img src = ${coin} alt = "coin">
                    </div>
                </div>
            </div>
            <div class = "Header-encabezado" id="Fondo">
                <img src = ${imgEncabezado} alt = "img-encabezado">
                <h1>
                    <a href = "/">Electronics</a>
                </h1> 
            </div>
            <div class = "Header-nav">
                <a href = "#/about">
                </a>
            </div>
            
        </div>
    `
    return view 
}

export default Header;