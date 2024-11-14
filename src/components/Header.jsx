import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <header style = {{display:'grid',gridTemplateColumns :'1fr 1fr',backgroundColor:'lightseagreen',padding :'12px'}}>
            <div>
                 <div> <Link to  = "/"> Greenify </Link> </div>
            </div>
            <div style = {{display:'flex',textAlign:'center' ,justifyContent:'space-evenly'}}>
                <div> <Link to = "/products"> Products </Link> </div>
                <div> Wishlist  </div>
                <div> Cart  </div>
            </div>
        </header>
    )
}