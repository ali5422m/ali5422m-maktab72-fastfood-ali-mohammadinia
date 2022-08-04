const saveStorage = (cart) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }
}

const getStorage = () => {
    if (typeof window !== 'undefined') {
     return localStorage.getItem("shoppingCart")
      ? JSON.parse(localStorage.getItem("shoppingCart"))
      : [];
    }else{
        return []
    }

}

export {saveStorage ,getStorage}