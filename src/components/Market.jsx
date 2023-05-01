import React, { useState, useEffect } from 'react'
import MarketItem from './MarketItem';

const Market = ({productMarket,setProductMarket,setUserMarket,setUserAddAccount,setBodyLimt}) => {

    const handleBtnAddAccount = e => {
        e.preventDefault()
        setUserAddAccount(true)
        setBodyLimt(true)
        setProductMarket([])
    }

    return (
        <div className='market'>
            <div className="market__body">
                {productMarket.length > 0 ? (
                    <div className="containerMarketItem">
                        {productMarket.map((producM, index) => (
                            <MarketItem
                                key={index}
                                producM={producM}
                                productMarket={productMarket}
                                setProductMarket={setProductMarket}
                            />
                        ))}
                        <a className='btnAddAccount' href="#" onClick={handleBtnAddAccount}>Agregar a lo que debo</a>
                        <div className="btnBack" onClick={e => setUserMarket(false)}>
                            <a href="#">Volver</a>
                        </div>
                    </div>
                ) : (
                    <>
                        <h2>No hay elementos en el carrito</h2>
                        <div className="btnBack" onClick={e => setUserMarket(false)}>
                            <a href="#">Volver</a>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Market