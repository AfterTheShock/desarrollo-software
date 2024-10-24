import { activeCategorie } from "../../main";
import { getProductLocalStorage } from "../persistence/localStorage";
import { renderProductList } from "../views/store";

const filterProductsByCat = (cat) => {
    const products = getProductLocalStorage()
    
    switch (cat) {
        case activeCategorie:
            renderProductList(products)
            break;
        case "Todo":
            renderProductList(products)
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((e) => e.categorie === cat)
            console.log(result)
            renderProductList(result)

        default:
            break;

        case "mayorPrecio":
            const resHiPrice = products.sort((a, b) => b.price - a.price)
            renderProductList(resHiPrice)
            break;
            
        case "menorPrecio":
            const resLowPrice = products.sort((a, b) => a.price - b.price)
            renderProductList(resLowPrice)
            break;
    }
}


export const renderCategories = () =>{
    const ulList = document.getElementById("listFilter")
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor precio</li>
    <li id="menorPrecio">Menor precio</li>
    `

    const liElements = ulList.querySelectorAll("li")
    liElements.forEach((liElement) => {
        liElement.addEventListener('click', () =>{
            handleClick(liElement)
        })
    })

    const handleClick = (element) => {
        filterProductsByCat(element.id)
        liElements.forEach((liElement) => {
            if(liElement.classList.contains('liActive')){
                liElement.classList.remove('liActive')
            }else{
                if(element === liElement){
                    liElement.classList.add('liActive')
                }
            }
        })
    }
}