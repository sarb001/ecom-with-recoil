import { AllPages } from "./AllPages"
import { Product } from "./AllProduct"
import { Header } from "./Header"


export const Maincomponent = () => {
    return (
        <>
         <div style = {{display:'flex',flexDirection:'column'}}>
            <AllPages />

        </div>
        </>
    )
}