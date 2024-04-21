export const formatMoney = cantidad => {
    return cantidad.toLocaleString('es-GT', {
        style: 'currency',
        currency: "GTQ"
    })
}