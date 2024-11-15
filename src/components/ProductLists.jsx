import { useRecoilState, useRecoilValue } from "recoil";
import { ApiSelectorFamily, FilterCategoryFamily, FilteredProductAtom, ProductAtom } from "../state/atoms";
import { useEffect } from "react";
import { ProductCard } from "./ProductCard";


export const ProductLists = () => {

        const ProductsList = useRecoilValue(ApiSelectorFamily);
        const [Prod,setProd] = useRecoilState(ProductAtom);
        const FilteredProducts = useRecoilValue(FilterCategoryFamily);
        console.log('f Prod -',FilteredProducts);

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