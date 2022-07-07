import axios from 'axios';
import { useEffect, useState } from 'react';
import CoinList from './components/CoinList';
import Header from './components/Header';

function App() {
  
  const [coins, setCoins] = useState([]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false').then(res => {
    setData(res.data);
    setCoins(res.data);
    }).catch(err => {
    console.log(err);
  });
}, []);

  return (
    <div className="App">
      <Header data={data} coins={coins} setCoins={setCoins}/>
      <CoinList coins={coins} setCoins={setCoins}/>
    </div>
  );
}

export default App;
