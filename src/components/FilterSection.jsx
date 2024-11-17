import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ApiSelectorFamily, FilterCategoryFamily, FilterState, PriceRangeFamily, SelectCategoryFamily } from "../state/atoms";
import { useState } from "react";


export const FilterSection = () => {

    const ProductsList = useRecoilValue(ApiSelectorFamily);
    console.log('list is -',ProductsList);

    const UniqueCategories  = Array.from(new Set(ProductsList?.map((x) => x.category )));
    // console.log('Unique Cat -',UniqueCategories);

    const UniquePrice       = Array.from(new Set(ProductsList?.map((x) => x.price.toFixed())));
    // console.log('Unique Prices -',UniquePrice);
    
    const[SelectedCategory,setSelectedCategory] = useRecoilState(SelectCategoryFamily);
    console.log('selected category -',SelectedCategory);

    const FilterProduct = useRecoilValue(FilterCategoryFamily);
    console.log('Filter Product -',FilterProduct);

    const[Value,setValue] = useState(0);            // selectrange0
    
    const handleclick = (category) => { 
        setSelectedCategory(category);
    }

    const selectchange = (e) => {
        const Scrolledvalue = e.target.value;
        console.log('target is -',Scrolledvalue);
        setValue(Scrolledvalue);
    }

    const FilterByPrice = useRecoilValue(PriceRangeFamily(Value));
    console.log('Price --',FilterByPrice);


    // -----------------
     const [newFilter,setnewFilter] = useRecoilState(FilterState);


    const handleRangeFilter = (filtertype,min,max) => {
        setnewFilter(prev => ({
            ...prev,
            [filtertype] : {min,max}      // rangefilter,0,400
        }))
    }

    const handleCategoryFilter = (filtertype,category) => {
        setnewFilter(prev => ({
            ...prev,
            [filtertype] : category         // catfilter , beauty
        }))
    }



    return (
        <>
       
         {/* <div style = {{padding:'5%'}}>
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
         </div> */}



            {/* new update  */}

            <div style = {{padding:'5%'}}>
            <span> Search by Category </span>
             <div style = {{fontSize:'24px'}}>
                 {UniqueCategories.map((i,index) => {
                    return (
                        <div key = {index}>
                         <div onClick={() => handleCategoryFilter('categories',i)}> {i} </div>
                        </div>
                    )
                 })}
             </div>
         </div>


            {/* ------------- Price Range  */}
        
        <div>
        <span> Search by Price  </span>
            <input type = "range"  max="100" min = "0" 
            value = {newFilter?.priceRange}
             onChange = {(e) => handleRangeFilter('priceRange',0,Number(e.target.value))}  />
              <div>
               0 - {newFilter?.priceRange?.max}
            </div>
        </div>














                 {/* Price Range ----s */}

         {/* <div>
             <span> Search by Price  </span>
              <input type = "range"  max="100" min = "0" value = {Value} onChange={(e) => selectchange(e)}  />
              <div>
               0 - {Value}
              </div>
         </div> */}

        </>
    )
}