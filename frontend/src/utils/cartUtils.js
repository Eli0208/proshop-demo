export const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
} 

export const updateCart = (state) => {
    // Calculate items Price
    state.itemsPrice = addDecimal(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

    // Calculate shipping Price (If order is over $100 then free, else $10 shipping)
    state.shippingPrice = addDecimal(state.itemsPrice > 100 ? 0 : 10);

    // Calculate tax Price (15% tax)
    state.taxPrice = addDecimal(Number((0.15 * state.itemsPrice).toFixed(2)))

    // Calculate total Price
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice) 
    ).toFixed(2);

    localStorage.setItem('cart', JSON.stringify(state));

    return state;
}