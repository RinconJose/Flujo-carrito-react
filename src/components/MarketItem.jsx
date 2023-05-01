import {useState, useEffect} from 'react'
import Product from '../assets/icon/user.svg'
import {generarId} from '../helpers'

const MarketItem = ({producM,productMarket,setProductMarket}) => {

    const handleDelete = (id) => {
        const productosActualizados = productMarket.filter( prod => prod.id !== id);
        setProductMarket(productosActualizados)
    }

    const handleAdd = (addproduct) => {
        const {name, description, quantity, favorite} = addproduct;
        const objetProduct = {
            name,
            description,
            quantity,
            favorite,
            id: generarId()
        }
        setProductMarket([...productMarket, objetProduct]);
    }

    useEffect(() => {
        if(productMarket.name === producM.name) {
            console.log('si son iguales');
        }
    }, [productMarket])

    return (
        <>
            <div className="marketItem">
                <div className="marketItem__img">
                    <img
                        src={Product}
                        alt="title product"
                    />
                </div>
                <div className="marketItem__info">
                    <h3>{producM.name}</h3>
                    <p>{producM.description}</p>
                </div>
                <div className="marketItem__btns">
                    <a className="btnDelete" onClick={e => handleDelete(producM.id)}></a>
                    <a className="btnMore" onClick={e => handleAdd(producM)}></a>
                </div>
            </div>
        </>
    )
}

export default MarketItem