import React from 'react';
import millify from 'millify';
import { Select, Typography, Row, Col, Statistic, Card } from 'antd';
import {Link} from 'react-router-dom';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

import { Cryptocurrencies } from '../components';

const {Text, Title} = Typography;
const {Option} = Select;
const demoImage = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const CryptoNews = (props) => {
    function scrollup() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
            });
      }
    const {data:cryptoNews} = useGetCryptoNewsQuery({ newsCategory:'crypto', count:props.simplified ? 6 : 20 });
  
    console.log(cryptoNews);
    if(!cryptoNews?.value) return 'Loading ...';


    console.log("Crypto News :",cryptoNews.value);
  return (
    <>
        
        {scrollup}
        <div className='home-heading-container'>
        <Title level={2} className='home-title'>Crypto Currency News</Title>
        </div>

        <Row gutter={[24,24]} >
            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className="news-card">
                    <a href={news.url} target="_blank" rel="noreferrer">
                        <div className="news-image-container">                          
                            <Title className="news-title" level={4}>{news.name}</Title>
                            <img src={news?.image?.thumbnail?.contentUrl || demoImage } alt="News" style={{width : '100px', height : '100px'}} /><br />
                        </div>
                            <p>
                                {news.description > 100 
                                    ? `${news.description.substring(0, 100)} ...` 
                                    : news.description 
                                }
                            </p>
                        
                    </a>
                </Card>
                </Col>
            ))}
        </Row>

        <Cryptocurrencies simplified />
    </>
  );
};

export default CryptoNews