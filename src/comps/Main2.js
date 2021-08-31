import React from 'react'
import Product3 from '../jsons/product3.json'
const Main2 = () => {
    return (
        <div className="w-1200 mx-auto p-2 flex flex-row flex-wrap justify-between items-center">
            {Product3.map(p3 => {
                return (
                    <div className="w-4/12 p-2 relative rounded">
                        <img src={p3.img} className="w-full rounded" height="360"/>
                        <span className="absolute bottom-0 pl-2 mb-2 bg-black text-white" style={{width:"379px"}}>{p3.desc}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Main2
