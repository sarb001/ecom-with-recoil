import axios from "axios"
import { atom, selector, selectorFamily } from "recoil"


export const ApiSelectorFamily =  selector({
        key : 'apiselectorFamily',
        get : async () => {
            try {
                const res  = await axios.get('https://dummyjson.com/products');
                return res.data.products;
            } catch (error) {
                 throw(error);
            }
        }
})


export const SpecificProductSelectorFamily =  selectorFamily({
        key : 'specificproductFamily',
        get : (id) => {
            return  async function(){
                const res  = await axios.get(`https://dummyjson.com/products/${id}`);
                return res.data;
            }
        }
})

export const ProductAtom = atom({           // simple ProductAtom 
        key : 'productatom',
        default : []
})

export const FilteredProductAtom = selector({
        key : 'filteredproductatom',
        get : ({get}) => {
            const products = get(ProductAtom);
            console.log('get prod - ',products);
            return products; 
        }
})

                                                
export const SelectCategoryFamily = atom({
    key : 'selectedcategory',
    default : ''
})

export const FilterCategoryFamily = selector({
    key : 'filterselector',
    get : ({get}) => {
        const products = get(ProductAtom);
        const SelectedCat = get(SelectCategoryFamily);

        if(!SelectedCat) return products;
        return products.filter(x =>  x.category === SelectedCat);
    }
})







//1- 

// ProductFilter
// Products 


// -- ProductFilter --  fetch All products to apply changes here

// -- Products -- fetch filterprod [] and the apply operation on atoms and  map over this in component 




