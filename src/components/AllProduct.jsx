

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { ApiSelectorFamily, FilterCategoryFamily, FilteredProductAtom, ProductAtom, SelectCategoryFamily } from "../state/atoms";
import { ProductCard } from "./ProductCard";
import { FilterSection } from "./FilterSection";
import { useEffect } from "react";
import { ProductLists } from "./ProductLists";


export const Product = () => {

    
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