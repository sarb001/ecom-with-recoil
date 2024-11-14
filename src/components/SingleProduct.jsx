import { useParams } from "react-router-dom"
import { useRecoilValue } from "recoil";
import { SpecificProductSelectorFamily } from "../state/atoms";

export const SingleProduct = () => {

    const { id } = useParams();
    console.log('id is -',id);

    // pass id to specific url and then fetch specific Details and show 

    const product = useRecoilValue(SpecificProductSelectorFamily(id));
    console.log('prod is -', product);

    return (
        <>
           <div style = {{padding:'5px',display:'grid',gridTemplateColumns:'1fr 1fr'}}>
           <div>
                 <span>
                        <img src = {product?.thumbnail} alt = {product?.title} />
                 </span>                                                                           
            </div>

            <div style = {{padding:'25px'}}>
                            <div style = {{fontSize:'24px'}}>  {product?.title} </div> 
                            <div> {product?.description?.split(' ')?.slice(0,10)?.join(' ') + '....' } </div> 
                            <div style = {{display:'flex',flexDirection:'row' ,paddingTop:'12px', justifyContent:'space-between',fontSize:'26px'}}> 
                                <span>  {product?.rating?.toFixed()} Star  </span>
                                <span>  Rs.{product?.price?.toFixed()} /- </span> 
                            </div> 
                            <div style = {{fontSize:'26px'}}>
                                <span>  {product?.category}  </span> 
                            </div>
                            
            </div>
           </div>
        </>
    )
}