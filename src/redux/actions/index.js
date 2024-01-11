

export const allItem = (product) => {
    return {
        type : "ALLITEM",
        payload : product
    }
}
export const addItem = (product) => {

    console.log('product',product);
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}