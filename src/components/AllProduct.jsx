

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { ApiSelectorFamily, FilterCategoryFamily, FilteredProductAtom, ProductAtom, SelectCategoryFamily } from "../state/atoms";
import { ProductCard } from "./ProductCard";
import { FilterSection } from "./FilterSection";
import { useEffect } from "react";
import { ProductLists } from "./ProductLists";


export const Product = () => {

    // const ProductsList = useRecoilValue(ApiSelectorFamily());
    // console.log('list is -',ProductsList);

    // const [Prod,setProd] = useRecoilState(ProductAtom);
    // console.log('added prod-',Prod);










    




    // const SelectedCategory = useRecoilValue(SelectCategoryFamily); 
    // console.log(' Selected cat -',SelectedCategory);
  
    // const FilteredCategory  = useRecoilValue(FilterCategoryFamily(SelectedCategory));
    // console.log('FIt cat -',FilteredCategory);

    // // category | price | Rating 

    // const filterProd = useRecoilValue(FilteredProductAtom);
    // console.log('Filterprod -',filterProd);

    // useEffect(() => {
    //     setProd(ProductsList);
    // },[ProductsList])   


    return (
        <>
        <div style = {{display:'grid',gridTemplateColumns:'2fr 7fr'}}>
            <div>
                <FilterSection />
            </div>

            <div style = {{display:'grid' ,gridTemplateColumns : '1fr 1fr 1fr'}}>
                 <ProductLists />
            </div>
        </div>
        </>
    )
}







{/* {ProductsList?.map(items => {
    return (
        <div key = {items.id}>
            <ProductCard  product = {items} />
        </div>
    )
})} */}