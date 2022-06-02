import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import {Link} from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News, IndiaNews, BusinessNews, Sports, Covid, EntertainmentNews, OldNews } from '../components';


const {Title} = Typography;

const Homepage = () => {
  function scrollup() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
        });
  }
  //const { data, isFetching } = useGetCryptosQuery(10);
  //const globalStats = data?.data?.stats;

  // console.log(data);

  //if(isFetching) return 'Loading....';
  return (
    <>
      
      {scrollup}
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Global News</Title>
        <Title level={3} className='show-more'><Link to="/news">Show More</Link></Title>

      </div>
      <News simplified = {true}/><br />


      <div className='home-heading-container'>
        <Title level={2} className='home-title'>India News</Title>
        <Title level={3} className='show-more'><Link to="/indiaNews">Show More</Link></Title>

      </div>
      <IndiaNews simplified = {true}/><br />

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Business News</Title>
        <Title level={3} className='show-more'><Link to="/businessNews">Show More</Link></Title>

      </div>
      <BusinessNews simplified = {true}/><br />

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Sports News</Title>
        <Title level={3} className='show-more'><Link to="/sports">Show More</Link></Title>

      </div>
      <Sports simplified = {true}/><br />

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Covid News</Title>
        <Title level={3} className='show-more'><Link to="/covid">Show More</Link></Title>

      </div>
      <Covid simplified = {true}/><br />

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Entertainment News</Title>
        <Title level={3} className='show-more'><Link to="/entertainmentNews">Show More</Link></Title>

      </div>
      <Sports simplified = {true}/><br />

      

      
      {/* <Cryptocurrencies simplified /> */}

      {/* <div className='home-heading-container'>
        <Title level={2} className='home-title'>Old News you missed </Title>
        <Title level={3} className='show-more'><Link to="/oldNews">Show More</Link></Title>

      </div>
      <OldNews simplified /> */}

      
    </>
  );
};

export default Homepage;
