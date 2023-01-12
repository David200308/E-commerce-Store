// Coffee: price_1MPGcBA3VXdzTXkYCFaTmbQ4
// Sunglasses: price_1MPGdeA3VXdzTXkYVQQwCJrx
// Camera: price_1MPGeQA3VXdzTXkYwwDC1UPg

const productsArray = [
    {
        id: "price_1MPGcBA3VXdzTXkYCFaTmbQ4",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1MPGdeA3VXdzTXkYVQQwCJrx",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1MPGeQA3VXdzTXkYwwDC1UPg3",
        title: "Camera",
        price: 39.99
    }
    // {
    //     id: "4",
    //     title: "Computer",
    //     price: 999.99
    // }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);
    if (productData == undefined) {
        console.log("Product not found");
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };