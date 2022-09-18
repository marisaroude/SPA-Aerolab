
import getProduct from '../utils/getProduct'
import Error404 from './Error404';

const infoProduct = async (products) =>{

    const product = getProduct(products)
    console.log(product);


    const view = product?`
        <div class = "Products-inner">
            <article class = "Product-card">
                <img src = "${product.img.url}" alt = "${product.name}">
                <h2>${product.name}</h2>
            </article>

            <article class = "Products-card">
                <h3>Categoria:  <span>${product.category}</span></h3>
                <h3>Precio: <span>${product.cost}</span></h3>
                <h3>Nombre: <span>${product.name}</span></</h3>
            </article>
        </div>        
    `
    : Error404()
    return view
}

export default infoProduct