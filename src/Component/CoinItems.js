import React, { useState } from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import {Sparklines, SparklinesLine} from 'react-sparklines'; // to change numbeer to graph formate
import { Link } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
import { db } from '../FireBase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

const CoinItems = ({coin}) => {
  // console.log(coin)
    const [savedCoin, setSavedCoin] = useState(false)
    const {user} = UserAuth();

    const coinPath = doc(db, 'users', `${user?.email}`);
    const saveCoin = async () =>{
      if(user?.email){
        setSavedCoin(true);
        await updateDoc(coinPath, {watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol
        }),
      });
      }else{
        alert ('Plese sign in to save a coin to your watch list');
      }
    };

  return (
      <tr onClick={saveCoin} className='h-[80px] border-b overflow-hidden'>
            <td>{savedCoin ? <AiFillStar/> : <AiOutlineStar/>}</td>
            <td>{coin.market_cap_rank}</td>
            <td>
            <Link to={`/coin/${coin.id}`}>    {/* on click over the coin it will render us to particular coin page */}  
            <div className='flex items-center'>
              <img src={coin.image} alt={coin.id} className='w-6 mr-2 rounded-full'/>
              <p className='hidden sm:table-cell'>{coin.name}</p> 
             </div>
            </Link>
             
            </td>
            <td>{coin.symbol.toUpperCase()}</td>
            <td>${coin.current_price.toString()}</td>
            <td>
            {coin.price_change_percentage_24h>0 ? 
            (<p className='text-green-600'>{coin.price_change_percentage_24h.toFixed(2)}%</p>) : (<p className='text-red-600'>{coin.price_change_percentage_24h.toFixed(2)}%</p>)}</td>
            <td className='w-[180px] hidden md:table-cell'>{coin.total_volume.toLocaleString()}</td>
            <td className='w-[180px] hidden sm:table-cell'>${coin.market_cap.toLocaleString()}</td>
            <td>
              <Sparklines data = {coin.sparkline_in_7d.price}>
                <SparklinesLine color='teal'/>
              </Sparklines>

            </td>
            
          </tr>
  )
}

export default CoinItems
