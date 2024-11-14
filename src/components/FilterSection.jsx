import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { FilterCategoryFamily, SelectCategoryFamily } from "../state/atoms";


export const FilterSection = ({ProductsList}) => {

    const UniqueCategories = Array.from(new Set(ProductsList?.map((x) => x.category )));
    console.log('Unique Cat -',UniqueCategories);

    const UniquePrice       = Array.from(new Set(ProductsList?.map((x) => x.price.toFixed())));
    console.log('Unique Prices -',UniquePrice);

    const[SelectedCategory,setSelectedCategory] = useRecoilState(SelectCategoryFamily);

    // const FilteredCategory  = useRecoilValue(FilterCategoryFamily(SelectedCategory));
    // console.log('FIt cat -',FilteredCategory);

    const handleclick = (category) => { 
        setSelectedCategory(category);
    }

    return (
        <>
       
         <div style = {{padding:'5%'}}>
            <span> Search by Category </span>
             <div style = {{fontSize:'24px'}}>
                 {UniqueCategories.map(i => {
                    return (
                        <>
                         <div onClick={() => handleclick(i)}> {i} </div>
                        </>
                    )
                 })}
             </div>
         </div>

         <div>
             <span> Search by Price  </span>
              <input type = "range"  max={100} min = "10"  />
         </div>

        </>
    )
}