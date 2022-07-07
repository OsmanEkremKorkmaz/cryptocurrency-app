import React from 'react'
import Search from './Search'

function Header(props) {
  return (
    <header>
        <h1>Cryptocurrency App</h1>
        <Search setCoins={props.setCoins} data={props.data}/>
    </header>
  )
}

export default Header