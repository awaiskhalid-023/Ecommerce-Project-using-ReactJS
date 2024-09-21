import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems';

const LatestCollection = () => {
        const { products, currency, delivery_charges } = useContext(shopContext);
        const [latestProducts,setLatestProducts]= useState([])

        useEffect(()=>{
            setLatestProducts(products.slice(0,10))
        },[])
      
/*         console.log('Products:', products);
        console.log('Currency:', currency);
        console.log('Delivery Charges:', delivery_charges); */
    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>

            {/*.... Rendering Products ..... */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item,index)=>(
                        <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection