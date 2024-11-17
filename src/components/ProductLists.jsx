import { useRecoilState, useRecoilValue } from "recoil";
import { ApiSelectorFamily, FilterCategoryFamily, FilteredProductAtom, FilterProductSelector, PriceRangeFamily, ProductAtom } from "../state/atoms";
import { useEffect } from "react";
import { ProductCard } from "./ProductCard";


export const ProductLists = () => {
    
    const ProductsList = useRecoilValue(ApiSelectorFamily);
    const [Prod,setProd] = useRecoilState(ProductAtom);
    
    const FilteredProducts = useRecoilValue(FilterCategoryFamily);

    // const FinalPriced =   useRecoilValue(PriceRangeFamily);
    // console.log('Filtered by Price -',FinalPriced);

          useEffect(() => {
            setProd(ProductsList);
         },[ProductsList,setProd]); 

    const FilteredProd = useRecoilValue(FilterProductSelector);
    console.log('Prod ---',FilteredProd);


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