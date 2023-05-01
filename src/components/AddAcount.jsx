import React from 'react'

const AddAcount = ({setUserAddAccount,setBodyLimt,setUserMarket}) => {
  return (
    <div className='addAccount'>
        <p>Items agregado con Exito</p>
        <div className="btnBack" onClick={e => (
            setUserAddAccount(false),
            setBodyLimt(false),
            setUserMarket(false)
        )}>
            <a href="#">Volver</a>
        </div>
    </div>
  )
}

export default AddAcount