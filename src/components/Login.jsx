import {useState} from 'react'
import Mensaje from './Mensaje';

const Login = ({setUserLogin,setUserStatus, setUserMarket, setBodyLimt}) => {

    const [mensaje, setMensaje] = useState('');
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if([ name, password ].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000)
            return
        }
        const expReg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if(!expReg.test(name)) {
            setMensaje('Correo inválido')

            setTimeout(() => {
                setMensaje('')
            }, 3000)
            return
        }
        setUserLogin(false)
        setUserStatus(true)
        setBodyLimt(false)
    }

    const handleClose = () => {
        console.log('entro');
        setUserLogin(false)
        setBodyLimt(false)
    }

    return (
        <div className='login contenedor'>
            <div className="login__body">
                <div className="brand">
                    <h2 className='brand__title'>ome central <span>omecentral.com</span></h2>
                    <p className='brand__text'>onewp.okta.com</p>
                </div>
                <form action="" className="form" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Sign In</legend>
                        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                        <div className="containerForm">
                            <label htmlFor="name">Username</label>
                            <input
                                type="email"
                                placeholder='Ej. correo@correo.com'
                                onChange={ e => setName(e.target.value)}
                            />
                        </div>
                        <div className="containerForm">
                            <label htmlFor="name">Password</label>
                            <input
                                type="password"
                                placeholder='******'
                                onChange={ e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="containerForm remember">
                            <input type="checkbox" />
                            <label htmlFor="name">Remember me</label>
                        </div>
                        <input type="submit" value="Sign In" />
                        <a className='formHelp' href="#">Need help signing in?</a>
                        <div className="btnBack" onClick={handleClose}>
                            <a href="#">Volver</a>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login