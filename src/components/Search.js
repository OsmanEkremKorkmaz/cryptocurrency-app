import React, { useState } from 'react'

function Search(props) {
    const [search, setSearch] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value);
        const filteredCoins = props.data.filter(coin => coin.name.toLowerCase().includes(e.target.value.toLowerCase()));
        props.setCoins(filteredCoins);
    }
  return (
    <form>
        <input value={search} onChange={(e) => handleChange(e)} type="text" placeholder="Search" />  
    </form>
  )
}

export default Search