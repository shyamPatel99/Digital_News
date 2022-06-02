import React, { Component } from 'react';
import {Routes as Switch, Route, Link } from 'react-router-dom';
import {Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Cryptocurrencies, News, CryptoDetails, Homepage, Covid, CryptoNews, IndiaNews, BusinessNews, Sports, EntertainmentNews } from "./components/";
import './App.css';

const App = () => {
  return (
    <div className='app'>
        
        <div className='navbar'>
            <Navbar />
        </div>

        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Switch>                        
                        <Route exact path='/' element={ <Homepage/> } />    

                        <Route exact path='/exchanges' element={ <Exchanges/> } />                                                        
                        <Route exact path='/cryptocurrencies' element={ <Cryptocurrencies/> } /> 
                        <Route exact path='/cryptoNews' element={<CryptoNews />}  />                                                                             
                        <Route exact path='/crypto/:coinId' element={ <CryptoDetails/> } />  

                        <Route exact path='/news' element={ <News/> } />
                        <Route exact path='/indiaNews' element={ <IndiaNews/> } />
                        <Route exact path='/businessNews' element={ <BusinessNews/> } />
                        <Route exact path='/sports' element={ <Sports/> } />
                        <Route exact path='/entertainmentNews' element={ <EntertainmentNews/> } />

                        <Route exact path='/covid' element={ <Covid/> } />
                    </Switch>
                </div>
            </Layout>
        
        
            <div className='footer'>
                <Typography.Title level={5} style={{ color:'white', textAlign:'center' } }>
                    Digital News ,
                    All Rights Reserved
                </Typography.Title>
                <Space>
                    <Link to='/'>Home</Link>
                    <Link to='/covid'>Covid</Link>
                    <Link to='/news'>News</Link>
                </Space>
            </div>
        </div>

    </div>
    );
};

export default App;
