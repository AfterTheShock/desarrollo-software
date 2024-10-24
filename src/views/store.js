import { setActiveProduct } from "../../main"
import { getProductLocalStorage } from "../persistence/localStorage"
import { openPopUp } from "./modal"


export const getProductsStore = () => {
    const products = getProductLocalStorage()
    renderProductList(products)
}

export const renderProductList = (productsIn) => {
    const burgers = productsIn.filter((element) => element.categorie === "Hamburguesas")
    const fries = productsIn.filter((element) => element.categorie === "Papas")
    const colas = productsIn.filter((element) => element.categorie === "Gaseosas")

    const renderProductGroup = (products, title) => {
        if(products.length > 0){
            const productsHtml = products.map((product, index) => {
                return `
                <div class='containerTargetItem' id='product-${product.categorie}-${index}'>
                    <div>
                        <img src='${product.image}'/>
                        <div>
                            <h2>${product.name}</h2>
                        </div>
                        <div class='targetProps'>
                            <p><b>Precio: </b> $ ${product.price}</p>
                        </div>
                    </div>
                </div>
                `
            })

            return `
            <section class='sectionStore'>
                <div class='containerTitleSection'>
                    <h3>${title}</h3>
                </div>
                <div class='containerProductStore'>
                    ${productsHtml.join("")}
                </div>
            </section>
            `
        } else{
            return ""
        }
    }

    const appContainer = document.getElementById("storeContainer")
    appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(fries, "Papas")}
    ${renderProductGroup(colas, "Gaseosas")}
    `

    const addEvents = (productsIn) => {
        productsIn.forEach((element, index) => {
            const productContainer = document.getElementById(`product-${element.categorie}-${index}`)
            productContainer.addEventListener("click", () => {
                setActiveProduct(element)
                openPopUp()
            })
        })
    }

    addEvents(burgers)
    addEvents(fries)
    addEvents(colas)
}