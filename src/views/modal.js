import { activeProduct, deleteBtn } from "../../main"

export const openPopUp = () => {
    const modal = document.getElementById("modalPopUp")
    modal.style.display = "flex"

    if(activeProduct){
        deleteBtn.style.display = 'block'

        const name = document.getElementById("name"),
        image = document.getElementById("img"),
        price = document.getElementById("price"),
        categorie = document.getElementById("categories")
    
        name.value = activeProduct.name
        image.value = activeProduct.image
        price.value = activeProduct.price
        categorie.value = activeProduct.categorie
    } else {
        deleteBtn.style.display = 'none'
    }
}

export const closePopUp = () => {
    const modal = document.getElementById("modalPopUp")
    modal.style.display = "none"
    resetPopUp()
}

const resetPopUp = () => {
    const name = document.getElementById("name"),
    image = document.getElementById("img"),
    price = document.getElementById("price"),
    categorie = document.getElementById("categories")
    
    name.value = ""
    image.value = ""
    price.value = 0
    categorie.value = "Seleccione una categoria"
}