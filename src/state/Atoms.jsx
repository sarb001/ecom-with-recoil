import axios from "axios"
import { atom, selectorFamily } from "recoil"


export const ApiSelectorFamily =  selectorFamily({
        key : 'apiselectorFamily',
        get : () => {
            return async function(){
                const res  = await axios.get('https://dummyjson.com/products');
                return res.data.products;
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

export const ProductAtom = atom({
        key : 'productatom',
        default : []
})

export const FilteredProductAtom = atom({
        key : 'filteredproductatom',
        default : ProductAtom
})

export const SelectCategoryFamily = atom({
    key : 'selectedcategory',
    default : ''
})

export const FilterCategoryFamily = selectorFamily({
    key : 'filterselector',
    get : (category) => ({get}) => {
        const products = get(ProductAtom);
        if(!products) return products;
        return products.filter(x =>  x.category === category);
    }
})







//1- 

// ProductFilter
// Products 


// -- ProductFilter --  fetch All prodp] apply changes here

// -- Products -- fetch filterprod [] and the apply operation on atoms and  map over this in component 




