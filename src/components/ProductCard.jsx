import { Link } from "react-router-dom";


export const  ProductCard = ({product}) => {

    console.log('item is -',product);
    return(
        <>
       
        <div key = {product?.id} style = {{margin:'5px' , backgroundColor:'lightsalmon' , padding:'10px'}}>
           
            <div>
                <Link to = {`/products/${product?.id}`} style = {{textDecoration:'none',color:'black'}}>
                
                    <div>
                                <span>
                                    <img src = {product?.thumbnail} alt = {product?.title} />
                                </span>                                                                           
            </div>

                    <div style = {{backgroundColor:'lightgrey'}}>
                            <div style = {{fontSize:'24px'}}>  {product?.title} </div> 
                       
                            <div style = {{display:'flex',flexDirection:'row', justifyContent:'space-between',fontSize:'26px' , }}> 
                                <span>  {product?.rating?.toFixed()} Star  </span>
                                <span>  Rs.{product?.price?.toFixed()} /- </span> 
                            </div> 
                            <div style = {{fontSize:'20px'}}>
                                <span>  {product?.category?.toUpperCase()}  </span> 
                            </div>
                            
                    </div>

                </Link>
           </div>
           
        </div>
        </>
    )
}