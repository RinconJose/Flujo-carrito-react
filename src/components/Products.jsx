import { useState, useEffect } from 'react'
import Card from './Card'
import {generarId} from '../helpers'

const Products = ({userLogin,setUserLogin,userStatus,productMarket,setProductMarket,setBodyLimt}) => {

    const [arrProducts, setArrProducts] = useState([])
    const [numFovorite, setNumFavorite] = useState([])
    const [numMoreBuy, setNumMoreBuy] = useState([])

    useEffect(() => {
        const getProductsAPI = async () => {
            try {
                const respuesta = await fetch(`${import.meta.env.VITE_API_URL}`)
                const resultado = await respuesta.json()
                setArrProducts(resultado);

                let favorite = [...resultado].map( e => Math.max(e.favorite))
                favorite = Math.max(...favorite);
                favorite = [...resultado].filter( e => {
                    e.id = generarId()
                    return e.favorite === favorite
                })
                setNumFavorite(favorite);

                let moreBuy = [...resultado].map( e => Math.max(e.quantity))
                moreBuy = Math.max(...moreBuy);
                moreBuy = [...resultado].filter( e => e.quantity === moreBuy)
                setNumMoreBuy(moreBuy);

            } catch (error) {
                console.log(error);
            }
        }
        getProductsAPI();
    }, [])

    return (
        <div className='products contenedor'>
            <div className="products__body">
                {numFovorite.length > 0 && (
                    <>
                        <h2 className='products__title'>Favoritos</h2>
                        <div className="containerProducts">
                            <div className="containerProducts__body">
                                {numFovorite.map((product, index) => (
                                    <Card
                                        key={index}
                                        product={product}
                                        userStatus={userStatus}
                                        userLogin={userLogin}
                                        setUserLogin={setUserLogin}
                                        productMarket={productMarket}
                                        setProductMarket={setProductMarket}
                                        setBodyLimt={setBodyLimt}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                )}
                {numMoreBuy.length > 0 && (
                    <>
                        <h2 className='products__title mt-2'>Más Comprado</h2>
                        <div className="containerProducts">
                            <div className="containerProducts__body">
                                {numMoreBuy.map((product, index) => (
                                    <Card
                                        key={index}
                                        product={product}
                                        userStatus={userStatus}
                                        userLogin={userLogin}
                                        setUserLogin={setUserLogin}
                                        productMarket={productMarket}
                                        setProductMarket={setProductMarket}
                                        setBodyLimt={setBodyLimt}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                )}
                {arrProducts.length > 0 && (
                    <>
                        <h2 className='products__title mt-2'>Todos</h2>
                        <div className="containerProducts">
                            <div className="containerProducts__body">
                                {arrProducts.map((product, index) => (
                                    <Card
                                        key={index}
                                        product={product}
                                        userStatus={userStatus}
                                        userLogin={userLogin}
                                        setUserLogin={setUserLogin}
                                        productMarket={productMarket}
                                        setProductMarket={setProductMarket}
                                        setBodyLimt={setBodyLimt}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Products