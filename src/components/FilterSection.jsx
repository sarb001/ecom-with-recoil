import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ApiSelectorFamily, FilterCategoryFamily, SelectCategoryFamily } from "../state/atoms";
import { useState } from "react";


export const FilterSection = () => {

    const ProductsList = useRecoilValue(ApiSelectorFamily);
    console.log('list is -',ProductsList);

    const UniqueCategories  = Array.from(new Set(ProductsList?.map((x) => x.category )));
    console.log('Unique Cat -',UniqueCategories);

    const UniquePrice       = Array.from(new Set(ProductsList?.map((x) => x.price.toFixed())));
    console.log('Unique Prices -',UniquePrice);
    
    const[SelectedCategory,setSelectedCategory] = useRecoilState(SelectCategoryFamily);
    console.log('selected category -',SelectedCategory);

    const FilterProduct = useRecoilValue(FilterCategoryFamily);
    console.log('Filter Product -',FilterProduct);;

    const handleclick = (category) => { 
        setSelectedCategory(category);
    }

    const selectchange = (e) => {
        console.log('target is -',e.target.value);
        setValue(e.target.value);
    }

    const[Value,setValue] = useState(0);

    return (
        <>
       
         <div style = {{padding:'5%'}}>
            <span> Search by Category </span>
             <div style = {{fontSize:'24px'}}>
                 {UniqueCategories.map((i,index) => {
                    return (
                        <div key = {index}>
                         <div onClick={() => handleclick(i)}> {i} </div>
                        </div>
                    )
                 })}
             </div>
         </div>

         <div>
             <span> Search by Price  </span>
              <input type = "range"  max="100" min = "0" value = {Value} onChange={(e) => selectchange(e)}  />
         </div>

        </>
    )
}