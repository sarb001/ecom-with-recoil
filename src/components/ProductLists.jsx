import { useRecoilState, useRecoilValue } from "recoil";
import { ApiSelectorFamily, FilterCategoryFamily, FilteredProductAtom, PriceRangeFamily, ProductAtom } from "../state/atoms";
import { useEffect } from "react";
import { ProductCard } from "./ProductCard";


export const ProductLists = () => {

    // const FilteredProducts = useRecoilValue(FilterCategoryFamily);
    // console.log('f Prod -',FilteredProducts);
    
    
    // const FinalProd =   useRecoilValue(ProductAtom);
    // console.log('FinalProd =',FinalProd);
    
    
    // ------------------
        
    // first show all products
    // on category filter , range filter products should get Filterd 
    
    
    const ProductsList = useRecoilValue(ApiSelectorFamily);
    const [Prod,setProd] = useRecoilState(ProductAtom);
    
    const FilteredProducts = useRecoilValue(FilterCategoryFamily);

    const FinalPriced =   useRecoilValue(PriceRangeFamily);
    console.log('Filtered by Price -',FinalPriced);

          useEffect(() => {
            setProd(ProductsList);
         },[ProductsList,setProd]); 


    return (
        <>
           {FilteredProducts?.map(item => {
            return (
                <>
                  <ProductCard product = {item} />
                </>
            )
           })}
        </>
    )
}