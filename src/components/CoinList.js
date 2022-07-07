import React, { useEffect } from 'react'
import Coin from './Coin'

import axios from 'axios';


function CoinList(props) {
    
  return (
    <div className='coins-list'>
        {
            props.coins.map(coin => {
                return <Coin key={coin.id} coin={coin} />
            })
        }
    </div>
  )
}

export default CoinList