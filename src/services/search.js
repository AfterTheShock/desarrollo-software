import { getProductLocalStorage } from "../persistence/localStorage"
import { renderProductList } from "../views/store"

export const searchProduct = () => {
    const inputHeader = document.getElementById("inputHeader")
    const products = getProductLocalStorage()

    const result = products.filter((el) => el.name.toLowerCase().includes(inputHeader.value))

    renderProductList(result)
}