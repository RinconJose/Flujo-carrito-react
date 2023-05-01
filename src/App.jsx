import { useState, useEffect } from 'react'
import './App.scss'
import Search from "./components/Search";
import Products from './components/Products';
import Login from './components/Login';
import Market from './components/Market';
import AddAcount from './components/AddAcount';

function App() {

    const [userStatus, setUserStatus] = useState(false);
    const [userLogin, setUserLogin] = useState(false);
    const [userMarket, setUserMarket] = useState(false);
    const [userAddAccount, setUserAddAccount] = useState(false);
    const [productMarket, setProductMarket] = useState([]);
    const [bodyLimt, setBodyLimt] = useState(false);

    useEffect(() => {
        if(bodyLimt === false) {
            document.querySelector('body').classList.remove('overHidd')
            return
        }
        document.querySelector('body').classList.add('overHidd')
    }, [bodyLimt])


    return (
        <div className='appFlare'>
            <Search
                userStatus={userStatus}
                setUserLogin={setUserLogin}
                setUserMarket={setUserMarket}
                productMarket={productMarket}
            />
            <Products
                userStatus={userStatus}
                userLogin={userLogin}
                setUserLogin={setUserLogin}
                productMarket={productMarket}
                setProductMarket={setProductMarket}
                setBodyLimt={setBodyLimt}
            />

            {userLogin &&
                <Login
                    setUserLogin={setUserLogin}
                    setUserStatus={setUserStatus}
                    setUserMarket={setUserMarket}
                    setBodyLimt={setBodyLimt}
                />
            }
            {userMarket &&
                <Market
                    productMarket={productMarket}
                    setProductMarket={setProductMarket}
                    setUserMarket={setUserMarket}
                    setUserAddAccount={setUserAddAccount}
                    setBodyLimt={setBodyLimt}
                />
            }
            {userAddAccount &&
                <AddAcount
                    setUserAddAccount={setUserAddAccount}
                    setBodyLimt={setBodyLimt}
                    setUserMarket={setUserMarket}
                />
            }
        </div>
  )
}

export default App
