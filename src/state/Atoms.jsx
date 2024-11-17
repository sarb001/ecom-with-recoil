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

                  
// ---Category Filter


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


// ---- Centralize Filter State 

export const FilterState = atom({
    key : 'filterstate',
    default : {
        categories : [],
        priceRange : {
            min : 0,
            max : 100
        }
    }
})

    // allproducts , default values 
const ApplyFilters = (products,filters) => {
    // applying both 
    return products.filter(product =>  {

        if(filters.categories.length){
            const CategoryMatch =  product.category === filters.categories;
            return CategoryMatch;
        }

        const PriceMatch = filters.priceRange.max >= product.price.toFixed();

        return PriceMatch;

    })
}


export const FilterProductSelector = selector({
    key : 'FilterProductSelector',
    get : ({get}) => {
        const Allproducts = get(ProductAtom);
        console.log('All Prod-',Allproducts);
        
        const Filterval = get(FilterState);
        console.log(' Filterva -',Filterval);

        const Filtered = ApplyFilters(Allproducts,Filterval);
        console.log('After Filtering -',Filtered);
        return Filtered;
    }
})



















// // --- Max Range Price--

export const PriceRangeFamily = selectorFamily({
     key : 'pricerangeselector',
     get : (maxprice) => ({get}) => {
        const products = get(ProductAtom);
        console.log('maxprice =',maxprice);
        console.log('prodcts range family =',products);
        return  products.filter(prod => prod.price <= maxprice);  // <= 85
     }
})


// // 0 - 100   85 