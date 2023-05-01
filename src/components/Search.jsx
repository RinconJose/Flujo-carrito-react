import { useState } from 'react'
import User from '../assets/icon/user.svg'
import Market from '../assets/icon/market.svg'
import Magnifier from '../assets/icon/magnifier.svg'

const Search = ({setUserLogin,userStatus,setUserMarket,productMarket}) => {

    const handleRegister = e => {
        e.preventDefault();
        setUserLogin(true)
    }
    const handleMarket = e => {
        e.preventDefault();
        setUserMarket(true)
    }

    return (
        <div className='search mb-2 contenedor'>
            <div className="search__body">
                <div className='inputSearch'>
                    <div className="inputSearch__img">
                        <img
                            src={Magnifier}
                            alt="logo user"
                        />
                    </div>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder='Search'
                    />
                </div>
                {userStatus ? (
                    <a href='#' className="loginIcon"  onClick={handleMarket}>
                        <img
                            src={Market}
                            alt="logo market"
                        />
                        <span className='numProducts'>{productMarket.length}</span>
                    </a>
                ) : (
                    <a href='#' className="loginIcon"  onClick={handleRegister}>
                        <img
                            src={User}
                            alt="logo user"
                        />
                    </a>
                )}
            </div>
        </div>
    )
}

export default Search