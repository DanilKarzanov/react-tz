export const getTotal = (cart) => {
    let sum = 0
    cart.cart.forEach(item => sum += item.price*item.amount)
    return sum
}