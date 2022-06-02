import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, BarChartOutlined, GlobalOutlined, UserOutlined } from '@ant-design/icons/lib/icons';
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Link to="/">
            <Avatar src={icon} size="large"/></Link>
            <Typography.Title leve={3} className='logo'>
                <Link to="/">Digital News</Link>
            </Typography.Title>
            {/* <button className='menu-control-container'></button> */}
        </div>

        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>                
            </Menu.Item>

            <Menu.Item icon={<GlobalOutlined />}>
                <Link to="/news">Global</Link>                
            </Menu.Item>

            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/indiaNews">India</Link>                
            </Menu.Item>

            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/businessNews">Business</Link>                
            </Menu.Item>

            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/sports">Sports</Link>                
            </Menu.Item>

            <Menu.Item icon={<BarChartOutlined />}>
                <Link to="/covid">Covid</Link>                
            </Menu.Item>

            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/entertainmentNews">Entertainment</Link>                
            </Menu.Item>



            <Menu.Item icon={<FundOutlined />}>
                {/* <Link to="/cryptocurrencies">Cryptocurrencies</Link> */}
                <Link to="/cryptoNews">Crypto-News</Link>
            </Menu.Item>

            {/* <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchanges">Budget</Link>                
            </Menu.Item> */}

            

            
        </Menu>

    </div>
  ); 
};

export default Navbar;
