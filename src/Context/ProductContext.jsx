import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext();

const ProductContext = (props) => {

    const [productData, setProductData] = useState(null);

    const getProduct = async() => {
          try {
             const res = await axios('/products');
             setProductData(res.data);
          } catch (error) {
            console.log(error)
          }
    }

    useEffect(()=>{
        getProduct()
    },[])

    return <Context.Provider value={[productData, setProductData]}>{props.children}</Context.Provider>
}

export default ProductContext