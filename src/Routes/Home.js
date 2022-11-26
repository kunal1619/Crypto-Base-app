import React from 'react'
import CoinSearch from '../Component/CoinSearch'
import Trending from '../Component/Trending'

const Home = ({coins}) => {
  return (
    <div>
      <CoinSearch coins = {coins}/>
      <Trending/>
    </div>
  )
}

export default Home
