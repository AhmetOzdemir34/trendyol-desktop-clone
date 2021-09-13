import React from 'react';
import Product from '../jsons/product1.json';
import Product2 from '../jsons/product2.json';

const Main = () => {
    return (
        <div className="flex flex-row flex-nowrap justify-center items items-stretch mt-1 mx-auto w-1200">
            <div className="w-9/12 flex flex-col flex-nowrap justify-center items items-between p-2">
                {Product.map(p =>{
                    return (
                        <div className="relative rounded my-3 w-full">
                            <img src={p.img} className="w-full rounded object-fit" height="540" />
                            <span className="absolute bottom-0 w-full bg-black text-white py-1 prod1hover pl-2">{p.desc}</span>
                        </div>
                    )
                })}
            </div>
            
            <div className="w-3/12 flex flex-col flex-nowrap justify-start items items-between p-2 relative">
               <div className="sticky top-0">
                    {Product2.map(p2 =>{
                        return (
                            <div className="rounded my-3 w-full">
                                    <img src={p2.img} className="w-full rounded object-fit" height="540" />
                            </div>
                        )
                    })}
               </div>
            </div>  
        </div>
    )
}

export default Main
