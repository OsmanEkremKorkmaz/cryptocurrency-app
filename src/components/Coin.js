import React from 'react'

function Coin({ coin }) {
  return (
    <div className='coin'>
        <div>
            <h3>{coin.name}</h3>
            <div className='coin-img-sym'>
                <p>{coin.symbol}</p>
                <img src={coin.image} alt={coin.name} />
            </div>
        </div>
        <div>
            <p>{coin.current_price}$</p>
        </div>
    </div>
  )
}

export default Coin