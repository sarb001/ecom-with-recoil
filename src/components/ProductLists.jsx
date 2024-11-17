import { useRecoilState, useRecoilValue } from "recoil";
import { ApiSelectorFamily, FilterCategoryFamily, FilteredProductAtom, FilterProductSelector, PriceRangeFamily, ProductAtom } from "../state/atoms";
import { useEffect } from "react";
import { ProductCard } from "./ProductCard";


export const ProductLists = () => {
    
    const ProductsList = useRecoilValue(ApiSelectorFamily);
    const [Prod,setProd] = useRecoilState(ProductAtom);
    
          useEffect(() => {
            setProd(ProductsList);
         },[ProductsList,setProd]); 

    const FilteredProducts = useRecoilValue(FilterProductSelector);
    console.log('Prod ---',FilteredProducts);

    return (
        <>
           {FilteredProducts?.map(item => {
            return (
                <div key = {item?.id}>
                  <ProductCard product = {item} />
                </div>
            )
           })}
        </>
    )
}