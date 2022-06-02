import React, { useState, useEffect } from 'react';
import millify from 'millify';
import {Link} from 'react-router-dom';
import {Card, Row, Col, Input, Statistic, Typography} from 'antd';

import {useGetCryptosQuery} from '../services/cryptoApi';

const {Title} = Typography;

const Cryptocurrencies = (props) => {
  
  //const { data, isFetching } = useGetCryptosQuery(10);
  
  
  const count = !props.simplified?10:10;
  //console.log(`count is ${count}`);          
  const { data: cryptosList, data, isFetching } = useGetCryptosQuery(count);
  const globalStats = data?.data?.stats;
  const [cryptos, setcryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('')
  
  if(isFetching) return 'Loading....';
  //console.log(cryptos);


  {/* useEffect(() => {
      if(!props.simplified) {
        const filteredData = cryptosList?.data?.coin.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
        setcryptos(filteredData);
      }
      
  },[cryptosList, searchTerm, props.simplified]); */} 

  return (
    <>

      {/* {!props.simplified && (
          <div className='search-crypto'>
            <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
      )} */}
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        
          <Col span={12} ><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
          <Col span={12} ><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
          <Col span={12} ><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
          <Col span={12} ><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
          <Col span={12} ><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
        
        
      </Row>

      
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        {/* <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title> */}

      </div>


      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((currency) => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
                <Link to={`/crypto/${currency.id}`}>
                    <Card title={`${currency.rank}.${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl} />} hoverable >
                        <p>Price: {millify(currency.price)}</p>
                        <p>Market Cap: {millify(currency.marketCap)}</p>
                        <p>Daily Change: {millify(currency.change)}%</p>

                    </Card>
                </Link>
            </Col>
        ))}

      </Row>
    </>
  );
};

export default Cryptocurrencies;
