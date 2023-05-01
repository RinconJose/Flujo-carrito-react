import React from 'react'
import User from '../assets/icon/user.svg'
import {generarId} from '../helpers'

const Card = ({product, userStatus, userLogin, setUserLogin,setProductMarket,productMarket,setBodyLimt}) => {
    const {name, description, quantity, favorite} = product;
    const handleAddProduct = e => {
        if(userStatus) {
            e.preventDefault()
            // if(e.target.children.length === 0) {
            //     const num = document.createElement('SPAN')
            //     num.classList.add('numMarket')
            //     num.textContent = 1;
            //     e.target.appendChild(num);
            // } else {
            //     e.target.children[0].textContent = Number(e.target.children[0].textContent) + 1
            // }
            const objetProduct = {
                name,
                description,
                quantity,
                favorite,
                id: generarId()
            }
            setProductMarket([...productMarket, objetProduct]);
            return
        }

        if(!userLogin) {
            setUserLogin(true)
            setBodyLimt(true)
            return
        }


    }
    return (
        <div className="card">
            <div className="card__body">
                <div className="imgProduct">
                    <img
                        src={User}
                        alt="imagen del producto"
                    />
                </div>
                <div className="contentProduct">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <a href='#' className="btnAdd" onClick={handleAddProduct}>Agregar</a>
        </div>
    )
}

export default Card