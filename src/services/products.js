import Swal from "sweetalert2"
import { activeProduct } from "../../main"
import { getProductLocalStorage, saveLocalStorage } from "../persistence/localStorage"
import { closePopUp } from "../views/modal"
import { getProductsStore, renderProductList } from "../views/store"

export const saveElementPopUp = () => {
    const name = document.getElementById("name").value,
    image = document.getElementById("img").value,
    price = document.getElementById("price").value,
    categorie = document.getElementById("categories").value

    let object = null

    if(activeProduct){
        object = {
            ...activeProduct,
            name,
            image,
            price,
            categorie
        }

        Swal.fire({
            title: "Correcto",
            text: "Producto actualizado con éxito.",
            icon: "success"
        });
    }else {
        object = {
            id: new Date().toISOString(),
            name,
            image,
            price,
            categorie
        }

        Swal.fire({
            title: "Correcto",
            text: "Producto agregado con éxito.",
            icon: "success"
        });
    }

    saveLocalStorage(object)
    getProductsStore()
    closePopUp()
}

export const deleteProduct = () => {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esta acción!",
        icon: "Peligro",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, bórralo!"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = getProductLocalStorage()
            const result = products.filter((el) => el.id !== activeProduct.id)
            localStorage.setItem("products", JSON.stringify(result))
            const newProducts = getProductLocalStorage()
            renderProductList(newProducts)
        
            closePopUp()
        } else {
            closePopUp()
        }
    })
}