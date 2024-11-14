import { RecoilRoot } from "recoil"
import { Header } from "./components/Header.jsx"
import  {  BrowserRouter, Route, Routes } from 'react-router-dom' ;
import { lazy, Suspense } from "react";
import { Maincomponent } from "./components/Maincomponent.jsx";
import { Product } from "./components/AllProduct.jsx";
import { SingleProduct } from "./components/SingleProduct.jsx";

// const SingleProduct = lazy(() => import("./components/ProductCard.jsx"));
// const Maincomponent = lazy(() => import("./components/Maincomponent.jsx"));
// const Product = lazy(() => import("./components/AllProduct.jsx"));


function App() {

  return (
    <>
     <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path = "/" element = {<Maincomponent />}>  </Route>
            <Route path = "/products" element = { 
              <Suspense fallback = "loading.....">  <Product /> </Suspense>
              }>  </Route>
            <Route path = "/products/:id" element = { 
              <Suspense fallback = "loading....."> <SingleProduct />  </Suspense>
              }>  </Route>
        </Routes>
      </BrowserRouter>
     </RecoilRoot>
    </>
  )
}

export default App
