import getHash from "../utils/getHash";

const getProduct = (products) => 
{
    const id = getHash();
    const product = products.find((element) => 
    {
      return element._id === id ? element : null;
    });
    return product
};

export default getProduct;