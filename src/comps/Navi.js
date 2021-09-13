import React, {useState} from 'react';
import {VscAccount} from 'react-icons/vsc';
import {MdFavoriteBorder} from 'react-icons/md';
import {RiShoppingBasket2Line} from 'react-icons/ri';

const Navi = () => {
    const [kategoriler, setKategoriler] = useState(["KADIN", "ERKEK", "ÇOCUK", "EV & YAŞAM", "SÜPERMARKET", "KOZMETİK", "AYAKKABI & ÇANTA", "SAAT & AKSESUAR", "ELEKTRONİK", "SPOR & OUTDOOR"])
    return (
        <div className="w-full">
        <div className="w-full flex flex-col justify-center items-center border-solid border-gray-200 border-2 pb-3 sticky top-0 z-10 bg-white">
            <div className="flex flex-row justify-end w-1200 gap-x-3">
                <span className="text-sm text-gray-500">İndirim Kuponlarım</span>
                <span className="text-sm text-gray-500">Trendyol'da satış yap</span>
                <span className="text-sm text-gray-500">Yardım & Destek</span>
            </div>

            <div className="w-1200 flex flex-row justify-between items-between py-3">
                
                <img style={{width:"111px", height:"100%", marginBottom:"8px"}} src="https://cdn.dsmcdn.com/web/logo/ty-logo.svg" alt="Trendyol" />
                <input type="text" placeholder="Aradığınız ürün, marka veya kategoriyi yazınız" className="relative w-520 p-2 bg-gray-100 rounded" /> 
                
                <div className="flex flex-row justify-center items-center gap-x-5">
                    <span className="font-medium headHover"><VscAccount className="inline headHover"/> Hesabım</span>
                    <span className="font-medium headHover"><MdFavoriteBorder className="inline headHover"/> Favorilerim</span>
                    <span className="font-medium headHover"><RiShoppingBasket2Line className="inline headHover"/> Sepetim</span>
                </div>
            </div>

            <div className="flex flex-nowrap flex-row gap-x-5 justify-between items-baseline w-1200 m-0 p-0">
                {kategoriler.map(k =>{
                    return(
                        <span className="hoverKategori">{k}</span>
                    )
                })}
            </div>
        </div>
        </div>
    )
}

export default Navi
