import { AppProducts } from "./components/AppProduct/AppProducts"


export const App = () => {
    return (
        <>
        <div style={{display:'flex', flexDirection:'column', gap:'2vh'}}>
            <AppProducts />
        </div>
        </>
    )
}