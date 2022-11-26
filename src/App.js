import React, {useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from 'axios'
import Navbar from "./Component/Navbar";
import { ThemeProvider } from "./Context/TheamContext";
import Home from "./Routes/Home";
import SignIn from './Routes/SignIn';
import SignUp from './Routes/SignUp';
import Account from './Routes/Account';
import CoinPage from "./Routes/CoinPage";
import Footer from "./Component/Footer";
import { AuthContextProvider } from "./Context/AuthContext";

function App() {
  const [coins , setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true';
  
  useEffect(()=>{
    axios.get(url).then((response)=>{
      setCoins(response.data);
    })
  },[url])
  
  //wrap-up all components inside theme provider
  return (
    <ThemeProvider>
    <AuthContextProvider>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home coins = {coins}/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/account" element={<Account/>}/>
         <Route path="/coin/:coinId" element={<CoinPage/>}>   {/*coin page me automatic param ka use karke ham coinId fetch kr saktey hain */}
          <Route path=":coinId"/>
        </Route>
      </Routes>
     <Footer/>
    </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
