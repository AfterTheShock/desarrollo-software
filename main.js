import { renderCategories } from "./src/services/categories";
import { deleteProduct, saveElementPopUp } from "./src/services/products";
import { searchProduct } from "./src/services/search";
import { closePopUp, openPopUp } from "./src/views/modal";
import { getProductsStore } from "./src/views/store";
import './style.css'

/* APLICATION */
export let activeCategorie = null
export const setActiveCategorie = (cat) => {
    activeCategorie = cat
}

export let activeProduct = null
export const setActiveProduct = (prod) => {
    activeProduct = prod
}

getProductsStore()
renderCategories()

/* HEADER */

const addBtn = document.getElementById("addElementBtn")
addBtn.addEventListener("click", () => {
    openPopUp()
})

const searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener("click", () => {
    searchProduct()
})

const acceptBtn = document.getElementById("acceptBtn")
acceptBtn.addEventListener("click", () => {
    saveElementPopUp()
})

const cancelBtn = document.getElementById("cancelBtn")
cancelBtn.addEventListener("click", () => {
    setActiveProduct(null)
    closePopUp()
})

export const deleteBtn = document.getElementById("deleteBtn")
deleteBtn.addEventListener("click", () => {
    deleteProduct()
})