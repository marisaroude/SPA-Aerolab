//TODO el manejo del ID para los personajes
//3-4 lineas d cod
const getHash = () =>
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash




