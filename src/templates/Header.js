import imgEncabezado from '../assets/images/header-x2.png'


const Header = () =>{
    const view = `
        <div class = "Header-main">
            <div class = "Header-icons-container">
                <div class = "Icons">
                    <a href = "/"><span class = "logo"></span></a>
                    <a href = "/"><span class = "money"></span></a>
                    <a href = "/"><span class = "user"></span></a>
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